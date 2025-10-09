"use client";

import React, { useEffect, useState } from "react";

type Props = {
  items: string[];
};

const slugify = (s: string) =>
  s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ArticleTOC({ items }: Props) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!items || items.length === 0) return;

    const elList = items
      .map((t) => document.getElementById(slugify(t)))
      .filter(Boolean) as HTMLElement[];

    if (elList.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // find the entry with the largest intersectionRatio that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );

    elList.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    // set active immediately for visual feedback
    setActive(id);
  };

  return (
    <div className="rounded-xl border p-4">
      <div className="flex items-start gap-4">
        {/* gradient bar is shown per-item; reserve a thin gutter */}
        <div className="flex w-[6px] flex-col items-center">
          {/* empty column to align with item bars */}
        </div>

        <div className="min-w-0">
          <div className="font-semibold text-[#1B1B1F]">In this article</div>
          <ul className="mt-2 space-y-3 text-sm">
            {items.map((t) => {
              const id = slugify(t);
              const isActive = active === id;
              return (
                <li key={id} className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className={`w-[4px] rounded-full ${isActive ? "h-full self-stretch" : "mt-1 h-3"} [background:linear-gradient(180deg,#E04A00_30%,#FF915C_100%)]`}
                    style={{ flex: "0 0 4px" }}
                  />

                  <a
                    href={`#${id}`}
                    onClick={(e) => handleClick(e, id)}
                    className={`block text-slate-700 hover:underline ${isActive ? "font-semibold text-slate-900" : ""}`}
                  >
                    {t}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
