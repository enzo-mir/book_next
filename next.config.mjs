/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const nextConfig = {
  headers: [
    {
      source: "/(.*).jpg",
      headers: [{ key: "Cache-Control", value: "public, max-age=31536000" }],
    },
  ],

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
