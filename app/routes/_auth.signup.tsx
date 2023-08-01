import type { LoaderArgs, ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { Card } from '~/components/ui/containers';
import { Input } from '~/components/ui/forms';
import { getHash } from '~/modules/database/crypto.server';
import { db } from '~/modules/database/db.server';
import { createUserSession, getUserSession } from '~/modules/session/session.server';

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  if (!name || !email || !password || !confirmPassword) {
    return { status: 400, message: 'Missing required fields' };
  }

  if (password !== confirmPassword) {
    return { status: 400, message: 'Passwords do not match' };
  }

  const cleanEmail: string = email.toString().toLowerCase().trim();
  const user = await db.user.findUnique({ where: { email: cleanEmail } });

  if (user) {
    return { status: 400, message: 'Email already in use. Is this you? Please log in instead.' };
  }

  const newUser = await db.user.create({
    data: {
      name: name.toString(),
      email: cleanEmail,
    },
  });

  await db.password.create({
    data: {
      userId: newUser.id,
      hash: await getHash(password.toString()),
    },
  });

  const headers = await createUserSession(newUser.id);

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
    <div className="flex w-full items-center justify-center">
      <div className="max-w-[400px] w-full">
        <Card>
          <Form method="post" className="w-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl">Sign Up</h1>
            <Input name="email" type="email" autoComplete="email" placeholder="Email" label="Email" required />
            <Input name="name" autoComplete="username" type="text" placeholder="Name" label="Name" required />
            <Input name="password" type="password" placeholder="Password" label="Password" required />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              label="Confirm Password"
              required
            />
            <button type="submit">Sign Up</button>
            {actionData && actionData.message && <p className="text-red-500">{actionData.message}</p>}
          </Form>
        </Card>
      </div>
    </div>
  );
}
