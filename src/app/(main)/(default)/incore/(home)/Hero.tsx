import Container from "@/components/container";
import { cn } from "@/lib/utils";
import InCoreHero from "@public/inCore/inCoreHero.svg?flex";
import Link from "next/link";

export default function Hero() {
  return (
    <Container>
      <div className="relative z-10">
        <h1
          className={cn(
            "font-sans text-2xl font-semibold text-white sm:text-3xl md:text-5xl",
          )}
        >
          Integrated expertise for
          <p className="font-bold"> startup success</p>
        </h1>

        <div className="reveal-left mt-10 flex justify-center sm:mt-14 md:mt-16">
          <InCoreHero
            className="h-auto w-full max-w-xl sm:max-w-2xl"
            role="img"
            aria-label="inCORE hero illustration"
          />
        </div>

        <Link href="#services" className="mt-16 inline-block">
          <span
            className={cn(
              "rounded-full px-5 py-2.5 text-sm font-medium text-white sm:px-6 sm:py-3 sm:text-base",
              "[background:linear-gradient(90deg,#0252D4_0%,#86BBFE_100%)]",
              "transition-opacity hover:opacity-95",
            )}
          >
            Explore Our Services
          </span>
        </Link>
      </div>
      {/* Supporting paragraphs below hero */}
      <div
        className="reveal-section relative z-10 mx-auto mt-12 max-w-7xl space-y-6 text-left text-base md:text-xl"
        data-reveal-stagger
      >
        <p>
          <span className="font-bold">The startup ecosystem&apos;s</span> need
          for integrated expertise has never been greater. In today&apos;s
          fast-paced business environment, founders need more than just funding—{" "}
          <span className="font-medium">they need comprehensive support.</span>
        </p>
        <p className="text-[#FEA173]">
          We build with the founders as co-creators, not as service vendors
        </p>
        <p>
          Our approach is collaborative, integrated, and focused on long-term
          success. We don&apos;t just provide services;{" "}
          <span className="font-bold">we become a part of your journey.</span>
        </p>
      </div>
    </Container>
  );
}
