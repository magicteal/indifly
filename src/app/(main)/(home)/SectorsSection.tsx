// src/components/SectorsSection.tsx
"use client";

import { Container } from "@/components/ui/container";
import { easeOut, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import BrushStroke from "../../../components/BrushStroke"; // Import the new SVG component

const SectorsSection = () => {
  const [activeTab, setActiveTab] = useState("Indipe");

  const tabs = ["Indipe", "Indiconnect", "IndiNXT"];

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

        {/* Tabs */}
        <motion.div
          className="mb-12 flex justify-center"
          variants={itemVariants}
        >
          <div className="flex space-x-1 rounded-full bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                } rounded-full px-6 py-2 text-sm font-semibold transition-colors duration-300 focus:outline-none`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <div>
          {activeTab === "Indipe" && (
            <motion.div
              key="indipe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-12 md:flex-row"
            >
              {/* Left Side: Text Content */}
              <div
                className="space-y-6 rounded-lg p-8 md:w-2/3"
                style={{
                  background:
                    "linear-gradient(73.45deg, #FECCB2 0%, #FFFFFF 110.01%)",
                }}
              >
                <div className="flex space-x-2">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    Wealth tech
                  </span>
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-800">
                    Financial Services
                  </span>
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
                    Payments
                  </span>
                </div>
                <h3 className="text-3xl leading-tight font-bold text-gray-900">
                  Seamless wealth creation and digital payments for all
                </h3>
                <p className="text-gray-600">
                  Empowering individuals with secure, user-friendly financial
                  tools. From UPI transactions to personalized wealth
                  management, we make financial growth accessible to everyone.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✓</span> User-friendly
                    mutual fund investments
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✓</span> Secure UPI
                    transactions
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✓</span> Advanced
                    portfolio tracking tools
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✓</span> Personalized
                    financial guidance
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-orange-500">✓</span> Partner program
                    for mutual fund distribution
                  </li>
                </ul>
                <div className="flex items-center space-x-4 pt-4">
                  <button className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-600">
                    Install the App
                  </button>
                  <button className="flex items-center gap-2 font-semibold text-gray-700 hover:text-black">
                    Explore More <FiArrowRight />
                  </button>
                </div>
              </div>

              {/* Right Side: Image Placeholders */}
              <div className="relative h-96 md:w-1/3">
                {/* Main Image Placeholder */}
                <div className="absolute right-0 bottom-0 flex h-80 w-80 items-center justify-center rounded-lg bg-gray-200 shadow-lg">
                  <p className="text-gray-500">Person Image</p>
                </div>
                {/* UPI Image Placeholder */}
                <div className="absolute top-0 right-10 flex h-24 w-40 items-center justify-center rounded-lg bg-blue-500 shadow-lg">
                  <p className="text-white">UPI Image</p>
                </div>
                {/* Small top-left image placeholder */}
                <div className="absolute top-10 left-0 h-20 w-32 rounded-lg bg-gray-300 shadow-lg"></div>
                {/* Small bottom-right image placeholder */}
                <div className="absolute right-72 bottom-10 h-20 w-32 rounded-lg bg-gray-400 shadow-lg"></div>
              </div>
            </motion.div>
          )}
          {activeTab !== "Indipe" && (
            <div className="py-12 text-center">
              <p className="text-gray-500">
                Content for {activeTab} will be here.
              </p>
            </div>
          )}
        </div>
      </Container>
    </motion.section>
  );
};

export default SectorsSection;
