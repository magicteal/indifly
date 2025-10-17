"use client";

import Container from "@/components/container";
import type { ServiceTheme } from "@/lib/serviceContext";
import InStackApproach from "@public/inCore/approach/instackApproach.svg?flex";
import InSureApproach from "@public/inCore/approach/insureApproach.svg?flex";
import InSurgeApproach from "@public/inCore/approach/insurgeApproach.svg?flex";
import InVolveApproach from "@public/inCore/approach/involveApproach.svg?flex";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";
import { useEffect, useState } from "react";

const approachImages = {
  instack: InStackApproach,
  insure: InSureApproach,
  involve: InVolveApproach,
  insurge: InSurgeApproach,
};

interface ApproachSectionProps {
  theme: ServiceTheme;
  approach: {
    description: string[];
    steps: { title: string; description: string }[];
  };
  service: string;
}

export default function ApproachSection({
  theme,
  approach,
  service,
}: ApproachSectionProps) {
  const serviceKey = service as keyof typeof approachImages;
  const positions =
    (stepPositions as Record<string, string[]>)[serviceKey] ||
    stepPositions._default;
  // Resolve the SVG component for this service once
  const ApproachImage = approachImages[serviceKey];

  // Only mount ONE svg at a time (desktop OR mobile) to avoid duplicate inline
  // <defs>/<mask>/<gradient> ids colliding in the DOM and wiping fills.
  const [isSmUp, setIsSmUp] = useState<boolean | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 640px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      // Some browsers fire event, others need initial read
      // Normalize by reading .matches from either
      setIsSmUp("matches" in e ? e.matches : (e as MediaQueryList).matches);
    };
    // Set initial state
    handler(mql);
    // Subscribe to changes
    // addEventListener is modern; fallback to addListener for older engines
    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handler as (ev: Event) => void);
      return () =>
        mql.removeEventListener("change", handler as (ev: Event) => void);
    } else {
      // Legacy Safari support
      const legacy = mql as unknown as {
        addListener: (fn: (e: MediaQueryListEvent) => void) => void;
        removeListener: (fn: (e: MediaQueryListEvent) => void) => void;
      };
      legacy.addListener(handler as (e: MediaQueryListEvent) => void);
      return () =>
        legacy.removeListener(handler as (e: MediaQueryListEvent) => void);
    }
  }, []);

  return (
  <Container className="reveal-section">
      <div
        className="relative mt-12 flex flex-col items-center rounded-4xl px-4 sm:px-8 lg:px-12"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute top-40 right-7 scale-30 rotate-12" />

        {/* heading */}
  <div className="relative mb-8 pt-14 text-2xl font-semibold italic md:text-3xl reveal-title">
          <span className="mr-12">Our</span>
          <span className={`relative ${theme.text}`}>
            Approach
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>

        {/* dynamic description paragraphs */}
  <div className="mx-auto max-w-4xl px-6 text-center" data-reveal-stagger>
          {approach.description.map((p, i) => (
            <p key={i} className="mt-0 text-base text-white/90">
              {p}
            </p>
          ))}
        </div>

        {/* Desktop / tablet version: keep absolute positioning so arrows in SVG point correctly */}
  <div className="relative mx-auto mt-28 mb-32 hidden w-full max-w-[500px] sm:block reveal-image">
          {isSmUp && (
            <ApproachImage
              className="mx-auto max-w-full"
              aria-label={`${service} approach diagram`}
            />
          )}
          {approach.steps.map((step, index) => {
            const pos = positions[index] || stepPositions._default[index];
            return (
              <div
                key={step.title}
                className={pos}
                aria-label={`${index + 1}. ${step.title}`}
              >
                <div
                  className={`text-lg font-medium ${theme.text} md:text-2xl`}
                >
                  {step.title}
                </div>
                <div className="max-w-60 text-sm md:text-base">
                  {step.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile fallback: stacked list below a smaller diagram (arrows less critical at this size) */}
  <div className="mt-20 w-full sm:hidden reveal-section">
          {isSmUp === false && (
            <ApproachImage
              className="mx-auto h-auto w-full max-w-xs"
              aria-hidden="true"
            />
          )}
          <ol
            className="mx-auto my-10 max-w-md space-y-8 text-left"
            aria-label="Process steps"
            data-reveal-stagger
          >
            {approach.steps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-sm font-semibold ${theme.text}`}
                >
                  {index + 1}
                </div>
                <div>
                  <div className="text-base font-semibold tracking-wide">
                    {step.title}
                  </div>
                  <p className="mt-1 text-sm text-white/80">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Container>
  );
}

// Each service holds an array of 3 className strings corresponding to the 3 steps.
const stepPositions: Record<string, string[]> = {
  // Defaults for all services (will be used if service not explicitly overridden)
  _default: [
    "absolute -top-10 -left-23 text-right",
    "absolute -top-10 -right-23 text-left",
    "absolute -bottom-20 left-1/2 -translate-x-1/2 text-center",
  ],
  // Per-service customizations
  insurge: [
    "absolute -top-14 -left-20 text-right",
    "absolute -top-14 -right-24 text-left",
    "absolute -bottom-13 left-1/2 -translate-x-1/2 text-center",
  ],
  instack: [
    "absolute -top-22 -left-20 text-right",
    "absolute -top-22 -right-18 text-left",
    "absolute -bottom-21 left-1/2  -translate-x-1/2 text-center",
  ],
  involve: [
    "absolute -top-14 -left-18 text-right",
    "absolute -top-14 -right-22 text-left",
    "absolute -bottom-13 left-1/2 -translate-x-1/2 text-center",
  ],
  insure: [
    "absolute -top-22 -left-21 text-right",
    "absolute -top-22 -right-21 text-left",
    "absolute -bottom-21 left-1/2 -translate-x-1/2 text-center",
  ],
};
