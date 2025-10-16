"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Item = { slug: string; sha: string };

export default function BlogAdminList() {
  const [items, setItems] = useState<Item[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await fetch("/api/admin/blog?list=1");
      setLoading(false);
      if (!res.ok) {
        setError(await res.text());
        return;
      }
      const data = (await res.json()) as { items: Item[] };
      setItems(data.items);
    };
    load();
  }, []);

  return (
    <div className="space-y-4 px-4 py-8 text-black">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Blog posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded bg-primary px-3 py-1 text-primary-foreground"
        >
          New post
        </Link>
      </div>
      {loading && <p>Loading…</p>}
      {error && <p className="text-sm text-red-500">Failed to load</p>}
      <ul className="space-y-2">
        {items?.map((it: Item) => (
          <li
            key={it.slug}
            className="flex items-center justify-between rounded border px-3 py-2"
          >
            <span>{it.slug}</span>
            <div className="space-x-2">
              <Link
                href={`/admin/blog/edit/${encodeURIComponent(it.slug)}`}
                className="underline"
              >
                Edit
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
