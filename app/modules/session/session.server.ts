import { createCookieSessionStorage, redirect } from '@remix-run/node';

import { db } from '~/modules/database/db.server';

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

const { commitSession, destroySession, getSession } = createCookieSessionStorage({
  cookie: {
    name: 'session',
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: true,
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(userId: string): Promise<Headers> {
  const headers = new Headers();

  const cookie = await getSession();
  cookie.set('userId', userId);

  const cookieValue = await commitSession(cookie);
  headers.set('Set-Cookie', cookieValue);

  return headers;
}

export type UserSession = {
  userId: string;
};

export async function getUserSession(request: Request): Promise<UserSession | null> {
  const cookie = await getSession(request.headers.get('Cookie'));
  if (cookie && cookie.get('userId')) {
    return { userId: cookie.get('userId') };
  }
  return null;
}

export async function getCurrentUser(request: Request) {
  const session = await getUserSession(request);

  if (session) {
    const currentUser = await db.user.findUnique({ where: { id: session.userId } });
    if (currentUser) {
      return currentUser;
    }
  }
  return null;
}

export async function logout(request: Request) {
  const cookie = await getSession(request.headers.get('Cookie'));

  return redirect('/login', {
    headers: {
      'Set-Cookie': await destroySession(cookie),
    },
  });
}

export async function requireUserSession(request: Request) {
  const session = await getUserSession(request);
  if (!session) {
    throw redirect('/login');
  }
  return session;
}
