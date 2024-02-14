import type { LoaderFunction } from '@remix-run/node';
import { useParams, useLoaderData, Link } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { json } from '@remix-run/node';

import { Button } from '~/components/ui/button';

export const loader: LoaderFunction = async ({ params }) => {
  const group = await db.group.findFirstOrThrow({ where: { id: params.groupId } });
  return json({ group });
};

export default function GroupRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="bg-primary text-white flex flex-col items-center">
      <div style={{ border: '1px solid red' }} className="md:flex md:flex-row">
        <div style={{ width: '280px', height: '300px', backgroundColor: 'white', color: 'black' }}>Image</div>
        <div className="min-w-[280px] p-1">
          <h1>{data.group.name}</h1>
          <p>{data.group.description}</p>
        </div>
      </div>
      <Button variant="warm-block" buttonStyle="rounded" size="large">
        <Link to="/groups">Back to groups</Link>
      </Button>
    </div>
  );
}

export function ErrorBoundary() {
  const { groupId } = useParams();
  return <div className="error-container">There was an error loading group by the id {groupId}.</div>;
}
