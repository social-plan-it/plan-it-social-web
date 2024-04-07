import { useGroups } from '~/hooks/useGroups';
import { Link } from '@remix-run/react';
import { Image } from '~/components/ui/images';
import { LinkButton } from '~/components/ui/forms';

export default function Group() {
  const groups = useGroups();
  return (
    <div className="bg-primary">
      <div className="m-auto max-w-screen-xl">
        <ul className="w-full flex flex-wrap justify-center text-secondary">
          {groups?.map((group) => {
            return (
              <li className="flex flex-wrap justify-center my-2 mx-auto md:m-2" key={group.id}>
                <Link to={group.id}>
                  <div className="border-slate-100 border-2 rounded-2xl  m-1 px-4 py-4 flex flex-col justify-center items-center md:w-80 hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="w-52 h-52">
                      <Image
                        className="bg-contain bg-center flex self-start rounded-full"
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                        alt="Group meeting around an office table"
                        background="https://res.cloudinary.com/dxctpvd8v/image/upload/v1709096811/SocialPlanit-Loading_qedebk.png"
                        width={210}
                        height={210}
                      />
                    </div>
                    <div className="mx-2 my-4">
                      <h2 className="font-extrabold md:text-xl my-1">{group.name}</h2>
                      <h3>Group-headline-here</h3>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="md:w-52 m-auto flex justify-center items-center py-4">
        <LinkButton to="/groups/new">Create New Group</LinkButton>
      </div>
    </div>
  );
}
