import type { Event } from '@prisma/client';

export function EventCard({ name, date, description, imgUrl, imgAlt, location }: Event) {
  return (
    <div className="grid grid-cols-3 gap-8 p-4 bg-primary text-white rounded-xl">
      <div className="">
        <img src={imgUrl ?? ''} alt={imgAlt ?? 'group image'}></img>
      </div>
      <div className="col-span-2">
        <h1 className="font-bold text-3xl">{name}</h1>
        <h3 className="text-lg">{date.toDateString()}</h3>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
