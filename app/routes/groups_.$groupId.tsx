import type { Event } from '@prisma/client';
import type { LoaderFunction, LoaderFunctionArgs, SerializeFrom } from '@remix-run/node';
import { useParams, useLoaderData, Link } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { EventCard } from '~/modules/events/card';
import { json } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const group = await db.group.findFirstOrThrow({ where: { id: params.groupId }, include: { events: true } });
  return json({ group });
};

export function useDeserializeGroup() {
  const data = useLoaderData() as SerializeFrom<typeof loader> | undefined;
  const events = data?.group?.events;
  const deserializedEvents = events?.map((event: { date: string }) => ({
    ...event,
    date: new Date(event.date),
  }));
  data.group.events = deserializedEvents;
  return data;
}

export default function GroupRoute() {
  const data = useDeserializeGroup();

  return (
    <>
      <div className="bg-secondary">
        <Link to="/groups">back to groups</Link>

        <div className="flex justify-left items-center sm:justify-center">
          <div className="p-10">
            <img
              className="rounded-full sm:h-32 sm:w-32"
              src={`https://ui-avatars.com/api/?name=${data?.group?.name}`}
              alt="group icon"
            ></img>
          </div>
          <div className="p-10">
            <h1 className="md:text-3xl md:font-extrabold">{data.group.name}</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 bg-grayBackground sm:grid-cols-2">
        <div className="rounded-xl m-10 p-10 bg-white">
          <p>{data.group.description}</p>
        </div>
        <div className="m-10">
          <h2 className="text-xl font-bold">Upcoming Events</h2>
          {data?.group?.events &&
            data?.group?.events.map((event: Event) => {
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
