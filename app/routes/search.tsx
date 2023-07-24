import type { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getEvents, type Event } from '~/models/events.server';

export const loader: LoaderFunction = async ({ request }) => {
  // Get the query string from the URL

  const url = new URL(request.url);
  const query = url.searchParams.get('q');

  // Only numbers, letters are allowed

  const regex = /^[a-zA-Z0-9]+$/;

  // Some validation

  if (typeof query !== 'string' || !query || query.length > 50 || !regex.test(query)) {
    throw new Response(null, {
      status: 404,
      statusText: 'Not Found',
    });
  }

  // Get all events from the database

  const events = await getEvents();
  const filteredEvents = events.filter((e) => e.description.toLowerCase().includes(query.toLowerCase()));

  // Return the filtered events

  return filteredEvents;
};

export default function SearchPage() {
  const events = useLoaderData();
  return (
    <section className="bg-secondary pt-10 pb-40">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-50 lg:py-20">
        <h1 className="text-4xl font-bold mb-3">Welcome, John Smith</h1>
        <p className="text-2xl font-bold">Events recommended for you</p>
        <div className="pt-5">
          {events.length === 0 ? (
            <p>No events found. Please, try another keywords. </p>
          ) : (
            <>
              <p>
                {events.length} event{events.length > 1 ? 's' : ''} found:
              </p>
              <p>{events.map((e: Event) => e.title)}</p>
            </>
          )}
        </div>
        <div className="grid gap-5 mt-20 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden rounded-2xl shadow-sm bg-primary flex flex-col">
            <div className="p-5 border-t-0 text-white flex-grow">
              <a
                href="/"
                aria-label="Category"
                title="Fitness Bootcamp: Get Fit and Stay Active"
                className="inline-block mb-1 text-xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Fitness Bootcamp: Get Fit and Stay Active
              </a>
              <p className="mb-3 text-xs font-bold tracking-wide">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Mon, May 22 - <br />
                  6:00 pm PDT
                </a>
              </p>
              <p className="mb-2 text-xs">
                Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all
                fitness levels.
              </p>
            </div>
            <div className="h-1/2">
              <img
                src="https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784670/fitness-meeting_b6vtmv.jpg"
                className="object-cover w-full h-full pb-5 px-5"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm bg-primary flex flex-col">
            <div className="p-5 border-t-0 text-white flex-grow">
              <a
                href="/"
                aria-label="Category"
                title="Fitness Bootcamp: Get Fit and Stay Active"
                className="inline-block mb-1 text-xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Fitness Bootcamp: Get Fit and Stay Active
              </a>
              <p className="mb-3 text-xs font-bold tracking-wide">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Mon, May 22 - <br />
                  6:00 pm PDT
                </a>
              </p>
              <p className="mb-2 text-xs">
                Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all
                fitness levels.
              </p>
            </div>
            <div className="h-1/2">
              <img
                src="https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784670/fitness-meeting_b6vtmv.jpg"
                className="object-cover w-full h-full pb-5 px-5"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm bg-primary flex flex-col">
            <div className="p-5 border-t-0 text-white flex-grow">
              <a
                href="/"
                aria-label="Category"
                title="Fitness Bootcamp: Get Fit and Stay Active"
                className="inline-block mb-1 text-xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Fitness Bootcamp: Get Fit and Stay Active
              </a>
              <p className="mb-3 text-xs font-bold tracking-wide">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Mon, May 22 - <br />
                  6:00 pm PDT
                </a>
              </p>
              <p className="mb-2 text-xs">
                Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all
                fitness levels.
              </p>
            </div>
            <div className="h-1/2">
              <img
                src="https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784670/fitness-meeting_b6vtmv.jpg"
                className="object-cover w-full h-full pb-5 px-5"
                alt=""
              />
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-sm bg-primary flex flex-col">
            <div className="p-5 border-t-0 text-white flex-grow">
              <a
                href="/"
                aria-label="Category"
                title="Fitness Bootcamp: Get Fit and Stay Active"
                className="inline-block mb-1 text-xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Fitness Bootcamp: Get Fit and Stay Active
              </a>
              <p className="mb-3 text-xs font-bold tracking-wide">
                <a
                  href="/"
                  className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                  aria-label="Category"
                  title="traveling"
                >
                  Mon, May 22 - <br />
                  6:00 pm PDT
                </a>
              </p>
              <p className="mb-2 text-xs">
                Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all
                fitness levels.
              </p>
            </div>
            <div className="h-1/2">
              <img
                src="https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784670/fitness-meeting_b6vtmv.jpg"
                className="object-cover w-full h-full pb-5 px-5"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
