import { useGroups } from '~/hooks/useGroups';
import { Link } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Image } from '~/components/ui/images';

export default function Group() {
  const groups = useGroups();
  return (
    <div className="bg-primary">
      <div className="m-auto max-w-screen-xl">
        <ul className="w-full flex flex-wrap justify-center text-secondary">
          {groups?.map((group) => {
            return (
              <li className="flex flex-wrap justify-center my-2 mx-auto list-none md:m-2" key={group.id}>
                <Link
                  style={{ border: '#f5f5f5 1px solid', borderRadius: '1rem' }}
                  className="m-1 px-4 py-4 flex flex-col justify-center items-center md:w-80 hover:transform hover:scale-105 transition-transform duration-300"
                  to={group.id}
                >
                  <div className="w-[13.13rem] h-[13.13rem]">
                    <Image
                      className="bg-contain bg-center flex self-start rounded-full"
                      src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                      alt="place holder"
                      // background="https://res.cloudinary.com/dxctpvd8v/image/upload/v1709096811/SocialPlanit-Loading_qedebk.png"
                      width={210}
                      height={210}
                    />
                  </div>

                  <div className="mx-2 my-4">
                    <h2 className="font-extrabold md:text-xl my-1">{group.name}</h2>
                    <h3>Group-headline-here</h3>
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
