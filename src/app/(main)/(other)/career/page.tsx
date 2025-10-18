import Container from "@/components/container";
import Top1 from "@public/companies/bg/top1.svg?flex";
import TopBg from "@public/companies/topBg.svg?flex";
import { ZohoRecruitEmbed } from "./ZohoRecruitEmbed";

export default function Career() {
  return (
    <main className="relative overflow-hidden bg-white text-black">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <TopBg className="absolute top-0 left-1/2 w-[130%] max-w-none -translate-x-1/2" />
      </div>

      <div className="pointer-events-none absolute top-0 left-1/2 w-screen -translate-x-1/2">
        <Top1 className="h-auto w-full" />
      </div>

      <section className="relative z-10 py-24 sm:py-28">
        <Container className="max-w-6xl text-center">
          <p className="text-sm font-semibold tracking-wide text-[#E04A00] uppercase">
            Find the career of your dreams
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-[#353636] sm:text-4xl">
            We&apos;re more than just a workplace.
            <span className="mt-2 block font-extrabold text-[#D15A31] sm:mt-0 sm:inline">
              We&apos;re a family.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#3C3C3C] sm:text-lg">
            We know that finding a meaningful and rewarding job can be a long
            journey. Our goal is to make that process as easy as possible for
            you, and to create a work environment that&apos;s satisfying—one
            where you&apos;ll look forward to coming to every day. Start your
            journey with us by browsing available jobs.
          </p>
        </Container>
      </section>

      <section className="relative z-10 pb-24">
        <Container className="max-w-7xl space-y-6 text-center">
          <ZohoRecruitEmbed brandColor="#F26926" />
        </Container>
      </section>
    </main>
  );
}
