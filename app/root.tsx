import type { LinksFunction, LoaderArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import stylesheet from './styles/tailwind.css';
import TopNav from '~/components/layout/top-nav';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import Footer from './components/layout/footer';
import { getCurrentUser } from '~/modules/session/session.server';

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesheet }];

export async function loader({ request }: LoaderArgs) {
  const currentUser = await getCurrentUser(request);

  return json({ currentUser });
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
