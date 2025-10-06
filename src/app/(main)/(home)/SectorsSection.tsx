// src/components/SectorsSection.tsx
"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import BrushStroke from "../../../components/BrushStroke";
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
      className="bg-white py-20 text-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <Container className="relative">
        {/* Header */}
        <motion.div className="mb-12 text-center" variants={itemVariants}>
          <div className="pointer-events-none absolute -top-30 left-1/2 -translate-x-1/2 select-none">
            <div className="h-auto w-[550px]">
              <BrushStroke />
            </div>
          </div>

          <p className="mt-24 text-xl text-gray-700">
            Integrated, Inclusive & Innovative
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-lg text-gray-500">
            Equipping diverse brands in multiple sectors with essential
            resources, expertise, and unwavering support
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="mb-6 flex justify-center"
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
        <div className="flex flex-col items-center gap-12 md:flex-row">
          {/* Left Side: Text Content */}
          <div
            className="space-y-6 rounded-l-lg p-8"
            style={{
              background:
                "linear-gradient(73.45deg, #FECCB2 0%, rgba(254,204,178,0.75) 28%, rgba(254,204,178,0.38) 48%, rgba(254,204,178,0.15) 63%, #FFFFFF 78%, #FFFFFF 100%)",
            }}
          >
            {/* Sector (brand) tabs inside selected category */}
            <div className="flex justify-start gap-2">
              {currentCategory.sectors.map((sector) => {
                const selected = sector.name === currentSector.name;
                return (
                  <button
                    key={sector.name}
                    onClick={() => setActiveSector(sector.name)}
                    className={
                      selected
                        ? "rounded-md border bg-secondary px-3 py-1 text-xs font-semibold text-white"
                        : "rounded-md border !border-secondary px-3 py-1 text-xs font-semibold text-secondary"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-md mt-1 mb-1 font-semibold text-secondary">
                {currentSector.focusArea}
              </div>
              <h3 className="text-2xl leading-tight text-gray-600">
                {currentSector.description[0]}
              </h3>
              <p className="text-gray-600">{currentSector.description[1]}</p>
              <ul className="mt-4 font-medium text-gray-700">
                {currentSector.bulletPoints.map((point) => (
                  <li key={point}>• &nbsp;{point}</li>
                ))}
              </ul>
              <div className="mt-12 flex items-center space-x-4">
                <Button size="lg" className="rounded-full">
                  {currentSector.actions === "Install App"
                    ? "Install the App"
                    : currentSector.actions}
                </Button>
                <Button size={"lg"} variant={"outline"}>
                  Explore More <FiArrowRight />
                </Button>
              </div>
            </motion.div>
          </div>
          {/* Right Side: Image Placeholders (common across sectors) */}
          <div className="relative h-96 shrink-0 md:w-2/5">
            <Image
              src="/home/ourSectors.png"
              alt="Sector Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default SectorsSection;
