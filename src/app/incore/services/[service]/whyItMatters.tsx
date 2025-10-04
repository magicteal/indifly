"use client";

import { useServiceTheme } from "@/app/incore/services/[service]/hooks/useServiceTheme";
import Container from "@/components/ui/container";
import TextCircledLine from "@public/inCore/text-circled-line.svg";
import { MoveRight } from "lucide-react";
import type React from "react";

const challanges = [
  {
    title: "Limited Resources",
    description:
      "Limited capital to sustain operations, hire talent, or scale.",
  },
  {
    title: "High Competition",
    description:
      "Intense competition from other startups and established players.",
  },
  {
    title: "Market Fit",
    description: "Difficulty in finding and validating product-market fit.",
  },
];

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

  return (
    <Container className="relative mt-36 overflow-hidden">
      {/* Decorative geometry - top-left circle  */}
      <div className="pointer-events-none absolute top-0 -left-25 h-48 w-48 rounded-full border border-[#D9D9D9]/40" />

      {/* Decorative geometry - bottom-right circle */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#d9d9d9]/15" />

      {/* Heading */}
      <div className="mb-8 text-center text-3xl font-bold italic md:mb-12 md:text-4xl">
        <span className="mr-10">Why it </span>
        <div className="relative inline-block">
          <span className={theme.text}>matters?</span>
          <TextCircledLine className="absolute -top-2 left-1/2 translate-x-[-50%] scale-80" />
        </div>
      </div>

      {/* description */}
      <div
        className={`mb-8 text-center text-lg font-light md:mb-12 md:text-xl`}
      >
        Startups face unique challenges that can hinder their growth and
        success.
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: stacked list */}
        <div className="flex flex-col gap-4">
          {challanges.map((ch, i) => (
            <Pill key={i}>
              <span className="font-bold">{ch.title} </span>
              <MoveRight className="inline -translate-y-0.5" /> {ch.description}
            </Pill>
          ))}
        </div>
      </div>
      {/* Tagline */}
      <p
        className={`mt-10 text-center text-2xl font-semibold italic md:mt-16 md:text-3xl ${theme.text}`}
      >
        A brilliant product still needs SURGE to be seen
      </p>
    </Container>
  );
}
