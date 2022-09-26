/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  images: {
    domains: [
      "images.unsplash.com",
      "upload.wikimedia.org",
      "commons.wikimedia.org",
    ],
  },
  nextConfig,
};
