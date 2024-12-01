/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: false,
    minimumCacheTTL: 60,
    deviceSizes: [640, 2048],
    imageSizes: [96, 256],
    formats: ['image/avif', 'image/webp']
  }
};

module.exports = nextConfig;
