"use client";
import { Container } from "@/components/container";
import { useMemo, useRef, useEffect } from "react";
import { VentureKey, getAllVentureThemes, getVentureTheme } from "@/lib/ventureContext";
import { getVentureContent } from "@/app/(main)/ventures/content";
import Image from "next/image";
import { ComponentType, SVGProps } from "react";
import { StaticImageData } from "next/image";
import PlayStore from "@public/companies/playStore.svg";
import IndiConnect from "@public/companies/indiConnectHero.svg?flex";
import IndiKendraHero from "@public/companies/indiKendraHero.svg?flex";
import IndiNXTHero from "@public/companies/indiNXTHero.svg?flex";
import IndipeHero from "@public/companies/indipeHero.svg?flex";
import IndiSpeedHero from "@public/companies/indispeedHero.svg?flex";
import Sec2PayHero from "@public/companies/sec2payHero.svg?flex";
// top-left icons
import IndipeIcon from "@public/companies/indipeIcon.svg";
import Sec2PayIcon from "@public/companies/sec2payIcon.svg";
// wordmark titles for specific ventures
import IndiKendraWordmark from "@public/companies/indiKendra.svg?flex";
import IndiNXTWordmark from "@public/companies/indiNXT.svg?flex";
import IndiSpeedWordmark from "@public/companies/indiSpeed.svg?flex";

type SvgOrUrl = ComponentType<SVGProps<SVGSVGElement>> | string | StaticImageData;
const heroMap: Record<VentureKey, SvgOrUrl> = {
  indipe: IndipeHero,
  sec2pay: Sec2PayHero,
  indiconnect: IndiConnect,
  indikendra: IndiKendraHero,
  indinxt: IndiNXTHero,
  indispeed: IndiSpeedHero,
};

// Per-venture overlay placement/sizing for the right hero art
const heroArtConfig: Record<
  VentureKey,
  { container: string; artClassName: string; imageSize?: { w: number; h: number } }
> = {
  indipe: {
    container: " md:-right-[20%] md:-bottom-[18%]",
    artClassName: "h-[260px] md:h-[500px] w-auto",
    imageSize: { w: 380, h: 260 },
  },
  sec2pay: {
    container: " md:-right-[20%] md:-bottom-[18%]",
    artClassName: "h-[260px] md:h-[400px] w-auto",
    imageSize: { w: 380, h: 260 },
  },
  indiconnect: {
    container: "md:-right-[16%] md:-bottom-[14%]",
    artClassName: "h-[270px] md:h-[500px] w-auto",
    imageSize: { w: 390, h: 270 },
  },
  indikendra: {
    container: "md:-right-[18%] md:-bottom-[16%]",
    artClassName: "h-[285px] md:h-[520px] w-auto",
    imageSize: { w: 410, h: 285 },
  },
  indinxt: {
    container: "md:-right-[18%] md:-bottom-[16%] ",
    artClassName: "h-[275px] md:h-[500px] w-auto",
    imageSize: { w: 395, h: 275 },
  },
  indispeed: {
    container: "md:-right-[16%] md:-bottom-[11%]",
    artClassName: "h-[300px] md:h-[520px] w-auto",
    imageSize: { w: 420, h: 300 },
  },
};

// Only show icon for indipe and sec2pay; others have no icon
const iconMap: Partial<Record<VentureKey, SvgOrUrl>> = {
  indipe: IndipeIcon,
  sec2pay: Sec2PayIcon,
};

export default function VentureCards({ active, onChangeAction }: { active: VentureKey; onChangeAction: (k: VentureKey) => void }) {
  const ventures = useMemo(() => getAllVentureThemes(), []);
  const theme = getVentureTheme(active);
  const content = useMemo(() => getVentureContent(active), [active]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const isComponent = (x: SvgOrUrl): x is ComponentType<SVGProps<SVGSVGElement>> => typeof x === "function";
  const isStatic = (x: SvgOrUrl): x is StaticImageData => typeof x === "object" && x !== null && "src" in x;
  const isString = (x: SvgOrUrl): x is string => typeof x === "string";

  // Scroll active tab to center on mobile
  useEffect(() => {
    if (activeTabRef.current && tabsContainerRef.current) {
      const container = tabsContainerRef.current;
      const button = activeTabRef.current;
      const containerWidth = container.offsetWidth;
      const buttonLeft = button.offsetLeft;
      const buttonWidth = button.offsetWidth;
      const scrollPosition = buttonLeft - containerWidth / 2 + buttonWidth / 2;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [active]);

  return (
    <section className=" ">
      <Container>
        {/* Tabs - scrollable on mobile */}
        <div className="m-4 sm:m-6 -mx-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none]" ref={tabsContainerRef}>
          <div className="flex min-w-full items-center justify-start sm:justify-center gap-2 px-4 [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Ventures">
            {ventures.map((v) => (
              <button
                key={v.key}
                ref={active === v.key ? activeTabRef : null}
                onClick={() => onChangeAction(v.key)}
                className={`${active === v.key ? "text-white" : "text-[#446FA7] bg-[#E6EAEF]"} rounded-md px-3 py-1 text-sm font-semibold whitespace-nowrap`}
                style={active === v.key ? { background: `linear-gradient(90deg, ${v.gradientFrom}, ${v.gradientTo})` } : undefined}
                role="tab"
                aria-selected={active === v.key}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gradient Card wrapper to match Figma width */}
        <div className="mx-auto w-full max-w-[1071px] relative overflow-visible">
          <div
            className="relative z-10 flex flex-col h-auto w-full overflow-visible rounded-3xl border text-white min-h-[400px] sm:min-h-[450px] md:h-[558px]"
            style={{ background: `linear-gradient(90deg, ${theme.gradientFrom}, ${theme.gradientTo})` }}
          >
            <div className="flex-1 p-5 pr-5 md:p-8 md:pr-[420px]">
              {/* top-left icon (only for indipe, sec2pay) */}
              {(() => {
                const Icon = iconMap[active];
                if (!Icon) return null;
                return (
                  <div className="mb-10 sm:mb-5">
                    {isComponent(Icon) ? (
                      (() => {
                        const C = Icon;
                        return <C className="h-10 w-auto sm:h-12 md:h-14 overflow-visible" />;
                      })()
                    ) : (
                      (() => {
                        const src = isString(Icon) ? Icon : (isStatic(Icon) ? Icon : undefined);
                        return src ? (
                          <Image
                            src={src}
                            alt={`${theme.name} icon`}
                            width={56}
                            height={56}
                            style={{ height: "auto", width: "auto", maxHeight: 56 }}
                          />
                        ) : null;
                      })()
                    )}
                  </div>
                );
              })()}

              {/* Title or wordmark (same visual block size) */}
              <div className="mt-1 flex min-h-10 sm:min-h-12 items-center">
                {active === "indikendra" ? (
                  <IndiKendraWordmark className="h-8 sm:h-10 md:h-12 w-auto overflow-visible" />
                ) : active === "indinxt" ? (
                  <IndiNXTWordmark className="h-8 sm:h-10 md:h-12 w-auto overflow-visible" />
                ) : active === "indispeed" ? (
                  <IndiSpeedWordmark className="h-8 sm:h-10 md:h-12 w-auto overflow-visible" />
                ) : (
                  <h3 className="text-2xl sm:text-[28px] md:text-[32px] leading-none font-bold">{theme.name}</h3>
                )}
              </div>
              <p className="mt-3 sm:mt-4 max-w-xl text-white/90 text-sm sm:text-base leading-relaxed">{content.hero.description}</p>
              
             
            </div>

            {/* Play Store button - always at bottom */}
            <div className="p-5 pt-0 md:p-8 md:pt-0">
              <button className="inline-flex items-center justify-center transition-opacity hover:opacity-80">
                <PlayStore className="h-auto w-[180px]" />
              </button>
            </div>
          </div>
          {/* Right hero image overlay above the card */}
          <div className={`pointer-events-none absolute z-20 hidden sm:flex items-end overflow-visible right-0 bottom-0 ${heroArtConfig[active].container}`}>
            {(() => {
              const Art = heroMap[active];
              const cfg = heroArtConfig[active];
              if (isComponent(Art)) {
                const C = Art;
                return <C className={`object-contain ${cfg.artClassName}`} />;
              }
              const src = isString(Art) ? Art : (isStatic(Art) ? Art : undefined);
              return src ? (
                <Image
                  src={src}
                  alt={`${theme.name} hero`}
                  width={cfg.imageSize?.w ?? 360}
                  height={cfg.imageSize?.h ?? 240}
                  className={`object-contain ${cfg.artClassName}`}
                />
              ) : null;
            })()}
          </div>
        </div>
      </Container>
    </section>
  );
}
