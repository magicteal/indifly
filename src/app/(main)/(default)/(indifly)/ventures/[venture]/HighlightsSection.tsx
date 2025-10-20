"use client";
import { Container } from "@/components/container";
import Middle1 from "@public/companies/bg/middle1.svg?flex";
import Middle2 from "@public/companies/bg/middle2.svg?flex";
import { getVentureContent, VentureKey } from "./content";

type Card = { title: string; subtitle: string; points: string[] };

const ventureMiddleVariant: Record<VentureKey, "middle1" | "middle2"> = {
  indipe: "middle1",
  sec2pay: "middle2",
  indiconnect: "middle1",
  indikendra: "middle2",
  indinxt: "middle1",
  indispeed: "middle1",
};

export default function HighlightsSection({
  venture,
}: {
  venture: VentureKey;
}) {
  const variant = ventureMiddleVariant[venture];
  const Overlay = variant === "middle1" ? Middle1 : Middle2;

  const content = getVentureContent(venture);
  const cards: Card[] = content.cards ?? [];

  return (
    <section className="relative py-16 sm:py-20 md:py-24">
      {/* Background overlay - full bleed */}
      <div className="pointer-events-none absolute w-[100vw]">
        <Overlay className="h-full w-full" />
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className="group relative flex h-full min-h-[260px] flex-col rounded-lg border border-white/20 bg-white/60 p-6 shadow-sm backdrop-blur-md transition hover:shadow-md sm:min-h-[280px] md:min-h-[300px]"
            >
              {/* Small bold gradient title */}
              <h3 className={`text-sm font-semibold text-primary`}>
                {card.title}
              </h3>
              {/* Medium subtitle in #3C3C3C */}
              <p className="mt-2 text-base font-medium text-[#3C3C3C]">
                {card.subtitle}
              </p>
              {/* Points with vertical gradient line */}
              <ul className="mt-4 space-y-3">
                {card.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 h-5 w-1 rounded-full bg-primary"
                    />
                    <span className="text-sm text-[#3C3C3C]">{pt}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
