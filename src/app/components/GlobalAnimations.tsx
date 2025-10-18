"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * GlobalAnimations: one GSAP driver for the whole site.
 * Hooks:
 *  - .reveal-section → section fade + rise
 *  - .reveal-title → title pop-in
 *  - .reveal-image → image/illustration reveal
 *  - .reveal-left / .reveal-right → lateral motion
 *  - [data-reveal-stagger] → stagger immediate children
 * Skip any element with .no-reveal
 */
export default function GlobalAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Section reveal
      gsap.utils
        .toArray<HTMLElement>(".reveal-section:not(.no-reveal)")
        .forEach((el, idx) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 82%",
                end: "bottom 60%",
                toggleActions: "play none none reverse",
              },
              delay: idx === 0 ? 0.06 : 0,
              clearProps: "transform,opacity",
            },
          );
        });

      // Title pop
      gsap.utils
        .toArray<HTMLElement>(".reveal-title:not(.no-reveal)")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 12, scale: 0.985 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              clearProps: "transform,opacity",
            },
          );
        });

      // Image / artwork reveal
      gsap.utils
        .toArray<HTMLElement>(".reveal-image:not(.no-reveal)")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 18 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              clearProps: "transform,opacity",
            },
          );
        });

      // Lateral motion: left
      gsap.utils
        .toArray<HTMLElement>(".reveal-left:not(.no-reveal)")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, x: -24 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              clearProps: "transform,opacity",
            },
          );
        });

      // Lateral motion: right
      gsap.utils
        .toArray<HTMLElement>(".reveal-right:not(.no-reveal)")
        .forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, x: 24 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              clearProps: "transform,opacity",
            },
          );
        });

      // Stagger container: animates direct children
      gsap.utils
        .toArray<HTMLElement>("[data-reveal-stagger]:not(.no-reveal)")
        .forEach((container) => {
          const items = Array.from(container.children) as HTMLElement[];
          if (items.length === 0) return;
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 16 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              stagger: 0.08,
              scrollTrigger: {
                trigger: container,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
              clearProps: "transform,opacity",
            },
          );
        });
    });

    // refresh after DOM settled on route updates
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [pathname]);

  return null;
}
