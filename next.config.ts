import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "xynshcnkxdliapebmyaz.supabase.co",
      },
      {
        protocol: "https",
        hostname: "ccnecyspdifsqykhcpyz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
