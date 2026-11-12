import type { Metadata } from "next";
import Dashboard from "../components/Dashboard";
import { loadDashboardData } from "@/lib/data";

export const dynamic = "force-static";

// Standalone Legal Atlas: same content as /general, without the site
// navigation (Products / Playground / Docs) or the API sales callout.
export const metadata: Metadata = {
  title: "Legal Atlas | Cleo Legal Data",
  robots: { index: false, follow: false },
};

export default function AtlasPage() {
  const data = loadDashboardData();
  return <Dashboard data={data} isolated />;
}
