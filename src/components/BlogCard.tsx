import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function BlogCard({
  title,
  slug,
  image,
}: {
  title: string;
  slug: string;
  image?: string;
}) {
  return (
    <Card className="flex flex-col justify-between rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-bold sm:text-2xl">{title}</CardTitle>
      </CardHeader>

      {image ? (
        <CardContent>
          <div className="overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={title}
              width={640}
              height={360}
              className="h-56 w-full object-cover"
            />
          </div>
        </CardContent>
      ) : null}

      <CardFooter>
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
      </CardFooter>
    </Card>
  );
}
