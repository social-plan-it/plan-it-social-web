import { useEvents } from '~/hooks/useEvents';
import { EventCard } from '~/components/marketing/events-section';

export default function EventsPage() {
  const events = useEvents();

  return (
    <div className="sm:p-16">
      <h1 className="text-center sm:text-left sm:text-5xl text-4xl font-bold italic text-primary sm:p-8">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-y-8">
        {events?.map((event, index) => {
          return <EventCard key={event.id} event={event} index={index} />;
        })}
      </div>
    </div>
  );
}
