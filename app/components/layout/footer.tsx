import VercelBanner from '~/imgs/VercelBanner.svg';

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl m-auto">
        {/*Top Line*/}
        <div className=" hidden sm:mx-8 sm:pt-8 sm:flex sm:border-b sm:pb-2">
          <p className=" pr-4 md:mt-2 ">Create your memories, find your squad.</p>
          <button className="">
            <a className="rounded-2xl border-2 py-1 px-3 whitespace-nowrap " href="/">
              Get Started
            </a>
          </button>
          <img className="ml-auto" src={VercelBanner} alt="Vercel Banner" />
        </div>
        {/*Top Line Mobile View */}
        <div className="border-b mx-8 sm:hidden">
          <a className="flex justify-center py-8" href="/">
            Start a new group
          </a>
        </div>
        {/*Main Links*/}
        <div className="mx-16 sm:mx-8 pt-8 flex flex-col justify-between sm:flex-row sm:justify-around">
          <ul className="mb-8">
            <li className="text-lg">Your Account</li>
            <li className="pb-1">
              <a className="text-gray-400   font-thin" href="/">
                Sign Up
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Log In
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Help
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Become an Affiliate
              </a>
            </li>
          </ul>
          <ul className="mb-8">
            <li className="text-lg">Discover</li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Groups
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Calendar
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Topics
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Cities
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Online Events
              </a>
            </li>
          </ul>
          <ul className="mb-8">
            <li className="text-lg">Social Plan-it</li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                About
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Blog
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Sponsor
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Volunteer
              </a>
            </li>
            <li className="pb-1">
              <a className="text-gray-400  font-thin" href="/">
                Donate
              </a>
            </li>
          </ul>
        </div>
        <img className="sm:hidden ml-8 pt-4" src={VercelBanner} alt="Vercel Banner" />
        {/*Bottom Links*/}
        <div className="mx-8  pt-20    ">
          <ul className="flex flex-col justify-center  sm:flex-row   sm:space-x-8">
            <li className="mb-4 ml-8">@ 2023 Social Plan-it</li>
            <li className="mb-4 ml-8">
              <a href="/">Terms of Service</a>
            </li>
            <li className="mb-4 ml-8">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="mb-4 ml-8">
              <a href="/">Cookie Policy</a>
            </li>
            <li className="mb-4 ml-8">
              <a href="/">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
