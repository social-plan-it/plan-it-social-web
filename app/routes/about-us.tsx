import { Link } from '@remix-run/react';

export default function AboutUs() {
  return (
    <>
      <div className="bg-primary text-white flex flex-col justify-center content-center">
        <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
          <div className="w-[320px] flex self-start mx-auto pb-3">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1706807323/solar-system_pzkazh.png"
              alt="Solar system"
            />
          </div>
          <h2 className="w-50 pb-3 sm:w-100 font-bold sm:font-extrabold sm:text-4xl">
            Ham hock pork shank, chislic chicken pork chop picanha. Alcatra turkey ribeye kevin fatback leberkas.
          </h2>
          <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
            Shank jerky shoulder short loin corned beef chislic ham cupim. Ribeye andouille jowl, short ribs chislic
            leberkas ham rump sirloin jerky chicken turkey ground round.
          </h3>
          <div className="w-full sm:w-90 sm:items-end">
            <Link
              className="w-full sm:w-48 text-white right-2.5 bottom-2.5 bg-warm hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-blue-500 font-semibold rounded-lg italic text-md px-2 md:px-4 py-4 lg:text-2xl"
              target="_blank"
              to="https://discord.com/channels/1047297490199773215/1047297491135107114"
            >
              Join Group
            </Link>
          </div>
        </div>
        {/* <div className="flex justify-center content-center bg-secondary">
          <h1>TODO: Place holder for event images marquee</h1>
        </div> */}
        <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
          <div className="w-[320px] flex self-start mx-auto pb-3">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1706805456/target_g3b96r.png"
              alt="Arrow in target"
            />
          </div>
          <div className="pb-3 w-full">
            <h2 className="sm:w-100 font-bold sm:font-extrabold sm:text-4xl">MISSION</h2>
          </div>
          <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
            Shank jerky shoulder short loin corned beef chislic ham cupim. Ribeye andouille jowl, short ribs chislic.
          </h3>
        </div>
        <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
          <div className="w-[320px] flex self-start mx-auto pb-3">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1706806762/binoculars_vuhkgz.png"
              alt="Kid looking through binoculars"
            />
          </div>
          <div className="pb-3 w-full">
            <h2 className="sm:w-100 font-bold sm:font-extrabold sm:text-4xl">VISION</h2>
          </div>
          <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
            Shank jerky shoulder short loin corned beef chislic ham cupim. Ribeye andouille jowl, short ribs chislic.
          </h3>
        </div>
        <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
          <div className="w-[320px] flex self-start mx-auto pb-3">
            <img
              className="w-full"
              src="https://res.cloudinary.com/dxctpvd8v/image/upload/v1706806983/crowd_ld0rvy.png"
              alt="Diversity"
            />
          </div>
          <div className="pb-3 w-full">
            <h2 className="sm:w-100 font-bold sm:font-extrabold sm:text-4xl">CULTURE</h2>
          </div>
          <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
            Shank jerky shoulder short loin corned beef chislic ham cupim. Ribeye andouille jowl, short ribs chislic.
          </h3>
        </div>
      </div>
    </>
  );
}
