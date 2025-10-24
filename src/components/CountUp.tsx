"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  end: number;
  suffix?: string;
  duration?: number; // ms
  decimals?: number;
  className?: string;
  replayOnReveal?: boolean;
};

export default function CountUp({
  end,
  suffix = "",
  duration = 2000,
  decimals = 0,
  className,
  replayOnReveal = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState<number>(0);
  const started = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let io: IntersectionObserver | null = null;

    const startAnimation = () => {
      // If an animation is already running, don't start another.
      if (started.current) return;
      started.current = true;
      // reset visible value so replay is obvious
      setValue(0);

      const start = performance.now();
      const from = 0;
      const to = end;

      const step = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutQuad
        const eased = 1 - (1 - t) * (1 - t);
        const current = from + (to - from) * eased;
        setValue(current);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        } else {
          // animation finished
          started.current = false;
          rafRef.current = null;
          // If we don't want to replay, disconnect the observer to avoid further triggers
          if (!replayOnReveal && io) {
            io.disconnect();
            io = null;
          }
        }
      };

      // cancel any previous frame (defensive)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      rafRef.current = requestAnimationFrame(step);
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

    // Also listen for the global GSAP reveal event so we sync exactly with site reveals.
    // GSAP dispatches 'reveal:enter' on the revealed item (not bubbled), so listen on document
    // and check whether the revealed target contains our element.
    const onRevealGlobal = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (!t || !el) return;
      // If the revealed item is or contains our element, start animation
      if (t === el || t.contains(el) || el.contains(t)) {
        startAnimation();
      }
    };
    document.addEventListener("reveal:enter", onRevealGlobal as EventListener);

    // Also attach to the element itself (fallback for implementations that dispatch on the element)
    const onRevealLocal = () => startAnimation();
    el.addEventListener("reveal:enter", onRevealLocal as EventListener);

    return () => {
      if (io) io.disconnect();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      document.removeEventListener("reveal:enter", onRevealGlobal as EventListener);
      el.removeEventListener("reveal:enter", onRevealLocal as EventListener);
    };
  }, [end, duration, replayOnReveal]);

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
