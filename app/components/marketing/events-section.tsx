import { Link, unstable_useViewTransitionState } from '@remix-run/react';
import { type FullEvent } from '~/modules/events/event';

export function EventsSection({ events }: { events: FullEvent[] }) {
  return (
    <section className="bg-secondary pb-8">
      <div className="mx-auto py-8 md:max-w-screen-xl">
        <h2 className="text-center pb-8 sm:text-4xl text-4xl font-bold italic text-primary">Upcoming Events</h2>
        <div className="flex flex-wrap gap-6 justify-center sm:place-content-center">
          <EventsCards events={events} />
        </div>
      </div>
    </section>
  );
}

export function EventsCards({ events }: { events: FullEvent[] }) {
  return (
    <>
      {events.map((event, index) => {
        return <EventCard key={event.id} event={event} index={index} />;
      })}
    </>
  );
}

export function EventCard({ event, index }: { event: FullEvent; index: number }) {
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
  const to = `/events/${event.id}`;
  const isTransitioning = unstable_useViewTransitionState(to);

  return (
    <Link to={to} unstable_viewTransition prefetch="intent">
      <div className="flex flex-col space-y-3 w-64 md:h-96 md:w-72 mx-6 sm:mx-0 max-w-md p-6 rounded-2xl bg-primary hover:transform hover:scale-105 transition-transform duration-300 hover:border">
        {event.imgUrl && event.imgAlt ? (
          <img
            className={`${index === 1 && 'sm:order-2 pt-8'}  w-full object-contain box-border`}
            src={event.imgUrl}
            alt={event.imgAlt}
            style={{ viewTransitionName: isTransitioning ? 'image-expand' : '' }}
          />
        ) : (
          <img
            className={`${index === 1 && 'sm:order-2 pt-8'}  w-full object-contain box-border`}
            src={'https://res.cloudinary.com/dxctpvd8v/image/upload/v1709188683/default-event-photo_bvdslj.png'}
            alt={'Default animated event zoom meeting'}
            style={{ viewTransitionName: isTransitioning ? 'image-expand' : '' }}
          />
        )}

        <div>
          {event.group?.name && <div className="font-bold text-white line-clamp-1">{event.group?.name}</div>}
          <h3 className="font-bold text-white line-clamp-2">{event.name}</h3>
          <p className="text-white line-clamp-3">{event.description}</p>
          <div className="font-bold text-white line-clamp-1">{formattedTime}</div>
        </div>
      </div>
    </Link>
  );
}
