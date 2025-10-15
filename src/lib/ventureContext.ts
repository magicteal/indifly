export type VentureKey =
  | "indipe"
  | "sec2pay"
  | "indiconnect"
  | "indikendra"
  | "indinxt"
  | "indispeed";

// VentureTheme - standalone type for venture theming (doesn't extend ServiceTheme to keep ventures independent)
export type VentureTheme = {
  key: VentureKey;
  name: string;
  service: "default";
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
  buttonVariant:
    | "indipe"
    | "sec2pay"
    | "indiconnect"
    | "indikendra"
    | "indinxt"
    | "indispeed";
  buttonSecondaryVariant: string;
  cssVar: string;
  cssVarForeground: string;
  cssVarAccent: string;
};

const themes: Record<VentureKey, VentureTheme> = {
  indipe: {
    key: "indipe",
    name: "Indipe",
    service: "default",
    text: "bg-gradient-to-r from-[#E04A00] to-[#FF915C] bg-clip-text text-transparent",
    textForeground: "text-black",
    bg: "bg-white",
    bgAccent: "bg-[#FF915C]/10",
    bgForeground: "bg-white",
    border: "border-[#E04A00]/20",
    borderAccent: "border-[#FF915C]/40",
    gradientFrom: "#E04A00",
    gradientTo: "#FF915C",
    gradientFromAccent: "#FF915C",
    buttonVariant: "indipe",
    buttonSecondaryVariant: "secondary",
    cssVar: "#E04A00",
    cssVarForeground: "#000000",
    cssVarAccent: "#FF915C",
  },
  sec2pay: {
    key: "sec2pay",
    name: "Sec2Pay",
    service: "default",
    text: "bg-gradient-to-r from-[#006FFF] to-[#8EC0FF] bg-clip-text text-transparent",
    textForeground: "text-black",
    bg: "bg-white",
    bgAccent: "bg-[#8EC0FF]/10",
    bgForeground: "bg-white",
    border: "border-[#006FFF]/20",
    borderAccent: "border-[#8EC0FF]/40",
    gradientFrom: "#006FFF",
    gradientTo: "#8EC0FF",
    gradientFromAccent: "#8EC0FF",
    buttonVariant: "sec2pay",
    buttonSecondaryVariant: "secondary",
    cssVar: "#006FFF",
    cssVarForeground: "#000000",
    cssVarAccent: "#8EC0FF",
  },
  indiconnect: {
    key: "indiconnect",
    name: "Indiconnect",
    service: "default",
    text: "bg-gradient-to-r from-[#E04A00] to-[#FF915C] bg-clip-text text-transparent",
    textForeground: "text-black",
    bg: "bg-white",
    bgAccent: "bg-[#FF915C]/10",
    bgForeground: "bg-white",
    border: "border-[#E04A00]/20",
    borderAccent: "border-[#FF915C]/40",
    gradientFrom: "#E04A00",
    gradientTo: "#FF915C",
    gradientFromAccent: "#FF915C",
    buttonVariant: "indiconnect",
    buttonSecondaryVariant: "secondary",
    cssVar: "#E04A00",
    cssVarForeground: "#000000",
    cssVarAccent: "#FF915C",
  },
  indikendra: {
    key: "indikendra",
    name: "IndiKendra",
    service: "default",
    text: "bg-gradient-to-r from-[#006FFF] to-[#8EC0FF] bg-clip-text text-transparent",
    textForeground: "text-black",
    bg: "bg-white",
    bgAccent: "bg-[#8EC0FF]/10",
    bgForeground: "bg-white",
    border: "border-[#006FFF]/20",
    borderAccent: "border-[#8EC0FF]/40",
    gradientFrom: "#006FFF",
    gradientTo: "#8EC0FF",
    gradientFromAccent: "#8EC0FF",
    buttonVariant: "indikendra",
    buttonSecondaryVariant: "secondary",
    cssVar: "#006FFF",
    cssVarForeground: "#000000",
    cssVarAccent: "#8EC0FF",
  },
  indinxt: {
    key: "indinxt",
    name: "IndiNXT",
    service: "default",
    text: "bg-gradient-to-r from-[#E04A00] to-[#FF915C] bg-clip-text text-transparent",
    textForeground: "text-black",
    bg: "bg-white",
    bgAccent: "bg-[#FF915C]/10",
    bgForeground: "bg-white",
    border: "border-[#E04A00]/20",
    borderAccent: "border-[#FF915C]/40",
    gradientFrom: "#E04A00",
    gradientTo: "#FF915C",
    gradientFromAccent: "#FF915C",
    buttonVariant: "indinxt",
    buttonSecondaryVariant: "secondary",
    cssVar: "#E04A00",
    cssVarForeground: "#000000",
    cssVarAccent: "#FF915C",
  },
  indispeed: {
    key: "indispeed",
    name: "IndiSpeed",
    service: "default",
    text: "bg-gradient-to-r from-[#FF990B] to-[#AF6C4C] bg-clip-text text-transparent",
    textForeground: "text-black",
    bg: "bg-white",
    bgAccent: "bg-[#AF6C4C]/10",
    bgForeground: "bg-white",
    border: "border-[#FF990B]/20",
    borderAccent: "border-[#AF6C4C]/40",
    gradientFrom: "#FF990B",
    gradientTo: "#AF6C4C",
    gradientFromAccent: "#AF6C4C",
    buttonVariant: "indispeed",
    buttonSecondaryVariant: "secondary",
    cssVar: "#FF990B",
    cssVarForeground: "#000000",
    cssVarAccent: "#AF6C4C",
  },
};

export function getVentureTheme(key: VentureKey): VentureTheme {
  return themes[key];
}

export function getAllVentureThemes(): VentureTheme[] {
  return Object.values(themes);
}

// Convenience context similar to services: theme + content
import { getVentureContent } from "@/app/(main)/ventures/content";

export function getVentureContext(key: VentureKey) {
  const theme = getVentureTheme(key);
  const content = getVentureContent(key);
  return { venture: key, theme, content };
}
