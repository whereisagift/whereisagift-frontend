/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/graphql",
        destination: "https://dev.whereisagift.com/graphql",
      },
    ];
  },
};

export default nextConfig;
