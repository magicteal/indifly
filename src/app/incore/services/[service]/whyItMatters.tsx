"use client";

import { useServiceContent } from "@/app/incore/services/[service]/hooks/useServiceContent";
import { useServiceTheme } from "@/app/incore/services/[service]/hooks/useServiceTheme";
import Container from "@/components/ui/container";
import TextCircledLine from "@public/inCore/text-circled-line.svg";
import { MoveRight } from "lucide-react";
import type React from "react";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-[#ac6a2d]/20 px-6 py-5">
      <div className="flex items-start gap-4">
        <p className="text-lg">{children}</p>
      </div>
    </div>
  );
}

export default function WhyItMatters() {
  const theme = useServiceTheme();
  const content = useServiceContent();

  return (
    <div className="relative">
      <Container className="mt-36">
        {/* Heading */}
        <div className="mb-8 text-center text-3xl font-bold italic md:mb-12 md:text-4xl">
          <span className="mr-10">Why it </span>
          <div className="relative inline-block">
            <span className={`${theme.text}`}>matters?</span>
            <TextCircledLine className="absolute -top-2 left-1/2 translate-x-[-50%] scale-80" />
          </div>
        </div>

        {/* description */}
        <div
          className={`mb-8 text-center text-lg font-light md:mb-12 md:text-xl`}
        >
          {content.whyItMatters.description}
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: stacked list */}
          <div className="flex flex-col gap-4">
            {content.whyItMatters.challenges.map((ch, i) => (
              <Pill key={i}>
                <span className="font-bold">{ch.title} </span>
                <MoveRight className="inline -translate-y-0.5" />{" "}
                {ch.description}
              </Pill>
            ))}
          </div>
        </div>
        {/* Tagline */}
        <p
          className={`mt-10 text-center text-2xl font-semibold italic md:mt-16 md:text-3xl ${theme.text}`}
        >
          {content.whyItMatters.tagline}
        </p>
      </Container>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute top-0 -left-25 h-48 w-48 rounded-full border border-[#D9D9D9]/40" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#d9d9d9]/15" />
    </div>
  );
}
