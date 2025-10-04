import { Container } from "@/components/ui/container";
import SectionHeader from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../(main)/(home)/ContactForm";
import CaseStudiesSection from "./component/CaseStudiesSection";
import ClientsMarqueeSection from "./component/ClientsMarqueeSection";
import DecorativeBannerSection from "./component/DecorativeBannerSection";
import IncoreINDsightsSection from "./component/IncoreINDsightsSection";
import ProcessJourneySection from "./component/ProcessJourneySection";
import Testimonials from "./component/Testimonials";
import WealthSection from "./component/WealthSection";
import TopBanner from "@/components/TopBanner";

export default function InCorePage() {
  return (
    <>
     {/* Fixed TopBanner on all viewports */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <TopBanner variant="incore" />
      </div>
      <div className="md:hidden fixed top-16 left-0 right-0 z-50">
        <TopBanner variant="incore" />
      </div>
      <main className="min-h-[80vh] flex-col items-center justify-center overflow-x-clip bg-[#001631] py-16 sm:py-20 md:py-28 lg:py-36">

        <Container size="2xl" className="mt-20 md:mt-24">
          <div className="relative text-center">
            {/* Layered blur color blobs behind hero */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative h-[80vw] max-h-[700px] w-[80vw] max-w-[700px] sm:h-[70vw] sm:w-[70vw]">
                {/* 00DFDF at right bottom corner */}
                <div className="absolute right-0 bottom-0 h-[38%] w-[38%] rounded-full bg-[#00DFDF] blur-[60px] sm:blur-[90px]"></div>

                {/* 0A7CFF at right corner (top-right) */}
                <div className="absolute top-0 right-0 h-[35%] w-[35%] rounded-full bg-[#0A7CFF] blur-[60px] sm:blur-[90px]"></div>

                {/* 7733FF at top center */}
                <div className="absolute top-0 left-1/2 h-[40%] w-[40%] -translate-x-1/2 rounded-full bg-[#7733FF] blur-[60px] sm:blur-[90px]"></div>

                {/* 7733FF at bottom center */}
                <div className="absolute bottom-0 left-1/2 h-[35%] w-[35%] -translate-x-1/2 rounded-full bg-[#7733FF] blur-[60px] sm:blur-[90px]"></div>

                {/* FF469D at left top corner */}
                <div className="absolute top-0 left-0 h-[32%] w-[32%] rounded-full bg-[#FF469D] blur-[60px] sm:blur-[90px]"></div>

                {/* FF7847 at left (center-left) */}
                <div className="absolute top-1/2 left-0 h-[36%] w-[36%] -translate-y-1/2 rounded-full bg-[#FF7847] blur-[60px] sm:blur-[90px]"></div>
              </div>
            </div>

            {/* Foreground hero content */}
            <div className="relative z-10">
              <h1
                className={cn(
                  "font-sans text-2xl font-semibold text-white sm:text-3xl md:text-5xl",
                )}
              >
                Integrated expertise for
                <span className="font-bold"> startup success</span>
              </h1>

              <div className="mt-6 flex justify-center sm:mt-8">
                <Image
                  src="/incorehero2.png"
                  alt="inCORE hero"
                  width={900}
                  height={500}
                  className="h-auto w-full max-w-xl sm:max-w-2xl"
                  priority
                />
              </div>

              <Link href="/incore/services" className="inline-block">
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
          <div className="mx-auto mt-12 max-w-7xl space-y-6 text-base text-white/90 md:text-lg">
            <p>
              <span className="font-bold">The startup ecosystem&apos;s</span>{" "}
              need for integrated expertise has never been greater. In
              today&apos;s fast-paced business environment, founders need more
              than just funding—{" "}
              <span className="font-medium">
                they need comprehensive support.
              </span>
            </p>
            <p className="text-[#FEA173]">
              We build with the founders as co-creators, not as service vendors
            </p>
            <p>
              Our approach is collaborative, integrated, and focused on
              long-term success. We don&apos;t just provide services;{" "}
              <span className="font-bold">
                we become a part of your journey.
              </span>
            </p>
          </div>
        </Container>

        {/* Large blurred gradient frame from Process to Insights */}
        <section className="relative w-full">
          {/* Background layer with feathered mask */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
            style={{
              WebkitMaskImage:
                "radial-gradient(120% 100% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)",
              maskImage:
                "radial-gradient(120% 100% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)",
            }}
          >
            {/* Top center rectangular – 091E38 */}
            <div className="absolute top-0 left-1/2 h-[18%] w-[70%] max-w-[1100px] -translate-x-1/2 rounded-[96px] bg-[#091E38] opacity-40 blur-[160px] sm:blur-[200px]" />

            {/* Top corner – 18A0FB (top-right) */}
            <div className="absolute -top-[6%] -right-[6%] h-[35%] w-[35%] max-w-[560px] rounded-full bg-[#18A0FB] opacity-45 blur-[120px] sm:blur-[160px]" />

            {/* Center rectangular – 458BEA */}
            <div className="absolute top-1/2 left-1/2 h-[22%] w-[60%] max-w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-[96px] bg-[#458BEA] opacity-40 blur-[170px] sm:blur-[210px]" />

            {/* Left middle edge – E04A00 */}
            <div className="absolute top-1/2 -left-[8%] h-[28%] w-[22%] max-w-[360px] -translate-y-1/2 rounded-[64px] bg-[#E04A00] opacity-40 blur-[120px] sm:blur-[160px]" />

            {/* Right middle edge – FFC700 */}
            <div className="absolute top-1/2 -right-[8%] h-[28%] w-[22%] max-w-[360px] -translate-y-1/2 rounded-[64px] bg-[#FFC700] opacity-45 blur-[120px] sm:blur-[160px]" />

            {/* Bottom left – 00C5DF */}
            <div className="absolute -bottom-[10%] -left-[10%] h-[45%] w-[45%] max-w-[720px] rounded-full bg-[#00C5DF] opacity-55 blur-[120px] sm:blur-[160px]" />
          </div>

          {/* Foreground content */}
          <div className="relative z-10">
            <WealthSection />
            <DecorativeBannerSection />
            <ProcessJourneySection />
<Container id="case-studies">
            <SectionHeader title="Case Studies" />
            <CaseStudiesSection />
</Container>
            <IncoreINDsightsSection />
          </div>
        </section>

        {/* Large blurred gradient frame from Clients Marquee to Contact section */}
        <section className="relative w-full overflow-x-clip">
          {/* Background blob layer */}
          <div
            className="pointer-events-none absolute inset-0 z-0"
            aria-hidden="true"
          >
            {/* Top center rectangular – 091E38 */}
            <div className="absolute top-0 left-1/2 h-[18%] w-[70%] max-w-[1100px] -translate-x-1/2 rounded-[48px] bg-[#091E38] opacity-40 blur-[120px] sm:blur-[160px]"></div>

            {/* Top corner – 18A0FB (top-right) */}
            <div className="absolute -top-[6%] -right-[6%] h-[35%] w-[35%] max-w-[560px] rounded-full bg-[#18A0FB] opacity-45 blur-[120px] sm:blur-[160px]"></div>

            {/* Center rectangular – 458BEA */}
            <div className="absolute top-1/2 left-1/2 h-[22%] w-[60%] max-w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-[48px] bg-[#458BEA] opacity-40 blur-[130px] sm:blur-[170px]"></div>

            {/* Left middle edge – E04A00 */}
            <div className="absolute top-1/2 -left-[8%] h-[28%] w-[22%] max-w-[360px] -translate-y-1/2 rounded-[64px] bg-[#E04A00] opacity-40 blur-[120px] sm:blur-[160px]"></div>

            {/* Right middle edge – FFC700 */}
            <div className="absolute top-1/2 -right-[8%] h-[28%] w-[22%] max-w-[360px] -translate-y-1/2 rounded-[64px] bg-[#FFC700] opacity-45 blur-[120px] sm:blur-[160px]"></div>

            {/* Bottom left – 00C5DF (extended deeper to reach toward footer) */}
            <div className="absolute -bottom-[16%] -left-[12%] h-[52%] w-[52%] max-w-[820px] rounded-full bg-[#00C5DF] opacity-55 blur-[140px] sm:blur-[180px]"></div>
          </div>

          {/* Foreground content */}

          <ClientsMarqueeSection />

          <SectionHeader title="Testimonials" className="relative z-10" />
          <Testimonials />
        </section>
      </main>
      <ContactForm
        variant="contact"
        title="Contact Us"
        description="We are committed to processing the information in order to contact you and talk about your project."
      />
    </>
  );
}
