/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "minotar.net",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
