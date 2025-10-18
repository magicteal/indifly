import Top1 from "@public/companies/bg/top1.svg?flex";
import Top2 from "@public/companies/bg/top2.svg?flex";
import TopBg from "@public/companies/topBg.svg?flex";
import { notFound } from "next/navigation";
import { isVentureKey, VentureKey, ventureKeys } from "./content";
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
    </main>
  );
}

export function generateStaticParams() {
  return ventureKeys.map((venture) => ({ venture }));
}
