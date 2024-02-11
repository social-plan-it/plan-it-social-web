import type { Event } from '@prisma/client';
import type { LoaderFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useParams, useLoaderData, Link } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { EventCard } from '~/modules/events/card';
import { json } from '@remix-run/node';
import { eventsDataPatcher } from '~/modules/events/event';

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const group = await db.group.findFirstOrThrow({ where: { id: params.groupId }, include: { events: true } });
  return json({ group });
};

export default function GroupRoute() {
  const rawData = useLoaderData<typeof loader>();
  const group = rawData?.group;
  const events = eventsDataPatcher(group?.events);

  console.log(group, events);

  return (
    <>
      <div className="bg-secondary">
        <Link to="/groups">back to groups</Link>

        <div className="flex justify-left items-center sm:justify-center">
          <div className="p-10">
            <img
              className="rounded-full sm:h-32 sm:w-32"
              src={`https://ui-avatars.com/api/?name=${group?.name}`}
              alt="group icon"
            ></img>
          </div>
          <div className="p-10">
            <h1 className="md:text-3xl md:font-extrabold">{group?.name}</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 bg-grayBackground sm:grid-cols-2">
        <div className="rounded-xl m-10 p-10 bg-white">
          <p>{group?.description}</p>
        </div>
        <div className="m-10">
          <h2 className="text-xl font-bold">Upcoming Events</h2>
          {events &&
            events.map((event: Event) => {
              return (
                <div key={event.id}>
                  <EventCard {...event}></EventCard>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const { groupId } = useParams();
  return <div className="error-container">There was an error loading group by the id {groupId}.</div>;
}
