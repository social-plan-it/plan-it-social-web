import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import stylesheet from './styles/tailwind.css';
import faviconAssetUrl from './imgs/favicon.svg';
import { TopNav } from '~/components/layout/top-nav';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import Footer from './components/layout/footer';
import { getCurrentUser } from '~/modules/session/session.server';
import { db } from './modules/database/db.server';

export const links: LinksFunction = () => {
  return [
    { rel: 'icon', type: 'image/svg-xml', href: faviconAssetUrl },
    { rel: 'stylesheet', href: stylesheet },
  ];
};

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
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full flex flex-col">
        <TopNav />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
