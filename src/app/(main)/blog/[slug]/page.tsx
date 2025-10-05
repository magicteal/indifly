import { blogs } from "@/data/blogs";
import { Container } from "@/components/ui/container";
import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import Hexagon from "@public/home/hexagonINDsights.svg";
import TitleBrush from "@public/home/titieINDsights.svg";
import { Linkedin } from "lucide-react";
import ArticleTOC from "@/components/ArticleTOC";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "../../(home)/Footer";
import GradientFrame from "../gradient";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogs.find((b) => b.slug === params.slug);
  if (!post) return <div className="p-8">Post not found</div>;

  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  // simple slugify for anchor ids
  const slugify = (s: string) =>
    s
      .toString()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <main className="pt-16" style={{ background: "#FFFFFF" }}>
      <Container className=" mt-20 md:mt-24">
        <GradientFrame variant="v2" className="opacity-50" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Main column */}
          <article className="lg:col-span-2">
            <div className="relative z-10">
              <Image src={post.image} alt={post.title} width={1200} height={600} className="w-full object-cover" />
            </div>


            <h1 className="mt-6 text-3xl font-bold text-[#1B1B1F]">{post.title}</h1>

            <div className="mt-4 space-y-6 text-[#0B2B4A]">
              {post.toc && post.toc.length > 0 ? (
                // if toc exists, assume content array aligns with toc headings
                post.toc.map((heading, i) => (
                  <section key={i} id={slugify(heading)}>
                    <h3 className="mt-6 text-xl font-semibold">{heading}</h3>
                    <p className="mt-2 leading-relaxed">{post.content[i] ?? ""}</p>
                  </section>
                ))
              ) : (
                // fallback: render paragraphs
                
                post.content.map((p, i) => (
                  
                  <p key={i} className="leading-relaxed">
                    
                    {p}
                  </p>
                ))
              )}
            </div>

            {/* Related posts (moved below as full-width section) */}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Author card with diagonal gradient */}
            <div className="rounded-xl overflow-hidden p-0">
              <div
                className="p-4 rounded-xl text-white"
                style={{
                  background: "linear-gradient(135deg, #E04A00 0%, #FF915C 100%)",
                }}
              >
                <div className="flex flex-col  gap-4">
                  <div className="flex items-center gap-2">
                    <Image src={post.author?.avatar || '/home/blog.png'} alt={post.author?.name || 'Author'} width={100} height={100} className="rounded-xl h-20" />
                    <a href={post.author?.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white/20 p-2">
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold text-lg text-white">{post.author?.name ?? 'Author'}</div>
                    {post.author?.role && (
                      <div className="text-sm text-white/90">{post.author.role}</div>
                    )}
                    {post.author?.experience && (
                      <div className="mt-2 text-sm text-white/90">{post.author.experience}</div>
                    )}
                    {post.author?.bio && (
                      <div className="mt-2 text-sm text-white/90">{post.author.bio}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Share card with same gradient */}
            <div className="rounded-xl overflow-hidden p-0">
              <div className="p-4 rounded-xl text-white" style={{ background: "linear-gradient(135deg, #E04A00 0%, #FF915C 100%)" }}>
                <div className="font-semibold">Share with your community!</div>
                <div className="mt-3 flex gap-3">
                  <a className="px-3 py-2 rounded bg-white/20">FB</a>
                  <a className="px-3 py-2 rounded bg-white/20">In</a>
                  <a className="px-3 py-2 rounded bg-white/20">X</a>
                </div>
              </div>
            </div>

            {/* Table of contents (from data) */}
            {post.toc && post.toc.length > 0 ? (
              <ArticleTOC items={post.toc} />
            ) : (
              <div className="rounded-xl border p-4">
                <div className="font-semibold text-[#1B1B1F]">In this article</div>
                <ul className="mt-2 space-y-3 text-sm text-slate-600">
                  {post.content.slice(0, 7).map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span aria-hidden className={"w-[4px] rounded-full [background:linear-gradient(180deg,#E04A00_30%,#FF915C_100%)]"} />
                      <span>{c.substring(0, 60)}{c.length > 60 ? '…' : ''}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Container>

      {/* Full-width Related / INDsights style section */}
      <section className="w-full overflow-hidden" style={{ background: "#FFEDE4" }}>
        <Container className="relative py-16 md:py-24">
          {/* Subtle background decorations */}
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

          {/* Title with brush stroke */}
          <div className="mb-10 flex w-full items-center justify-center md:mb-14">
            <div className="relative">
              <TitleBrush className="h-auto w-full" />
              <div className="absolute inset-0 grid place-items-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">Related</h2>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((r) => (
              <BlogCard key={r.slug} title={r.title} excerpt={r.excerpt} image={r.image} slug={r.slug} date={r.date} readTime={r.readTime} tags={r.tags} />
            ))}
          </div>

        </Container>

      </section>

      <div className=" relative overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <GradientFrame variant="v1" className="opacity-70" />
          <div className="relative z-10">
            <ContactForm title="Contact Us" description="We are committed to processing the information in order to contact you and talk about your project." />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
