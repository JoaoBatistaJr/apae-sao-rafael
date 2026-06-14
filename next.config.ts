import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  allowedDevOrigins: ["192.168.1.65"],
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { hostname: "www.svgrepo.com" },
      { hostname: "i.ibb.co" },
      { hostname: "drive.google.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "*.googleusercontent.com" },
      { hostname: "*.google.com" },
    ],
  },
};
export default nextConfig;
