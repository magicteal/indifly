"use client";
import { defineStepper } from "@/components/stepper";
import { cn } from "@/lib/utils";
import * as React from "react";

// Define the steps (years)
const years = ["2017", "2018", "2020", "2022", "2023"] as const;

const timeline = defineStepper(...years.map((y) => ({ id: y })));

// Content model supports varied structures per year.
type YearContent =
  | { type: "simple"; title: string; body?: string }
  | {
      type: "bullets";
      title: string;
      preface?: string;
      points: string[];
      footerNotes?: string[];
    }
  | {
      type: "composite";
      title: string;
      sections: { heading?: string; text?: string; points?: string[] }[];
    };

const yearDetails: Record<(typeof years)[number], YearContent> = {
  "2017": {
    type: "simple",
    title: "Launched Sec2Pay",
  },
  "2018": {
    type: "simple",
    title: "Expanded Distribution",
  },
  "2020": {
    type: "bullets",
    title:
      "Expanded into co‑operative segment with comprehensive financial solutions.",
    preface: "Provided robust, secure payment platform with diverse services:",
    points: [
      "Payout",
      "UPI collection",
      "Credit Score Check",
      "Digital Account Opening",
      "Kiosk Machine",
    ],
    footerNotes: [
      "Served co‑op banks, Co‑Op Credit Societies, and Pathsanthas",
      "Onboarded 2000+ Credit Societies across India",
    ],
  },
  "2022": {
    type: "simple",
    title: "Funding Milestone",
  },
  "2023": {
    type: "composite",
    title: "Strategic acquisitions and brand expansion.",
    sections: [
      {
        points: [
          "Acquired Chintamoney Fintech (UPI TPAP) and Finjoy Technologies (1L+ partner affiliate marketing powerhouse)",
          "Entered ONDC space with Zion Commerce, onboarding 3k+ merchants to Zionmart.",
        ],
      },
      {
        heading: "Established brands:",
        points: ["Zionmart", "Indicconnect", "Venko"],
      },
      {
        points: ["Created umbrella brand: Indifly Ventures."],
      },
    ],
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
  );
}

function TimelineContent({ content }: { content: YearContent }) {
  return (
    <div>
      <h3 className="mt-2 text-lg font-semibold text-[#0B2B4A]">
        {content.title}
      </h3>
      {content.type === "simple" && content.body && (
        <p className="mt-3 max-w-prose text-sm text-neutral-700">
          {content.body}
        </p>
      )}
      {content.type === "bullets" && (
        <div className="mt-3 space-y-4">
          {content.preface && (
            <p className="text-sm text-neutral-700">{content.preface}</p>
          )}
          <ul className="space-y-2 text-sm text-neutral-800">
            {content.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block size-2 rounded-full bg-[#0B44FF]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          {content.footerNotes && (
            <div className="space-y-2 pt-2 text-xs text-neutral-600">
              {content.footerNotes.map((n) => (
                <p key={n}>{n}</p>
              ))}
            </div>
          )}
        </div>
      )}
      {content.type === "composite" && (
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
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-1.5 inline-block size-2 rounded-full bg-[#0B44FF]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
