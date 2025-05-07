/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "build",
  poweredByHeader: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["https://lite.lifebank.ng/"],
    path: "https://lite.lifebank.ng/",
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },
};
module.exports = nextConfig;
