import BlogCard from "@/components/BlogCard";
import { Container } from "@/components/container";
import { Gradient } from "@/components/Gradient";
import { getAllBlogs } from "@/lib/blogs";
import Bottom1 from "@public/companies/bg/bottom1.svg?flex";
import Top1 from "@public/companies/bg/top1.svg?flex";

export default async function BlogPage() {
  const posts = await getAllBlogs();

  return (
    <main style={{ background: "#FFFFFF" }}>
      <Gradient Cmp={Top1} className="-top-12">
        <Container className="pt-24 pb-16 md:pt-32 md:pb-24">
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
      </Gradient>

      <Gradient Cmp={Bottom1}>
        <Container className="pt-12 pb-16 md:pt-16 md:pb-24">
          {/* List */}
          <section>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </div>

            {/* Pagination */}
            {/* Pagination intentionally omitted for MDX-based listing (add later if needed) */}
          </section>
        </Container>
      </Gradient>
    </main>
  );
}
