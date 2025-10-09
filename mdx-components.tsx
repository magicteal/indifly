import type { MDXComponents } from "mdx/types";
import Link from "next/link";

const components: MDXComponents = {
  a: ({ href, children, ...rest }) => {
    return (
      <Link href={href || "#"} {...rest}>
        {children}
      </Link>
    );
  },
};

export function useMDXComponents(): MDXComponents {
  return components;
}
