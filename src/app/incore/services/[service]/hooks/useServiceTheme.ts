/**
 * Simplified service theme hook (reverted): returns plain Tailwind class strings.
 * Supports insurge / instack / involve / insure plus incore (alias of default primary) and a default theme.
 */
"use client";

import { useParams, usePathname } from "next/navigation";

export type ServiceType =
  | "insurge"
  | "instack"
  | "involve"
  | "insure"
  | "incore";
export type ContentfulService = Exclude<ServiceType, "incore">;

export interface ServiceTheme {
  service: ServiceType | "default";
  text: string;
  textForeground: string;
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
  text: "text-primary",
  textForeground: "text-primary-foreground",
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

const incoreTheme: ServiceTheme = { ...defaultTheme, service: "incore" };

const serviceThemes: Record<Exclude<ServiceType, "incore">, ServiceTheme> = {
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

export function useServiceTheme(): ServiceTheme {
  const params = useParams<{ service?: string }>();
  const pathname = usePathname();
  const service = params?.service;
  const normalized = Array.isArray(service) ? service[0] : service;

  if (
    normalized &&
    Object.prototype.hasOwnProperty.call(serviceThemes, normalized)
  ) {
    return serviceThemes[normalized as Exclude<ServiceType, "incore">];
  }
  if (pathname?.startsWith("/incore")) return incoreTheme;
  return defaultTheme;
}
