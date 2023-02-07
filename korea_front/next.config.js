/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinifyLtrue: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["https://images.unsplash.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "http://localhost:8000/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
