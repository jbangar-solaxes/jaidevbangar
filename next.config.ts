import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/lander",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
