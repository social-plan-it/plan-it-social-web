import type { LoaderFunctionArgs } from '@remix-run/node';
import { useParams, useLoaderData, Link } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { json, redirect } from '@remix-run/node';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const event = await db.event.findFirst({
    where: { id: params.eventId },
    include: {
      group: true,
      users: { select: { name: true } },
    },
  });
  return json(event);
};

export default function EventRoute() {
  const event = useLoaderData<typeof loader>();
  return (
    <div>
      <Link to="/events">back to Events</Link>
      {event && (
        <div>
          <h1>{event.name}</h1>
          <p>
            Hosted by <Link to={`/groups/${event.groupId}`}> {event.group.name} </Link>
          </p>
          <p>{event.description}</p>
          <p>{event.date}</p>

          {event.imgUrl && (
            <img src={event.imgUrl ?? '/imgs/upc-events1.png'} alt={event.imgAlt ?? `event photo for ${event.name}`} />
          )}
          <p>{event.location}</p>
        </div>
      )}

      {!event && <h1>Events not found</h1>}
    </div>
  );
}

export function ErrorBoundary() {
  const { eventId } = useParams();
  return <div>There was an error loading group by the id {eventId}.</div>;
}
