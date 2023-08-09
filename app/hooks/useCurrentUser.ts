import type { SerializeFrom } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';

import type { loader } from '~/root';

export function useCurrentUser() {
  // Type assertion is used here since useRouteLoaderData does not currently accept a generic.
  // References:
  //   - https://github.com/remix-run/remix/discussions/5061
  //   - https://github.com/remix-run/remix/discussions/6858
  const data = useRouteLoaderData('root') as SerializeFrom<typeof loader> | undefined;

  return data?.currentUser;
}
