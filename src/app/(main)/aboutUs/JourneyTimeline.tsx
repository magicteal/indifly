"use client";

import { defineStepper } from "@/components/stepper";
import { cn } from "@/lib/utils";
import TitleBrush from "@public/home/titieINDsights.svg";
import * as React from "react";
import journeyData, { YearContent } from "./content/journeyTimelineData";

const { years, details: yearDetails } = journeyData;
const timeline = defineStepper(...years.map((y) => ({ id: y })));

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
    <section className="mt-8">
      {/* Title with brush stroke + headings */}
      <div className="my-10 flex w-full items-center justify-center">
        <div className="relative">
          <TitleBrush className="h-auto w-full" />
          <div className="absolute inset-0 grid place-items-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              ROADMAP
            </h2>
          </div>
        </div>
      </div>

      <p className="mx-auto text-center text-xl font-bold text-[#0B44FF]">
        Our Journey
      </p>
      <p className="mx-auto mt-2 max-w-3xl px-6 text-center text-lg text-neutral-800">
        Empowering communities through innovative solutions since 2017.
      </p>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 px-6 md:grid-cols-[160px_1fr]">
        {/* Years column */}
        <Stepper.Provider
          variant="vertical"
          initialStep={active}
          className="hidden md:block"
        >
          <Navigation
            aria-label="Company journey timeline"
            className="relative"
          >
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
        <div className="self-start rounded-xl bg-[#F5F7FB] p-6 shadow-sm ring-1 ring-[#0B44FF]/10">
          <div className="text-xs font-semibold tracking-wide text-[#0B44FF] uppercase">
            {active}
          </div>
          <TimelineContent content={yearDetails[active]} />

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
    </section>
  );
}

function TimelineContent({ content }: { content: YearContent }) {
  return (
    <div>
      <h3 className="mt-2 text-lg font-semibold text-[#0B2B4A]">
        {content.title}
      </h3>
      <div className="mt-4 space-y-6">
        {content.sections.map((s, i) => (
          <div key={i} className="space-y-3">
            {s.heading && (
              <h4 className="text-sm font-medium tracking-wide text-[#0B2B4A]">
                {s.heading}
              </h4>
            )}
            {s.text && <p className="text-sm text-neutral-700">{s.text}</p>}
            {s.points && (
              <ul className="space-y-2 text-sm text-neutral-800">
                {s.points.map((p, idx) => {
                  if (typeof p === "string") {
                    return (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-1.5 inline-block size-2 rounded-full bg-[#0B44FF]" />
                        <span>{p}</span>
                      </li>
                    );
                  }
                  // Nested group
                  return (
                    <li key={p.heading || idx} className="space-y-2">
                      {p.heading && (
                        <div className="flex items-start gap-2">
                          <span className="mt-1.5 inline-block size-2 rounded-full bg-[#0B44FF]" />
                          <span className="font-medium">{p.heading}</span>
                        </div>
                      )}
                      {p.text && (
                        <div className="pl-4 text-xs text-neutral-700 md:text-sm">
                          {p.text}
                        </div>
                      )}
                      {p.points && (
                        <ul className="ml-6 list-outside list-disc space-y-1 border-l border-[#0B44FF]/20 pl-4 text-xs text-neutral-800 md:text-sm">
                          {p.points.map((sub) => (
                            <li
                              key={sub}
                              className="pl-1 leading-snug marker:text-[#0B44FF]"
                            >
                              {sub}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
