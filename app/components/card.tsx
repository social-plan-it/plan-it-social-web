import { NavLink, type NavLinkProps } from "@remix-run/react";

type CardsProps = NavLinkProps & {
  key: string;
  image: string;
  title: string;
  date: string;
  description: string;
};

export function Card(props: CardsProps) {
  return (
    <div className="overflow-hidden rounded-lg shadow-sm bg-sky-950">
      <img
        src={props.image}
        className="object-cover w-full h-64 pt-5 px-5"
        alt={props.title}
      />
      <div className="p-5 border-t-0 text-white">
        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
          <NavLink
            to="/"
            className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
            aria-label="Category"
            title="traveling"
          >
            {props.date}
          </NavLink>
        </p>
        <NavLink
          to="/"
          aria-label="Category"
          title="Tech Talks: Exploring the Latest Web Development Trends"
          className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
        >
          {props.title}
        </NavLink>
        <p className="mb-2">{props.description}</p>
      </div>
    </div>
  );
}
