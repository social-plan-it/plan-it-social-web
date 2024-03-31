import { redirect } from '@remix-run/node';
import { useActionData, useLoaderData, useSubmit } from '@remix-run/react';
import { startRegistration } from '@simplewebauthn/browser';
import { useState } from 'react';

import { db } from '~/modules/database/db.server';
import { getUserSession } from '~/modules/session/session.server';
import { getPasskeyRegistrationOptions, verifyPasskeyRegistrationResponse } from '~/modules/session/webauthn.server';
import { Button } from '~/components/ui/button';

import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import type { FormEvent } from 'react';

export async function action({ request }: ActionFunctionArgs) {
  const session = await getUserSession(request);
  const user = await db.user.findUnique({ where: { id: session?.userId }, include: { authenticators: true } });
  if (!user) throw redirect('/login');

  const formData = await request.formData();
  const registrationResponseJson = formData.get('registrationResponseJson');
  if (typeof registrationResponseJson !== 'string') return { verification: { verified: false } };

  try {
    const registrationResponse = JSON.parse(registrationResponseJson);
    const verification = await verifyPasskeyRegistrationResponse(user, registrationResponse);
    return { verification };
  } catch {
    return { verification: { verified: false } };
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getUserSession(request);
  const user = await db.user.findUnique({ where: { id: session?.userId }, include: { authenticators: true } });
  if (!user) throw redirect('/login');

  return {
    options: await getPasskeyRegistrationOptions(user),
  };
}

export default function Settings() {
  const { options } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();

  const submit = useSubmit();

  const [processingPasskey, setProcessingPasskey] = useState(false);
  const [passkeyError, setPasskeyError] = useState('');

  async function addPasskey(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPasskeyError('');
    setProcessingPasskey(true);

    try {
      const registrationResponse = await startRegistration(options);
      submit({ registrationResponseJson: JSON.stringify(registrationResponse) }, { method: 'POST' });
    } catch (error) {
      if (error instanceof Error && error.name === 'InvalidStateError') {
        setPasskeyError('A passkey already exists on the device chosen.');
      } else {
        setPasskeyError('Failed to create passkey. Please try again.');
      }
    } finally {
      setProcessingPasskey(false);
    }
  }

  return (
    <div className="flex justify-center my-10">
      <form onSubmit={addPasskey} method="post" className="flex flex-col items-center gap-2">
        <Button variant="primary" buttonStyle="fullyRounded">
          {processingPasskey ? 'Creating Passkey...' : 'Add a Passkey'}
        </Button>

        {passkeyError && (
          <p className="text-sm text-red-600 text-center" role="alert">
            {passkeyError}
          </p>
        )}

        {actionData?.verification?.verified === false && (
          <p className="text-sm text-red-600 text-center" role="alert">
            Failed to create passkey. Please try again.
          </p>
        )}

        {actionData?.verification?.verified && (
          <p className="text-sm text-green-600 text-center" role="alert">
            Passkey created successfully. Try logging out and back in to use it.
          </p>
        )}
      </form>
    </div>
  );
}
