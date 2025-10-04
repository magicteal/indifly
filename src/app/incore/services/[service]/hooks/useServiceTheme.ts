/**
 * Custom hook for dynamic service-based theming
 * Provides all Tailwind class mappings for insurge/instack/involve/insure
 */

"use client";

import { useParams } from "next/navigation";

export type ServiceType = "insurge" | "instack" | "involve" | "insure";

export interface ServiceTheme {
  // Service name
  service: ServiceType;

  // Text color classes
  text: string;
  textForeground: string;

  // Background color classes
  bg: string;
  bgAccent: string;
  bgForeground: string;

  // Border color classes
  border: string;
  borderAccent: string;

  // Gradient utilities (for from-/to- classes)
  gradientFrom: string;
  gradientTo: string;
  gradientFromAccent: string;

  // Button variant name
  buttonVariant: "insurge" | "instack" | "involve" | "insure";
  buttonSecondaryVariant: string;

  // Raw CSS variable names (for inline styles)
  cssVar: string;
  cssVarForeground: string;
  cssVarAccent: string;
}

const serviceThemes: Record<ServiceType, ServiceTheme> = {
  insurge: {
    service: "insurge",
    text: "text-insurge",
    textForeground: "text-insurge-foreground",
    bg: "bg-insurge",
    bgAccent: "bg-insurge-accent",
    bgForeground: "bg-insurge-foreground",
    border: "border-insurge",
    borderAccent: "border-insurge-accent",
    gradientFrom: "from-insurge",
    gradientTo: "to-insurge",
    gradientFromAccent: "from-insurge-accent",
    buttonVariant: "insurge",
    buttonSecondaryVariant: "insurgeSecondary",
    cssVar: "var(--color-insurge)",
    cssVarForeground: "var(--color-insurge-foreground)",
    cssVarAccent: "var(--color-insurge-accent)",
  },
  instack: {
    service: "instack",
    text: "text-instack",
    textForeground: "text-instack-foreground",
    bg: "bg-instack",
    bgAccent: "bg-instack-accent",
    bgForeground: "bg-instack-foreground",
    border: "border-instack",
    borderAccent: "border-instack-accent",
    gradientFrom: "from-instack",
    gradientTo: "to-instack",
    gradientFromAccent: "from-instack-accent",
    buttonVariant: "instack",
    buttonSecondaryVariant: "instackSecondary",
    cssVar: "var(--color-instack)",
    cssVarForeground: "var(--color-instack-foreground)",
    cssVarAccent: "var(--color-instack-accent)",
  },
  involve: {
    service: "involve",
    text: "text-involve",
    textForeground: "text-involve-foreground",
    bg: "bg-involve",
    bgAccent: "bg-involve-accent",
    bgForeground: "bg-involve-foreground",
    border: "border-involve",
    borderAccent: "border-involve-accent",
    gradientFrom: "from-involve",
    gradientTo: "to-involve",
    gradientFromAccent: "from-involve-accent",
    buttonVariant: "involve",
    buttonSecondaryVariant: "involveSecondary",
    cssVar: "var(--color-involve)",
    cssVarForeground: "var(--color-involve-foreground)",
    cssVarAccent: "var(--color-involve-accent)",
  },
  insure: {
    service: "insure",
    text: "text-insure",
    textForeground: "text-insure-foreground",
    bg: "bg-insure",
    bgAccent: "bg-insure-accent",
    bgForeground: "bg-insure-foreground",
    border: "border-insure",
    borderAccent: "border-insure-accent",
    gradientFrom: "from-insure",
    gradientTo: "to-insure",
    gradientFromAccent: "from-insure-accent",
    buttonVariant: "insure",
    buttonSecondaryVariant: "insureSecondary",
    cssVar: "var(--color-insure)",
    cssVarForeground: "var(--color-insure-foreground)",
    cssVarAccent: "var(--color-insure-accent)",
  },
};

/**
 * Hook to get theme configuration based on the current service route
 * Automatically reads the service param from Next.js useParams()
 * @returns ServiceTheme object with all class mappings
 */
export function useServiceTheme(): ServiceTheme {
  const params = useParams<{ service?: string }>();
  const service = params?.service;

  const normalizedService = Array.isArray(service) ? service[0] : service;
  const serviceKey = (normalizedService as ServiceType) || "insurge";

  return serviceThemes[serviceKey] || serviceThemes.insurge;
}
