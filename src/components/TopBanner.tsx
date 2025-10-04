// src/components/TopBanner.tsx
"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type TopBannerProps = {
  variant?: "default" | "incore";
  className?: string;
  children?: React.ReactNode;
};

const TopBanner = ({
  variant = "default",
  className,
  children,
}: TopBannerProps) => {
  const pathname = usePathname() || "";
  const lc = pathname.toLowerCase();

  // Per-page gradients (90deg) encoded for Tailwind arbitrary properties
  let gradientClass =
    "[background:linear-gradient(90deg,#024397_0%,#E04A00_100%)]";

  if (lc.includes("instack")) {
    // inStack: linear 8338EC to 4F1EFF
    gradientClass =
      "[background:linear-gradient(90deg,#8338EC_0%,#4F1EFF_100%)]";
  } else if (lc.includes("insurge")) {
    // inSurge: linear FF990B to AF6C4C
    gradientClass =
      "[background:linear-gradient(90deg,#FF990B_0%,#AF6C4C_100%)]";
  } else if (lc.includes("insure")) {
    // inSure: linear 04E762 to 00B59A
    gradientClass =
      "[background:linear-gradient(90deg,#04E762_0%,#00B59A_100%)]";
  } else if (lc.includes("involve")) {
    // inVolve: linear 3A86FF to 0022FF
    gradientClass =
      "[background:linear-gradient(90deg,#3A86FF_0%,#0022FF_100%)]";
  } else if (variant === "incore") {
    // existing incore variant default
    gradientClass =
      "[background:linear-gradient(90deg,#164786_0%,#012E68_100%)]";
  } else {
    // default fallback
    gradientClass =
      "[background:linear-gradient(90deg,#024397_0%,#E04A00_100%)]";
  }

  return (
    <div
      className={cn(
        "p-2 text-center text-sm text-white",
        gradientClass,
        className,
      )}
      role="region"
      aria-label={variant === "incore" ? "inCORE announcement" : "Announcement"}
    >
      {children ?? (
        <>
          Get your business up & running with our unparalleled expertise | Use
          Code: <span className="font-bold">Welcomeind</span>
        </>
      )}
    </div>
  );
};

export default TopBanner;
