// Shared service context utilities for server components.
// Provides type-safe resolvers for service theme and content without relying on client hooks.

import { getServiceContent } from "@/app/incore/services/[service]/content";

// Core service and theme type definitions (migrated from deprecated hook)
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

// Default (non-service) theme mirrors the hook's defaultServiceTheme
export const defaultServiceTheme: ServiceTheme = {
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

export const incoreServiceTheme: ServiceTheme = {
  ...defaultServiceTheme,
  service: "incore",
};

export type ServiceKey = "insurge" | "instack" | "involve" | "insure";

const serviceKeys: ServiceKey[] = ["insurge", "instack", "involve", "insure"];
export function isServiceKey(v: string): v is ServiceKey {
  return (serviceKeys as string[]).includes(v);
}

// Theme map used for server resolution.
const themes: Record<ServiceKey, ServiceTheme> = {
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

export function getServiceTheme(service: ServiceKey): ServiceTheme {
  return themes[service];
}

export function getServiceContext(service: ServiceKey) {
  return {
    service,
    theme: getServiceTheme(service),
    content: getServiceContent(service),
  } as const;
}

export function allServiceParams() {
  return serviceKeys.map((service) => ({ service }));
}
