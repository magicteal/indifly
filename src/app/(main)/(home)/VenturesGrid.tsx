import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function VenturesGrid(): JSX.Element {
  return (
    // Outer section: full width, custom stretched background
    <section
      className="relative -mt-32 pt-40 pb-20 w-full overflow-hidden"
      style={{
        // Stretches the SVG to fully fill the section area (may distort)
        backgroundImage: "url('/VenturesGridBG.svg')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Centered content wrapper (controls max width & horizontal padding) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        {/* Grid container: 4 columns on md+ so we can place tiles precisely */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 items-stretch">
          {/* Big left card (spans 2 cols x 2 rows on md+) */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg">
            {/* Soft card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7ECE6] to-[#EFDCD4]" />

            {/* Card content (on top of background) */}
            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div className="max-w-md">
                <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
                  OUR
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold mt-1 text-[#0B2B4A]">
                  Ventures
                </h2>
                <p className="text-[#4B5563] mt-4 text-base leading-relaxed">
                  Empowering individuals with secure, user-friendly financial
                  tools.
                </p>
              </div>

              <div>
                {/* Link used directly (no nested anchor) */}
                <Link
                  href="/ventures"
                  className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full text-sm transition-colors"
                >
                  Know More <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Top-right: inCORE (orange) */}
          <div className="bg-[#F56522] p-6 rounded-2xl flex items-center justify-center shadow-lg">
            <Image
              src="/inCore.svg"
              alt="inCORE"
              width={160}
              height={48}
              className="object-contain"
              priority
            />
          </div>

          {/* Top-right: INDsights (blue) */}
          <div className="bg-gradient-to-br from-[#1677FF] to-[#4AA3FF] p-6 rounded-2xl flex items-center justify-center shadow-lg">
            <h3 className="text-white text-3xl font-bold tracking-tight">
              INDsights
            </h3>
          </div>

          {/* Bottom-left of right column: Become our Partner */}
          <div className="md:col-span-1 bg-gradient-to-r from-white/70 to-sky-100/70 backdrop-blur-md p-6 rounded-2xl flex items-center justify-center text-center shadow-lg">
            <Link
              href="/partner"
              className="text-sky-700 text-2xl lg:text-3xl font-extrabold leading-snug hover:text-sky-500 transition-colors"
            >
              Become our <span className="text-blue-400">Partner →</span>
            </Link>
          </div>

          {/* Bottom-right: Get in Touch */}
          <div className="md:col-span-1 bg-gradient-to-br from-[#FBF6F4] to-[#F6EFE9] p-6 rounded-2xl flex items-center justify-center text-center shadow-lg">
            <Link
              href="/contact"
              className="text-black text-2xl lg:text-3xl font-extrabold leading-snug hover:text-[#F56522] transition-colors"
            >
              Get in <span className="text-[#F56522]">Touch →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- PERSON ILLUSTRATION (OUTSIDE THE LEFT CARD) ---------- */}
      {/* This is positioned absolutely relative to the outer section so it overlaps between the left card and the right tiles.
          It is hidden on small screens (sm) for layout stability; adjust the breakpoints or sizes as needed. */}
      <div className="pointer-events-none hidden md:block">
        <div
          // tuning the position: adjust left/right/top/bottom, width to match design precisely
          className="absolute z-20"
          style={{
            // place the person so he overlaps between the left card and the partner tile
            left: "40%", // tweak this percentage until the illustration exactly sits where you want
            top: "26%", // tweak vertical position
            transform: "translate(-10%, 0%)",
            width: "360px",
          }}
        >
          <Image
            src="/VenturesGridMan.svg"
            alt="Person"
            width={300}
            height={560}
            className="object-contain select-none"
            priority
          />
        </div>
      </div>
    </section>
  );
}
