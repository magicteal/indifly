import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
export const runtime = "nodejs";

const GH_TOKEN = process.env.GITHUB_TOKEN!;
const GH_OWNER = process.env.GITHUB_OWNER!;
const GH_REPO = process.env.GITHUB_REPO!;
const GH_BRANCH = process.env.GITHUB_BRANCH || "main";

function ghHeaders() {
  return {
    Authorization: `Bearer ${GH_TOKEN}`,
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  } as const;
}

const basePath = "src/content";

export async function GET(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const list = searchParams.get("list");

  if (list === "1") {
    // List all .mdx files under src/content
    const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${basePath}?ref=${GH_BRANCH}`;
    const res = await fetch(url, { headers: ghHeaders(), cache: "no-store" });
    if (!res.ok)
      return NextResponse.json(
        { error: await res.text() },
        { status: res.status },
      );
    const data = (await res.json()) as Array<{
      name: string;
      path: string;
      sha: string;
    }>;
    const items = data
      .filter((f) => f.name.toLowerCase().endsWith(".mdx"))
      .map((f) => ({ slug: f.name.replace(/\.mdx$/i, ""), sha: f.sha }));
    return NextResponse.json({ items });
  }

  if (!slug)
    return NextResponse.json({ error: "Missing slug" }, { status: 400 });
  const path = `${basePath}/${slug}.mdx`;
  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${encodeURIComponent(path)}?ref=${GH_BRANCH}`;
  const res = await fetch(url, { headers: ghHeaders(), cache: "no-store" });
  if (res.status === 404) return NextResponse.json({ content: "", sha: null });
  if (!res.ok)
    return NextResponse.json(
      { error: await res.text() },
      { status: res.status },
    );
  const data = (await res.json()) as {
    content: string;
    sha: string;
    encoding: string;
  };
  const raw = Buffer.from(
    data.content,
    data.encoding as BufferEncoding,
  ).toString("utf-8");
  return NextResponse.json({ content: raw, sha: data.sha });
}

export async function POST(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await req.json()) as {
    slug: string;
    content: string;
    sha?: string;
    message?: string;
  };
  const { slug, content, sha, message } = body;
  if (!slug || !content)
    return NextResponse.json(
      { error: "Missing slug/content" },
      { status: 400 },
    );
  const path = `${basePath}/${slug}.mdx`;
  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${encodeURIComponent(path)}`;
  const payload = {
    message: message || `chore(blog): ${sha ? "update" : "create"} ${slug}.mdx`,
    content: Buffer.from(content, "utf-8").toString("base64"),
    sha,
    branch: GH_BRANCH,
  };
  const res = await fetch(url, {
    method: "PUT",
    headers: { ...ghHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok)
    return NextResponse.json(
      { error: await res.text() },
      { status: res.status },
    );
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug");
  const sha = searchParams.get("sha");
  if (!slug || !sha)
    return NextResponse.json({ error: "Missing slug/sha" }, { status: 400 });
  const path = `${basePath}/${slug}.mdx`;
  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${encodeURIComponent(path)}`;
  const payload = {
    message: `chore(blog): delete ${slug}.mdx`,
    sha,
    branch: GH_BRANCH,
  };
  const res = await fetch(url, {
    method: "DELETE",
    headers: { ...ghHeaders(), "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok)
    return NextResponse.json(
      { error: await res.text() },
      { status: res.status },
    );
  return NextResponse.json({ ok: true });
}
