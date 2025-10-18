import BlogCard from "@/components/BlogCard";
import { Container } from "@/components/container";
import { importBlogModule, listBlogSlugs } from "@/lib/blogs";
import GradientFrame from "./gradient";

export default async function BlogPage() {
  const slugs = listBlogSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const mod = await importBlogModule(slug);
      return { slug, title: mod.meta?.title ?? slug };
    }),
  );

  return (
    <main style={{ background: "#FFFFFF" }}>
      {/* Top container: header + featured hero with gradient v2 */}
      <div className="relative">
        <GradientFrame variant="v2" className="opacity-50" />
        <Container className="relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#3C3C3C]">
              Catch Up with Our{" "}
              <span className="text-[#D15A31]">Latest Articles</span>
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-base text-[#3C3C3C]">
              Catch up with our latest news and stay in the loop on recent
              updates, insightful stories, and exciting announcements shaping
              our journey forward!
            </p>
          </div>
        </Container>
      </div>

      {/* Gradient background wrapper for all sections below hero */}
      <div className="relative">
        <GradientFrame className="opacity-40" />

        <Container className="relative z-10 pt-12 pb-16 md:pt-16 md:pb-24">
          {/* List */}
          <section>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {posts.map((b) => (
                <BlogCard key={b.slug} title={b.title} slug={b.slug} />
              ))}
            </div>

            {/* Pagination */}
            {/* Pagination intentionally omitted for MDX-based listing (add later if needed) */}
          </section>
        </Container>
      </div>
    </main>
  );
}
