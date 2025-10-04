import { Container } from "@/components/ui/container";
import Image from "next/image";

// SVGs provided in public/home via SVGR loader
import Hexagon from "@public/home/hexagonINDsights.svg";
import TitleBrush from "@public/home/titieINDsights.svg";

type Card = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
};

const cards: Card[] = [
  {
    id: 1,
    title: "Lorem Ipsum blog Title",
    excerpt:
      "Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title",
    image: "/home/blog.png",
  },
  {
    id: 2,
    title: "Lorem Ipsum blog Title",
    excerpt:
      "Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title",
    image: "/home/blog.png",
  },
  {
    id: 3,
    title: "Lorem Ipsum blog Title",
    excerpt:
      "Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title Lorem Ipsum Subtext Title",
    image: "/home/blog.png",
  },
];

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
          {cards.map((card) => (
            <article
              key={card.id}
              className="z-2 flex flex-col rounded-2xl bg-white/95 p-6 shadow-[0_8px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5"
            >
              <h3 className="text-2xl font-extrabold text-[#0B2B4A]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                {card.excerpt}
              </p>

              <div className="mt-4 overflow-hidden rounded-xl">
                <Image
                  src={card.image}
                  alt="Blog preview"
                  width={640}
                  height={360}
                  className="h-56 w-full object-cover"
                />
              </div>

              <div className="mt-6">
                <button className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 font-medium text-slate-800 transition-colors hover:bg-slate-50 md:w-auto">
                  Read more{" "}
                  <span aria-hidden className="ml-2">
                    →
                  </span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
