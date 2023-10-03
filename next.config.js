/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "flagcdn.com",
      "media.movieofthenight.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
    ],
  },
};

module.exports = nextConfig;
