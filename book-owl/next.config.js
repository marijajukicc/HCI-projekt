/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENT_MANAGEMENT_API_KEY: process.env.CONTENT_MANAGEMENT_API_KEY,
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;