import { useLoaderData } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import { BenefitsSection } from '~/components/marketing/benefits-section';

export const meta: MetaFunction = () => {
  return [
    { title: 'Home | Social Plan-It' },
    {
      name: 'description',
      content: 'Social Plan-It is where you can join groups and events to collaborate to learn and meet new friends.',
    },
  ];
};

export async function loader() {
  const events = await db.event.findMany({ take: 3, include: { group: true } });
  return { events };
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>();
  const deserializedEvents = events.map((event) => ({
    ...event,
    date: new Date(event.date),
  }));

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <EventsSection events={deserializedEvents} />
    </>
  );
}
