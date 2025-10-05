import { Container } from "@/components/container";

// SVGs provided in public/home via SVGR loader
import Hexagon from "@public/home/hexagonINDsights.svg";
import TitleBrush from "@public/home/titieINDsights.svg";

import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";

const featured = blogs.filter((b) => b.featured);

export default function INDsights() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ background: "#FFEDE4" }}
    >
      <Container className="relative py-16 md:py-24">
        {/* Subtle background decorations */}
        <div className="pointer-events-none select-none">
          {/* top-left hexagon */}
          <Hexagon
            className="absolute top-15 -left-35 scale-90 opacity-40 md:scale-100"
            width={420}
            height={402}
          />
          {/* bottom-right hexagon */}
          <Hexagon
            className="absolute -right-65 -bottom-30 hidden rotate-6 opacity-30 md:block"
            width={420}
            height={402}
          />
        </div>

        {/* Title with brush stroke */}
        <div className="mb-10 flex w-full items-center justify-center md:mb-14">
          {/* Brush */}
          <div className="relative">
            <TitleBrush className="h-auto w-full" />
            <div className="absolute inset-0 grid place-items-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                INDsights
              </h2>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((card) => (
            <BlogCard
              key={card.slug}
              title={card.title}
              excerpt={card.excerpt}
              image={card.image}
              slug={card.slug}
              date={card.date}
              readTime={card.readTime}
              tags={card.tags}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
