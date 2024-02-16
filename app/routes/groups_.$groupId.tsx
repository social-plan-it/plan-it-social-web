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
      <div className="md:flex md:flex-col md:max-w-screen-xl">
        <div style={{ border: '2px solid orange' }} className="md:flex md:flex-row" >
          <div className="md:px-8">
          <div style={{ width: '280px', height: '300px', backgroundColor: 'white', color: 'black', borderRadius: '100%' }} >Image</div>
          </div>
          
          <div style={{ border: '2px solid pink' }} className='md:px-12 md:flex md:flex-col md:space-y-8' >
            <div>
            <h2 className="font-extrabold md:text-5xl" >{data.group.name}</h2>
            <h3>Organized by: Name Here</h3>
            </div>
            <div className="flex">
              <div>315 Members</div>
              <div>Location, USA</div>
              <div>Share</div>
            </div>
          </div>
        </div>
        
        <div style={{ border: '2px solid yellow' }} className="min-w-[280px] p-10 md:flex md:flex-row">
          <div style={{ border: '2px solid yellow' }} className="md:w-1/2 md:p-4">
            <p>{data.group.description}</p>
          </div>
          <div style={{ border: '2px solid yellow' }} className="md:w-1/2 md:p-4">
            <h2>Upcoming Events</h2>
          </div>
        </div>
      </div>
      <div className='py-32'>
      <Button variant="warm-block" buttonStyle="rounded" size="large">
        <Link to="/groups">Back to groups</Link>
      </Button>
      </div>
      
    </div>
  );
}

export function ErrorBoundary() {
  const { groupId } = useParams();
  return <div className="error-container">There was an error loading group by the id {groupId}.</div>;
}
