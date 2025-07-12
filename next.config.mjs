const isLocal = process.env.IS_LOCAL === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  async rewrites() {
    // проверяем, что переменная окружения установлена
    if (!isLocal) {
      return [];
    }

    return [
      {
        source: "/graphql",
        destination: "https://dev.whereisagift.com/graphql",
      },
    ];
  },
};

export default nextConfig;
