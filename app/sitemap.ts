import type { MetadataRoute } from "next";
import { allContent, utilityPages } from "@/data/site";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const hubs = ["/", "/play", "/daily", "/party", "/tools", "/explain"];
  const pages = [...hubs, ...allContent.map((item) => item.href), ...utilityPages.map((item) => item.href)];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date("2026-05-13"),
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.7
  }));
}
