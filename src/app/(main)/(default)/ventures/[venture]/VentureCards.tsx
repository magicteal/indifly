"use client";
import {
  getVentureContent,
  VentureKey,
  ventureKeys,
} from "@/app/(main)/(default)/ventures/content";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import IndiConnect from "@public/companies/indiConnectHero.svg?flex";
import IndiKendraWordmark from "@public/companies/indiKendra.svg?flex";
import IndiKendraHero from "@public/companies/indiKendraHero.svg?flex";
import IndiNXTWordmark from "@public/companies/indiNXT.svg?flex";
import IndiNXTHero from "@public/companies/indiNXTHero.svg?flex";
import IndipeHero from "@public/companies/indipeHero.svg?flex";
import IndipeIcon from "@public/companies/indipeIcon.svg";
import IndiSpeedWordmark from "@public/companies/indiSpeed.svg?flex";
import IndiSpeedHero from "@public/companies/indispeedHero.svg?flex";
import PlayStore from "@public/companies/playStore.svg";
import Sec2PayHero from "@public/companies/sec2payHero.svg?flex";
import Sec2PayIcon from "@public/companies/sec2payIcon.svg";
import Image, { StaticImageData } from "next/image";
import { ComponentType, SVGProps, useEffect, useMemo, useRef } from "react";

// map of venturekey to venture name
const ventureNameMap: Record<VentureKey, string> = {
  indipe: "Indipe",
  sec2pay: "Sec2Pay",
  indiconnect: "IndiConnect",
  indikendra: "IndiKendra",
  indinxt: "IndiNXT",
  indispeed: "IndiSpeed",
};

type SvgOrUrl =
  | ComponentType<SVGProps<SVGSVGElement>>
  | string
  | StaticImageData;
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
  {
    container: string;
    artClassName: string;
    imageSize?: { w: number; h: number };
  }
> = {
  indipe: {
    container: " md:-right-[15%] md:-bottom-[18%]",
    artClassName: "h-[260px] md:h-[500px] w-auto",
    imageSize: { w: 380, h: 260 },
  },
  sec2pay: {
    container: " md:-right-[15%] md:-bottom-[18%]",
    artClassName: "h-[260px] md:h-[400px] w-auto",
    imageSize: { w: 380, h: 260 },
  },
  indiconnect: {
    container: "md:-right-[10%] md:-bottom-[14%]",
    artClassName: "h-[270px] md:h-[520px] w-auto",
    imageSize: { w: 390, h: 270 },
  },
  indikendra: {
    container: "md:-right-[11%] md:-bottom-[20%]",
    artClassName: "h-[30rem] lg:h-[45rem] w-auto",
    imageSize: { w: 410, h: 285 },
  },
  indinxt: {
    container: "md:-right-[10%] md:-bottom-[15%] ",
    artClassName: "h-[275px] md:h-[550px] w-auto",
    imageSize: { w: 395, h: 275 },
  },
  indispeed: {
    container: "md:-right-[10%] md:-bottom-[2%]",
    artClassName: "h-[300px] md:h-[520px] w-auto",
    imageSize: { w: 420, h: 300 },
  },
};

// Only show icon for indipe and sec2pay; others have no icon
const iconMap: Partial<Record<VentureKey, SvgOrUrl>> = {
  indipe: IndipeIcon,
  sec2pay: Sec2PayIcon,
};

export default function VentureCards({
  active,
  onChangeAction,
}: {
  active: VentureKey;
  onChangeAction: (k: VentureKey) => void;
}) {
  const content = useMemo(() => getVentureContent(active), [active]);
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const isComponent = (
    x: SvgOrUrl,
  ): x is ComponentType<SVGProps<SVGSVGElement>> => typeof x === "function";
  const isStatic = (x: SvgOrUrl): x is StaticImageData =>
    typeof x === "object" && x !== null && "src" in x;
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
        <div
          className="m-4 -mx-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:m-6"
          ref={tabsContainerRef}
        >
          <div
            className="flex min-w-full items-center justify-start gap-2 px-4 sm:justify-center [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Ventures"
          >
            {ventureKeys.map((v) => (
              <Button
                variant={active === v ? "default" : "secondary"}
                key={v}
                ref={active === v ? activeTabRef : null}
                onClick={() => onChangeAction(v)}
                role="tab"
                size="sm"
                aria-selected={active === v}
              >
                {ventureNameMap[v]}
              </Button>
            ))}
          </div>
        </div>

        {/* Gradient Card wrapper to match Figma width */}
        <div className="relative mx-auto w-full max-w-[1071px] overflow-visible">
          <div className="relative z-10 flex h-auto min-h-[400px] w-full flex-col overflow-visible rounded-3xl border bg-gradient-to-r from-primary to-primary/60 text-white sm:min-h-[450px] md:h-[558px]">
            <div className="flex-1 p-5 pr-5 md:p-8 md:pr-[420px]">
              {/* top-left icon (only for indipe, sec2pay) */}
              {(() => {
                const Icon = iconMap[active];
                if (!Icon) return null;
                return (
                  <div className="mb-10 sm:mb-5">
                    {isComponent(Icon)
                      ? (() => {
                          const C = Icon;
                          return (
                            <C className="h-10 w-auto overflow-visible sm:h-12 md:h-14" />
                          );
                        })()
                      : (() => {
                          const src = isString(Icon)
                            ? Icon
                            : isStatic(Icon)
                              ? Icon
                              : undefined;
                          return src ? (
                            <Image
                              src={src}
                              alt={`${active} icon`}
                              width={56}
                              height={56}
                              style={{
                                height: "auto",
                                width: "auto",
                                maxHeight: 56,
                              }}
                            />
                          ) : null;
                        })()}
                  </div>
                );
              })()}

              {/* Title or wordmark (same visual block size) */}
              <div className="mt-1 flex min-h-10 items-center sm:min-h-12">
                {active === "indikendra" ? (
                  <IndiKendraWordmark className="h-8 w-auto overflow-visible sm:h-10 md:h-12" />
                ) : active === "indinxt" ? (
                  <IndiNXTWordmark className="h-8 w-auto overflow-visible sm:h-10 md:h-12" />
                ) : active === "indispeed" ? (
                  <IndiSpeedWordmark className="h-8 w-auto overflow-visible sm:h-10 md:h-12" />
                ) : (
                  <h3 className="text-2xl leading-none font-bold sm:text-[28px] md:text-[32px]">
                    {ventureNameMap[active]}
                  </h3>
                )}
              </div>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:mt-4 sm:text-base">
                {content.hero.description}
              </p>
            </div>

            {/* Play Store button - always at bottom */}
            <div className="p-5 pt-0 md:p-8 md:pt-0">
              <button className="inline-flex items-center justify-center transition-opacity hover:opacity-80">
                <PlayStore className="h-auto w-[180px]" />
              </button>
            </div>
          </div>
          {/* Right hero image overlay above the card */}
          <div
            className={`pointer-events-none absolute right-0 bottom-0 z-20 hidden items-end overflow-visible sm:flex ${heroArtConfig[active].container}`}
          >
            {(() => {
              const Art = heroMap[active];
              const cfg = heroArtConfig[active];
              if (isComponent(Art)) {
                const C = Art;
                return <C className={`object-contain ${cfg.artClassName}`} />;
              }
              const src = isString(Art) ? Art : isStatic(Art) ? Art : undefined;
              return src ? (
                <Image
                  src={src}
                  alt={`${active} hero`}
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
