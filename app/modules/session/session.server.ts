import { createCookieSessionStorage } from '@remix-run/node';

const { commitSession, destroySession, getSession } = createCookieSessionStorage({
  cookie: {
    name: 'session',
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: true,
    secrets: ['3453453453453453'],
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
