import React from "react";
import { Section } from "@/components/ui/section";
// SVGs as React components via SVGR
import Hexagon from "@public/home/hexagon.svg";
import Circle from "@public/home/circle.svg";
import Silhoutte from "@public/home/silhoutte.svg";
import TitleBg from "@public/home/titilebg.svg";

export default function ImpactOnBharat() {
  const stats = [
    { value: "7+", label: "Companies" },
    { value: "3L+", label: "Partners" },
    { value: "1.26Cr+", label: "Customers" },
  ];

  return (
    <Section
      wrapperClassName="relative overflow-hidden"
      className="py-24"
      // exact background per spec
      style={{
        background: "linear-gradient(95.65deg, #E04A00 29.81%, #FF915C 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none select-none">
        <Hexagon className="absolute -top-8 left-4 w-[180px] md:w-[240px] opacity-30 animate-pulse" />
        <Circle className="absolute top-20 right-16 w-6 h-6 opacity-30 animate-bounce" />
        <Circle className="absolute bottom-24 right-40 w-6 h-6 opacity-20 animate-bounce" />
      </div>

      {/* Title Section */}
      <div className="relative z-10 mb-18 text-center">
        <div className="relative inline-block isolate px-6">
          {/* Brush stroke background */}
          <TitleBg
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
          <h2 className="relative z-10 text-3xl md:text-4xl font-extrabold text-[#F56522]">
            Impact on <span className="italic">Bharat</span>
          </h2>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="relative mb-10 z-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative rounded-[24px] border-2 border-solid border-red-800 bg-[#FFFFFF4D] hover:bg-[#FFFFFF66] p-10 text-center transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            style={{
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              // borderImageSource:
              //   "linear-gradient(297.05deg, rgba(255, 255, 255, 0.8) 14.79%, rgba(255, 183, 148, 0.8) 88.65%)",
              // borderImageSlice: 1,
              // borderStyle: "solid",
              // borderWidth: 2,
            }}
          >
            <div className="space-y-4">
              <h3 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-sm">
                {stat.value}
              </h3>
              <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom cityscape silhouette */}
      <Silhoutte className="pointer-events-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10 " />
    </Section>
  );
}
