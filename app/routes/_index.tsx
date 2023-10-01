import { isRouteErrorResponse, useLoaderData, useRouteError } from '@remix-run/react';
import { type MetaFunction } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import HeroSection from '~/components/marketing/hero-section';
import { EventsSection } from '../components/marketing/events-section';
import { BenefitsSection } from '~/components/marketing/benefits-section';

export const meta: MetaFunction = () => {
  return [{ title: 'Plan It Social' }];
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

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>{error.data}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
}
