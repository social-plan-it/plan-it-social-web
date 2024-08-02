import crypto from 'node:crypto';
import { badRequest } from '../response/response.server';

export function createCsrfToken() {
  return crypto.randomUUID();
}

async function validateCsrfToken(tokenFromSession: string | null, token: FormDataEntryValue | null) {
  if (!tokenFromSession) {
    return false;
  }
  return tokenFromSession === token;
}

export async function requireValidCsrfToken(tokenFromSession: string | null, token: FormDataEntryValue | null) {
  const isValid = await validateCsrfToken(tokenFromSession, token);
  if (!isValid) {
    throw badRequest({
      success: false,
      error: { message: 'Invalid CSRF Token' },
    });
  }
}
