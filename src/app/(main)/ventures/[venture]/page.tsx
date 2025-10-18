import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import Bottom1 from "@public/companies/bg/bottom1.svg?flex";
import Bottom2 from "@public/companies/bg/bottom2.svg?flex";
import Top1 from "@public/companies/bg/top1.svg?flex";
import Top2 from "@public/companies/bg/top2.svg?flex";
import TopBg from "@public/companies/topBg.svg?flex";
import { notFound } from "next/navigation";
import { isVentureKey, VentureKey, ventureKeys } from "../content";
import VenturesHero from "./Hero";
import HighlightsSection from "./HighlightsSection";

export default async function VentureDetailPage({
  params,
}: {
  params: Promise<{ venture: string }>;
}) {
  const { venture } = await params;
  if (!isVentureKey(venture)) {
    return notFound();
  }

  let theme = "theme-orange";
  if (venture === "sec2pay" || venture === "indikendra") {
    theme = "theme-blue";
  } else if (venture === "indispeed") {
    theme = "theme-yellow";
  }

  return (
    <main className={`relative ${theme} overflow-hidden bg-white text-black`}>
      {/* Global background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <TopBg className="absolute top-0 left-1/2 w-[130%] max-w-none -translate-x-1/2" />
      </div>

      {/* Per-venture top overlay (more than half the card height) */}
      {(() => {
        const topVariantMap: Record<VentureKey, "top1" | "top2"> = {
          indipe: "top1",
          sec2pay: "top2",
          indiconnect: "top1",
          indikendra: "top2",
          indinxt: "top1",
          indispeed: "top1",
        };
        const variant = topVariantMap[venture];
        const Overlay = variant === "top1" ? Top1 : Top2;
        return (
          <div className="pointer-events-none absolute top-0 left-1/2 w-screen -translate-x-1/2">
            <Overlay className="h-auto w-full" />
          </div>
        );
      })()}
      <VenturesHero defaultActive={venture} />
      <HighlightsSection venture={venture} />

      {/* Per-venture bottom overlay with ContactForm and Footer */}
      <div className="relative w-full">
        {(() => {
          const bottomVariantMap: Record<VentureKey, "bottom1" | "bottom2"> = {
            indipe: "bottom1",
            sec2pay: "bottom2",
            indiconnect: "bottom1",
            indikendra: "bottom2",
            indinxt: "bottom1",
            indispeed: "bottom1",
          };
          const variant = bottomVariantMap[venture];
          const Overlay = variant === "bottom1" ? Bottom1 : Bottom2;
          return (
            <div className="pointer-events-none absolute w-[100vw]">
              <Overlay className="h-full w-full" />
            </div>
          );
        })()}

        {/* Content with higher z-index */}
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return ventureKeys.map((venture) => ({ venture }));
}
