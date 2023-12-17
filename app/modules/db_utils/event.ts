import type { Event, Group, User } from '@prisma/client';

interface FullEvent extends Event {
  group?: Group;
  users?: User[];
}

export function eventDataPatcher(event: any): FullEvent {
  return {
    ...event,
    date: new Date(event.date),
  };
}

export function eventsDataPatcher(events: any[]): FullEvent[] {
  return events.map((event) => {
    return eventDataPatcher(event);
  });
}
