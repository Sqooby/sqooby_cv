/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Static export for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
  },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Reduce render blocking
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
