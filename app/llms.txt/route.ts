// llms.txt: a plain-text guide to the site for AI assistants and agents (llmstxt.org).
// Built from the same data as the pages, so it updates with every new project or guide.
import { designs } from "@/lib/designs";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";
import { companies, faqs, projects, site } from "@/lib/site";

export const dynamic = "force-static";

const u = (path: string) => `${site.url}${path}`;

export function GET() {
  const withPages = projects.filter((p) => p.slug && p.photos?.length);
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.legal} is an ${site.nca} building contractor registered with the National Construction Authority of Kenya, based in ${site.location}. Redbay Group builds homes, schools, perimeter walls and interiors, and installs solar and wind power, across Kenya.`,
    "",
    "## Contact",
    "",
    `- Phone and WhatsApp: ${site.phone}`,
    `- Email: ${site.email}`,
    `- WhatsApp link: https://wa.me/${site.whatsapp}`,
    `- Office: ${site.location}, Kenya`,
    `- Contact page: ${u("/contact/")}`,
    "",
    "## Pricing",
    "",
    "- Quotes are itemised bills of quantities with one fixed price, quoted before VAT.",
    "- Perimeter walls: from KSh 14,000 per running metre for a wall 2.4 m high on a foundation 0.8 m deep, before VAT; gate priced separately.",
    `- [Perimeter wall cost calculator](${u("/perimeter-wall-calculator/")}): instant estimate from the boundary length.`,
    `- [Bill of quantities service](${u("/bill-of-quantities-service/")}): itemised BoQ prepared from your drawings; fee quoted before starting.`,
    `- [Get a quote](${u("/get-a-quote/")}): short form that opens WhatsApp with project details.`,
    "",
    "## Companies",
    "",
    ...companies.map((c) => `- [${c.name}](${u(`/companies/${c.slug}/`)}): ${c.text}`),
    "",
    "## Areas served",
    "",
    ...locations.map((l) => `- [${l.title}](${u(`/locations/${l.slug}/`)}): ${l.towns.join(", ")}`),
    "",
    "## Projects",
    "",
    ...withPages.map((p) => `- [${p.name}, ${p.place}](${u(`/projects/${p.slug}/`)}): ${p.summary}`),
    "",
    "## Guides",
    "",
    ...insights.map((g) => `- [${g.title}](${u(`/insights/${g.slug}/`)}): ${g.description}`),
    "",
    "## Frequently asked questions",
    "",
    ...faqs.flatMap((f) => [`### ${f.q}`, "", f.a, ""]),
    "## Optional",
    "",
    `- [Home designs](${u("/designs/")}): ${designs.length} client-commissioned concept designs shown as 3D renders`,
    `- [About](${u("/about/")})`,
    `- [Sitemap](${u("/sitemap.xml")})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
