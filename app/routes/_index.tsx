import { useLoaderData, type V2_MetaFunction } from '@remix-run/react';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import { db } from '~/modules/database/db.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Plan It Social' }];
};

export async function loader() {
  const events = await db.event.findMany({ take: 3, include: { group: true } });
  return { events };
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>();
  const serializedEvents = events.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return (
    <>
      <HeroSection />
      <EventsSection events={serializedEvents} />
    </>
  );
}
