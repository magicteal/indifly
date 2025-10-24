import Section from "@/components/section";

import Image from "next/image";
import Link from "next/link";
import InteractiveCursor from "@/components/InteractiveCursor";

export default function DecorativeBannerSection() {
  return (
    <Section
      py="py-16"
      className="reveal-section relative"
      id="services"
      containerProps={{ className: "max-w-6xl" }}
    >
      {/* Mobile: show mobile puzzle image and service summaries */}
      <div className="block md:hidden">
        <div
          className="reveal-right relative w-full overflow-hidden rounded-2xl"
          style={{ aspectRatio: "1251/831" }}
        >
          <Image
            src="/puzzleMobile.svg"
            alt="inCORE services"
            fill
            sizes="100vw"
            className="object-contain"
            priority={false}
          />
        </div>
        <div className="mt-8 space-y-6">
          <div>
            <Link href="/incore/services/instack">
              <h3 className="text-2xl font-extrabold">
                <span className="text-[#01295C]">in</span>
                <span className="ml-1 text-[#8338EC]">STACK</span>
              </h3>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold italic">Product & Technology</span>
              <br />
              Build, scale, and secure your tech with agile product engineering,
              cloud, and compliance support tailored for startups.
            </p>
          </div>
          <div>
            <Link href="/incore/services/insurge">
              <h3 className="text-2xl font-extrabold">
                <span className="text-[#01295C]">in</span>
                <span className="ml-1 text-[#FF990B]">SURGE</span>
              </h3>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold italic">Marketing & Growth</span>
              <br />
              From brand positioning to performance campaigns, fuel your
              visibility and demand to drive sustainable growth.
            </p>
          </div>
          <div>
            <Link href="/incore/services/insure">
              <h3 className="text-2xl font-extrabold">
                <span className="text-[#01295C]">in</span>
                <span className="ml-1 text-[#04E762]">SURE</span>
              </h3>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold italic">People & Culture</span>
              <br />
              HR that goes beyond hiring—helping you attract, nurture, and
              retain talent while shaping resilient company culture.
            </p>
          </div>
          <div>
            <Link href="/incore/services/involve">
              <h3 className="text-2xl font-extrabold">
                <span className="text-[#01295C]">in</span>
                <span className="ml-1 text-[#3A86FF]">VOLVE</span>
              </h3>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              <span className="font-bold italic">Legal & Compliance</span>
              <br />
              Simplify the complex. Robust legal frameworks and compliance
              services to safeguard your venture at every stage.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop/tablet: show interactive puzzle with overlay links */}
      <div className="relative hidden w-full md:block">
        {/* Maintain aspect ratio matching the source (1251x831 ~ 1.505) to reduce CLS */}
        <div
          className="reveal-right relative w-full overflow-hidden md:rounded-[5.5rem]"
          style={{ aspectRatio: "1251/831" }}
        >
          <Image
            src="/inCoreServices.svg"
            alt="Puzzle graphic"
            fill
            sizes="(max-width: 1024px) 90vw, 1024px"
            className="reveal-image object-contain"
            priority={false}
          />

          {/* Clickable quadrants overlay */}
          <Link
            href="/incore/services/insurge"
            aria-label="Open inSurge"
            data-cursor="SURGE"
            data-cursor-prefix="in"
            data-cursor-color="#FF990B"
            className="group absolute top-0 left-1/2 z-10 block h-1/2 w-1/2 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
          >
            <span className="sr-only">Top right – inSurge</span>
          </Link>
          <Link
            href="/incore/services/instack"
            aria-label="Open inStack"
            data-cursor="STACK"
            data-cursor-prefix="in"
            data-cursor-color="#8338EC"
            className="group absolute top-0 left-0 z-10 block h-1/2 w-1/2 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
          >
            <span className="sr-only">Top left – inStack</span>
          </Link>
          <Link
            href="/incore/services/involve"
            aria-label="Open inVolve"
            data-cursor="VOLVE"
            data-cursor-prefix="in"
            data-cursor-color="#3A86FF"
            className="group absolute bottom-0 left-1/2 z-10 block h-1/2 w-1/2 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
          >
            <span className="sr-only">Bottom right – inVolve</span>
          </Link>
          <Link
            href="/incore/services/insure"
            aria-label="Open inSure"
            data-cursor="SURE"
            data-cursor-prefix="in"
            data-cursor-color="#04E762"
            className="group absolute bottom-0 left-0 z-10 block h-1/2 w-1/2 cursor-pointer focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2"
          >
            <span className="sr-only">Bottom left – inSure</span>
          </Link>
        </div>
        {/* Custom interactive cursor that mirrors the pill design on hover */}
        <InteractiveCursor />
      </div>
    </Section>
  );
}
