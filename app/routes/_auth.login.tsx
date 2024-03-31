import type { LoaderFunctionArgs, ActionFunctionArgs } from '@remix-run/node';
import type { FormEvent } from 'react';

import { redirect } from '@remix-run/node';
import { Form, Link, useActionData, useNavigation, useSubmit } from '@remix-run/react';
import { startAuthentication } from '@simplewebauthn/browser';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Card } from '~/components/ui/containers';
import { Input } from '~/components/ui/forms';
import { matchesHash } from '~/modules/database/crypto.server';
import { db } from '~/modules/database/db.server';
import { badRequest } from '~/modules/response/response.server';
import { SignInWithGoogleButton } from '~/modules/session/buttons';
import { verifyGoogleToken } from '~/modules/session/google-auth.server';
import { createUserSession, getUserSession } from '~/modules/session/session.server';
import { verifyPasskeyAuthenticationResponse } from '~/modules/session/webauthn.server';

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');
  const credential = form.get('credential');
  const authenticationResponseJson = form.get('authenticationResponseJson');

  if (typeof authenticationResponseJson === 'string' && typeof email === 'string') {
    const user = await db.user.findUnique({ where: { email }, include: { authenticators: true } });
    if (!user) {
      return badRequest({ passkeyError: 'No passkeys exists for this account. Please sign in with password instead.' });
    }

    try {
      const authenticationResponse = JSON.parse(authenticationResponseJson);
      const { verified } = await verifyPasskeyAuthenticationResponse(user, authenticationResponse);
      if (verified) {
        const headers = await createUserSession(user.id);
        return redirect('/', { headers });
      }

      return badRequest({ passkeyError: 'Sign in with passkey failed.' });
    } catch {
      return badRequest({ passkeyError: 'Sign in with passkey failed.' });
    }
  }

  if (typeof credential === 'string') {
    try {
      const payload = await verifyGoogleToken(credential);
      if (!payload) {
        throw new Error('Invalid payload.');
      }

      const { name, email } = payload;
      if (!name || !email) {
        throw new Error('Name or email does not exist in payload.');
      }

      const user = await db.user.findUnique({ where: { email: email.trim().toLowerCase() } });

      if (!user) {
        return badRequest({ message: 'No user exists with this Google account. Please sign up instead.' });
      }

      const headers = await createUserSession(user.id);
      return redirect('/', { headers });
    } catch (error) {
      return badRequest({ message: 'Google authentication failed.' });
    }
  }

  if (!email || !password) {
    return { status: 400, message: 'Missing required fields' };
  }
  const cleanEmail: string = email.toString().toLowerCase().trim();

  const user = await db.user.findUnique({ where: { email: cleanEmail } });

  if (!user) {
    return { status: 400, message: 'Email not in use. Please sign up instead.' };
  }

  const passwordObject = await db.password.findUnique({ where: { userId: user.id } });
  if (!passwordObject) {
    return { status: 400, message: "Credentials don't match. Please try again." };
  }

  const passwordCorrect = await matchesHash(password.toString(), passwordObject.hash);

  if (!passwordCorrect) {
    return { status: 400, message: "Credentials don't match. Please try again." };
  }

  const headers = await createUserSession(user.id);

  return redirect('/', { headers });
}

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getUserSession(request);
  if (session) {
    return redirect('/');
  }
  return {};
}

export default function Component() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const isPending = navigation.state === 'submitting' || navigation.state === 'loading';

  const submit = useSubmit();

  const [email, setEmail] = useState('');
  const [processingPasskey, setProcessingPasskey] = useState(false);
  const [passkeyError, setPasskeyError] = useState('');

  async function handleSignInWithPasskey(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setProcessingPasskey(true);
    setPasskeyError('');

    try {
      const resp = await fetch('/generate-authentication-options', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const options = await resp.json();
      if (!options) {
        setPasskeyError('No passkeys exists for this account. Please sign in with password instead.');
        return;
      }

      const authenticationResponse = await startAuthentication(options);
      submit({ authenticationResponseJson: JSON.stringify(authenticationResponse), email }, { method: 'POST' });
    } catch {
      setPasskeyError('Failed to sign in with passkey.');
    } finally {
      setProcessingPasskey(false);
    }
  }

  return (
    <div className="flex w-full items-center justify-center">
      <div className="max-w-[400px] w-full">
        <Card>
          <Form method="post" className="w-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl">Log In</h1>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              label="Email"
              required
              showLabel={false}
              centerText
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              label="Password"
              required
              showLabel={false}
              centerText
            />
            <button type="submit" disabled={isPending}>
              {isPending ? 'Logging in...' : 'Log In'}
            </button>
            {actionData && 'message' in actionData && <p className="text-red-500">{actionData.message}</p>}

            <SignInWithGoogleButton />

            <p>
              New here? <Link to="/signup">Sign up</Link>
            </p>
          </Form>

          <div className="flex flex-col items-center gap-3 my-4">
            <p>or</p>
            <form onSubmit={handleSignInWithPasskey} method="post" className="flex flex-col gap-3 items-center">
              <Input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
                label="Email"
                required
                showLabel={false}
                centerText
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button variant="primary" buttonStyle="fullyRounded" disabled={processingPasskey || isPending}>
                {processingPasskey || isPending ? 'Signing in...' : 'Sign in with Passkey'}
              </Button>

              {passkeyError && <p className="text-red-500">{passkeyError}</p>}
              {actionData && 'passkeyError' in actionData && <p className="text-red-500">{actionData.passkeyError}</p>}
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
