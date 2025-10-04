"use client";

import { useServiceTheme } from "@/app/incore/services/[service]/hooks/useServiceTheme";
import MobileChat from "@public/inCore/mobile-chat.svg";
import TextCircledLine from "@public/inCore/text-circled-line.svg";
import type React from "react";

const ITEMS: string[] = [
  "Limited capital to sustain operations, hire talent, or scale.",
  "Difficulty attracting investors due to unproven business models.",
  "Limited capital to sustain operations, hire talent, or scale.",
  "Difficulty attracting investors due to unproven business models.",
  "Limited capital to sustain operations, hire talent, or scale.",
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-[#ac6a2d]/20 px-6 py-5">
      <div className="flex items-start gap-4">
        <MobileChat className="shrink-0" />
        <p className="text-lg leading-6 text-[#f3f3f3]">{children}</p>
      </div>
    </div>
  );
}

export default function WhyItMatters() {
  const theme = useServiceTheme();

  return (
    <section
      className="relative overflow-hidden"
      aria-label="Why it matters section"
    >
      {/* Decorative geometry - top-left circle  */}
      <div className="pointer-events-none absolute top-0 -left-25 h-48 w-48 rounded-full border border-[#D9D9D9]/40" />

      {/* Decorative geometry - bottom-right circle */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#d9d9d9]/15" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="mb-10 text-center text-3xl font-bold italic md:mb-16 md:text-4xl">
          <span className="mr-10">Why it </span>
          <div className="relative inline-block">
            <span className={theme.text}>matters?</span>
            <TextCircledLine className="absolute -top-2 left-1/2 translate-x-[-50%] scale-80" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: stacked list */}
          <div className="flex flex-col gap-4">
            {ITEMS.map((text, i) => (
              <Pill key={i}>{text}</Pill>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
