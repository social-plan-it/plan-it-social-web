import type { V2_MetaFunction } from "@remix-run/react";
import EventsSection from "../components/EventsSection";
import { Button } from "../components/Button";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Plan It Social" }];
};

export default function Index() {
  return (
    <>
      {/* <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1>Welcome to Remix</h1>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/blog"
              rel="noreferrer"
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://remix.run/tutorials/jokes"
              rel="noreferrer"
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
              Remix Docs
            </a>
          </li>
        </ul>
      </div> */}
      <EventsSection />
      <div className="mx-10">
        {/* Small Buttons  */}
        <div className="flex mb-10 gap-3">
          <Button size="small">Primary</Button>
          <Button intent="secondary" size="small">
            Secondary
          </Button>
          <Button intent="danger" size="small">
            Danger
          </Button>
          <Button intent="text" size="small">
            Text
          </Button>
        </div>
        {/* Medium Buttons  */}
        <div className="flex mb-10 gap-3">
          <Button>Primary</Button>
          <Button intent="secondary">Secondary</Button>
          <Button intent="danger">Danger</Button>
          <Button intent="text">Text</Button>
        </div>
        {/* Large Buttons  */}
        <div className="flex mb-10 gap-3">
          <Button size="large">Primary</Button>
          <Button intent="secondary" size="large">
            Secondary
          </Button>
          <Button intent="danger" size="large">
            Danger
          </Button>
          <Button intent="text" size="large">
            Text
          </Button>
        </div>
        {/* Full-Width Button  */}
        <div className="flex mb-10 gap-3">
          <Button fullWidth={true}>Secondary Full-Width Button</Button>
          <Button intent="secondary" fullWidth={true}>
            Secondary Full-Width Button
          </Button>
          <Button intent="danger" fullWidth={true}>
            Secondary Full-Width Button
          </Button>
          <Button intent="text" fullWidth={true}>
            Secondary Full-Width Button
          </Button>
        </div>
      </div>
    </>
  );
}
