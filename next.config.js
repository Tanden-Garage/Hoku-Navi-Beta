/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "custom",
    domains: ["hubcnavi.net"],
  },
}

module.exports = nextConfig
