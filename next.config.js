/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Enable image optimization for local images
    unoptimized: false,
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
