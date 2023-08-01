export default function EventsSection() {
  return (
    <section className="bg-secondary">
      <div className="sm:ml-24 pt-10 pb-20 space-y-3 ">
        <h2 className="text-center sm:text-left sm:text-5xl text-4xl font-bold italic text-primary">Upcoming Events</h2>
        <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
          <div className="flex flex-col w-[350px] mx-6 sm:mx-0 max-w-md p-6 rounded-2xl bg-primary">
            <img
              src="imgs/upc-events1.png"
              className="w-full object-contain box-border"
              alt="group of people in a meeting"
            />
            <div className="pt-6 text-lg sm:text-2xl font-bold text-white">Group Name</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Event Title</h3>
            <p className="w-3/5 text-lg sm:text-2xl text-white">
              Event description blah blah blah blah blah blah blah blah blah
            </p>
            <div className="text-lg sm:text-2xl font-bold text-white">Mon, May 18 - 5:00 pm PDT</div>
          </div>
          <div className="flex flex-col w-[350px] mx-6 sm:mx-0 max-w-md p-6 rounded-2xl bg-primary">
            <div className="text-lg sm:text-2xl font-bold text-white">Group Name</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Event Title</h3>
            <p className="w-3/5 text-lg sm:text-2xl text-white">
              Event description blah blah blah blah blah blah blah blah blah
            </p>
            <div className="text-lg sm:text-2xl font-bold text-white">Mon, May 18 - 5:00 pm PDT</div>
            <img
              src="imgs/upc-events2.png"
              className="pt-8 w-full object-contain box-border"
              alt="group of people in a meeting"
            />
          </div>
          <div className="flex flex-col w-[350px] mx-6 sm:mx-0 max-w-md p-6 rounded-2xl bg-primary">
            <img
              src="imgs/upc-events3.png"
              className="w-full object-contain box-border"
              alt="group of people in a meeting"
            />
            <div className="pt-6 text-lg sm:text-2xl font-bold text-white">Group Name</div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white">Event Title</h3>
            <p className="w-3/5 text-lg sm:text-2xl text-white">
              Event description blah blah blah blah blah blah blah blah blah
            </p>
            <div className="text-lg sm:text-2xl font-bold text-white">Mon, May 18 - 5:00 pm PDT</div>
          </div>
        </div>
      </div>
    </section>
  );
}
