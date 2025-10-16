"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NewPostPage() {
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState(
    "---\ntitle: New Post\ndate: \nexcerpt: \n---\n\nWrite your content here…\n",
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const save = async () => {
    setSaving(true);
    setError(null);
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, content }),
    });
    setSaving(false);
    if (res.ok) {
      router.push(`/admin/edit/${encodeURIComponent(slug)}`);
    } else {
      setError(await res.text());
    }
  };

  return (
    <div className="space-y-4 px-4 py-8 text-black">
      <h1 className="text-xl font-semibold">New post</h1>
      <div className="space-y-2">
        <label className="block text-sm">Slug</label>
        <input
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="my-first-post"
          className="w-full rounded border bg-transparent px-3 py-2 text-black"
        />
      </div>
      <div className="space-y-2">
        <label className="block text-sm">Content (MDX)</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={20}
          className="w-full rounded border bg-transparent px-3 py-2 font-mono text-sm text-black"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        disabled={saving || !slug}
        onClick={save}
        className="rounded bg-primary px-3 py-1 text-primary-foreground"
      >
        {saving ? "Saving…" : "Create"}
      </button>
    </div>
  );
}
