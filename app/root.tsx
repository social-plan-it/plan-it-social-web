import { Links, Meta, Outlet, Scripts, ScrollRestoration, isRouteErrorResponse, useRouteError } from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import stylesheet from './styles/tailwind.css?url';
import faviconAssetUrl from './imgs/favicon.svg?url';
import { TopNav } from '~/components/layout/top-nav';
import Footer from './components/layout/footer';
import { ErrorMessage } from '~/components/ui/error-message';
import { getCurrentUser } from '~/modules/session/session.server';
import { db } from './modules/database/db.server';

export const meta: MetaFunction = ({ error }: any) => {
  const title = !error
    ? 'Plan It Social'
    : isRouteErrorResponse(error)
      ? 'An error occured'
      : error instanceof Error
        ? 'Something went wrong'
        : 'Unknown error';

  return [{ title: title }];
};

export const links: LinksFunction = () => [
  { rel: 'icon', type: 'image/svg-xml', href: faviconAssetUrl },
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
  },
];

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
        <main id="main" className="flex flex-col mb-auto">
          {children}
        </main>
        <ScrollRestoration />
        <Scripts />
        <Footer />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Shell>
        <ErrorMessage>
          <h1>
            {error.status} {error.statusText}
          </h1>
          {!!error.data && <p>{JSON.stringify(error.data)}</p>}
        </ErrorMessage>
      </Shell>
    );
  }
  if (error instanceof Error) {
    return (
      <Shell>
        <ErrorMessage>
          <h1 className="text-2xl sm:text-6xl p-4 sm:p-16">Error</h1>
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
