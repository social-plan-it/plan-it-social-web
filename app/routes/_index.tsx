import type { V2_MetaFunction } from "@remix-run/react";
import EventsSection from "../components/events-section";

import CardsSection from "~/components/cards-section";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Plan It Social" }];
};

export default function Index() {
  return (
    <>
      <EventsSection />
      <CardsSection />
    </>
  );
}
