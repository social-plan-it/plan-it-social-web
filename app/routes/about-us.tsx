import { Image, staticImage } from '~/components/ui/images';

export default function AboutUs() {
  return (
    <div className="bg-primary text-white flex flex-col justify-center content-center">
      <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 justify-center">
        <div className="w-[320px] flex self-start mx-auto pb-3">
          <Image
            className="w-full"
            src={staticImage.happySun.url}
            alt={staticImage.happySun.url}
            title={staticImage.happySun.url}
            width={512}
            height={512}
          />
        </div>
        <h2 className="w-50 pb-3 sm:w-100 font-bold sm:font-extrabold sm:text-4xl">Empower Community Building</h2>
        <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
          Our open-source platform empowers you to create and manage your own communities, fostering a space for
          individuals with shared interests to connect, collaborate, and thrive.
        </h3>
        <a
          href="/groups"
          className="w-full sm:w-fit px-5 py-3 text-base me-2 mb-2 text-center font-medium focus:outline-none focus:ring-4 bg-warm text-white focus:ring-red-300 hover:bg-red-700 rounded-lg "
        >
          Join Group
        </a>
      </div>
      {/* <div className="flex justify-center content-center bg-secondary">
          <h1>TODO: Place holder for event images marquee</h1>
        </div> */}
      <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
        <div className="w-[320px] flex self-start mx-auto pb-3">
          <Image
            className="w-full"
            src={staticImage.targetWithArrow.url}
            alt={staticImage.targetWithArrow.altText}
            title={staticImage.targetWithArrow.title}
            width={512}
            height={512}
          />
        </div>
        <div className="pb-3 w-full">
          <h2 className="sm:w-100 font-bold sm:font-extrabold sm:text-4xl">Experience Unparalleled Flexibility</h2>
        </div>
        <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
          Enjoy the freedom to shape your social experience on your terms. Our platform offers customizable features,
          allowing you to tailor event formats, communication channels, and community guidelines to perfectly suit your
          unique needs!
        </h3>
      </div>
      <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
        <div className="w-[320px] flex self-start mx-auto pb-3">
          <Image
            className="w-full"
            src={staticImage.kidWithBinoculars.url}
            alt={staticImage.kidWithBinoculars.altText}
            title={staticImage.kidWithBinoculars.title}
            width={512}
            height={512}
          />
        </div>
        <div className="pb-3 w-full">
          <h2 className="sm:w-100 font-bold sm:font-extrabold sm:text-4xl">Uncover Diverse Passions</h2>
        </div>
        <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
          Explore a vibrant tapestry of communities dedicated to anything you can imagine! From book clubs and art
          enthusiasts to tech aficionados and board game nights, discover new passions and expand your horizons through
          community hosted events.
        </h3>
      </div>
      <div className="max-w-screen-md mx-auto sm:w-4/5 flex flex-col px-8 py-8 items-center justify-center">
        <div className="w-[320px] flex self-start mx-auto pb-3">
          <Image
            className="w-full"
            src={staticImage.diverseGroupOfThree.url}
            alt={staticImage.diverseGroupOfThree.altText}
            title={staticImage.diverseGroupOfThree.title}
            width={512}
            height={512}
          />
        </div>
        <div className="pb-3 w-full">
          <h2 className="sm:w-100 font-bold sm:font-extrabold sm:text-4xl">Foster Meaningful Connections</h2>
        </div>
        <h3 className="w-50 sm:text-lg sm:w-90 sm:font-semibold pb-6">
          Facilitates genuine connections with like-minded individuals who share your interests. Find your tribe, spark
          engaging discussions, and build lasting friendships through shared experiences.
        </h3>
      </div>
    </div>
  );
}
