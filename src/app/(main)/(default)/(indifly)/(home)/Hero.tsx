"use client";

import { Button } from "@/components/ui/button";
import BlueHex from "@public/home/bluehex.svg";
import VenturesGridMan from "@public/VenturesGridMan.svg?flex";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hero() {
  return (
    <section className="bg-[#07172C]">
      {/* Portrait on mobile with equal bars top/bottom; switches back to 16:9 on md+ */}
      <div className="reveal-image relative aspect-[9/16] w-full overflow-hidden bg-black sm:aspect-[16/9]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 h-full w-full object-contain object-center"
        >
          <source src="/home/heroVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40" aria-hidden></div>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent via-[#07172C]/40 to-[#07172C]"
          aria-hidden
        ></div>
      </div>

      <div className="reveal-section -mt-20 md:-mt-28">
        <VenturesGrid />
      </div>
    </section>
  );
}

function VenturesGrid() {
  const [hovered, setHovered] = useState<
    null | "ventures" | "incore" | "indsights" | "life" | "contact"
  >(null);

  // Flex weights for paired rows (md+). On mobile we keep equal widths and just scale.
  const incoreFlex =
    hovered === "incore"
      ? "md:flex-[1.15]"
      : hovered === "indsights"
        ? "md:flex-[0.85]"
        : "md:flex-[1]";
  const indsightsFlex =
    hovered === "indsights"
      ? "md:flex-[1.15]"
      : hovered === "incore"
        ? "md:flex-[0.85]"
        : "md:flex-[1]";
  // Bottom row has asymmetric baseline (0.65 / 0.35). On hover, grow hovered and shrink the neighbor.
  const lifeFlex =
    hovered === "life"
      ? "md:flex-[0.8]" // expand
      : hovered === "contact"
        ? "md:flex-[0.4]" // shrink less when contact hovered
        : "md:flex-[0.65]"; // baseline
  const contactFlex =
    hovered === "contact"
      ? "md:flex-[0.6]" // expand less than before
      : hovered === "life"
        ? "md:flex-[0.2]" // shrink when life hovered
        : "md:flex-[0.35]"; // baseline

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-20">
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* md+: two-column layout; left fixed card, right stacked rows */}
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:gap-6">
          {/* Left: big card */}
          <div
            className="relative origin-bottom-right overflow-hidden rounded-2xl bg-gradient-to-br from-[#F7ECE6] to-[#EFDCD4] shadow-lg transition-transform duration-300 ease-out hover:scale-[1.03] md:h-[339px] md:w-[356px] md:overflow-visible"
            onMouseEnter={() => setHovered("ventures")}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="flex h-full flex-col items-start justify-between p-8">
              <div className="max-w-[80%]">
                <p className="text-sm font-semibold tracking-wide text-blue-700 uppercase">
                  OUR
                </p>
                <h2 className="mt-1 text-4xl font-bold text-[#0B2B4A] lg:text-5xl">
                  Ventures
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4B5563]">
                  Empowering individuals with secure, user-friendly financial
                  tools.
                </p>
              </div>
              <Button
                asChild
                className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-700"
              >
                <Link href="#our-portfolio">
                  Know More <span aria-hidden>→</span>
                </Link>
              </Button>
            </div>
            <VenturesGridMan className="pointer-events-none absolute -right-5 -bottom-2 z-20 w-40 sm:w-48 md:-right-20 md:-bottom-2.5 md:w-56 lg:w-60 xl:-right-30 xl:-bottom-3 xl:w-72" />
          </div>

          {/* Right: two rows */}
          <div className="flex flex-1 flex-col gap-6 md:gap-4">
            {/* Top row: two equal tiles */}
            <div
              className="flex items-stretch gap-6 md:gap-4"
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`flex flex-1 origin-top-right items-center justify-center rounded-2xl bg-[#F56522] p-6 shadow-lg transition-all duration-300 ease-out md:h-[165px] ${incoreFlex} ${
                  hovered === "incore" ? "scale-[1.03]" : ""
                }`}
                onMouseEnter={() => setHovered("incore")}
              >
                <Link href="/incore">
                  <Image
                    src="/inCore.svg"
                    alt="inCORE"
                    width={160}
                    height={48}
                    className="object-contain md:h-[48px] md:w-[160px]"
                    priority
                  />
                </Link>
              </div>
              <div
                className={`flex flex-1 origin-top-right items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677FF] to-[#4AA3FF] p-6 shadow-lg transition-all duration-300 ease-out md:h-[165px] ${indsightsFlex} ${
                  hovered === "indsights" ? "scale-[1.03]" : ""
                }`}
                onMouseEnter={() => setHovered("indsights")}
              >
                <Image
                  src="/home/INDsights.svg"
                  alt="INDsights"
                  width={160}
                  height={48}
                  className="object-contain md:h-[48px] md:w-[160px]"
                  priority
                />
              </div>
            </div>

            {/* Bottom row: asymmetric tiles */}
            <div
              className="flex items-stretch gap-6 md:gap-4"
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`flex h-[100px] origin-bottom-right items-center justify-center rounded-2xl bg-gradient-to-r from-white/70 to-sky-100/70 p-6 text-center shadow-lg backdrop-blur-md transition-all duration-300 ease-out md:h-[158px] ${lifeFlex} ${
                  hovered === "life" ? "scale-[1.03]" : ""
                }`}
                onMouseEnter={() => setHovered("life")}
              >
                <Link
                  href="/aboutUs#company-collage"
                  className="text-start text-lg leading-snug font-extrabold text-sky-700 transition-colors hover:text-sky-500 md:text-6xl lg:text-3xl"
                >
                  <span className="block text-lg md:text-2xl">Life at</span>
                  <span className="block text-lg text-blue-400 md:text-2xl">
                    IndiFly →
                  </span>
                </Link>
              </div>
              <div
                className={`flex h-[100px] origin-bottom-right items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBF6F4] to-[#F6EFE9] p-6 text-center shadow-lg transition-all duration-300 ease-out md:h-[158px] ${contactFlex} ${
                  hovered === "contact" ? "scale-[1.02]" : ""
                }`}
                onMouseEnter={() => setHovered("contact")}
              >
                <Link
                  href="#contact"
                  className="text-start text-lg leading-snug font-extrabold text-black transition-colors hover:text-[#F56522] md:text-6xl lg:text-3xl"
                >
                  <span className="block text-lg md:text-2xl">Get in</span>
                  <span className="block text-lg text-[#F56522] md:text-2xl">
                    Touch →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blue hexagons */}
      <div className="pointer-events-none absolute inset-0 -z-0 select-none">
        <div className="absolute top-[58%] left-[-70px] hidden -translate-y-1/2 -rotate-12 opacity-30 md:block">
          <BlueHex width={260} height={300} />
        </div>
        <div className="absolute -right-30 bottom-0 hidden translate-y-1/3 rotate-12 opacity-30 md:block">
          <BlueHex width={300} height={340} />
        </div>
      </div>
    </section>
  );
}
