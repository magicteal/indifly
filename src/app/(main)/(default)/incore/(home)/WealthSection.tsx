"use client";

import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function WealthSection() {
  const [active, setActive] = useState<"cxo" | "pods" | "execution">("cxo");

  const pillGradientClass: Record<typeof active, string> = {
    cxo: "bg-[linear-gradient(90deg,#E04A00_30%,#FF915C_100%)]",
    pods: "bg-[linear-gradient(90deg,#006FFF_0%,#0B44FF_100%)]",
    execution: "bg-[linear-gradient(90deg,#04E762_0%,#00B59A_100%)]",
  };

  const bubbleGradientClass: Record<typeof active, string> = {
    cxo: "bg-[linear-gradient(0deg,#E04A00_0%,#FF915C_100%)]",
    pods: "bg-[linear-gradient(0deg,#006FFF_0%,#0B44FF_100%)]",
    execution: "bg-[linear-gradient(0deg,#04E762_0%,#00B59A_100%)]",
  };

  const tabs: { key: typeof active; label: string }[] = [
    { key: "cxo", label: "CxO leadership" },
    { key: "pods", label: "Functional pods" },
    { key: "execution", label: "Execution" },
  ];

  const contentByTab: Record<
    typeof active,
    { title: string; bullets: string[] }
  > = {
    cxo: {
      title: "Embedded CxO leadership for scale",
      bullets: [
        "Strategic planning and capital readiness",
        "Organization design, hiring and governance",
        "Go-to-market, partnerships and revenue ops",
        "Metrics, dashboards and investor reporting",
      ],
    },
    pods: {
      title: "Specialist pods to accelerate outcomes",
      bullets: [
        "Product, design and research",
        "Growth, brand and performance marketing",
        "Data, analytics and experimentation",
        "Engineering enablement and DevEx",
      ],
    },
    execution: {
      title: "Relentless execution from plan to impact",
      bullets: [
        "Roadmap to shipped releases",
        "Program management and delivery",
        "Quality, reliability and SRE practices",
        "Ecosystem integrations and compliance",
      ],
    },
  };

  const content = contentByTab[active];
  return (
    <Section className="reveal-section py-20">
      <div className="reveal-title">
        <SectionHeader label="What Comprises" title="InCORE" />
      </div>

      <div className="relative mt-12 flex flex-col gap-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner ring-1 ring-white/10 backdrop-blur-xl backdrop-saturate-150 sm:rounded-3xl sm:p-6 md:flex-row md:gap-8 md:rounded-[5rem] md:p-10">
        {/* Left Pills */}
        <div
          className="flex w-full flex-col gap-3 sm:gap-4 md:w-auto md:min-w-[200px]"
          data-reveal-stagger
        >
          {tabs.map((t, idx) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              aria-pressed={active === t.key}
              className={cn(
                "cursor-pointer rounded-full px-4 py-2 text-left text-sm font-medium text-white transition-all hover:opacity-95 focus:outline-none md:text-base",
                active === t.key ? "ring-2 ring-white/30" : "ring-0",
                pillGradientClass[t.key],
                idx % 2 === 0 ? "reveal-left" : "reveal-right",
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <Card className="reveal-right relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0e1a34]/60 shadow-xl">
          <CardContent className="relative z-10 p-5 sm:p-6 md:p-8">
            <h2
              className={cn(
                "mt-1 text-2xl leading-tight font-bold md:text-3xl lg:text-4xl",
                "bg-clip-text text-transparent",
                "[-webkit-background-clip:text]",
                "[-webkit-text-fill-color:transparent]",
                active === "cxo"
                  ? "bg-[linear-gradient(90deg,#E04A00_30%,#FF915C_100%)]"
                  : active === "pods"
                    ? "bg-[linear-gradient(90deg,#006FFF_0%,#0B44FF_100%)]"
                    : "bg-[linear-gradient(90deg,#04E762_0%,#00B59A_100%)]",
                "reveal-title",
              )}
            >
              {content.title}
            </h2>

            <ul
              className="mt-6 space-y-2 text-sm text-gray-300 md:text-base"
              data-reveal-stagger
            >
              {content.bullets.map((b, idx) => (
                <li
                  key={b}
                  className={idx % 2 === 0 ? "reveal-left" : "reveal-right"}
                >
                  • {b}
                </li>
              ))}
            </ul>

            {/* <Button
              variant="outline"
              className="mt-6 rounded-full border-2 border-white px-6 py-3 text-base text-white shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-shadow hover:bg-white/10 hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] md:px-7 md:py-5 md:text-lg"
            >
              Explore More →
            </Button> */}
          </CardContent>
          <div className="reveal-image pointer-events-none hidden select-none md:block">
            {/* Big bottom-right circle */}
            <div
              className={cn(
                "absolute -right-1 -bottom-4 h-24 w-24 rounded-full opacity-100",
                bubbleGradientClass[active],
              )}
            />
            {/* Second smaller above-left of big */}
            <div
              className={cn(
                "absolute right-16 bottom-[4rem] h-14 w-14 rounded-full opacity-90",
                bubbleGradientClass[active],
              )}
            />
            {/* Third smaller just above first */}
            <div
              className={cn(
                "absolute right-6 bottom-[7rem] h-10 w-10 rounded-full opacity-90",
                bubbleGradientClass[active],
              )}
            />
            {/* Fourth smallest just above third */}
            <div
              className={cn(
                "absolute right-14 bottom-[11rem] h-6 w-6 rounded-full opacity-90",
                bubbleGradientClass[active],
              )}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
}
