import BlogCard from "@/components/BlogCard";
import Section from "@/components/section";
import SectionHeader from "@/components/section-header";
import { getRecentBlogs } from "@/lib/blogs";

export default async function IncoreINDsightsSection() {
  const recentBlogs = await getRecentBlogs();
  return (
    <Section
      className="relative overflow-hidden py-16 md:py-24"
      id="about-indifly-ventures"
    >
      <SectionHeader title="INDsights" />
      <div
        className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3"
        data-reveal-stagger
      >
        {recentBlogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </Section>
  );
}
