import type { LoaderArgs } from '@remix-run/node';
import { redirect, type ActionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { matchesHash } from '~/modules/database/crypto.server';
import { db } from '~/modules/database/db.server';
import { createUserSession, getUserSession } from '~/modules/session/session.server';

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');

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

  if (!matchesHash(password.toString(), passwordObject.hash)) {
    return { status: 400, message: "Credentials don't match. Please try again." };
  }

  const headers = await createUserSession(user.id);

  return redirect('/', { headers });
}

export async function loader({ request }: LoaderArgs) {
  const session = await getUserSession(request);
  if (session) {
    return redirect('/');
  }
  return {};
}

export default function Component() {
  const actionData = useActionData();
  return (
    <div className="flex w-full items-center justify-center mt-20 lg:mt-40">
      <Form method="post" className="flex flex-col max-w-[800px] items-center justify-center gap-5">
        <h1 className="text-4xl">Log In</h1>
        <label>
          Email:
          <input className="bg-grayBackground" name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Password:
          <input className="bg-grayBackground" name="password" type="password" required />
        </label>
        <button type="submit">Log In</button>
        {actionData && actionData.message && <p className="text-red-500">{actionData.message}</p>}
      </Form>
    </div>
  );
}
