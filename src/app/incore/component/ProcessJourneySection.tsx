// components/ProcessJourney.tsx
"use client";

import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import Image from "next/image";





export default function ProcessJourney() {
  return (
    <Section className="py-20">
      <SectionHeader label="Process Journey" title="InCORE" />

      <div className="mt-10 flex justify-center">
        <Image
          src="/process.svg"
          alt="InCORE process journey"
          width={1280}
          height={600}
          className="w-full max-w-6xl h-auto"
          priority
        />
      </div>
    </Section>
  );
}
