import type { NextConfig } from "next";
import path from "node:path";

const config: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: path.join(__dirname),
  /* Multi-zone: this site is also served under cleolabs.co/legal-data/* via a
     rewrite from the cleo-landing app, so no visitor sees this sub-domain.
     assetPrefix namespaces the _next assets under /legal-data-static so they
     never collide with the landing app's own /_next assets. Assets are served
     at /legal-data-static/_next/… on THIS domain too, so the standalone site
     keeps working. Next 16 needs no extra static-asset rewrite (docs: the
     beforeFiles rule is only required < Next 15). */
  assetPrefix: "/legal-data-static",
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
