type Event = {
  id: number;
  imgUrl: string;
  imgAlt: string;
  groupName: string;
  eventTitle: string;
  eventDescription: string;
  date: string;
  time: string;
  location: string;
  category: string;
};

export type EventsSectionProps = {
  events: Event[];
};

export type EventPreviewProps = {
  event: Event;
};

export function EventsSection({ events }: EventsSectionProps) {
  return (
    <section className="bg-secondary">
      <div className="sm:ml-24 pt-10 pb-20 space-y-3">
        <h2 className="text-center sm:text-left sm:text-5xl text-4xl font-bold italic text-primary">Upcoming Events</h2>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          {events.map((event, index) => (
            <div
              key={event.id}
              className="flex flex-col space-y-3 w-[350px] mx-6 sm:mx-0 max-w-md p-6 rounded-2xl bg-primary"
            >
              {index === 1 ? (
                <>
                  <div className="text-lg sm:text-2xl font-bold text-white">{event.groupName}</div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">{event.eventTitle}</h3>
                  <p className="text-lg sm:text-2xl text-white">{event.eventDescription}</p>
                  <div className="text-lg sm:text-2xl font-bold text-white">
                    {event.date} - {event.time}
                  </div>
                  <img src={event.imgUrl} className="pt-8 w-full object-contain box-border" alt={event.eventTitle} />
                </>
              ) : (
                <EventPreview event={event} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventPreview({ event }: EventPreviewProps) {
  return (
    <>
      <img src={event.imgUrl} className="w-full object-contain box-border" alt={event.eventTitle} />
      <div className="text-lg sm:text-2xl font-bold text-white">{event.groupName}</div>
      <h3 className="text-3xl sm:text-4xl font-bold text-white">{event.eventTitle}</h3>
      <p className="text-lg sm:text-2xl text-white">{event.eventDescription}</p>
      <div className="text-lg sm:text-2xl font-bold text-white">
        {event.date} - {event.time}
      </div>
    </>
  );
}
