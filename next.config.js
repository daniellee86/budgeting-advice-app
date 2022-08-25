/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: './',
  optimizeFonts: false,
  trailingSlash: true,
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig
