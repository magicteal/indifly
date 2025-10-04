"use client";

import { useServiceTheme } from "@/app/incore/services/[service]/hooks/useServiceTheme";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Cube from "@public/inCore/cube.svg";
import CircledLine from "@public/inCore/text-circled-line.svg";
import { ArrowRight } from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";

const offerings = [
  {
    label: "Brand Strategy & Toolkit",
    lines: ["Logos,", "design systems,", "messaging", "frameworks"],
  },
  {
    label: "Performance Marketing",
    lines: ["Funnels,", "ad creatives,", "CRO & A/B", "experiments"],
  },
  {
    label: "Social Media Management",
    lines: ["Content,", "publishing,", "community", "growth"],
  },
  {
    label: "Email, WhatsApp, & SMS Marketing",
    lines: ["Flows,", "drip journeys,", "broadcasts", "automation"],
  },
  {
    label: "SEO & Website Development",
    lines: ["Tech SEO,", "content hubs,", "fast", "websites"],
  },
  {
    label: "Event Marketing",
    lines: ["Booths,", "collateral,", "lead gen", "ops"],
  },
  {
    label: "Pitch & Product Decks",
    lines: ["Narratives,", "visual systems,", "investor", "readiness"],
  },
] as const;

export default function CoreOfferings() {
  const { service } = useParams<{ service: string }>();
  const theme = useServiceTheme();
  const [active, setActive] = React.useState(0);

  return (
    <Container>
      <div
        className="relative rounded-4xl"
        style={{
          backgroundImage: `url('/inCore/cardGradient/${service}CardGradient.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* decorative cube */}
        <Cube className="absolute -top-40 left-75 scale-30 rotate-12" />

        {/* heading */}
        <div className="relative mb-15 pt-14 text-center text-2xl font-semibold italic md:mb-24 md:text-3xl">
          <span className="mr-12">Core</span>
          <span className={`relative ${theme.text}`}>
            Offerings
            <CircledLine className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 scale-70" />
          </span>
        </div>

        {/* content grid */}
        <ActiveContext.Provider value={{ active, setActive }}>
          <div className="relative flex flex-col justify-center gap-6 pb-24 md:flex-row">
            {/* left rail: offerings list */}
            <OfferingsList />

            {/* right card */}
            <div
              className="relative w-[60%] overflow-hidden rounded-[28px] p-8 sm:p-10 md:p-12"
              style={{
                background:
                  "linear-gradient(65.77deg, #2D231D 1.29%, rgba(21, 13, 9, 0) 98.98%)",
              }}
            >
              <RightCopy />

              <Button className="mt-10" variant={theme.buttonVariant} size="lg">
                Book a Consultation Call
                <ArrowRight />
              </Button>

              <div
                className={`pointer-events-none absolute -top-15 -right-10 size-56 rounded-full border ${theme.border}`}
              />
              <div className="pointer-events-none absolute top-39 right-15 size-4 rounded-full bg-gradient-to-r from-[rgba(255,153,11,0.3)] to-[rgba(175,108,76,0.3)]" />
              <div
                className={`pointer-events-none absolute top-45 right-2 size-6 rounded-full ${theme.bg}`}
              />
              <div
                className={`pointer-events-none absolute right-10 -bottom-10 size-36 rounded-full bg-gradient-to-b ${theme.gradientFrom}/40 to-black/0`}
              />
              <div className="pointer-events-none absolute -right-8 -bottom-16 size-44 rounded-full border border-white/5 bg-white/5" />
            </div>
          </div>
        </ActiveContext.Provider>
      </div>
    </Container>
  );
}

// Local components to keep file tidy and state-contained
function OfferingsList() {
  const theme = useServiceTheme();
  const { active, setActive } = useActive();

  return (
    <ul className="flex flex-col items-end gap-4">
      {offerings.map((item, idx) => {
        const isActive = idx === active;
        const variant = isActive
          ? theme.buttonVariant
          : (theme.buttonSecondaryVariant as
              | "insurgeSecondary"
              | "instackSecondary"
              | "involveSecondary"
              | "insureSecondary");

        return (
          <li key={item.label}>
            <Button
              variant={variant}
              className={!isActive ? "font-light" : ""}
              size="lg"
              onClick={() => setActive(idx)}
              aria-pressed={isActive}
            >
              {item.label}
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
} | null>(null);

function useActive() {
  const ctx = React.useContext(ActiveContext);
  if (!ctx) throw new Error("useActive must be used within provider");
  return ctx;
}

function RightCopy() {
  const { active } = useActive();
  const lines = offerings[active].lines;

  return (
    <h3 className="text-3xl leading-tight font-semibold md:text-5xl">
      {lines.map((l, i) => (
        <React.Fragment key={i}>
          <span>{l}</span>
          <br />
        </React.Fragment>
      ))}
    </h3>
  );
}
