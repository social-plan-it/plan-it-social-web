import { useLoaderData } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { db } from '~/modules/database/db.server';
import { EventsCards } from '~/components/marketing/events-section';
import type { Event } from '@prisma/client';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  // Some validation. Can show error message with Remix instead the Response.

  if (typeof query !== 'string' || !query || query.length > 50) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  const events = await db.event.findMany({ include: { group: true } });

  const filteredEvents = events.filter((e) => e.description.toLowerCase().includes(query.toLowerCase()));

  return { events: filteredEvents, query };
};

export default function SearchPage() {
  const { events, query } = useLoaderData<typeof loader>();
  const deserializedEvents = events.map((event: Event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return (
    <div className="bg-secondary py-5 pb-20">
      <div className="">
        {events.length === 0 ? (
          <p>No events found. Please, try another keywords. </p>
        ) : (
          <>
            <p className="mb-3 text-2xl text-center">
              Showing events for: <span className="italic">{query}</span>
            </p>
            <div className="flex flex-wrap gap-6 justify-center self-center">
              <EventsCards events={deserializedEvents} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
