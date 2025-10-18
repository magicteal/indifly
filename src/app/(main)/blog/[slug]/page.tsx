import { Container } from "@/components/container";
import { ContactForm } from "@/components/layout/ContactForm";
import { Footer } from "@/components/layout/Footer";
import { importBlogModule, listBlogSlugs } from "@/lib/blogs";
import { notFound } from "next/navigation";
import type { ComponentType } from "react";
import GradientFrame from "../gradient";

type MDXMeta = { authorNote?: string };

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let Post: ComponentType | null = null;
  let meta: MDXMeta | undefined;
  try {
    const mod = await importBlogModule(slug);
    Post = mod.default;
    meta = mod.meta;
  } catch {
    notFound();
  }

  return (
    <main className="pt-16" style={{ background: "#FFFFFF" }}>
      <Container className="my-20 md:my-24">
        {/* <GradientFrame variant="v2" className="opacity-50" /> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main column */}
          <article className="lg:col-span-2">
            {/* Render MDX content */}
            <div className="prose max-w-none prose-p:text-justify prose-ol:text-justify prose-ul:text-justify prose-hr:!border-black">
              {Post ? <Post /> : null}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author card with diagonal gradient */}
            <div className="overflow-hidden rounded-xl p-0">
              <div
                className="rounded-xl p-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #E04A00 0%, #FF915C 100%)",
                }}
              >
                <div className="text-sm leading-relaxed whitespace-pre-line text-white/95">
                  {meta?.authorNote ?? ""}
                </div>
              </div>
            </div>

            {/* Share card with same gradient */}
            <div className="overflow-hidden rounded-xl p-0">
              <div
                className="rounded-xl p-4 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #E04A00 0%, #FF915C 100%)",
                }}
              >
                <div className="font-semibold">Share with your community!</div>
                <div className="mt-3 flex gap-3">
                  <a className="rounded bg-white/20 px-3 py-2">FB</a>
                  <a className="rounded bg-white/20 px-3 py-2">In</a>
                  <a className="rounded bg-white/20 px-3 py-2">X</a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <GradientFrame variant="v1" className="opacity-70" />
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return listBlogSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

{
  /* Table of contents (from data) */
}
{
  /* {post.toc && post.toc.length > 0 ? (
              <ArticleTOC items={post.toc} />
            ) : (
              <div className="rounded-xl border p-4">
                <div className="font-semibold text-[#1B1B1F]">
                  In this article
                </div>
                <ul className="mt-2 space-y-3 text-sm text-slate-600">
                  {post.content.slice(0, 7).map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className={
                          "w-[4px] rounded-full [background:linear-gradient(180deg,#E04A00_30%,#FF915C_100%)]"
                        }
                      />
                      <span>
                        {c.substring(0, 60)}
                        {c.length > 60 ? "…" : ""}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )} */
}

{
  /* Full-width Related / INDsights style section */
}
{
  /* <section
        className="w-full overflow-hidden"
        style={{ background: "#FFEDE4" }}
      >
        <Container className="relative py-16 md:py-24">
          Subtle background decorations
          <div className="pointer-events-none select-none">
            <Hexagon
              className="absolute top-15 -left-35 scale-90 opacity-40 md:scale-100"
              width={420}
              height={402}
            />
            <Hexagon
              className="absolute -right-65 -bottom-30 hidden rotate-6 opacity-30 md:block"
              width={420}
              height={402}
            />
          </div>

          Title with brush stroke
          <div className="mb-10 flex w-full items-center justify-center md:mb-14">
            <div className="relative">
              <TitleBrush className="h-auto w-full" />
              <div className="absolute inset-0 grid place-items-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Related
                </h2>
              </div>
            </div>
          </div>

          Cards
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r) => (
              <BlogCard
                key={r.slug}
                title={r.title}
                excerpt={r.excerpt}
                image={r.image}
                slug={r.slug}
                date={r.date}
                readTime={r.readTime}
                tags={r.tags}
              />
            ))}
          </div>
        </Container>
      </section> */
}
