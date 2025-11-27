import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ]
    // domains: ["cdn.sanity.io"], // ✅ add Sanity CDN here
  },
};

export default nextConfig;
