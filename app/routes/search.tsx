import { Form, useLoaderData } from '@remix-run/react';
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

  // for pagination in the future, use the "skip" property in conjunction with the "take" property
  const events = await db.event.findMany({
    include: { group: true },
    where: {
      OR: [
        { location: { contains: query } },
        { name: { contains: query } },
        { description: { contains: query } },
        {
          group: {
            OR: [{ description: { contains: query } }, { name: { contains: query } }],
          },
        },
      ],
    },
    take: 24,
  });

  return { events: events, query };
};

export default function SearchPage() {
  const { events, query } = useLoaderData<typeof loader>();
  const deserializedEvents = events.map((event: Event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return (
    <>
      <Form method="GET" action="/search" className="w-full bg-gray-800 ">
        <div className="flex p-2 sm:p-8 w-full mx-auto max-w-screen-2xl">
          <input
            type="search"
            aria-label="Search For Events"
            id="q"
            name="q"
            className="block w-full py-4 pl-10 text-xs sm:text-base text-gray-900 md:text-center lg:text-2xl border-none rounded-l-lg italic bg-gray-50 focus:ring-2 focus:outline-none focus:ring-blue-500 text-center"
            placeholder="Group name or Event"
            required
            minLength={2}
            maxLength={50}
          />
          <button
            type="submit"
            aria-label="submit"
            className="text-black bg-gray-50 right-2.5 bottom-2.5 hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-blue-500 font-semibold rounded-r-lg italic text-md px-2 md:px-4 py-4 lg:text-2xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </Form>
      <div className="bg-secondary py-5 pb-20">
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
    </>
  );
}
