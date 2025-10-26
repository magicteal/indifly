// src/components/SectorsSection.tsx
"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import TitleBrush from "@public/home/titieINDsights.svg";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ourSectors } from "./sectorsContent";

const SectorsSection = () => {
  // Top-level category state
  const [activeCategory, setActiveCategory] = useState(ourSectors[0].title);
  // Second-level sector (brand) state
  const [activeSector, setActiveSector] = useState(
    ourSectors[0].sectors[0].name,
  );
  // Track previous indices to derive animation direction on change
  const prevCategoryIndexRef = useRef<number | null>(null);
  const prevSectorIndexRef = useRef<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right" | "up" | "down">(
    "right",
  );

  // Derive lists for render
  const categories = useMemo(() => ourSectors.map((c) => c.title), []);
  const currentCategory = useMemo(
    () => ourSectors.find((c) => c.title === activeCategory) ?? ourSectors[0],
    [activeCategory],
  );
  const currentSector = useMemo(
    () =>
      currentCategory.sectors.find((s) => s.name === activeSector) ||
      currentCategory.sectors[0],
    [currentCategory, activeSector],
  );

  // Derive image src for the currently selected sector directly from its name
  const currentSectorImage = useMemo(
    () => `/home/sectors/${currentSector.name}.png`,
    [currentSector.name],
  );

  // When category changes, reset sector to first in that category
  useEffect(() => {
    // Ensure activeSector always belongs to the currently active category
    if (!currentCategory.sectors.some((s) => s.name === activeSector)) {
      setActiveSector(currentCategory.sectors[0].name);
    }
    // We intentionally ignore setting when activeSector changes on its own; only validate on category change or sectors list change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory, currentCategory.sectors]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Variants used for content & image transitions on tab change
  const contentVariants = {
    enter: (dir: string) => {
      const x = dir === "left" ? -64 : dir === "right" ? 64 : 0;
      const y = dir === "up" ? -36 : dir === "down" ? 36 : 0;
      return { opacity: 0, x, y };
    },
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
    exit: (dir: string) => {
      const x = dir === "left" ? 48 : dir === "right" ? -48 : 0;
      const y = dir === "up" ? 28 : dir === "down" ? -28 : 0;
      return {
        opacity: 0,
        x,
        y,
        transition: { duration: 0.38, ease: easeOut },
      };
    },
  };

  const imageVariants = {
    enter: (dir: string) => {
      const x = dir === "left" ? 80 : dir === "right" ? -80 : 0;
      const y = dir === "up" ? 48 : dir === "down" ? -48 : 0;
      return { opacity: 0, x, y };
    },
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: (dir: string) => {
      const x = dir === "left" ? -64 : dir === "right" ? 64 : 0;
      const y = dir === "up" ? -36 : dir === "down" ? 36 : 0;
      return {
        opacity: 0,
        x,
        y,
        transition: { duration: 0.45, ease: easeOut },
      };
    },
  };

  return (
    <motion.section
      id="our-portfolio"
      className="reveal-section mt-24 bg-white text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container className="relative">
        {/* Header */}
        <motion.div className="text-center" variants={itemVariants}>
          {/* Title with brush stroke */}
          <div className="mb-10 flex w-full items-center justify-center">
            <div className="relative">
              <TitleBrush className="h-auto w-full" />
              <div className="absolute inset-0 grid place-items-center">
                <h2 className="reveal-title text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Our Portfolio
                </h2>
              </div>
            </div>
          </div>

          <p className="reveal-left text-xl font-bold text-primary">
            Integrated, <span className="text-[#0252D4]">Inclusive</span> &
            Innovative
          </p>
          <p className="reveal-right mx-auto mt-2 max-w-3xl text-lg text-gray-500">
            Equipping diverse brands in multiple sectors with essential
            resources, expertise, and unwavering support
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="mt-6 mb-6 flex justify-center"
          variants={itemVariants}
        >
          <div className="flex flex-wrap gap-3 p-1" data-reveal-stagger>
            {categories.map((cat, cIdx) => (
              <button
                key={cat}
                onClick={() => {
                  const prev = prevCategoryIndexRef.current ?? cIdx;
                  if (cIdx > prev) setDirection("down");
                  else if (cIdx < prev) setDirection("up");
                  // update prev index and reset sector index tracker
                  prevCategoryIndexRef.current = cIdx;
                  prevSectorIndexRef.current = 0;
                  setActiveCategory(cat);
                }}
                className={`$${" "} ${
                  activeCategory === cat
                    ? "bg-[#0B44FF] text-white"
                    : "bg-accent text-secondary hover:bg-gray-200"
                } rounded-lg px-5 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active sector content */}
        {/* Text + Image wrapper */}
        <div
          className="flex flex-col overflow-hidden rounded-lg md:flex-row md:items-stretch"
          style={{
            background:
              "linear-gradient(73.45deg, #FECCB2 0%, rgba(254,204,178,0.75) 28%, rgba(254,204,178,0.38) 48%, rgba(254,204,178,0.15) 63%, #FFFFFF 78%, #FFFFFF 100%)",
          }}
        >
          {/* Text Content */}
          <div className="reveal-right w-full p-6 md:w-3/5 md:p-8">
            {/* Sector (brand) tabs inside selected category */}
            <div
              className="flex flex-wrap gap-2 overflow-x-auto pb-2"
              data-reveal-stagger
            >
              {currentCategory.sectors.map((sector, sIdx) => {
                const selected = sector.name === currentSector.name;
                return (
                  <Button
                    key={sector.name}
                    variant={selected ? "secondary" : "outline"}
                    className={`!border-secondary ${!selected && "text-secondary"}`}
                    onClick={() => {
                      const prev = prevSectorIndexRef.current ?? sIdx;
                      if (sIdx > prev) setDirection("right");
                      else if (sIdx < prev) setDirection("left");
                      prevSectorIndexRef.current = sIdx;
                      setActiveSector(sector.name);
                    }}
                    aria-pressed={selected}
                  >
                    {sector.name}
                  </Button>
                );
              })}
            </div>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={`${activeCategory}-${currentSector.name}`}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <div className="text-md mt-3 mb-2 font-semibold text-secondary">
                  {currentSector.focusArea}
                </div>
                <h3 className="text-2xl leading-tight text-gray-700">
                  {currentSector.description[0]}
                </h3>
                <p className="mt-2 text-gray-600">
                  {currentSector.description[1]}
                </p>
                <ul className="mt-4 space-y-1 font-medium text-gray-700">
                  {currentSector.bulletPoints.map((point) => (
                    <li key={point} className="flex">
                      <span className="mr-2" aria-hidden>
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  {currentSector.actions && (
                    <Button
                      size="lg"
                      className="min-w-[160px] rounded-full"
                      asChild
                    >
                      <Link
                        href={currentSector.actions.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {currentSector.actions.label === "Install App"
                          ? "Install the App"
                          : currentSector.actions.label}
                      </Link>
                    </Button>
                  )}
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full"
                    asChild
                  >
                    <Link
                      href={`/ventures/${currentSector.name.toLowerCase()}`}
                    >
                      Explore More <FiArrowRight />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          {/* Image */}
          <div className="flex w-full items-center justify-center self-end md:w-2/5">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={`img-${activeCategory}-${currentSector.name}`}
                className="reveal-image reveal-right relative h-[280px] w-full sm:h-[320px] md:h-[360px] lg:h-[420px]"
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                custom={direction}
              >
                <Image
                  src={currentSectorImage}
                  alt={`${currentSector.name} illustration`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default SectorsSection;
