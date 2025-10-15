import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import type { ServiceTheme } from "@/lib/serviceContext";
import { VentureKey, getVentureTheme } from "@/lib/ventureContext";
import Bottom1 from "@public/companies/bg/bottom1.svg?flex";
import Bottom2 from "@public/companies/bg/bottom2.svg?flex";
import Top1 from "@public/companies/bg/top1.svg?flex";
import Top2 from "@public/companies/bg/top2.svg?flex";
import TopBg from "@public/companies/topBg.svg?flex";
import { notFound } from "next/navigation";
import VenturesHero from "../components/Hero";
import HighlightsSection from "../components/HighlightsSection";

export default async function VentureDetailPage({
  params,
}: {
  params: Promise<{ venture: VentureKey }>;
}) {
  const { venture } = await params;
  const validKeys: VentureKey[] = [
    "indipe",
    "sec2pay",
    "indiconnect",
    "indikendra",
    "indinxt",
    "indispeed",
  ];
  if (!validKeys.includes(venture)) {
    return notFound();
  }

  // Get venture theme for ContactForm/Footer theming
  const ventureTheme = getVentureTheme(venture);

  return (
    <main className="relative overflow-hidden bg-white text-black">
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
      <HighlightsSection venture={venture} theme={ventureTheme} />

      {/* Per-venture bottom overlay with ContactForm and Footer */}
      <div className="relative w-full border-4 border-red-500">
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
        <ContactForm theme={ventureTheme as unknown as ServiceTheme} />
        <Footer theme={ventureTheme as unknown as ServiceTheme} isVenture />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [
    { venture: "indipe" },
    { venture: "sec2pay" },
    { venture: "indiconnect" },
    { venture: "indikendra" },
    { venture: "indinxt" },
    { venture: "indispeed" },
  ];
}
