import { Link, useLocation } from '@remix-run/react';
import { ErrorMessage } from '~/components/ui/error-message';

export async function loader() {
  throw new Response('Not found', { status: 404 });
}

export function ErrorBoundary() {
  const location = useLocation();

  return (
    <ErrorMessage>
      <div className="flex flex-col items-center py-4">
        <img
          className="h-0 w-0 collapse sm:visible sm:h-60 sm:w-60"
          src="/imgs/404-not-found.png"
          alt="Page not found"
        />
        <h1 className="mt-4 text-2xl sm:text-6xl tracking-tight">Page not found</h1>
        <p className="mt-6 text-base text-gray-600">
          The page <span className="font-bold">{location.pathname}</span> you are looking for does not exist.
        </p>
        <Link to="/" className="mt-12 rounded-md bg-[#028090] hover:bg-[#018C9E] text-white px-3.5 py-2.5 ">
          Go back home
        </Link>
      </div>
    </ErrorMessage>
  );
}
