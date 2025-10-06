import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Grab the existing rule that handles general asset (including SVG) imports
    const fileLoaderRule = config.module.rules.find(
      (rule: { test?: { test: (arg0: string) => unknown } }) =>
        rule.test?.test?.(".svg"),
    );

    // Defensive: if for some reason we didn't find it, just return config untouched
    if (!fileLoaderRule) return config;

    // Rebuild SVG handling with three tiers:
    // 1. ?url  -> original file loader behavior (keeps file URL for <Image> / CSS)
    // 2. ?flex -> SVGR with removeDimensions (allows Tailwind width/height control)
    // 3. base  -> standard SVGR component (retains intrinsic width/height)
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url stays as a file URL
      },
      {
        test: /\.svg$/i,
        resourceQuery: /flex/, // *.svg?flex => dimensionless scalable component
        issuer: fileLoaderRule.issuer,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  // Remove width/height so CSS can drive sizing
                  "removeDimensions",
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        // Exclude the explicit query variants (?url and ?flex)
        resourceQuery: { not: [/url/, /flex/] },
        use: ["@svgr/webpack"], // default SVGR component (keeps intrinsic size)
      },
    );

    // Exclude SVG from the original file loader now that we have custom handling
    // Mutate the located rule to exclude SVG (narrow its type minimally to allow mutation)
    type MutableRule = typeof fileLoaderRule & { exclude?: RegExp };
    (fileLoaderRule as MutableRule).exclude = /\.svg$/i;

    return config;
  },
  turbopack: {
    // NOTE: Turbopack currently applies one rule; query-differentiated SVGR options
    // (like removeDimensions) aren't individually configurable here yet.
    // The ?flex behavior is guaranteed in webpack (prod build / when disabling Turbopack).
    // For consistent local testing you can run with:
    //   PowerShell:  $env:NEXT_DISABLE_TURBOPACK=1; npm run dev
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
