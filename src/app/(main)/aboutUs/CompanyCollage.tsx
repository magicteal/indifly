import Section from "@/components/section";
import Image from "next/image";
// Simple uniform grid version (no custom card components / no spans)

// Collage images sourced from /public/collage.
// Titles removed per request; keeping array minimal for performance.
const collageImages: string[] = [
  "/collage/1.JPG",
  "/collage/1756403305048.jpg",
  "/collage/CP-2 (1).JPG",
  "/collage/CP-4.JPG",
  "/collage/CP-5.png",
  "/collage/CP-6 (1).jpeg",
  "/collage/IMG_0765.JPG",
  "/collage/IMG_1135.JPG",
  "/collage/PVY_0350.JPG",
  "/collage/PVY_8455 (1) (1).JPG",
  "/collage/PVY_8944.JPG",
  "/collage/PVY_8976.JPG",
  "/collage/PVY_9251.JPG",
  "/collage/RD6_0127.JPG",
  "/collage/RD6_0277.JPG",
  "/collage/RD6_0295.JPG",
];

export function CompanyCollage() {
  return (
    <Section id="company-collage" className="py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-[#1B1B1F] md:text-2xl">
            Company Collage
          </h3>
          <p className="text-sm text-[#3C3C3C]">
            Moments from our journey and the ecosystem we are building.
          </p>
        </div>
        <div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          role="list"
          aria-label="Company photo collage"
        >
          {collageImages.map((src, i) => (
            <figure
              key={src}
              className="relative aspect-square w-full overflow-hidden rounded-2xl border border-black/10 bg-white dark:bg-[#0B0B0E]"
              role="listitem"
            >
              <Image
                src={src}
                alt="Company collage photo"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority={i < 2}
              />
            </figure>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default CompanyCollage;
