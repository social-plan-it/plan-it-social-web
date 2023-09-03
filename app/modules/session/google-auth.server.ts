import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client();

/** Verify JWT token from Google authentication and return decoded payload. */
export async function verifyGoogleToken(idToken: string) {
  const ticket = await client.verifyIdToken({
    idToken,
    audience: process.env.PUBLIC_GOOGLE_CLIENT_ID,
  });

  return ticket.getPayload();
}
