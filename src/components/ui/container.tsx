import { cn } from "@/lib/utils";

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  /**
   * Controls the max-width of the container
   * - sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px, 7xl: 80rem
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl";
  /** Horizontal padding utility, defaults responsive */
  px?: string;
};

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "7xl": "max-w-7xl",
};

export function Container({
  children,
  className,
  size = "7xl",
  px = "px-4 md:px-6 lg:px-8",
  ...props
}: ContainerProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto", sizeMap[size], px, className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
