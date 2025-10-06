"use client";
import { defineStepper } from "@/components/stepper";
import { cn } from "@/lib/utils";
import * as React from "react";

// Define the steps (years)
const years = ["2017", "2018", "2020", "2022", "2023"] as const;

const timeline = defineStepper(...years.map((y) => ({ id: y })));

const yearDetails: Record<string, { title: string; description: string }> = {
  "2017": {
    title: "Launched Sec2Pay",
    description:
      "Launched Sec2Pay B2B Financial Inclusion platform with 35+ services.",
  },
  "2018": {
    title: "Growth & Reach",
    description:
      "Expanded agent network and forged key distribution partnerships.",
  },
  "2020": {
    title: "Resilience",
    description:
      "Supported communities with essential financial & digital services.",
  },
  "2022": {
    title: "inCORE Vision",
    description:
      "Framed unified inCORE service stack to accelerate venture building.",
  },
  "2023": {
    title: "Platform Unification",
    description: "Aligned technology & brand architecture across offerings.",
  },
};

export function JourneyTimeline() {
  const { Stepper } = timeline;
  const { Navigation } = Stepper;

  // Active step local state (default first year)
  const [active, setActive] = React.useState<(typeof years)[number]>(years[0]);

  // Provide a click handler to jump to a year
  const handleSelect = (id: string) => {
    setActive(id as (typeof years)[number]);
  };

  const activeIndex = years.indexOf(active);

  return (
    <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-[160px_1fr]">
      {/* Years column */}
      <Stepper.Provider
        variant="vertical"
        initialStep={active}
        className="hidden md:block"
      >
        <Navigation aria-label="Company journey timeline" className="relative">
          <ul className="flex flex-col gap-3">
            {years.map((y, idx) => {
              const state = idx === activeIndex ? "active" : "inactive";
              return (
                <li key={y} className="relative flex justify-center">
                  <button
                    onClick={() => handleSelect(y)}
                    className={cn(
                      "min-w-[92px] rounded-full border px-5 py-2 text-center text-sm font-medium transition",
                      state === "active" && "bg-[#0B44FF] text-white shadow",
                      state === "inactive" &&
                        "bg-[#0B44FF]/10 text-[#0B44FF] hover:bg-[#0B44FF]/20",
                    )}
                  >
                    {y}
                  </button>
                  {idx < years.length - 1 && (
                    <span
                      aria-hidden
                      className="pointer-events-none absolute top-full left-1/2 h-3 w-px -translate-x-1/2 bg-[#0B44FF]"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </Navigation>
      </Stepper.Provider>

      {/* Active panel */}
      <div className="rounded-xl bg-[#F5F7FB] p-6 shadow-sm ring-1 ring-[#0B44FF]/10">
        <div className="text-xs font-semibold tracking-wide text-[#0B44FF] uppercase">
          {active}
        </div>
        <h3 className="mt-2 text-lg font-semibold text-[#0B2B4A]">
          {yearDetails[active].title}
        </h3>
        <p className="mt-3 max-w-prose text-sm text-neutral-700">
          {yearDetails[active].description}
        </p>

        {/* Mobile year selector */}
        <div className="mt-6 flex flex-wrap gap-2 md:hidden">
          {years.map((y) => {
            const state = y === active ? "active" : "inactive";
            return (
              <button
                key={y}
                onClick={() => handleSelect(y)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium",
                  state === "active" && "bg-[#0B44FF] text-white",
                  state === "inactive" &&
                    "bg-[#0B44FF]/10 text-[#0B44FF] hover:bg-[#0B44FF]/20",
                )}
              >
                {y}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
