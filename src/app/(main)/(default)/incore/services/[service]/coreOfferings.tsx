"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";
import Link from "next/link";
import React, { useContext } from "react";
import { ServiceKey } from "./content";

interface CoreOfferingsProps {
  offerings: {
    offerings: { name: string; description?: string }[];
    tagline: string;
  };
  service: ServiceKey;
}

export default function CoreOfferings({
  offerings,
  service,
}: CoreOfferingsProps) {
  const [active, setActive] = React.useState(0);

  const gradientBgMap: Record<string, string> = {
    insurge:
      "bg-[linear-gradient(65.77deg,_#2D231D_1.29%,_rgba(21,13,9,0)_98.98%)]",
    instack:
      "bg-[linear-gradient(65.77deg,_#1A171D_1.29%,_rgba(21,13,9,0)_98.98%)]",
    involve:
      "bg-[linear-gradient(65.77deg,_#0A1C32_1.29%,_rgba(21,13,9,0)_98.98%)]",
    insure:
      "bg-[linear-gradient(67.08deg,_#22362B_1.32%,_rgba(21,13,9,0)_115.47%)]",
  };
  const gradientClass = gradientBgMap[service] || gradientBgMap.insurge;

  return (
    <Container className="reveal-section mt-12 md:mt-24">
      <div
        className="relative rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:rounded-4xl md:p-8"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute -top-40 left-75 hidden scale-30 rotate-12 md:block" />

        {/* heading */}
        <div className="reveal-title relative mb-8 pt-8 text-center text-xl font-semibold italic sm:mb-12 sm:pt-10 sm:text-2xl md:mb-15 md:pt-14 md:text-3xl">
          <span className="mr-6 sm:mr-8 md:mr-12">Core</span>
          <span className="relative text-primary">
            Offerings
            <CircledLine className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 scale-50 sm:-top-2 sm:scale-60 md:scale-70" />
          </span>
        </div>

        {/* content grid */}
        <ActiveContext.Provider
          value={{ active, setActive, items: offerings.offerings }}
        >
          <div
            className="relative mx-auto flex w-full max-w-5xl flex-col justify-center gap-4 pb-12 sm:gap-6 sm:pb-16 md:flex-row md:items-start md:pb-24"
            data-reveal-stagger
          >
            {/* left rail: offerings list */}
            <div className="w-full md:w-auto md:flex-shrink-0">
              <OfferingsList />
            </div>

            {/* right card */}
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-2xl p-4 sm:rounded-3xl sm:p-6 md:min-h-[380px] md:flex-1 md:rounded-[28px] md:p-12",
                gradientClass,
              )}
            >
              <RightCopy offerings={offerings.offerings} active={active} />

              <Button
                className="mt-6 w-full border-primary text-primary hover:bg-primary/10 hover:text-primary sm:mt-8 sm:w-auto md:mt-10"
                variant={"outline"}
                size="lg"
                asChild
              >
                <Link href="#contact">Book a Consultation Call</Link>
              </Button>

              <div className="pointer-events-none absolute -top-8 -right-6 size-32 rounded-full border border-primary sm:-top-12 sm:-right-8 sm:size-44 md:-top-15 md:-right-10 md:size-56" />
              <div className="pointer-events-none absolute top-24 right-8 size-3 rounded-full bg-primary sm:top-32 sm:right-12 sm:size-3.5 md:top-39 md:right-15 md:size-4" />
              <div className="pointer-events-none absolute top-28 right-1 size-4 rounded-full bg-primary sm:top-36 sm:right-2 sm:size-5 md:top-45 md:size-6" />
              <div className="pointer-events-none absolute right-6 -bottom-6 size-24 rounded-full bg-primary/40 sm:right-8 sm:-bottom-8 sm:size-28 md:right-10 md:-bottom-10 md:size-36" />
              <div className="pointer-events-none absolute -right-4 -bottom-10 size-32 rounded-full border border-white/5 bg-white/5 sm:-right-6 sm:-bottom-12 sm:size-36 md:-right-8 md:-bottom-16 md:size-44" />
            </div>
          </div>
        </ActiveContext.Provider>
      </div>

      {/* Tagline */}
      <p className="mt-6 px-4 text-center text-lg font-semibold italic text-primary sm:mt-8 sm:text-xl md:mt-10 md:text-2xl lg:mt-16 lg:text-3xl">
        {offerings.tagline}
      </p>
    </Container>
  );
}

// Local components to keep file tidy and state-contained
function OfferingsList() {
  const { active, setActive, items } = useActive();

  return (
    <ul className="flex w-full flex-col gap-2 sm:gap-3 md:w-auto md:items-end md:gap-4">
      {items.map((item, idx) => {
        const isActive = idx === active;

        return (
          <li key={item.name}>
            <Button
              variant={isActive ? "default" : "secondary"}
              className="w-full text-sm sm:text-base md:w-auto"
              size="lg"
              onClick={() => setActive(idx)}
              aria-pressed={isActive}
            >
              {item.name}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

const ActiveContext = React.createContext<{
  active: number;
  setActive: (i: number) => void;
  items: { name: string; description?: string }[];
} | null>(null);

function useActive() {
  const ctx = useContext(ActiveContext);
  if (!ctx) throw new Error("useActive must be used within provider");
  return ctx;
}

function RightCopy({
  offerings,
  active,
}: {
  offerings: { name: string; description?: string }[];
  active: number;
}) {
  const current = offerings[active];

  return (
    <h3 className="text-xl font-semibold leading-tight sm:text-2xl md:text-3xl lg:text-5xl">
      <span>{current.description || current.name}</span>
    </h3>
  );
}
