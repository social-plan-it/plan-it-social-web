import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import stylesheet from './styles/tailwind.css';
import { TopNav } from '~/components/layout/top-nav';
import Footer from './components/layout/footer';
import { ErrorMessage } from '~/components/ui/error-message';
import { getCurrentUser } from '~/modules/session/session.server';
import { db } from './modules/database/db.server';

export const meta: MetaFunction = ({ error }: any) => {
  return [{ title: error ? 'Oops! An Error Occurred' : 'Plan It Social' }];
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export async function loader({ request }: LoaderFunctionArgs) {
  const eventsPromise = db.event.findMany({ include: { group: true }, take: 24 });
  const groupsPromise = db.group.findMany({ take: 24 });
  const [events, groups] = await Promise.all([eventsPromise, groupsPromise]);

  return json({
    ENV: {
      PUBLIC_GOOGLE_CLIENT_ID: process.env.PUBLIC_GOOGLE_CLIENT_ID,
    },
    currentUser: await getCurrentUser(request),
    events,
    groups,
  });
}

export default function App() {
  return (
    <Shell>
      <Outlet />
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full flex flex-col">
        <TopNav />
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <Shell>
          <ErrorMessage>
            <div className="flex">
              <img
                className="h-0 w-0 collapse sm:visible sm:h-60 sm:w-60"
                src="/imgs/404-not-found.png"
                alt="Resource not found"
              />
              <h1>The resource you are looking for does not exist.</h1>
            </div>
          </ErrorMessage>
        </Shell>
      );
    }
    return (
      <Shell>
        <ErrorMessage>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </ErrorMessage>
      </Shell>
    );
  } else if (error instanceof Error) {
    return (
      <Shell>
        <ErrorMessage>
          <h1>Error</h1>
          <p>{error.message}</p>
        </ErrorMessage>
      </Shell>
    );
  } else {
    return (
      <Shell>
        <ErrorMessage>
          <h1>Unknown Error</h1>
        </ErrorMessage>
      </Shell>
    );
  }
}
