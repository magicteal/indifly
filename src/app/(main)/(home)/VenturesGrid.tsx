import BlueHex from "@public/home/bluehex.svg";
import Image from "next/image";
import Link from "next/link";

export default function VenturesGrid() {
  return (
    // Outer section: full width, custom stretched background
    <section
      className="relative -mt-32 w-full overflow-hidden pt-40 pb-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(7, 23, 44, 0) 0%, #07172C 37.5%)",
      }}
    >
      {/* Centered content wrapper (controls max width & horizontal padding) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Grid container: 4 columns on md+ so we can place tiles precisely */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-4 md:grid-rows-2">
          {/* Big left card (spans 2 cols x 2 rows on md+) */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg md:col-span-2 md:row-span-2">
            {/* Soft card background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#F7ECE6] to-[#EFDCD4]" />

            {/* Card content (on top of background) */}
            <div className="relative z-10 flex h-full flex-col justify-between p-8">
              <div className="max-w-md">
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

              <div>
                {/* Link used directly (no nested anchor) */}
                <Link
                  href="/ventures"
                  className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Know More <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Top-right: inCORE (orange) */}
          <div className="flex items-center justify-center rounded-2xl bg-[#F56522] p-6 shadow-lg">
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
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677FF] to-[#4AA3FF] p-6 shadow-lg">
            <h3 className="text-3xl font-bold tracking-tight text-white">
              INDsights
            </h3>
          </div>

          {/* Bottom-left of right column: Become our Partner */}
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-r from-white/70 to-sky-100/70 p-6 text-center shadow-lg backdrop-blur-md md:col-span-1">
            <Link
              href="/partner"
              className="text-2xl leading-snug font-extrabold text-sky-700 transition-colors hover:text-sky-500 lg:text-3xl"
            >
              Become our <span className="text-blue-400">Partner →</span>
            </Link>
          </div>

          {/* Bottom-right: Get in Touch */}
          <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBF6F4] to-[#F6EFE9] p-6 text-center shadow-lg md:col-span-1">
            <Link
              href="/contact"
              className="text-2xl leading-snug font-extrabold text-black transition-colors hover:text-[#F56522] lg:text-3xl"
            >
              Get in <span className="text-[#F56522]">Touch →</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative blue hexagons */}
      <div className="pointer-events-none absolute inset-0 -z-0 select-none">
        {/* Left hex */}
        <div className="absolute top-[46%] left-[-70px] hidden -translate-y-1/2 -rotate-12 opacity-30 md:block">
          <BlueHex width={260} height={300} />
        </div>
        {/* Right hex */}
        <div className="absolute -right-30 -bottom-65 hidden -translate-y-1/2 scale-125 rotate-12 opacity-30 md:block">
          <BlueHex width={300} height={340} />
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
