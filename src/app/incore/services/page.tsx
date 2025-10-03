import React from "react";
import CoreOfferings from "./core-offerings";
import HeroSection from "./Herosection";
import WhyItMatters from "./why-it-matters";

export default function Page() {
  return (
    <div className="bg-[#171717]">
      <HeroSection />
      <WhyItMatters />
      <CoreOfferings />
    </div>
  );
}
