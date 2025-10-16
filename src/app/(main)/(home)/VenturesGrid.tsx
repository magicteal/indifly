import BlueHex from "@public/home/bluehex.svg";
import VenturesGridMan from "@public/VenturesGridMan.svg?flex";
import Image from "next/image";
import Link from "next/link";

type VenturesGridProps = {
  embedded?: boolean;
};

export default function VenturesGrid({ embedded = false }: VenturesGridProps) {
  const sectionClasses = embedded
    ? "relative w-full overflow-hidden pt-16 pb-20"
    : "relative -mt-32 w-full overflow-hidden pt-40 pb-20";

  const backgroundStyle = embedded
    ? undefined
    : {
        background:
          "linear-gradient(180deg, rgba(7, 23, 44, 0) 0%, #07172C 37.5%)",
      } as const;

  return (
    // Ventures grid cards, optionally embedded within hero
    <section className={sectionClasses} style={backgroundStyle}>
      {/* Centered content wrapper (controls max width & horizontal padding) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Grid container: 4 columns on md+ so we can place tiles precisely */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-[356px_minmax(330px,1fr)] md:grid-rows-[165px_158px] md:gap-x-6 md:gap-y-4">
          {/* Big left card (spans entire left column) */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F7ECE6] to-[#EFDCD4] shadow-lg md:row-span-2 md:h-[339px] md:w-[356px] md:overflow-visible">
            {/* Card content (on top of background) */}
            <div className="flex h-full flex-col justify-between p-8">
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

              <div>
                {/* Link used directly (no nested anchor) */}
                <Link
                  href="#our-portfolio"
                  className="mt-6 inline-block rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Know More <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
            <VenturesGridMan className="pointer-events-none absolute -right-5 -bottom-2 z-20 w-40 sm:w-48 md:-right-20 md:-bottom-2.5 md:w-56 lg:w-60 xl:-right-30 xl:-bottom-3 xl:w-72" />
          </div>
          {/* Right grid: 2 rows, 2 columns */}
          <div className="flex h-full flex-col gap-6 md:col-start-2 md:row-span-2 md:gap-4">
            {/* Top-right row */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-6">
              <div className="flex h-full flex-1 items-center justify-center rounded-2xl bg-[#F56522] p-6 shadow-lg md:h-[165px]">
                <Link href="/incore">
                  <Image
                    src="/inCore.svg"
                    alt="inCORE"
                    width={160}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>
              <div className="flex h-full flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1677FF] to-[#4AA3FF] p-6 shadow-lg md:h-[165px]">
                <h3 className="text-3xl font-bold tracking-tight text-white">
                  <Link href="/blog">INDsights</Link>
                </h3>
              </div>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col gap-6 md:flex-row md:gap-6">
              <div className="flex h-full flex-[0.65] items-center justify-center rounded-2xl bg-gradient-to-r from-white/70 to-sky-100/70 p-6 text-center shadow-lg backdrop-blur-md md:h-[158px]">
                <Link
                  href="/aboutUs#company-collage"
                  className="text-2xl leading-snug font-extrabold text-sky-700 transition-colors hover:text-sky-500 lg:text-3xl"
                >
                  Life at <p className="text-blue-400">IndiFly →</p>
                </Link>
              </div>
              <div className="flex h-full flex-[0.35] items-center justify-center rounded-2xl bg-gradient-to-br from-[#FBF6F4] to-[#F6EFE9] p-6 text-center shadow-lg md:h-[158px]">
                <Link
                  href="#contact"
                  className="text-2xl leading-snug font-extrabold text-black transition-colors hover:text-[#F56522] lg:text-3xl"
                >
                  Get in <span className="text-[#F56522]">Touch →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative blue hexagons */}
      <div className="pointer-events-none absolute inset-0 -z-0 select-none">
        {/* Left hex */}
        <div
          className={
            embedded
              ? "absolute top-[58%] left-[-70px] hidden -translate-y-1/2 -rotate-12 opacity-30 md:block"
              : "absolute top-[46%] left-[-70px] hidden -translate-y-1/2 -rotate-12 opacity-30 md:block"
          }
        >
          <BlueHex width={260} height={300} />
        </div>
        {/* Right hex */}
        <div
          className={
            embedded
              ? "absolute -right-30 bottom-0 hidden translate-y-1/3 rotate-12 opacity-30 md:block"
              : "absolute -right-30 -bottom-65 hidden -translate-y-1/2 scale-125 rotate-12 opacity-30 md:block"
          }
        >
          <BlueHex width={300} height={340} />
        </div>
      </div>
    </section>
  );
}
