/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",      // replaces next export
  basePath: "/snappy",   // repo name
  assetPrefix: "/snappy/",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
