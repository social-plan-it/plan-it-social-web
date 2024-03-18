import type { LoaderFunction } from '@remix-run/node';
import { useParams, useLoaderData } from '@remix-run/react';
import { db } from '~/modules/database/db.server';
import { json } from '@remix-run/node';
import { LinkButton } from '~/components/ui/forms';

import { Image } from '~/components/ui/images';

export const loader: LoaderFunction = async ({ params }) => {
  const group = await db.group.findFirstOrThrow({ where: { id: params.groupId } });
  const user_group = await db.user_Group.findMany({ where: { groupId: group.id } });
  return json({ group, user_group });
};

export default function GroupRoute() {
  const { groupId } = useParams();
  const data = useLoaderData<typeof loader>();
  return (
    <div className="bg-primary text-white flex flex-col items-center">
      <div className="md:flex md:flex-col md:max-w-screen-xl">
        <div className="p-2 justify-center md:p-10 md:flex md:flex-row md:border-b-2 md:border-b-white">
          <div className="m-auto rounded-full h-56 w-52  md:h-80 md:w-72 justify-center items-center md:m-8">
            {!data.group.imgUrl && !data.group.imgAlt ? (
              <Image
                className="w-full"
                src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708118888/default-group-photo_xhcpqt.png"
                alt="Buddies taking a selfie"
                width={288}
                height={288}
              />
            ) : (
              <Image className="w-full" src={data.group.imgUrl} alt={data.group.imgAlt} width={288} height={288} />
            )}
          </div>
          <div className="md:my-8 md:mx-10 md:flex md:flex-col md:place-content-between">
            <div className="flex flex-col md:flex-row md:place-content-between">
              <div className="m-auto">
                <h2 className="font-extrabold md:text-5xl md:mb-4">{data.group.name}</h2>
                <h3 className="md:font-extrabold md:text-2xl md:mb-2">Headline: Group headline here</h3>
                <div>
                  <div className="flex flex-row items-center">
                    <div className="m-2 bg-[#0A66C2] rounded-full h-8 w-8 justify-center items-center">
                      <Image
                        className="w-full"
                        src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708120241/avatar-astronaut_icc950.png"
                        alt="Astronaut avatar"
                        width={32}
                        height={32}
                      />
                    </div>
                    <p>Organized by: Name Here</p>
                  </div>
                </div>
              </div>
              <div className="px-4 flex flex-row justify-center">
                <div className="m-2 rounded-full h-8 w-8 justify-center items-center">
                  <Image
                    className="w-full"
                    src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708118009/discord_ncsvl3.png"
                    alt="Discord Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <div className="m-2 rounded-full h-8 w-8 justify-center items-center">
                  <Image
                    className="w-full"
                    src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708118305/twitter_pjiutd.png"
                    alt="Twitter Icon"
                    width={32}
                    height={32}
                  />
                </div>
              </div>
            </div>

            <div className="flex place-content-evenly flex-wrap">
              <div className="bg-white mt-2 text-black rounded-3xl px-4 flex flex-row items-center">
                <div className="m-2 rounded-full h-8 w-8 justify-center items-center">
                  <Image
                    className="w-full"
                    src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708120241/avatar-astronaut_icc950.png"
                    alt="Astronaut avatar"
                    width={32}
                    height={32}
                  />
                </div>
                <p>
                  {data.user_group.length} Member{data.user_group.length > 1 ? 's' : ''}
                </p>
              </div>
              <div className="bg-white mt-2 text-black rounded-3xl px-4 flex flex-row items-center">
                <div className="m-2 rounded-full h-8 w-8 justify-center items-center">
                  <Image
                    className="w-full"
                    src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708121513/location_wf4qsz.png"
                    alt="GPS Icon"
                    width={32}
                    height={32}
                  />
                </div>
                <p>Location, USA</p>
              </div>
              <div className="bg-white mt-2 text-black hover:bg-warm hover:text-secondary rounded-3xl px-4 flex flex-row items-center">
                <div className="m-2 rounded-full h-8 w-8 justify-center items-center">
                  <Image
                    className="w-full"
                    src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1708121700/share_hmihwe.png"
                    alt="Arrowed share icon"
                    width={32}
                    height={32}
                  />
                </div>
                <p>Share</p>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[280px] min-h-[280px] p-2 md:p-10 md:flex md:flex-row">
          <div className="md:w-1/2 p-2 md:p-4">
            <h2 className="font-extrabold md:text-2xl">What we are about</h2>
            <p>{data.group.description}</p>
          </div>
          <div className="md:w-1/2 p-2 md:p-4 md:border-secondary md:border-2 rounded-lg">
            <h2 className="font-extrabold md:text-2xl">Upcoming Events</h2>
            <div className="flex flex-col">
              {!data.group.events ? (
                <div className="bg-white rounded-lg text-black p-2 min-h-[64px] my-2">
                  <p>No Upcoming Events scheduled at this time</p>
                </div>
              ) : (
                (data.group.events as any[]).map((item) => (
                  <div key={item.id} className="bg-white rounded-lg text-black p-2 min-h-[64px] my-2">
                    <p>{item}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <LinkButton to={`/groups/${groupId}/events/new`}>Create New Event</LinkButton>
      <LinkButton to="/groups">Back to groups</LinkButton>
    </div>
  );
}

export function ErrorBoundary() {
  const { groupId } = useParams();
  return <div className="error-container">There was an error loading group by the id {groupId}.</div>;
}
