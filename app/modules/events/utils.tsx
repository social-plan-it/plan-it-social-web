export function groupDataPatcher(data: any) {
  /**
   * Expects data to be an single Group db row which gets passed to frontend
   * Returns: a object of type Group (from prisma)
   */
  const events = data?.group?.events;
  const deserializedEvents = events?.map((event: { date: string }) => ({
    ...event,
    date: new Date(event.date),
  }));
  data.group.events = deserializedEvents;
  return data;
}
