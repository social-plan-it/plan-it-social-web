import { Card } from '~/components/ui/containers';
import { useGroups } from '~/hooks/useGroups';
import { Link } from '@remix-run/react';
import { LinkButton } from '~/components/ui/forms';

export default function Group() {
  const groups = useGroups();
  return (
    <>
      <Card>
        <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {groups?.map((group) => {
            return (
              <li key={group.id}>
                <Link to={group.id}>{group.name}</Link>
              </li>
            );
          })}
        </ul>
      </Card>
      <div className="px-6 py-6 sm:px-16 max-w-sm">
        <LinkButton to="/groups/new">New Group</LinkButton>
      </div>
    </>
  );
}
