// src/components/TopBanner.tsx
import { cn } from "@/lib/utils";

type TopBannerProps = {
  variant?: "default" | "incore";
  className?: string;
  children?: React.ReactNode;
};

const TopBanner = ({ variant = "default", className, children }: TopBannerProps) => {
  // Gradients per spec
  const gradientClass =
    variant === "incore"
      ? "[background:linear-gradient(90deg,#164786_0%,#012E68_100%)]"
      : "[background:linear-gradient(90deg,#024397_0%,#E04A00_100%)]";

  return (
    <div
      className={cn(
        "text-white text-center p-2 text-sm",
        gradientClass,
        className
      )}
      role="region"
      aria-label={variant === "incore" ? "inCORE announcement" : "Announcement"}
    >
      {children ?? (
        <>
          Get your business up & running with our unparalleled expertise | Use Code:{" "}
          <span className="font-bold">Welcomeind</span>
        </>
      )}
    </div>
  );
};

export default TopBanner;
