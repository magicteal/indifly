"use client";


import { useState } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";


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
    <Section className="py-20">
      <SectionHeader label="What Compromises" title="InCORE" />

  <div className="mt-12 flex flex-col md:flex-row gap-8 border border-white/10 rounded-[5rem] shadow-inner p-6 md:p-10 bg-white/5 backdrop-blur-xl backdrop-saturate-150 ring-1 ring-white/10 relative overflow-hidden">
        {/* Left Pills */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              aria-pressed={active === t.key}
              className={cn(
                "rounded-full px-4 py-2 text-white font-medium text-left cursor-pointer transition-all focus:outline-none hover:opacity-95",
                active === t.key ? "ring-2 ring-white/30" : "ring-0",
                pillGradientClass[t.key]
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Right Content */}
        <Card className="relative w-full bg-[#0e1a34]/60 border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <CardContent className="p-8 relative z-10">
            <h2
              className={cn(
                "mt-1 font-bold leading-tight text-2xl md:text-3xl lg:text-4xl",
                "text-transparent bg-clip-text",
                "[-webkit-background-clip:text]",
                "[-webkit-text-fill-color:transparent]",
                active === "cxo"
                  ? "bg-[linear-gradient(90deg,#E04A00_30%,#FF915C_100%)]"
                  : active === "pods"
                  ? "bg-[linear-gradient(90deg,#006FFF_0%,#0B44FF_100%)]"
                  : "bg-[linear-gradient(90deg,#04E762_0%,#00B59A_100%)]"
              )}
            >
              {content.title}
            </h2>


            <ul className="mt-6 space-y-2 text-gray-300 text-sm md:text-base">
              {content.bullets.map((b) => (
                <li key={b}>• {b}</li>
              ))}
            </ul>

            <Button
              variant="outline"
              className="mt-6 rounded-full border-white text-white hover:bg-white/10 shadow-[0_0_16px_rgba(255,255,255,0.2)] hover:shadow-[0_0_24px_rgba(255,255,255,0.35)] transition-shadow"
            >
              Explore More →
            </Button>
          </CardContent>

          {/* Gradient Bubbles Decoration */}
          <div className="pointer-events-none select-none">
            {/* Big bottom-right circle */}
            <div
              className={cn(
                "absolute bottom-3 right-3 w-24 h-24 rounded-full opacity-90",
                bubbleGradientClass[active]
              )}
            />
            {/* Second smaller above-left of big */}
            <div
              className={cn(
                "absolute bottom-[7.5rem] right-16 w-14 h-14 rounded-full opacity-90",
                bubbleGradientClass[active]
              )}
            />
            {/* Third smaller just above first */}
            <div
              className={cn(
                "absolute bottom-[11rem] right-6 w-10 h-10 rounded-full opacity-90",
                bubbleGradientClass[active]
              )}
            />
            {/* Fourth smallest just above third */}
            <div
              className={cn(
                "absolute bottom-[13.5rem] right-8 w-6 h-6 rounded-full opacity-90",
                bubbleGradientClass[active]
              )}
            />
          </div>
        </Card>
      </div>
    </Section>
  );
}
