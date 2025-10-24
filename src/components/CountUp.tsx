"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number; // ms
  decimals?: number;
  className?: string;
};

export default function CountUp({
  end,
  suffix = "",
  duration = 2000,
  decimals = 0,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState<number>(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let io: IntersectionObserver | null = null;

    const startAnimation = () => {
      if (started.current) return;
      started.current = true;
      // animate
      const start = performance.now();
      const from = 0;
      const to = end;

      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutQuad
        const eased = 1 - (1 - t) * (1 - t);
        const current = from + (to - from) * eased;
        setValue(current);
        if (t < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
      if (io) {
        io.disconnect();
        io = null;
      }
    };

    // Start when element is visible in viewport (fallback)
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
          }
        });
      },
      { threshold: 0.3 }
    );

    io.observe(el);

    // Also listen for the global GSAP reveal event so we sync exactly with site reveals
    const onReveal = () => startAnimation();
    el.addEventListener("reveal:enter", onReveal as EventListener);

    return () => {
      if (io) io.disconnect();
      el.removeEventListener("reveal:enter", onReveal as EventListener);
    };
  }, [end, duration]);

  const formatter = (v: number) => {
    if (decimals > 0) return v.toFixed(decimals) + (suffix ?? "");
    return Math.round(v).toString() + (suffix ?? "");
  };

  return (
    <span ref={ref} className={className} aria-live="polite">
      {formatter(value)}
    </span>
  );
}
