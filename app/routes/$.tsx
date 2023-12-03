import { Link, useLocation } from '@remix-run/react';
import { ErrorMessage } from '~/components/ui/error-message';

export async function loader() {
  throw new Response('Not found', { status: 404 });
}

export function ErrorBoundary() {
  const location = useLocation();

  return (
    <ErrorMessage>
      <div className="flex flex-col gap-4">
        <img
          className="h-0 w-0 collapse sm:visible sm:h-60 sm:w-60"
          src="/imgs/404-not-found.png"
          alt="Page not found"
        />
        <h1>
          The page <span className="text-xl">{location.pathname}</span> you are looking for does not exist.
        </h1>
        <Link to="/">Visit our Home page here </Link>
      </div>
    </ErrorMessage>
  );
}
