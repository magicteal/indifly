import React from "react";
import CoreOfferings from "./coreOfferings";
import HeroSection from "./heroSection";
import WhyItMatters from "./whyItMatters";

export default function Page() {
  return (
    <div className="bg-[#171717]">
      <HeroSection />
      <WhyItMatters />
      <CoreOfferings />
    </div>
  );
}
