import { Card } from '~/components/ui/containers';
import { useGroups } from '~/hooks/useGroups';

export default function Group() {
  const groups = useGroups();
  return (
    <Card>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {groups?.map((group) => {
          return <li key={group.id}>{group.name}</li>;
        })}
      </ul>
    </Card>
  );
}
