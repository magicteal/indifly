// src/components/SectorsSection.tsx
"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import TitleBrush from "@public/home/titieINDsights.svg";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { ourSectors } from "./sectorsContent";

const SectorsSection = () => {
  // Top-level category state
  const [activeCategory, setActiveCategory] = useState(ourSectors[0].title);
  // Second-level sector (brand) state
  const [activeSector, setActiveSector] = useState(
    ourSectors[0].sectors[0].name,
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

  return (
    <motion.section
      id="our-portfolio"
      className="mt-24 bg-white text-black"
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
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Our Portfolio
                </h2>
              </div>
            </div>
          </div>

          <p className="text-xl font-bold text-primary">
            Integrated, <span className="text-[#0252D4]">Inclusive</span> &
            Innovative
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-lg text-gray-500">
            Equipping diverse brands in multiple sectors with essential
            resources, expertise, and unwavering support
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="mt-6 mb-6 flex justify-center"
          variants={itemVariants}
        >
          <div className="flex flex-wrap gap-3 p-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
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
          <div className="w-full p-6 md:w-3/5 md:p-8">
            {/* Sector (brand) tabs inside selected category */}
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
              {currentCategory.sectors.map((sector) => {
                const selected = sector.name === currentSector.name;
                return (
                  <button
                    key={sector.name}
                    onClick={() => setActiveSector(sector.name)}
                    className={
                      selected
                        ? "rounded-md border bg-secondary px-3 py-1 text-xs font-semibold text-white"
                        : "rounded-md border !border-secondary px-3 py-1 text-xs font-semibold text-secondary hover:bg-secondary/10"
                    }
                    aria-pressed={selected}
                  >
                    {sector.name}
                  </button>
                );
              })}
            </div>
            <motion.div
              key={`${activeCategory}-${currentSector.name}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
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
                <Button size="lg" className="min-w-[160px] rounded-full">
                  {currentSector.actions === "Install App"
                    ? "Install the App"
                    : currentSector.actions}
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Explore More <FiArrowRight />
                </Button>
              </div>
            </motion.div>
          </div>
          {/* Image (placed after text so it appears below on mobile) */}
          <div className="flex w-full items-center justify-center self-end md:w-2/5">
            <Image
              src="/home/ourSectors.png"
              alt="Brands across sectors illustration"
              width={640}
              height={640}
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="h-auto max-h-80 w-full object-contain md:max-h-none"
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default SectorsSection;
