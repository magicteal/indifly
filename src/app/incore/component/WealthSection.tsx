// components/WealthSection.tsx
"use client";


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";


export default function WealthSection() {
  return (
    <Section className="py-20">
      <SectionHeader label="What Compromises" title="InCORE" />

  <div className="mt-12 flex flex-col md:flex-row gap-8 border border-white/10 rounded-[5rem] shadow-inner p-6 md:p-10 bg-gradient-to-br from-[#001631]/60 to-[#0e1a34]/60 relative overflow-hidden">
        {/* Left Pills */}
        <div className="flex flex-col gap-4 min-w-[200px]">
          <div className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-[#ff6a00] to-[#ff990b]">
            CxO leadership
          </div>
          <div className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-[#007bff] to-[#3a86ff]">
            Functional pods
          </div>
          <div className="rounded-full px-4 py-2 text-white font-medium bg-gradient-to-r from-[#00c851] to-[#04e762]">
            Execution
          </div>
        </div>

        {/* Right Content */}
        <Card className="relative w-full bg-[#0e1a34]/60 border border-white/10 rounded-2xl shadow-xl overflow-hidden">
          <CardContent className="p-8 relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6a00] to-[#ff990b]">
              Seamless wealth creation <br /> and digital payments for all
            </h2>

            <ul className="mt-6 space-y-2 text-gray-300 text-sm md:text-base">
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
          <div className="absolute bottom-4 right-4 flex gap-3">
            <div className="w-16 h-16 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ff990b]" />
            <div className="w-10 h-10 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ff990b]" />
            <div className="w-6 h-6 rounded-full bg-gradient-to-t from-[#ff6a00] to-[#ff990b]" />
          </div>
        </Card>
      </div>
    </Section>
  );
}
