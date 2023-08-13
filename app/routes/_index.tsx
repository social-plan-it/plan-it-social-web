import { useLoaderData, type V2_MetaFunction } from '@remix-run/react';
import { json } from '@remix-run/node';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import { db } from '~/modules/database/db.server';

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Plan It Social' }];
};

export async function loader() {
  const data = await db.event.findMany({ take: 3 });
  console.log(data);
  data.map((d) => {
    console.log('data', d);
    return null;
  });
  return json(data);
}

export default function Index() {
  const events = useLoaderData<typeof loader>();
  console.log(events);

  return (
    <>
      <HeroSection />
      <EventsSection events={events} />
    </>
  );
}
