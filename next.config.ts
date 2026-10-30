import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: Hostinger Premium serves plain files, no Node.js server
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
