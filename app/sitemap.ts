import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";
import { companies, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-30");
  const page = (path: string, priority: number, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1),
    page("/about/", 0.8),
    ...companies.map((c) => page(`/companies/${c.slug}/`, 0.9)),
    page("/projects/", 0.8),
    page("/insights/", 0.6),
    ...insights.map((i) => page(`/insights/${i.slug}/`, 0.5, "yearly")),
    page("/contact/", 0.8),
  ];
}
