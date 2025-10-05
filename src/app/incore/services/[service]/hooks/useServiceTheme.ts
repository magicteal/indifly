/**
 * Custom hook for dynamic service-based theming
 * Provides all Tailwind class mappings for insurge/instack/involve/insure
 */

"use client";

import { useParams } from "next/navigation";

export type ServiceType = "insurge" | "instack" | "involve" | "insure";

// New: function-like accessor that returns base class or an opacity variant (e.g. text-insurge/10)
export type ColorAccessor = {
  /** When called with no arg returns the base class (e.g. text-insurge) */
  (opacity?: number | string): string;
  /** Underlying base class name */
  base: string;
  /** Allowed opacities we safelist */
  allowed: number[];
  /** Explicit helper identical to direct call */
  with: (opacity?: number | string) => string;
  /** Ensures string interpolation `${theme.text}` works like before */
  toString: () => string;
};

function makeColorAccessor(base: string, allowed: number[]): ColorAccessor {
  // Build a map of allowed variants so Tailwind sees them as literal strings (safelist)
  // NOTE: These arrays of literal class strings intentionally exist so Tailwind's scanner includes them.
  const literalVariants = allowed.map((o) => `${base}/${o}`);
  // Small trick to avoid tree-shaking in some bundlers
  if (process.env.NODE_ENV === "test") console.debug(literalVariants.length);

  const fn = ((opacity?: number | string) => {
    if (opacity === undefined || opacity === null || opacity === "")
      return base;
    const num = typeof opacity === "string" ? parseInt(opacity, 10) : opacity;
    if (!allowed.includes(num)) {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          `Unsupported opacity ${opacity} for ${base}. Allowed: ${allowed.join(",")}`,
        );
      }
      return base; // fallback silently
    }
    return `${base}/${num}`;
  }) as ColorAccessor;

  fn.base = base;
  fn.allowed = allowed;
  fn.with = (o?: number | string) => fn(o);
  fn.toString = () => base;
  return fn;
}

// Consolidated allowed opacities (expand if needed)
const ALLOWED_OPACITIES = [10, 15, 20, 25, 30, 40, 50, 60, 70, 80, 90];

export interface ServiceTheme {
  service: ServiceType | "default"; // allow default
  text: ColorAccessor; // now function-like
  textForeground: ColorAccessor;
  bg: string;
  bgAccent: string;
  bgForeground: string;
  border: string;
  borderAccent: string;
  gradientFrom: string;
  gradientTo: string;
  gradientFromAccent: string;
  buttonVariant: "insurge" | "instack" | "involve" | "insure" | "default";
  buttonSecondaryVariant: string;
  cssVar: string;
  cssVarForeground: string;
  cssVarAccent: string;
}

const defaultTheme: ServiceTheme = {
  service: "default",
  text: makeColorAccessor("text-primary", ALLOWED_OPACITIES),
  textForeground: makeColorAccessor(
    "text-primary-foreground",
    ALLOWED_OPACITIES,
  ),
  bg: "bg-primary",
  bgAccent: "bg-accent",
  bgForeground: "bg-primary-foreground",
  border: "border-primary",
  borderAccent: "border-accent",
  gradientFrom: "from-primary",
  gradientTo: "to-primary",
  gradientFromAccent: "from-accent",
  buttonVariant: "default",
  buttonSecondaryVariant: "secondary",
  cssVar: "var(--color-primary)",
  cssVarForeground: "var(--color-primary-foreground)",
  cssVarAccent: "var(--color-accent)",
};

const serviceThemes: Record<ServiceType, ServiceTheme> = {
  insurge: {
    service: "insurge",
    text: makeColorAccessor("text-insurge", ALLOWED_OPACITIES),
    textForeground: makeColorAccessor(
      "text-insurge-foreground",
      ALLOWED_OPACITIES,
    ),
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
    text: makeColorAccessor("text-instack", ALLOWED_OPACITIES),
    textForeground: makeColorAccessor(
      "text-instack-foreground",
      ALLOWED_OPACITIES,
    ),
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
    text: makeColorAccessor("text-involve", ALLOWED_OPACITIES),
    textForeground: makeColorAccessor(
      "text-involve-foreground",
      ALLOWED_OPACITIES,
    ),
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
    text: makeColorAccessor("text-insure", ALLOWED_OPACITIES),
    textForeground: makeColorAccessor(
      "text-insure-foreground",
      ALLOWED_OPACITIES,
    ),
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
 * Usage examples:
 *  const theme = useServiceTheme();
 *  <div className={theme.text}> // base color
 *  <div className={theme.text(10)}> // 10% opacity variant
 *  <div className={theme.text(60)}> // 60% variant (if allowed)
 */
export function useServiceTheme(): ServiceTheme {
  const params = useParams<{ service?: string }>();
  const service = params?.service;
  const normalized = Array.isArray(service) ? service[0] : service;

  if (!normalized) return defaultTheme; // no param => default

  if (
    normalized &&
    Object.prototype.hasOwnProperty.call(serviceThemes, normalized)
  ) {
    return serviceThemes[normalized as ServiceType];
  }

  return defaultTheme; // fallback for unknown
}
