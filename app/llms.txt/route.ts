// llms.txt: a plain-text guide to the site for AI assistants and agents (llmstxt.org).
// Built from the same data as the pages, so it updates with every new project or guide.
import { WALL_RATE, ksh } from "@/lib/wall";
import { designs } from "@/lib/designs";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { companies, faqs, hasPage, projects, site } from "@/lib/site";

export const dynamic = "force-static";

const u = (path: string) => `${site.url}${path}`;

export function GET() {
  const withPages = projects.filter(hasPage);
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
    `- Perimeter walls: from ${ksh(WALL_RATE)} per running metre for a wall 2.4 m high on a foundation 0.8 m deep, before VAT; gate priced separately.`,
    `- [Perimeter wall cost calculator](${u("/perimeter-wall-calculator/")}): instant estimate from the boundary length.`,
    `- [Construction Knowledge Hub](${u("/insights/")}): guides by topic, from building costs to roofing, materials and finishes.`,
    `- [Capability statement](${u("/capability-statement/")}): registration, insurance, process and selected work for institutions, with a one-page PDF.`,
    `- [Building materials calculator](${u("/building-materials-calculator/")}): how many blocks, bags of cement, sand and ballast a job needs.`,
    `- [Solar and wind hybrid systems](${u("/hybrid-solar-wind-systems/")}): check whether wind makes sense at your site; design and installation by Redbay Energy.`,
    `- [Build in Kenya from abroad](${u("/build-in-kenya-from-abroad/")}): drawings, BoQ, managed build and inspections for Kenyans living abroad.`,
    `- [Contractor checklist](${u("/contractor-checklist/")}): 10 questions to ask before hiring a building contractor, with a PDF.`,
    `- [Roofing sheets calculator](${u("/roofing-sheets-calculator/")}): how many iron sheets a roof needs.`,
    `- [House cost calculator](${u("/house-cost-calculator/")}): published Nairobi cost per square metre for a house.`,
    `- [Bill of quantities service](${u("/bill-of-quantities-service/")}): itemised BoQ prepared from your drawings; fee quoted before starting.`,
    `- [Site supervision](${u("/site-supervision/")}): stage inspections, materials and payment checks, and photo reports for people building with their own fundi or contractor.`,
    `- [Building inspection](${u("/building-inspection/")}): written defects report for a house or build, with priorities and rough repair costs. Not a structural certificate.`,
    `- [Book a site visit](${u("/book-a-site-visit/")}): request a visit for a quote, supervision or inspection, by WhatsApp or enquiry form.`,
    `- [Get a quote](${u("/get-a-quote/")}): short form that opens WhatsApp with project details, or sends an enquiry.`,
    "",
    "## Specialised services",
    "",
    ...services.map((x) => `- [${x.name}](${u(`/services/${x.slug}/`)}): ${x.seoDescription}`),
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
    `- [Home designs](${u("/designs/")}): ${designs.length} concept designs (client-commissioned or inspiration designs Redbay can build) shown as 3D renders`,
    `- [About](${u("/about/")})`,
    `- [Sitemap](${u("/sitemap.xml")})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
