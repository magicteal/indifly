import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type BentoItem = {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  image?: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn(
      "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",
      className
    )}>
      {children}
    </div>
  );
}

export function BentoCard({ title, description, image, className }: BentoItem) {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-2xl border border-black/10 bg-white",
      "dark:bg-[#0B0B0E]",
      className
    )}>
      {image && (
        <div className="absolute inset-0">
          {image}
        </div>
      )}
      <div className="relative z-10 p-4">
        {title && <div className="text-base font-semibold text-[#1B1B1F]">{title}</div>}
        {description && <div className="mt-1 text-sm text-[#3C3C3C]">{description}</div>}
      </div>
      {/* subtle overlay for contrast when using photos */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />
    </div>
  );
}
