import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
    /** Small label shown to the right of the vertical line (white text) */
    label?: React.ReactNode;
    /** Main title with gradient text */
    title: React.ReactNode;
    /** Optional description/subtitle below the title (kept simple) */
    description?: React.ReactNode;
    className?: string;
    labelClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
};

/**
 * SectionHeader
 * - Left vertical gradient line auto-adjusts to the header height
 * - White label text next to the line
 * - Gradient title text: 8338EC → FF990B → 04E762 → 3A86FF
 */
export default function SectionHeader({
    label,
    title,
    description,
    className,
    labelClassName,
    titleClassName,
    descriptionClassName,
}: SectionHeaderProps) {
    return (
        <div className={cn("flex items-stretch gap-4", className)}>
            {/* Auto-stretch vertical gradient bar */}
            <span
                aria-hidden
                className={cn(
                    "self-stretch w-[4px] rounded-full",
                    "[background:linear-gradient(180deg,#E04A00_30%,#FF915C_100%)]"
                )}
            />

            <div className="min-w-0">
                {label ? (
                    <div className={cn("text-white/95 text-sm md:text-base", labelClassName)}>{label}</div>
                ) : null}
                <h2
                    className={cn(
                        "mt-1 font-bold leading-tight text-2xl md:text-4xl lg:text-5xl",
                        "bg-clip-text text-transparent",
                        "bg-[linear-gradient(90deg,#8338EC_0%,#FF990B_27%,#04E762_80%,#3A86FF_100%)]",
                        titleClassName
                    )}
                >
                    {title}
                </h2>




                {description ? (
                    <p className={cn("mt-3 text-white/80 text-base md:text-lg", descriptionClassName)}>
                        {description}
                    </p>
                ) : null}
            </div>
        </div>
    );
}
