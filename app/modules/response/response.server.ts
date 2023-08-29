import { json } from '@remix-run/node';

/**
 * Helper function to return 400 Bad Request response to the client.
 */
export function badRequest<T>(data: T) {
  return json<T>(data, { status: 400 });
}
