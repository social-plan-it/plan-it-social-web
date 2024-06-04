import { useLoaderData } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import { BenefitsSection } from '~/components/marketing/benefits-section';
import { eventsDataPatcher } from '~/modules/events/event';

export const meta: MetaFunction = () => {
  return [{ title: 'Home' }];
};

export async function loader() {
  const events = await db.event.findMany({ take: 3, include: { group: true } });
  return { events };
}

export default function Index() {
  const { events } = useLoaderData<typeof loader>();
  const deserializedEvents = eventsDataPatcher(events);

  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <EventsSection events={deserializedEvents} />
    </>
  );
}
