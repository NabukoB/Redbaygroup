import type { MetadataRoute } from "next";
import { designs } from "@/lib/designs";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";
import { companies, projects, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-11-04");
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
    ...projects.filter((p) => p.slug).map((p) => page(`/projects/${p.slug}/`, 0.7)),
    page("/designs/", 0.8),
    ...designs.map((d) => page(`/designs/${d.slug}/`, 0.6)),
    page("/insights/", 0.6),
    ...insights.map((i) => page(`/insights/${i.slug}/`, 0.5, "yearly")),
    page("/perimeter-wall-calculator/", 0.9),
    page("/get-a-quote/", 0.9),
    page("/bill-of-quantities-service/", 0.9),
    page("/locations/", 0.8),
    ...locations.map((l) => page(`/locations/${l.slug}/`, 0.9)),
    page("/contact/", 0.8),
  ];
}
