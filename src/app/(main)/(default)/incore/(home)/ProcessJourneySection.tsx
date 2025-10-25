// components/ProcessJourney.tsx
"use client";

import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import Image from "next/image";

export default function ProcessJourney() {
  return (
    <Section className="reveal-section py-20">
      <SectionHeader title="From Idea to Evolution" />

      <div className="mt-10 overflow-x-auto md:overflow-x-visible">
        <div className="flex min-w-max justify-center md:min-w-0">
          <Image
            src="/process.svg"
            alt="InCORE process journey"
            width={1280}
            height={600}
            className="reveal-image h-auto w-[1280px] md:w-full md:max-w-6xl"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
