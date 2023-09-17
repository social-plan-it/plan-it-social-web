import type { SerializeFrom } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';
import type { loader } from '~/root';

export function useGroups() {
  const data = useRouteLoaderData('root') as SerializeFrom<typeof loader> | undefined;

  return data?.groups;
}
