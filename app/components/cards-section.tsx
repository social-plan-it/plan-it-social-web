import { Card } from "./card";

const cardProps = [
  {
    title: "Tech Talks: Exploring the Latest Web Development Trends",
    description:
      "Join us for an evening of insightful talks on progressive web apps, serverless architecture, and the future of JavaScript frameworks.",
    image:
      "https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784673/web-meeting_shwwpl.jpg",
    date: "Mon, May 18 - 5:00 pm PDT",
  },
  {
    title: "Fitness Bootcamp: Get Fit and Stay Active",
    description:
      "Break a sweat and achieve your fitness goals with our high-intensity workout session suitable for all fitness levels.",
    image:
      "https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784670/fitness-meeting_b6vtmv.jpg",
    date: "Mon, May 22 - 6:00 pm PDT",
  },
  {
    title: "Art Workshop: Discover Your Creative Side",
    description:
      "Unleash your creativity and create your own masterpiece in a supportive and inspiring art workshop.",
    image:
      "https://res.cloudinary.com/djqdtvv7u/image/upload/v1684784671/art-meeting_uo67yc.jpg",
    date: "Thu, May 26 - 8:00 am PDT",
  },
];

export default function CardsSection() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {cardProps.map((card) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            image={card.image}
            to={"/"}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}
