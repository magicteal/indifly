// components/WealthSection.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";

export default function WealthSection() {
  return (
    <Section className="py-20">
      <SectionHeader label="What Compromises" title="InCORE" />

      <div className="relative mt-12 flex flex-col gap-8 overflow-hidden rounded-[5rem] border border-white/10 bg-gradient-to-br from-[#001631]/60 to-[#0e1a34]/60 p-6 shadow-inner md:flex-row md:p-10">
        {/* Left Pills */}
        <div className="flex min-w-[200px] flex-col gap-4">
          <div className="rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ff990b] px-4 py-2 font-medium text-white">
            CxO leadership
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#007bff] to-[#3a86ff] px-4 py-2 font-medium text-white">
            Functional pods
          </div>
          <div className="rounded-full bg-gradient-to-r from-[#00c851] to-[#04e762] px-4 py-2 font-medium text-white">
            Execution
          </div>
        </div>

        {/* Right Content */}
        <Card className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0e1a34]/60 shadow-xl">
          <CardContent className="relative z-10 p-8">
            <h2 className="bg-gradient-to-r from-[#ff6a00] to-[#ff990b] bg-clip-text text-2xl font-bold text-transparent md:text-3xl lg:text-4xl">
              Seamless wealth creation <br /> and digital payments for all
            </h2>

            <ul className="mt-6 space-y-2 text-sm text-gray-300 md:text-base">
              <li>• User-friendly mutual fund investments</li>
              <li>• Secure UPI transactions</li>
              <li>• Advanced portfolio tracking tools</li>
              <li>• Personalized financial guidance</li>
              <li>• Partner program for mutual fund distribution</li>
            </ul>

            <Button
              variant="outline"
              className="mt-6 rounded-full border-white/30 text-white hover:bg-white/10"
            >
              Explore More →
            </Button>
          </CardContent>

          {/* Orange Bubbles Decoration */}
          <div className="absolute right-4 bottom-4 flex gap-3">
            <div className="h-16 w-16 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ff990b]" />
            <div className="h-10 w-10 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ff990b]" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ff990b]" />
          </div>
        </Card>
      </div>
    </Section>
  );
}
