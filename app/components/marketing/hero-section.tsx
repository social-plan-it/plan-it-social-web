import { Form } from '@remix-run/react';
import { Image } from '../ui/images';

export default function HeroSection() {
  return (
    <section className="bg-secondary pt-10 pb-40">
      <div className="mx-auto w-screen max-w-screen-xl flex flex-wrap-reverse space-x-10 justify-center">
        <div className="w-4/5 max-w-[45%] min-w-[270px]">
          <h1 className="text-gray-800 font-bold text-4xl pb-8 w-full">Social made easy, memories made forever</h1>
          <p className="text-gray-800 font-bold text-lg pb-8 w-full">
            Whatever your interest, from hiking and reading to networking and skill sharing, there are thousands of
            people who share it on Social Plan-it. Events are happening every day—log in to join the fun.
          </p>
          {/* <button className="bg-gray-800 rounded-3xl py-1 px-8 m-1 text-white hover:bg-emerald-50 hover:text-gray-800 hover:border-2 border-gray-800 uppercase font-semibold">Join</button> */}
          <Form method="GET" action="/search">
            <label htmlFor="q" className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search groups or events:
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <div className="flex">
                <input
                  type="search"
                  id="q"
                  name="q"
                  className="block w-full py-4 pl-10 text-xs sm:text-base text-gray-900 md:text-center lg:text-2xl border border-gray-300 rounded-l-lg italic bg-gray-50 focus:ring-2 focus:outline-none focus:ring-blue-500"
                  placeholder='"Frisbee in San Francisco"'
                  required
                  minLength={2}
                  maxLength={50}
                />
                <button
                  type="submit"
                  className="text-white  right-2.5 bottom-2.5 bg-primary hover:bg-gray-500 focus:ring-2 focus:outline-none focus:ring-blue-500 font-semibold rounded-r-lg italic text-md px-2 md:px-4 py-4 lg:text-2xl"
                >
                  Search
                </button>
              </div>
            </div>
          </Form>
        </div>
        <div className="w-4/5 mb-3 max-w-[600px] flex self-start">
          <Image className="w-full" src="/imgs/Hero-Image.png" alt="group of people" />
        </div>
      </div>
    </section>
  );
}
