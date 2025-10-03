import Image from "next/image";
import type React from "react";

const ITEMS: string[] = [
  "Limited capital to sustain operations, hire talent, or scale.",
  "Difficulty attracting investors due to unproven business models.",
  "Limited capital to sustain operations, hire talent, or scale.",
  "Difficulty attracting investors due to unproven business models.",
  "Limited capital to sustain operations, hire talent, or scale.",
];

function NoteIcon({ className = "" }: { className?: string }) {
  // simple outlined sticky-note icon
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="#fd7e1e"
      strokeWidth="1.6"
    >
      <path d="M7 3h8l4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4z" />
      <path d="M15 3v5h5" />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-[#2b2928]/80 px-6 py-5 shadow-[0_1px_0_#ffffff1f_inset,0_0_0_1px_#ac6b2d33] outline outline-[#ac6b2d1f] backdrop-blur-sm">
      {/* subtle top highlight */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-[#ac6b2d1f] ring-inset" />
      <div className="flex items-start gap-4">
        <NoteIcon className="size-6 shrink-0" />
        <p className="text-lg leading-6 text-[#f3f3f3]">{children}</p>
      </div>
    </div>
  );
}

function OvalHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-flex items-center">
      <span className="relative z-10 font-extrabold text-[#fd7e1e] italic">
        {children}
      </span>
      {/* hand-drawn style oval */}
      <svg
        className="absolute -inset-x-3 -inset-y-2"
        viewBox="0 0 300 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <ellipse
          cx="150"
          cy="40"
          rx="145"
          ry="30"
          fill="none"
          stroke="#ac6b2d"
          strokeWidth="3"
          opacity="0.9"
        />
      </svg>
    </span>
  );
}

export default function WhyItMatters() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#141415] text-[#f3f3f3]"
      aria-label="Why it matters section"
    >
      {/* Decorative geometry - top-left circle */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full border border-[#d9d9d9]/20" />
      {/* Decorative wireframe polygon (approx.) */}
      <div className="pointer-events-none absolute top-64 left-16 -rotate-18">
        <div className="h-72 w-72 -rotate-12 rounded-xl border border-[#d9d9d9]/10" />
      </div>
      {/* Small cube near title */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 rotate-12">
        <div className="h-16 w-16 border border-[#d9d9d9]/20" />
      </div>
      {/* Bottom-right concentric circles */}
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full border border-[#d9d9d9]/15" />
      <div className="pointer-events-none absolute -right-6 bottom-24 h-64 w-64 rounded-full border border-[#d9d9d9]/10" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        {/* Heading */}
        <header className="mb-10 md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
            <span className="text-[#ffffff] italic drop-shadow-sm">Why it</span>{" "}
            <OvalHighlight>matters?</OvalHighlight>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: stacked list */}
          <div className="flex flex-col gap-4">
            {ITEMS.map((text, i) => (
              <Pill key={i}>{text}</Pill>
            ))}
          </div>

          {/* Right: overlapping media cards */}
          <div className="relative">
            {/* Glass backdrop card */}
            <div
              className="absolute -top-6 right-10 left-10 h-56 rounded-3xl border border-[#d9d9d9]/15 bg-gradient-to-r from-[#091e38]/20 to-[#4d5c70]/10 backdrop-blur-sm"
              aria-hidden="true"
            />
            {/* Main large image */}
            <div className="relative z-10 w-full overflow-hidden rounded-3xl border border-[#d9d9d9]/15 shadow-2xl">
              <img
                src="/images/my-indify.png"
                alt="Business concept with letters and cash"
                width={1100}
                height={740}
                className="h-[420px] w-full object-cover"
                priority
              />
            </div>

            {/* Top-right small card */}
            <div className="absolute -top-4 -right-2 z-20 w-64 overflow-hidden rounded-2xl border border-[#d9d9d9]/20 shadow-xl md:w-72">
              <img
                src="/analytics-dashboard-cards.jpg"
                alt="Analytics dashboard preview"
                className="h-40 w-full object-cover"
              />
            </div>

            {/* Bottom-right small card */}
            <div className="absolute -right-6 bottom-10 z-20 w-72 overflow-hidden rounded-2xl border border-[#d9d9d9]/20 shadow-xl">
              <img
                src="/startup-sticky-notes-on-desk.jpg"
                alt="Startup sticky notes on desk"
                className="h-36 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* subtle vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(transparent,rgba(0,0,0,0.4))]" />
    </section>
  );
}
