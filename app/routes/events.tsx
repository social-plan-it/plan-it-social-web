import type { MetaFunction } from '@remix-run/node';
import { useEvents } from '~/hooks/useEvents';
import { EventCard } from '~/components/marketing/events-section';

export default function EventsPage() {
  const events = useEvents();

  return (
    <div className="flex flex-col p-8 justify-center items-center md:items-start m-auto md:max-w-screen-xl ">
      <h1 className="font-bold italic mb-4 text-primary md:text-3xl">Upcoming Events</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-y-4 gap-x-2">
        {events?.map((event, index) => {
          return <EventCard key={event.id} event={event} index={index} />;
        })}
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Events | Social Plan-It' },
    { name: 'description', content: 'Your welcome to join us in any event. Looking forward to seeing you there!' },
  ];
};
