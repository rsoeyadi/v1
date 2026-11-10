/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Match the profile photo's display width at 1x and 2x.
    imageSizes: [16, 32, 48, 64, 96, 128, 200, 256, 384, 400],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

module.exports = nextConfig;
