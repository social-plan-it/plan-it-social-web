import type { Event, Group, User } from '@prisma/client';

interface FullEvent extends Event {
  group?: Group;
  users?: User[];
}

type RawEvent = Omit<FullEvent, 'date'> & { date: string };

export function eventDataPatcher(event: RawEvent): FullEvent {
  return {
    ...event,
    date: new Date(event.date),
  };
}

export function eventsDataPatcher(events: RawEvent[]): FullEvent[] {
  if (!events) {
    return [];
  }

  return events.map((event) => {
    return eventDataPatcher(event);
  });
}
