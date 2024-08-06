import { Form, Link, redirect, useLoaderData, useSearchParams } from '@remix-run/react';
import { Image, staticImage } from '~/components/ui/images';
import { LinkButton } from '~/components/ui/links';
import type { MetaFunction, LoaderFunctionArgs } from '@remix-run/node';
import type { Group } from '@prisma/client';
import { findGroups } from '~/modules/database/groups.server';

const pageCount = 24;

function getQueryString(pageNum: number | null, query: string | null) {
  const searchParams = new URLSearchParams();
  if (pageNum) {
    searchParams.append('p', '' + pageNum);
  }
  if (query) {
    searchParams.append('q', query);
  }
  return searchParams.toString();
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');
  const page = url.searchParams.get('p');
  const pageNum = page ? Number.parseInt(page, 10) : 1;
  //add Zod validation

  const [groups, count] = await findGroups({
    query: query || undefined,
    count: pageCount,
    skip: pageCount * (pageNum - 1),
  });

  const maxPage = Math.ceil(count / pageCount);

  if (pageNum > maxPage) {
    return redirect(`/groups/?${getQueryString(maxPage, query)}`);
  }
  if (pageNum < 1) {
    return redirect(`/groups/?${getQueryString(maxPage, query)}`);
  }

  return { groups, count };
}

export default function Group() {
  const { groups, count } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('p');
  const query = searchParams.get('q');
  const pageNum = page ? Number.parseInt(page, 10) : 1;

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
                <Link to={group.id} prefetch="intent">
                  <div className="border-slate-100 border-2 rounded-2xl  m-1 px-4 py-4 flex flex-col justify-center items-center md:w-80 hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="w-52 h-52">
                      <Image
                        className="bg-contain bg-center flex self-start rounded-full"
                        src={group.imgUrl ?? 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg'}
                        alt="Group meeting around an office table"
                        background={staticImage.loadingPhoto.url}
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

      <div className="w-full flex justify-center gap-4">
        <LinkButton to={`/groups/?${getQueryString(Math.max(pageNum - 1, 1), query)}`}>Previous</LinkButton>
        <LinkButton to={`/groups/?${getQueryString(Math.min(pageNum + 1, Math.ceil(count / pageCount)), query)}`}>
          Next
        </LinkButton>
      </div>

      <div className="md:w-52 m-auto flex justify-center items-center py-4">
        <LinkButton to="/groups/new">Create New Group</LinkButton>
      </div>
    </div>
  );
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Groups | Social Plan-It' },
    { name: 'description', content: "We have an array of groups you'd love. Come join a group!" },
  ];
};
