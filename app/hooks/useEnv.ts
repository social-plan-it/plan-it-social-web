import type { SerializeFrom } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';

import type { loader } from '~/root';

export function useEnv() {
  const data = useRouteLoaderData('root') as SerializeFrom<typeof loader> | undefined;

  if (!data?.ENV) {
    throw new Error('Client environmental variables must be set.');
  }

  return data.ENV;
}
