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
    <Container className="reveal-section mt-24">
      <div
        className="relative rounded-4xl p-8"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute -top-40 left-75 hidden scale-30 rotate-12 md:block" />

        {/* heading */}
        <div className="reveal-title relative mb-15 pt-14 text-center text-2xl font-semibold italic md:mb-24 md:text-3xl">
          <span className="mr-12">Core</span>
          <span className="relative text-primary">
            Offerings
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>

        {/* content grid */}
        <ActiveContext.Provider
          value={{ active, setActive, items: offerings.offerings }}
        >
          <div
            className="relative mx-auto flex w-full max-w-5xl flex-col justify-center gap-6 pb-24 md:flex-row md:items-start"
            data-reveal-stagger
          >
            {/* left rail: offerings list */}
            <div className="w-full md:w-auto md:flex-shrink-0">
              <OfferingsList />
            </div>

            {/* right card */}
            <div
              className={cn(
                "relative w-full overflow-hidden rounded-[28px] p-6 sm:p-8 md:min-h-[380px] md:flex-1 md:p-12",
                gradientClass,
              )}
            >
              <RightCopy offerings={offerings.offerings} active={active} />

              <Button
                className="mt-10 border-primary text-primary hover:bg-primary/10 hover:text-primary"
                variant={"outline"}
                size="lg"
                asChild
              >
                <Link href="#contact">Book a Consultation Call</Link>
              </Button>

              <div className="pointer-events-none absolute -top-15 -right-10 size-56 rounded-full border border-primary" />
              <div className="pointer-events-none absolute top-39 right-15 size-4 rounded-full bg-primary" />
              <div className="pointer-events-none absolute top-45 right-2 size-6 rounded-full bg-primary" />
              <div className="pointer-events-none absolute right-10 -bottom-10 size-36 rounded-full bg-primary/40" />
              <div className="pointer-events-none absolute -right-8 -bottom-16 size-44 rounded-full border border-white/5 bg-white/5" />
            </div>
          </div>
        </ActiveContext.Provider>
      </div>

      {/* Tagline */}
      <p className="mt-10 text-center text-2xl font-semibold text-primary italic md:mt-16 md:text-3xl">
        {offerings.tagline}
      </p>
    </Container>
  );
}

// Local components to keep file tidy and state-contained
function OfferingsList() {
  const { active, setActive, items } = useActive();

  return (
    <ul className="flex w-full flex-col gap-4 md:w-auto md:items-end">
      {items.map((item, idx) => {
        const isActive = idx === active;

        return (
          <li key={item.name}>
            <Button
              variant={isActive ? "default" : "secondary"}
              className="w-full md:w-auto"
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
    <h3 className="text-3xl leading-tight font-semibold md:text-5xl">
      <span>{current.description || current.name}</span>
    </h3>
  );
}
