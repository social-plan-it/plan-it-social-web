import { db } from '~/modules/database/db.server';
import { getPasskeyAuthenticationOptions } from '~/modules/session/webauthn.server';

import type { ActionFunctionArgs } from '@remix-run/node';

export async function action({ request }: ActionFunctionArgs) {
  const { email } = await request.json();
  const user = await db.user.findUnique({ where: { email }, include: { authenticators: true } });
  if (!user) return null;

  const options = await getPasskeyAuthenticationOptions(user);
  return options;
}
