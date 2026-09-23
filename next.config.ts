import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kenny-mack",
  assetPrefix: "/kenny-mack",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
