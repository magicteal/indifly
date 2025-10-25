import { cn } from "@/lib/utils";
import React from "react";

export type SvgComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export function Gradient({
  Cmp,
  className,
  svgClassName,
  children,
}: {
  Cmp: SvgComponent;
  className?: string;
  svgClassName?: string;
  children?: React.ReactNode;
}) {
  if (children) {
    return (
      <div className="relative z-0">
        {children}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 -z-1 select-none",
            className,
          )}
        >
          <Cmp className={cn("h-auto w-screen max-w-none", svgClassName)} />
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 z-0 select-none",
        className,
      )}
    >
      <Cmp className={cn("h-auto w-screen max-w-none", svgClassName)} />
    </div>
  );
}
