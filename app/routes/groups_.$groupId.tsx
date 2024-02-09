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
      <div className="bg-primary flex flex-wrap justify-center align-middle text-white p-2">
        <div className="w-30 h-[120px] bg-secondary">Image Container</div>
        <div className="m-2">
          <h2 className="font-semibold">{data.group.name}</h2>
          <div className="font-extra-light">
            <p>{data.group.description}</p>
            <p>Organized by: Richard Simmons</p>
            <p>Location, CA, USA</p>
          </div>
        </div>

        <Link to="/groups">Groups</Link>
      </div>
    </>
  );
}

export function ErrorBoundary() {
  const { groupId } = useParams();
  return <div className="error-container">There was an error loading group by the id {groupId}.</div>;
}
