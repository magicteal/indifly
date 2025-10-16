import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type BlogMeta = {
  title?: string;
  authorNote?: string;
  date?: string;
  excerpt?: string;
};

export type BlogModule = { default: ComponentType; meta?: BlogMeta };

export const BLOG_CONTENT_DIR = path.join(process.cwd(), "src", "content");

export function listBlogSlugs(): string[] {
  return fs
    .readdirSync(BLOG_CONTENT_DIR)
    .filter((f) => f.toLowerCase().endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/i, ""));
}

export async function importBlogModule(slug: string): Promise<BlogModule> {
  const mod = (await import(
    /* webpackInclude: /\.mdx$/ */ `@/content/${slug}.mdx`
  )) as BlogModule;
  return mod;
}

export type BlogListItem = { slug: string; title: string; date?: string };

/**
 * Returns the most recent blogs (default 3), sorted by:
 * 1) meta.date if present (ISO recommended)
 * 2) file modified time as a fallback
 */
export async function getRecentBlogs(limit = 3): Promise<BlogListItem[]> {
  const slugs = listBlogSlugs();
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await importBlogModule(slug);
      const title = mod.meta?.title ?? slug;
      const date = mod.meta?.date;
      const filePath = path.join(BLOG_CONTENT_DIR, `${slug}.mdx`);
      let ts = date ? new Date(date).getTime() : Number.NaN;
      if (Number.isNaN(ts)) {
        try {
          ts = fs.statSync(filePath).mtimeMs;
        } catch {
          ts = 0;
        }
      }
      return { slug, title, date, ts } as const;
    }),
  );
  const sorted = items.sort((a, b) => b.ts - a.ts);
  return sorted
    .slice(0, limit)
    .map(({ slug, title, date }) => ({ slug, title, date }));
}
