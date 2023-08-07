/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "http://sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
