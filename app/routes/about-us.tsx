import type { Group } from '@prisma/client';
import { useRouteLoaderData } from '@remix-run/react';

export default function AboutUs() {
  const { currentUser } = useRouteLoaderData('root');
  const groupItems = currentUser.groups?.map((group: Group, index: number) => (
    <li key={`group${index}`}>{JSON.stringify(group)}</li>
  ));

  const eventItems = currentUser.events?.map((event: Event, index: number) => (
    <li key={`event${index}`}>{JSON.stringify(event)}</li>
  ));

  return (
    <>
      <h1 className="text-2xl my-5">The About Page For Social Plan-it</h1>
      <ul>{groupItems ? groupItems : 'No Groups Yet!'}</ul>
      <ul>{eventItems ? eventItems : 'No Events Yet!'}</ul>
    </>
  );
}
