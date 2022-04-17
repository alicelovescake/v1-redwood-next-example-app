/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: true,
    esmExternals: true,
    outputFileTracingRoot: undefined,
  },
}

module.exports = nextConfig
