import { useGroups } from '~/hooks/useGroups';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';

export default function Group() {
  const groups = useGroups();
  return (
    <div className="bg-primary">
      <div style={{ border: 'solid 2px red' }} className="m-auto max-w-screen-xl">
        <ul style={{ border: 'solid 2px green' }} className="w-full flex flex-wrap text-secondary">
          {groups?.map((group) => {
            return (
              <li
                style={{ listStyle: 'none', border: 'solid 3px blue' }}
                className="flex flex-wrap my-2 mx-auto md:m-2"
                key={group.id}
              >
                <Link
                  style={{ border: 'red 2px solid' }}
                  className="m-1 flex flex-col justify-center items-center"
                  to={group.id}
                >
                  <div style={{ width: '210px', borderRadius: '16px', display: 'flex', alignSelf: 'flex-start' }}>
                    <img
                      style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
                      className="w-full"
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                      alt="place holder"
                    />
                  </div>
                  <div className="mx-2">
                    <h2>{group.name}</h2>
                    <h3>group-headline-here</h3>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="m-auto max-w-screen-xl flex justify-center items-center my-4">
        <Button variant="warm" buttonStyle="rounded">
          <Link to="/groups/new">Create New Group</Link>
        </Button>
      </div>
    </div>
  );
}
