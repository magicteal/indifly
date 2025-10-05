import { Container } from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { ContactForm } from "@/components/ContactForm";

import BlogCard from "@/components/BlogCard";
import { Footer } from "../(home)/Footer";
import GradientFrame from "./gradient";

const PAGE_SIZE = 6;

export default function BlogPage({ searchParams }: { searchParams?: { page?: string } }) {
  const page = parseInt(searchParams?.page || "1");
  const start = (page - 1) * PAGE_SIZE;
  const paged = blogs.slice(start, start + PAGE_SIZE);

  const featured = blogs.find((b) => b.featured) || blogs[0];

  return (
    <main style={{ background: "#FFFFFF" }}>
      {/* Top container: header + featured hero with gradient v2 */}
      <div className="relative ">
        <GradientFrame variant="v2" className="opacity-50" />
        <Container className=" pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#3C3C3C]">Catch Up with Our <span className="text-[#D15A31]">Latest Articles</span></h1>
            <p className="mt-3 text-base text-[#3C3C3C] max-w-2xl mx-auto">
              Catch up with our latest news and stay in the loop on recent updates, insightful stories, and exciting announcements shaping our journey forward!
            </p>
          </div>

          {/* Featured */}
          {featured && (
            <section className="mt-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 items-center">
                <div className="rounded-xl overflow-hidden">
                  <Image src={featured.image} alt={featured.title} width={800} height={560} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="rounded-xl p-8 shadow-lg text-[#1B1B1F]">
                  <div className="text-sm text-slate-500 ">{new Date(featured.date).toLocaleDateString()} • {featured.readTime}</div>
                  <h2 className="mt-2 text-2xl font-bold">{featured.title}</h2>
                  <p className="mt-3 text-slate-700">{featured.excerpt}</p>
                  <div className="mt-4 flex gap-2 ">
                    {featured.tags?.map((t) => (
                      <span key={t} className="rounded-2xl border-2 border-[#1B1B1F] px-3 py-1 text-sm">{t}</span>
                    ))}
                  </div>
                  <Link href={`/blog/${featured.slug}`} className="inline-block mt-6 rounded-full bg-[#D15A31] text-white px-5 py-2">Read article</Link>
                </div>
              </div>
            </section>
          )}
        </Container>
      </div>

      {/* Gradient background wrapper for all sections below hero */}
      <div className="relative">
        <GradientFrame className="opacity-40" />

        <Container className="pt-12 pb-16 md:pt-16 md:pb-24 relative z-10">
          {/* List */}
          <section >

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {paged.map((b) => (
                <BlogCard key={b.slug} title={b.title} excerpt={b.excerpt} image={b.image} slug={b.slug} date={b.date} readTime={b.readTime} tags={b.tags} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center gap-2">
              {Array.from({ length: Math.ceil(blogs.length / PAGE_SIZE) }).map((_, i) => (
                <Link key={i} href={`/blog?page=${i + 1}`} className={`px-3 py-1 rounded ${i + 1 === page ? "bg-[#D15A31] text-white" : "border"}`}>
                  {i + 1}
                </Link>
              ))}
            </div>
          </section>
        </Container>
        <div className=" relative overflow-hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <GradientFrame variant="v1" className="opacity-40" />
            <div className="relative z-10">
              <ContactForm title="Contact Us" description="We are committed to processing the information in order to contact you and talk about your project." />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
