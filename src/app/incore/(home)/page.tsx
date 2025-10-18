import { SectionGradient } from "@/app/incore/services/[service]/PageGradients";
import { Container } from "@/components/container";
import DecorativeBannerSection from "@/components/DecorativeBannerSection";
import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import SectionHeader from "@/components/section-header";
import { cn } from "@/lib/utils";
import InCoreHero from "@public/inCore/inCoreHero.svg?flex";
import Link from "next/link";
import CaseStudiesSection from "./CaseStudiesSection";
import IncoreINDsightsSection from "./IncoreINDsightsSection";
import ProcessJourneySection from "./ProcessJourneySection";
import WealthSection from "./WealthSection";

export default function InCorePage() {
  return (
    <main className="theme-incore min-h-[80vh] flex-col items-center justify-center overflow-x-clip bg-background pt-16 text-foreground sm:pt-20 md:pt-28 lg:pt-36">
      <Container>
        <div className="reveal-section relative text-center">
          {/* Hero gradient background reusing SectionGradient utility */}
          <SectionGradient
            service="incoreHome"
            variant="homeHero"
            className="top-1/2 -translate-y-1/2"
          />

          {/* Foreground hero content */}
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
        </div>
        {/* Decorative SVG at bottom-left corner */}
        <div
          className="pointer-events-none absolute -bottom-20 left-0 z-[5] hidden select-none sm:block"
          aria-hidden="true"
        >
          <svg
            width="155"
            height="232"
            viewBox="0 0 155 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M130.385 87.5233L31.7236 115.49L-39.8281 42.0928L58.8351 14.1256L130.385 87.5233Z"
              stroke="#133460"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M131.01 88.4227L32.348 116.389L5.23468 217.753L103.898 189.786L131.01 88.4227Z"
              stroke="#133460"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M-10.29 72.2282L48.2158 55.6295L90.6445 99.1912L74.5673 159.352L16.0615 175.95L-26.3672 132.389L-10.29 72.2282Z"
              fill="#041E3F"
            />
            <path
              d="M-39.5336 42.202L59.2994 14.1621L130.973 87.7506L103.814 189.377L4.98133 217.417L-66.6916 143.83L-39.5336 42.202Z"
              stroke="#133460"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M58.9145 14.2083L31.6454 116.172L103.611 190.003L130.881 88.0402L58.9145 14.2083Z"
              stroke="#133460"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M32.5577 116.09L-66.1055 144.057L5.44437 217.453L104.108 189.486L32.5577 116.09Z"
              stroke="#133460"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Small ring SVG at bottom-right corner */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 z-[6] select-none"
          aria-hidden="true"
        >
          <svg
            width="35"
            height="69"
            viewBox="0 0 35 69"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M67 34.6201C67 15.9976 52.2286 0.896729 34.0002 0.896729C15.7718 0.896729 1 15.9921 1 34.6201C1 53.2427 15.7718 68.338 34.0002 68.338C52.2286 68.338 67 53.2427 67 34.6201Z"
              stroke="#D9D9D9"
              strokeOpacity="0.4"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Container>

      <Container className="w-full">
        {/* Supporting paragraphs below hero */}
        <div
          className="reveal-section mx-auto mt-12 max-w-7xl space-y-6 text-center text-base text-white/90 md:text-lg"
          data-reveal-stagger
        >
          <p>
            <span className="font-bold">The startup ecosystem&apos;s</span> need
            for integrated expertise has never been greater. In today&apos;s
            fast-paced business environment, founders need more than just
            funding—{" "}
            <span className="font-medium">
              they need comprehensive support.
            </span>
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

      {/* Large blurred gradient frame from Process to Insights */}
      <section className="reveal-section relative">
        <SectionGradient service="incoreHome" variant="homeMiddle" />

        <div className="relative z-10" data-reveal-stagger>
          <WealthSection />
          <DecorativeBannerSection />
        </div>
      </section>

      <section className="reveal-section relative">
        <SectionGradient service="incoreHome" variant="homeMiddleAlt" />
        <div className="relative z-10" data-reveal-stagger>
          <ProcessJourneySection />
          <Container id="case-studies">
            <SectionHeader title="Case Studies" />
            <CaseStudiesSection />
          </Container>
        </div>
      </section>

      {/* Large blurred gradient frame leading into insights */}
      <section className="reveal-section relative w-full overflow-hidden">
        <SectionGradient service="incoreHome" variant="homeBottom" />

        <div className="relative z-10">
          <IncoreINDsightsSection />
        </div>
        <ContactForm />
        <Footer />
      </section>
    </main>
  );
}
