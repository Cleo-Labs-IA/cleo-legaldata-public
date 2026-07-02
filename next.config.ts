import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    // /products retired — funnel to the new /coverage atlas (preserves SEO).
    return [
      { source: "/products", destination: "/coverage", permanent: true },
      // /pricing retired 2026-07-02 — public plans pulled; funnel to /general.
      { source: "/pricing", destination: "/general", permanent: true },
    ];
  },
};

export default config;
