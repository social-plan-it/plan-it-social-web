import type { Event, Group } from '@prisma/client';

type EventsListProps = {
  events: Event[];
  groups: Group[];
};

export function EventsSection({ events, groups }: EventsListProps) {
  return (
    <section className="bg-secondary">
      <div className="sm:ml-24 pt-10 pb-20 space-y-3 ">
        <h2 className="text-center sm:text-left sm:text-5xl text-4xl font-bold italic text-primary">Upcoming Events</h2>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {events.map((event, index) => {
            const group = groups.find((group) => group.id === event.groupId);
            if (!group) return null;
            return <EventCard key={event.id} event={event} group={group} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export function EventCard({ event, group, index }: { event: Event; group: Group; index: number }) {
  return (
    <div className="flex flex-col space-y-3 w-[350px] mx-6 sm:mx-0 max-w-md p-6 rounded-2xl bg-primary">
      <img
        className={`${index === 1 && 'sm:order-2'} pt-8 w-full object-contain box-border`}
        src={event.imgUrl}
        alt={event.imgAlt}
      />

      <div>
        <div className="text-lg sm:text-2xl font-bold text-white">{group.name}</div>
        <h3 className="text-3xl sm:text-4xl font-bold text-white">{event.name}</h3>
        <p className="text-lg sm:text-2xl text-white">{event.description}</p>
        <div className="text-lg sm:text-2xl font-bold text-white">{event.date.toLocaleString()}</div>
      </div>
    </div>
  );
}
