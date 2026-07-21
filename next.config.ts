import type { NextConfig } from "next";

const isNetlifyBuild =
  process.env.BUILD_TARGET === "netlify" || process.env.NETLIFY === "true";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  typescript: {
    tsconfigPath: isNetlifyBuild ? "tsconfig.netlify.json" : "tsconfig.json",
  },
};

export default nextConfig;
