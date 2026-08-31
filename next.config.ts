import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/lander",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
