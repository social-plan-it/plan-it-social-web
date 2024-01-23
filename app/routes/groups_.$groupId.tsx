import type { LoaderFunction } from '@remix-run/node';
import { useParams, useLoaderData, Link } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { json } from '@remix-run/node';

export const loader: LoaderFunction = async ({ params }) => {
  const group = await db.group.findFirstOrThrow({ where: { id: params.groupId } });
  return json({ group });
};

export default function GroupRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Link to="/groups">back to groups</Link>
      <h1>{data.group.name}</h1>
      <p>{data.group.description}</p>

      <Link to={`/groups/${data.group.id}/events/new`}>Create New Event</Link>
    </>
  );
}

export function ErrorBoundary() {
  const { groupId } = useParams();
  return <div className="error-container">There was an error loading group by the id {groupId}.</div>;
}
