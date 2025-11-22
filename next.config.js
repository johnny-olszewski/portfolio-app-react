/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Disable image optimization to ensure images work in all environments
    // Next.js 15 may have issues with image optimization in some deployment scenarios
    unoptimized: true,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
