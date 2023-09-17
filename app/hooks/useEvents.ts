import type { SerializeFrom } from '@remix-run/node';
import { useRouteLoaderData } from '@remix-run/react';
import type { loader } from '~/root';

export function useEvents() {
  const data = useRouteLoaderData('root') as SerializeFrom<typeof loader> | undefined;
  const events = data?.events;
  const deserializedEvents = events?.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return deserializedEvents;
}
