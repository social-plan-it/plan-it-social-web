import { useLoaderData, type V2_MetaFunction } from '@remix-run/react';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import { db } from '~/modules/database/db.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Plan It Social' }];
};

export async function loader() {
  const data = await db.event.findMany({ take: 3, include: { group: true } });
  return data;
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const events = data.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return (
    <>
      <HeroSection />
      <EventsSection events={events} />
    </>
  );
}
