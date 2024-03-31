import { Form, Link, useLoaderData } from '@remix-run/react';
import { useGroups } from '~/hooks/useGroups';
import { Link } from '@remix-run/react';
import { Image } from '~/components/ui/images';
import { LinkButton } from '~/components/ui/forms';
import { db } from '~/modules/database/db.server';
import { type LoaderFunctionArgs } from '@remix-run/node';
import type { Group } from '@prisma/client';

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  if (!query) {
    const groups = await db.group.findMany({ take: 24 });
    return { groups };
  }

  const groups = await db.group.findMany({
    where: { name: { contains: query } },
  });
  return { groups };
}

export default function Group() {
  const { groups } = useLoaderData<typeof loader>();
  console.log('groups', groups);
  return (
    <div className="bg-primary">
      <div className="m-auto max-w-screen-xl">
        <Form method="GET" action="/groups" className="w-full bg-gray-800">
          <div className="flex p-2 sm:p-8 w-full mx-auto max-w-screen-2xl">
            <input
              type="search"
              aria-label="Search For Events"
              id="q"
              name="q"
              className="block w-full py-4 pl-10 text-xs sm:text-base text-gray-900 md:text-center lg:text-2xl border-none rounded-l-lg italic bg-gray-50 focus:ring-2 focus:outline-none focus:ring-blue-500 text-center"
              placeholder="Search For Groups"
              minLength={2}
              maxLength={50}
            />
            <button
              type="submit"
              aria-label="submit"
              className="text-black bg-gray-50 right-2.5 bottom-2.5 hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-blue-500 font-semibold rounded-r-lg italic text-md px-2 md:px-4 py-4 lg:text-2xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </Form>
        <ul className="w-full flex flex-wrap justify-center text-secondary">
          {groups?.map((group: Group) => {
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
