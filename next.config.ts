import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["img.freepik.com", "exggfeypqucbibabxodx.supabase.co"], // Add any other domains as needed
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

export default nextConfig;
