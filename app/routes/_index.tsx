
import type { V2_MetaFunction } from "@remix-run/react";
import TopNav from "~/components/topNav";
import HeroSection from "~/components/HeroSection";
import BenefitsSection from "~/components/benefitsSection";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Plan It Social" }];
};

export default function Index() {

  return (
    <>
    <TopNav />
    <HeroSection/>
    <BenefitsSection />
    </>
  );
}