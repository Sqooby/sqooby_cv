/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for Cloudflare Pages
  output: "export",
  images: {
    unoptimized: true, // Required for static export
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Reduce render blocking
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
