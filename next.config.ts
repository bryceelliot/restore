import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/website_ae22452a",
  assetPrefix: "/website_ae22452a",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.kelownaflooringsuperstore.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
