import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import stylesheet from './styles/tailwind.css';
import { TopNav } from '~/components/layout/top-nav';
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
import Footer from './components/layout/footer';
import { Error } from '~/components/ui/error';
import { getCurrentUser } from '~/modules/session/session.server';
import { db } from './modules/database/db.server';

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

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status == 404) {
      return (
        <Shell title="An Error Occurred">
          <Error>
            <h1>the page you are looking for does not exist</h1>
          </Error>
        </Shell>
      );
    }
    return (
      <Shell title="An Error Occurred">
        <Error>
          <h1>
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </Error>
      </Shell>
    );
  } else if (error instanceof Error) {
    return (
      <Shell title="Something went wrong">
        <Error>
          <h1>Error</h1>
          <p>{error?.message}</p>
        </Error>
      </Shell>
    );
  } else {
    return (
      <Shell title="An unknown error occurred">
        <Error>
          <h1>Unknown Error</h1>
        </Error>
      </Shell>
    );
  }
}

function Shell({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title && <title>{title}</title>}
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
