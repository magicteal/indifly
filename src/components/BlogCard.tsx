import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

type BlogCardProps = {
  title: string;
  slug: string;
  excerpt?: string;
  image?: string;
  date?: string;
  readTime?: string;
  tags?: string[];
  className?: string;
};

export default function BlogCard({
  title,
  slug,
  excerpt,
  image,
  // date,
  // readTime,
  // tags,
  className = "",
}: BlogCardProps) {
  return (
    <article
      className={`z-2 flex flex-col justify-between rounded-2xl bg-white/95 p-6 shadow-[0_8px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 ${className}`}
    >
      {/* <div className="flex items-center justify-between text-sm text-slate-500">
        <div>{date ? new Date(date).toLocaleDateString() : null}</div>
        <div>{readTime}</div>
      </div> */}

      <h3 className="mt-2 text-xl font-bold text-black sm:text-2xl">{title}</h3>
      {excerpt ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          {excerpt}
        </p>
      ) : null}

      {image ? (
        <div className="mt-4 overflow-hidden rounded-xl">
          <Image
            src={image}
            alt={title}
            width={640}
            height={360}
            className="h-56 w-full object-cover"
          />
        </div>
      ) : null}

      {/* <div className="mt-4 flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span key={t} className="rounded-full border px-3 py-1 text-sm">
            {t}
          </span>
        ))}
      </div> */}

      <div className="mt-6">
        <Button
          variant="outline"
          size="lg"
          className="w-full rounded-full"
          asChild
        >
          <Link href={`/blog/${slug}`}>
            Read more
            <span aria-hidden className="ml-2">
              →
            </span>
          </Link>
        </Button>
      </div>
    </article>
  );
}
