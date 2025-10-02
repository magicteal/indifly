// src/components/SectorsSection.tsx
"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import BrushStroke from "../../../components/BrushStroke"; // Import the new SVG component
import { Container } from "@/components/ui/container";

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
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-12 relative"
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[350px] h-auto">
              <BrushStroke />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white relative">
            Our Sectors
          </h2>

          <p className="mt-4 text-xl text-gray-700">
            Integrated, Inclusive & Innovative
          </p>
          <p className="mt-2 text-lg text-gray-500 max-w-3xl mx-auto">
            Equipping diverse brands in multiple sectors with essential
            resources, expertise, and unwavering support
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-center mb-12"
          variants={itemVariants}
        >
          <div className="bg-gray-100 rounded-full p-1 flex space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "text-gray-600 hover:bg-gray-200"
                } px-6 py-2 text-sm font-semibold rounded-full transition-colors duration-300 focus:outline-none`}
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
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side: Text Content */}
              <div className="space-y-6">
                <div className="flex space-x-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Wealth tech
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Financial Services
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Payments
                  </span>
                </div>
                <h3 className="text-3xl font-bold leading-tight text-gray-900">
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
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                    Install the App
                  </button>
                  <button className="text-gray-700 hover:text-black font-semibold flex items-center gap-2">
                    Explore More <FiArrowRight />
                  </button>
                </div>
              </div>

              {/* Right Side: Image Placeholders */}
              <div className="relative h-96">
                {/* Main Image Placeholder */}
                <div className="absolute bottom-0 right-0 h-80 w-80 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                  <p className="text-gray-500">Person Image</p>
                </div>
                {/* UPI Image Placeholder */}
                <div className="absolute top-0 right-10 h-24 w-40 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
                  <p className="text-white">UPI Image</p>
                </div>
                {/* Small top-left image placeholder */}
                <div className="absolute top-10 left-0 h-20 w-32 bg-gray-300 rounded-lg shadow-lg"></div>
                {/* Small bottom-right image placeholder */}
                <div className="absolute bottom-10 right-72 h-20 w-32 bg-gray-400 rounded-lg shadow-lg"></div>
              </div>
            </motion.div>
          )}
          {activeTab !== "Indipe" && (
            <div className="text-center py-12">
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
