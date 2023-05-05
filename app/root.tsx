import type {LinksFunction} from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "./styles/global.css"



import TopNav from "~/components/topNav";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: globalStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body  >
        <TopNav />
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
      </body>
    </html>
  );
}
