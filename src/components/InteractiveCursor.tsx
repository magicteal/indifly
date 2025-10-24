"use client";

import { useEffect, useRef, useState } from "react";

export default function InteractiveCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [prefix, setPrefix] = useState("in");
  const [label, setLabel] = useState("SURGE");
  const [color, setColor] = useState("#FF990B");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      let node: HTMLElement | null = target;
      while (node && !node.dataset.cursor) node = node.parentElement;
      if (node && node.dataset.cursor) {
        setPrefix(node.dataset.cursorPrefix ?? "in");
        setLabel(node.dataset.cursor ?? "SURGE");
        setColor(node.dataset.cursorColor ?? "#000");
        setVisible(true);
      }
    };

    const onOut = (e: MouseEvent) => {
      const related = e.relatedTarget as HTMLElement | null;
      // if leaving to another element that has cursor, keep it
      if (related) {
        let node: HTMLElement | null = related;
        while (node && !node.dataset.cursor) node = node.parentElement;
        if (node && node.dataset.cursor) return;
      }
      setVisible(false);
    };

    const loop = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.18;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.18;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%) scale(${visible ? 1 : 0.95})`;
        ref.current.style.opacity = visible ? "1" : "0";
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [visible]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[9999] opacity-0 transition-opacity duration-150"
      style={{ transform: "translate3d(0,0,0) translate(-50%,-50%)" }}
    >
      <div className="inline-flex items-center justify-center rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-black shadow-lg">
        <span className="text-[13px] font-bold text-[#01295C]">{prefix}</span>
        <span className="text-sm tracking-wider uppercase" style={{ color }}>
          {label}
        </span>
      </div>
    </div>
  );
}
