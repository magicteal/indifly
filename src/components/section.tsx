import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ElementType } from "react";
import { Container, type ContainerProps } from "./container";

export type SectionProps<T extends ElementType = "section"> = {
  children: React.ReactNode;
  className?: string;
  /** Vertical padding for the section wrapper */
  py?: string; // e.g., "py-20"
  /** Optional background or borders applied to the section wrapper */
  wrapperClassName?: string;
  /** Include an inner Container to handle max-width and horizontal padding */
  withContainer?: boolean;
  /** Props to pass to inner Container when withContainer=true */
  containerProps?: Omit<ContainerProps, "children">;
  /** HTML tag/component for the wrapper */
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Section<T extends ElementType = "section">({
  children,
  className,
  py = "py-20",
  wrapperClassName,
  withContainer = true,
  containerProps,
  as,
  ...rest
}: SectionProps<T>) {
  const As = (as || "section") as ElementType;

  const content = withContainer ? (
    <Container {...containerProps}>{children}</Container>
  ) : (
    children
  );

  return (
    <As className={cn(py, wrapperClassName, className)} {...rest}>
      {content}
    </As>
  );
}

export default Section;
