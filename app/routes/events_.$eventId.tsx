import type { LoaderFunction } from '@remix-run/node';
import { useParams, useLoaderData, Link } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { json } from '@remix-run/node';
import { eventDataPatcher } from '~/modules/dataPatcher/event';

export const loader: LoaderFunction = async ({ params }) => {
  const event = await db.event.findFirstOrThrow({
    where: { id: params.eventId },
    include: { group: true, users: true },
  });
  return json({ event });
};

export default function EventRoute() {
  const rawData = useLoaderData<typeof loader>();
  const event = eventDataPatcher(rawData.event);

  const date = event.date.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Los_Angeles',
    timeZoneName: 'short',
  });
  const parts = date.split(', ');
  const formattedTime = `${parts[0]}, ${parts[1]} - ${parts[2]}`;

  return (
    <>
      <Link to="/events">Back to events</Link>
      <div className="flex flex-col space-y-3 mx-6 p-6 rounded-2xl">
        {event.imgUrl && event.imgAlt && (
          <img
            className="w-[700px] object-contain box-border rounded-md"
            src={event.imgUrl}
            alt={event.imgAlt}
            style={{ viewTransitionName: 'image-expand' }}
          />
        )}
        <h1 className="text-3xl sm:text-4xl font-bold ">{event.name}</h1>
        <p className="text-lg sm:text-2xl font-bold ">{formattedTime}</p>
        <p className="text-lg sm:text-2xl ">{event.description}</p>
        <div>
          <p className="text-lg sm:text-2xl">Hosted at: {event.location}</p>
          <p className="text-lg sm:text-2xl">
            Hosted by:{' '}
            <Link to={`/groups/${event.groupId}`} className="onhover:underline-offset-2">
              {event?.group?.name}{' '}
            </Link>{' '}
          </p>
        </div>
        <p className="text-lg sm:text-2xl">Current participants ({event.users?.length}): </p>
        <ul>
          {event.users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
        <button className="w-full md:px-[30px] md:py-[15px] md:w-max bg-warm rounded-full py-4 text-white">
          Join Event
        </button>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const { eventId } = useParams();
  return <div className="error-container">There was an error loading event by the id {eventId}.</div>;
}
