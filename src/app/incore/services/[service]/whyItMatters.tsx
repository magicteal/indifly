"use client";

import Container from "@/components/container";
import type { ServiceKey, ServiceTheme } from "@/lib/serviceContext";
import TextCircledLine from "@public/inCore/text-circled-line.svg";
import { MoveRight } from "lucide-react";
import type React from "react";

interface WhyItMattersProps {
  theme: ServiceTheme;
  whyItMatters: {
    description: string;
    challenges: { title: string; description: string }[];
    tagline: string;
  };
  service: ServiceKey;
}

function Pill({
  children,
  service,
}: {
  children: React.ReactNode;
  service: ServiceKey;
}) {
  const bgClasses = {
    insurge: "bg-[#AC6B2D33]",
    instack: "bg-[#31076C33]",
    involve: "bg-[#01295C33]",
    insure: "bg-[#19312333]",
  };
  const bgClass = bgClasses[service] || "bg-white";
  return (
    <div className={`${bgClass} relative rounded-2xl px-6 py-5`}>
      <div className="flex items-start gap-4">
        <p className="text-lg">{children}</p>
      </div>
    </div>
  );
}

export default function WhyItMatters({
  theme,
  whyItMatters,
  service,
}: WhyItMattersProps) {
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
          {whyItMatters.description}
        </div>

        {/* Card */}
        <div className="flex flex-row justify-center">
          {/* Left: stacked list */}
          <div className="flex flex-col gap-4">
            {whyItMatters.challenges.map((ch, i) => (
              <Pill service={service} key={i}>
                <span className="font-bold">{ch.title} </span>
                {ch.description !== "" && (
                  <>
                    <MoveRight className="inline -translate-y-0.5" />{" "}
                    {ch.description}
                  </>
                )}
              </Pill>
            ))}
          </div>
        </div>
        {/* Tagline */}
        <p
          className={`mt-10 text-center text-2xl font-semibold italic md:mt-16 md:text-3xl ${theme.text}`}
        >
          {whyItMatters.tagline}
        </p>
      </Container>

      {/* Decorative circles */}
      <div className="pointer-events-none absolute top-0 -left-25 h-48 w-48 rounded-full border border-[#D9D9D9]/40" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#d9d9d9]/15" />
    </div>
  );
}
