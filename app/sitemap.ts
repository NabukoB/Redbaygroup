import type { MetadataRoute } from "next";
import { designs } from "@/lib/designs";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { changed } from "@/lib/lastmod";
import { companies, projects, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, lastModified: Date, changeFrequency: "monthly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });
  // Page files plus the data they show
  const home = changed("app/page.tsx", "lib/site.ts");
  const divisions = changed("lib/site.ts", "app/companies/[slug]/page.tsx", "lib/designs.ts");
  const projectData = changed("lib/site.ts", "app/projects/[slug]/page.tsx");
  const designData = changed("lib/designs.ts", "app/designs/[slug]/page.tsx");
  const serviceData = changed("lib/services.ts", "app/services/[slug]/page.tsx");
  const locationData = changed("lib/locations.ts", "app/locations/[slug]/page.tsx");
  return [
    page("/", 1, home),
    page("/about/", 0.8, changed("app/about/page.tsx", "lib/site.ts")),
    ...companies.map((c) => page(`/companies/${c.slug}/`, 0.9, divisions)),
    page("/projects/", 0.8, changed("app/projects/page.tsx", "lib/site.ts")),
    ...projects.filter((p) => p.slug).map((p) => page(`/projects/${p.slug}/`, 0.7, projectData)),
    page("/designs/", 0.8, changed("app/designs/page.tsx", "lib/designs.ts")),
    ...designs.map((d) => page(`/designs/${d.slug}/`, 0.6, designData)),
    page("/insights/", 0.6, changed("app/insights/page.tsx", "lib/insights.ts")),
    ...insights.map((i) => page(`/insights/${i.slug}/`, 0.5, new Date(i.date), "yearly")),
    page("/perimeter-wall-calculator/", 0.9, changed("app/perimeter-wall-calculator/page.tsx", "lib/wall.ts")),
    page("/roofing-sheets-calculator/", 0.8, changed("app/roofing-sheets-calculator/page.tsx", "lib/roofing-calc.ts")),
    page("/house-cost-calculator/", 0.8, changed("app/house-cost-calculator/page.tsx", "lib/house-cost.ts")),
    page("/get-a-quote/", 0.9, changed("app/get-a-quote/page.tsx", "lib/quote.ts")),
    page("/services/", 0.8, changed("app/services/page.tsx", "lib/services.ts")),
    ...services.map((x) => page(`/services/${x.slug}/`, 0.9, serviceData)),
    page("/bill-of-quantities-service/", 0.9, changed("app/bill-of-quantities-service/page.tsx")),
    page("/locations/", 0.8, changed("app/locations/page.tsx", "lib/locations.ts")),
    ...locations.map((l) => page(`/locations/${l.slug}/`, 0.9, locationData)),
    page("/contact/", 0.8, changed("app/contact/page.tsx", "lib/site.ts")),
  ];
}
