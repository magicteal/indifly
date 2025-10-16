"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const [content, setContent] = useState("");
  const [sha, setSha] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await fetch(
        `/api/admin/blog?slug=${encodeURIComponent(slug)}`,
      );
      setLoading(false);
      if (!res.ok) {
        setError(await res.text());
        return;
      }
      const data = await res.json();
      setContent(data.content ?? "");
      setSha(data.sha ?? null);
    };
    load();
  }, [slug]);

  const save = async () => {
    setSaving(true);
    setError(null);
    const res = await fetch("/api/admin/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, content, sha }),
    });
    setSaving(false);
    if (!res.ok) setError(await res.text());
    else router.refresh();
  };

  const del = async () => {
    if (!sha) return;
    if (!confirm("Delete this post?")) return;
    const res = await fetch(
      `/api/admin/blog?slug=${encodeURIComponent(slug)}&sha=${encodeURIComponent(sha)}`,
      {
        method: "DELETE",
      },
    );
    if (res.ok) router.push("/admin/(protected)/blog");
    else setError(await res.text());
  };

  if (loading) return <div className="px-4 py-8 text-black">Loading…</div>;

  return (
    <div className="space-y-4 px-4 py-8 text-black">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Edit: {slug}</h1>
        <div className="space-x-2">
          {sha && (
            <button
              onClick={del}
              className="rounded bg-red-600 px-3 py-1 text-white"
            >
              Delete
            </button>
          )}
          <button
            onClick={save}
            className="rounded bg-primary px-3 py-1 text-primary-foreground"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={24}
        className="w-full rounded border bg-transparent px-3 py-2 font-mono text-sm text-black"
      />
    </div>
  );
}
