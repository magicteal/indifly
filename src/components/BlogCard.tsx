import Image from "next/image";
import Link from "next/link";
import React from "react";

type BlogCardProps = {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
};

export default function BlogCard({ title, excerpt, image, slug, date, readTime, tags, className = "" }: BlogCardProps) {
  return (
    <article className={`z-2 flex flex-col rounded-2xl bg-white/95 p-6 shadow-[0_8px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 ${className}`}>
      <div className="flex items-center justify-between text-sm text-slate-500">
        <div>{date ? new Date(date).toLocaleDateString() : null}</div>
        <div>{readTime}</div>
      </div>

  <h3 className="mt-2 text-2xl font-extrabold text-[#1B1B1F]">{title}</h3>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{excerpt}</p>

      <div className="mt-4 overflow-hidden rounded-xl">
        <Image src={image} alt={title} width={640} height={360} className="h-56 w-full object-cover" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="rounded-full border px-3 py-1 text-sm">{t}</span>
        ))}
      </div>

      <div className="mt-6">
        <Link href={`/blog/${slug}`} className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-50 md:w-auto">
          Read more
          <span aria-hidden className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}
