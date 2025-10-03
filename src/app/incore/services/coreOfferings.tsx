"use client";

import type React from "react";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const pills = [
  "Brand Strategy & Toolkit",
  "Performance Marketing",
  "Social Media Management",
  "Email, WhatsApp, & SMS Marketing",
  "SEO & Website Development",
  "Event Marketing",
  "Pitch & Product Decks",
];

export default function CoreOfferings() {
  const [active] = useState(0);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[36px] p-6 text-center sm:p-8 md:p-10",
        // background: vignette + subtle amber glow to the right
        "bg-[radial-gradient(1000px_600px_at_90%_30%,rgba(255,199,0,0.18),transparent_60%),linear-gradient(180deg,#000000,rgba(20,20,21,0.9))]",
      )}
    >
      {/* Top heading */}
      <div className="mb-8 flex items-center gap-4 md:mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-[var(--ink)] md:text-4xl">
          Core
        </h2>

        <div className="relative">
          <span className="text-3xl font-semibold text-[var(--accent)] italic md:text-4xl">
            Offerings
          </span>
          {/* Scribble oval */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            width="260"
            height="56"
            viewBox="0 0 260 56"
            fill="none"
          >
            <ellipse
              cx="130"
              cy="28"
              rx="118"
              ry="22"
              stroke="url(#stroke)"
              strokeWidth="2.5"
            />
            <defs>
              <linearGradient id="stroke" x1="0" y1="0" x2="260" y2="0">
                <stop stopColor="#ffc700" />
                <stop offset="1" stopColor="#e04a00" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Optional tiny reference indicator (hidden for a11y/QA). Remove if not needed. */}
        <span className="sr-only">
          Reference image is available at /images/my-indify.png
        </span>
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[380px,1fr] md:gap-8">
        {/* Left pill menu */}
        <ul className="flex flex-col gap-4">
          {pills.map((label, i) => (
            <li key={label}>
              <button
                type="button"
                className={cn(
                  "w-full rounded-2xl px-6 py-4 text-left text-[15px] font-medium transition-colors md:text-[16px]",
                  i === active
                    ? // active pill with brand→accent gradient and light text
                      "bg-[linear-gradient(100deg,var(--brand),var(--accent))] text-[var(--surface)]"
                    : // inactive pill
                      "bg-[color:color-mix(in_oklab,var(--surface),black_10%)]/90 text-[color:color-mix(in_oklab,var(--ink),transparent_35%)] hover:text-[var(--ink)]",
                )}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right content card */}
        <div className="relative rounded-3xl bg-[var(--surface)] p-6 sm:p-8 md:p-10">
          {/* Inner subtle texture/spotlights */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-70 mix-blend-screen [background:radial-gradient(600px_380px_at_20%_30%,rgba(255,255,255,0.06),transparent_60%),radial-gradient(520px_320px_at_80%_10%,rgba(255,199,0,0.06),transparent_70%)]" />

          <div className="relative z-10 max-w-xl">
            <h3 className="text-3xl leading-tight font-extrabold tracking-tight text-pretty md:text-5xl">
              <span className="block">Logos,</span>
              <span className="block">design systems,</span>
              <span className="block">messaging</span>
              <span className="block">frameworks</span>
            </h3>

            <div className="mt-8">
              <CtaButton>Book a Consultation Call</CtaButton>
            </div>
          </div>

          {/* Decorative circles on the right */}
          <DecorCircles />
        </div>
      </div>
    </div>
  );
}

function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-6 py-3",
        "border-2 border-[var(--brand)]/60 text-[var(--ink)]",
        "transition-colors hover:border-[var(--accent)]/70",
      )}
    >
      <span className="text-[15px] md:text-base">{children}</span>
      <ArrowRight className="size-4 translate-x-0 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}

function DecorCircles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* large bottom-right filled circle */}
      <div className="absolute right-10 bottom-0 size-40 rounded-full bg-[radial-gradient(60%_60%_at_30%_20%,rgba(0,0,0,0.15),transparent_70%),linear-gradient(180deg,var(--brand),var(--accent))] opacity-70 md:right-16 md:size-56" />

      {/* clipped corner orb */}
      <div className="absolute right-0 bottom-0 h-28 w-24 rounded-tl-[28px] bg-[linear-gradient(180deg,var(--brand),var(--accent))] opacity-70 md:h-32 md:w-28" />

      {/* stroked arcs */}
      <div className="absolute top-[-6%] right-8 h-48 w-48 rounded-full border-2 border-[var(--brand)]/50 md:h-60 md:w-60" />
      <div className="absolute top-[20%] right-2 size-6 rounded-full bg-[var(--brand)]/70" />
      <div className="absolute top-[32%] right-0 size-8 rounded-full border-2 border-[var(--brand)]/50" />
      <div className="absolute right-[26%] bottom-[24%] size-4 rounded-full border-2 border-[var(--brand)]/60" />
    </div>
  );
}
