import { Card } from '~/components/ui/containers';
import { useEvents } from '~/hooks/useEvents';

export default function EventsPage() {
  const events = useEvents();

  const deserializedEvents = events?.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return (
    <Card>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {deserializedEvents?.map((event) => {
          return <li key={event.id}>{event.name}</li>;
        })}
      </ul>
    </Card>
  );
}
