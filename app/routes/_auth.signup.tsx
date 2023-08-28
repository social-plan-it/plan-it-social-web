import type { LoaderArgs, ActionArgs } from '@remix-run/node';
import { redirect } from '@remix-run/node';
import { Form, Link, useActionData, useNavigation } from '@remix-run/react';
import { z } from 'zod';

import { Card } from '~/components/ui/containers';
import { Input } from '~/components/ui/forms';
import { getHash } from '~/modules/database/crypto.server';
import { db } from '~/modules/database/db.server';
import { badRequest } from '~/modules/response/response.server';
import { createUserSession, getUserSession } from '~/modules/session/session.server';

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const name = form.get('name');
  const email = form.get('email');
  const password = form.get('password');
  const confirmPassword = form.get('confirmPassword');

  const SignUpForm = z.object({
    name: z
      .string()
      .trim()
      .min(1, 'Name is required.')
      .max(191, 'Name cannot exceed 191 max length.')
      .transform((name) => name.replace(/\s+/g, ' ')),
    email: z
      .string()
      .toLowerCase()
      .trim()
      .email('Invalid email.')
      .refine(
        async (email) => !(await db.user.findUnique({ where: { email } })),
        'Email already in use. Is this you? Please log in instead.',
      ),
    password: z
      .string()
      .min(8, 'Password must be 8 or more characters.')
      .max(191, 'Password cannot exceed 191 max length.'),
    confirmPassword: z.string().refine((confirmPassword) => confirmPassword === password, 'Password must match.'),
  });

  const signUpForm = await SignUpForm.safeParseAsync({ name, email, password, confirmPassword });

  const actionData = {
    success: false,
    fields: { email, name },
    fieldErrors: null,
    formError: null,
  };

  if (!signUpForm.success) {
    return badRequest({
      ...actionData,
      fieldErrors: signUpForm.error.format(),
    });
  }

  const newUser = await db.user.create({
    data: {
      name: signUpForm.data.name,
      email: signUpForm.data.email,
    },
  });

  await db.password.create({
    data: {
      userId: newUser.id,
      hash: await getHash(signUpForm.data.password),
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
  const navigation = useNavigation();
  const isPending = navigation.state === 'submitting' || navigation.state === 'loading';
  return (
    <div className="flex w-full items-center justify-center">
      <div className="max-w-[400px] w-full">
        <Card>
          <Form method="post" className="w-full flex flex-col items-center justify-center gap-5">
            <h1 className="text-4xl">Sign Up</h1>

            <Input
              defaultValue={actionData?.fields?.name}
              name="name"
              autoComplete="name"
              type="text"
              placeholder="Name"
              label="Name"
              required
              aria-invalid={Boolean(actionData?.fieldErrors?.name)}
              aria-errormessage={actionData?.fieldErrors?.name ? 'name-error' : undefined}
            />
            {actionData?.fieldErrors?.name && (
              <p className="text-sm text-red-600" id="name-error" role="alert">
                {actionData.fieldErrors.name._errors[0]}
              </p>
            )}

            <Input
              defaultValue={actionData?.fields?.email}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Email"
              label="Email"
              required
              aria-invalid={Boolean(actionData?.fieldErrors?.email)}
              aria-errormessage={actionData?.fieldErrors?.email ? 'email-error' : undefined}
            />
            {actionData?.fieldErrors?.email && (
              <p className="text-sm text-red-600" id="email-error" role="alert">
                {actionData.fieldErrors.email._errors[0]}
              </p>
            )}

            <Input
              name="password"
              type="password"
              placeholder="Password"
              label="Password"
              required
              aria-invalid={Boolean(actionData?.fieldErrors?.password)}
              aria-errormessage={actionData?.fieldErrors?.password ? 'password-error' : undefined}
            />
            {actionData?.fieldErrors?.password && (
              <p className="text-sm text-red-600" id="password-error" role="alert">
                {actionData.fieldErrors.password._errors[0]}
              </p>
            )}

            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              label="Confirm Password"
              required
              aria-invalid={Boolean(actionData?.fieldErrors?.confirmPassword)}
              aria-errormessage={actionData?.fieldErrors?.confirmPassword ? 'content-error' : undefined}
            />
            {actionData?.fieldErrors?.confirmPassword && (
              <p className="text-sm text-red-600" id="confirmPassword-error" role="alert">
                {actionData.fieldErrors.confirmPassword._errors[0]}
              </p>
            )}

            <button type="submit" disabled={isPending}>
              {isPending ? 'Signing up...' : 'Sign Up'}
            </button>

            <p>
              Have an account already? <Link to="/login">Login</Link>
            </p>
          </Form>
        </Card>
      </div>
    </div>
  );
}
