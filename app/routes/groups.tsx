import { useGroups } from '~/hooks/useGroups';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';

export default function Group() {
  const groups = useGroups();
  return (
    <div className="bg-primary py-8">
      <div style={{ border: 'solid 2px purple' }} className="m-auto max-w-screen-xl">
        <ul style={{ border: 'solid 2px pink' }} className="w-full flex flex-wrap p-8 text-secondary">
          {groups?.map((group) => {
            return (
              <li style={{ listStyle: 'none', border: 'solid 2px fuscia' }} className="flex flex-wrap" key={group.id}>
                <Link style={{ border: 'red 2px solid' }} className="m-1" to={group.id}>
                  <h2>{group.name}</h2>
                  <h3>group-headline-here</h3>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ border: '2px solid white' }} className="m-auto max-w-screen-xl">
        <Button variant="warm" buttonStyle="rounded">
          <Link to="/groups/new">Create New Group</Link>
        </Button>
      </div>
    </div>
  );
}
