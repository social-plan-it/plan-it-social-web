import type { Event } from '@prisma/client';

export function EventCard({ name, date, description, imgUrl, imgAlt, location }: Event) {
  return (
    <div className="grid grid-cols-3 gap-8 p-4 bg-primary text-white rounded-xl">
      <div>{imgUrl && imgAlt && <img src={imgUrl} alt={imgAlt}></img>}</div>
      <div className="col-span-2">
        <h3 className="font-bold text-3xl">{name}</h3>
        <h4 className="text-lg">{date.toDateString()}</h4>
        <p>{location}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
