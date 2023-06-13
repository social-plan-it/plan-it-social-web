
import type { V2_MetaFunction } from "@remix-run/react";
import HeroSection from "~/components/HeroSection";


export const meta: V2_MetaFunction = () => {
  return [{ title: "Plan It Social" }];
};

export default function Index() {
  return (
    <HeroSection/>
  );
}