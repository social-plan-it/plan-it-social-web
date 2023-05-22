export default function EventsSection() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden rounded-lg shadow-sm bg-sky-950">
          <img
            src="https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784673/web-meeting_shwwpl.jpg"
            className="object-cover w-full h-64 pt-5 px-5"
            alt=""
          />
          <div className="p-5 border-t-0 text-white">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Mon, May 18 - 5:00 pm PDT
              </a>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Tech Talks: Exploring the Latest Web Development Trends"
              className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Tech Talks: Exploring the Latest Web Development Trends
            </a>
            <p className="mb-2">
              Join us for an evening of insightful talks on progressive web
              apps, serverless architecture, and the future of JavaScript
              frameworks.
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-sm bg-sky-950 flex flex-col">
          <div className="p-5 border-t-0 text-white flex-grow">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Mon, May 22 - 6:00 pm PDT
              </a>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Fitness Bootcamp: Get Fit and Stay Active"
              className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Fitness Bootcamp: Get Fit and Stay Active
            </a>
            <p className="mb-2">
              Break a sweat and achieve your fitness goals with our
              high-intensity workout session suitable for all fitness levels.
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
        <div className="overflow-hidden rounded-lg shadow-sm bg-sky-950">
          <img
            src="https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784671/art-meeting_uo67yc.jpg"
            className="object-cover w-full h-64 pt-5 px-5"
            alt=""
          />
          <div className="p-5 border-t-0 text-white">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                Thu, May 26 - 8:00 am PDT
              </a>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Art Workshop: Discover Your Creative Side"
              className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Art Workshop: Discover Your Creative Side
            </a>
            <p className="mb-2">
              Unleash your creativity and create your own masterpiece in a
              supportive and inspiring art workshop.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
