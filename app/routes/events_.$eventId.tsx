import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';
import { useParams, useLoaderData, Link, Form } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { json } from '@remix-run/node';
import { eventDataPatcher } from '~/modules/events/event';
import { requireUserSession } from '~/modules/session/session.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const event = await db.event.findFirst({
    where: { id: params.eventId },
    include: {
      group: true,
      users: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
  if (!event) {
    throw new Response(null, {
      status: 404,
      statusText: 'Event ID Not Found',
    });
  }
  return json({ event });
}

export async function action({ params, request }: ActionFunctionArgs) {
  const userSession = await requireUserSession(request);

  const event = await db.event.update({
    where: { id: params.eventId },
    data: { users: { connect: { id: userSession.userId } } },
  });

  return json({ event });
}

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
            <Link to={`/groups/${event.groupId}`} className="hover:underline-offset-2">
              {event?.group?.name}
            </Link>
          </p>
        </div>
        <p className="text-lg sm:text-2xl">Current participants ({event.users?.length}): </p>
        <ul>
          {event.users?.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
        <Form method="post">
          <button
            className="w-full md:px-[30px] md:py-[15px] md:w-max bg-warm rounded-full py-4 text-white"
            type="submit"
          >
            Join Event
          </button>
        </Form>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const { eventId } = useParams();
  return <div className="error-container">There was an error loading event by the id {eventId}.</div>;
}

export const meta: MetaFunction = ({ data }) => {
  const eventFullName = data.event.name;
  const regex = /^[^:]+/;
  const eventName = eventFullName.match(regex);
  const eventDescription = data.event.description;

  return [{ title: `${eventName} | Social Plan-It` }, { name: 'description', content: `${eventDescription}` }];
};
