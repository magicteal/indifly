"use client";
import { defineStepper } from "@/components/stepper";
import { cn } from "@/lib/utils";
import * as React from "react";

// Define the steps (years)
const years = ["2017", "2018", "2020", "2022", "2023"] as const;

const timeline = defineStepper(...years.map((y) => ({ id: y })));

// Unified content model: each year has a title and array of sections.
// Sections may include optional heading, text paragraph(s), and/or bullet points.
type NestedPointGroup = {
  heading?: string;
  text?: string;
  points?: string[]; // one additional nesting level (strings only inside deepest)
};

type Section = {
  heading?: string;
  text?: string;
  // A section can have an array of points which are either plain strings or nested point groups.
  points?: (string | NestedPointGroup)[];
};

type YearContent = {
  title: string;
  sections: Section[];
};

const yearDetails: Record<(typeof years)[number], YearContent> = {
  "2017": {
    title: "Launched Sec2Pay as a B2B, white-label fintech platform.",
    sections: [
      {
        heading:
          "Built partner-branded rails for essential financial services:",
        points: [
          "Domestic Money Transfer",
          "Bill Payments",
          "Cash-in / Cash-out",
          "UPI-ready merchant collections",
        ],
      },
      {
        text: "Established a compliance-first operating cadence and early bank/fintech integrations.",
      },
      {
        text: "Ran controlled partner pilots across Bharat to refine product, support, and distribution.",
      },
    ],
  },
  "2018": {
    title:
      "Standardized the platform for enterprise partners and strengthened reliability and partner readiness.",
    sections: [
      { text: "Introduced modular, API-first capabilities:" },
      {
        points: [
          "Payouts & collections workflows",
          "Paper-light onboarding & KYC journeys",
          "Reconciliation, settlement & reporting dashboards",
        ],
      },
      {
        text: "Expanded distribution through partner-run outlets and regional entrepreneur networks.",
      },
      {
        text: "Formalized documentation, SLAs, and support frameworks for white-label deployments.",
      },
    ],
  },
  "2020": {
    title:
      "Expanded into co‑operative segment with comprehensive financial solutions.",
    sections: [
      {
        text: "Provided robust, secure payment platform with diverse services:",
      },
      {
        points: [
          "Payout",
          "UPI collection",
          "Credit Score Check",
          "Digital Account Opening",
          "Kiosk Machine",
        ],
      },
      { text: "Served co‑op banks, Co‑Op Credit Societies, and Pathsanthas" },
      { text: "Onboarded 2000+ Credit Societies across India" },
    ],
  },
  "2022": {
    title:
      "Consolidated payments and commerce rails in preparation for multi-brand expansion.",
    sections: [
      {
        heading: "Advanced core capabilities for partners:",
        points: [
          "UPI orchestration & payouts",
          "Merchant onboarding and settlement flows",
          "Risk controls, monitoring, and audit trails",
          "Reporting & reconciliation at scale",
        ],
      },
      {
        heading:
          "Laid the groundwork for ONDC enablement and upcoming brand launches:",
        points: [
          "Zion Commerce foundation for marketplace enablement",
          {
            heading: "Brand tracks:",
            points: ["Zionmart", "Indicconnect", "Venko"],
          },
        ],
      },
      {
        text: "Strengthened governance and integration readiness to enable strategic acquisitions.",
      },
    ],
  },
  "2023": {
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
      { points: ["Created umbrella brand: Indifly Ventures."] },
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
