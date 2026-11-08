import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { WallCalculator } from "@/components/wall-calculator";
import { pageMeta } from "@/lib/seo";
import { projects, site } from "@/lib/site";

const path = "/perimeter-wall-calculator/";

export const metadata = pageMeta({
  title: "Perimeter Wall Cost Calculator Kenya",
  description:
    "Work out what a perimeter wall costs in Kenya. Enter your boundary length for an instant estimate at KSh 14,000 per metre for a 2.4 m wall.",
  path,
});

const included = [
  "Setting out the boundary line",
  "Trench excavation 0.8 m deep with a concrete strip footing",
  "Stone foundation courses up to ground level",
  "Reinforced concrete columns at regular spacing",
  "Walling between the columns, 2.4 m high",
  "A ring beam on top to tie the wall together",
];

const faqs = [
  {
    q: "How much does a perimeter wall cost per metre in Kenya?",
    a: "Redbay builds standard perimeter walls from KSh 14,000 per running metre, for a wall 2.4 metres high on a foundation 0.8 metres deep, before VAT. We confirm the exact rate after seeing the site.",
  },
  {
    q: "How long is the boundary of a 50 by 100 plot?",
    a: "A 50 × 100 ft plot (an eighth of an acre) has a boundary of about 91 metres, so a full wall would start from about KSh 1.27 million before the gate.",
  },
  {
    q: "Is the gate included?",
    a: "No. Gates vary a lot in size and style, so we price the gate separately once you have chosen one.",
  },
];

export default function WallCalculatorPage() {
  const walls = ["karen-perimeter-wall", "kikuyu-perimeter-wall"].map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Perimeter wall cost calculator",
    url: `${site.url}${path}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KES" },
    provider: { "@id": `${site.url}/#organization` },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={appLd} />
        <JsonLd data={faqLd} />
        <PageHero
          crumbs={[{ name: "Wall cost calculator", path }]}
          label="Calculator"
          title="What will your wall cost?"
          intro="Enter the length of your boundary for an instant estimate, then send it to us for an exact quote."
        >
          <WallCalculator />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="The rate" title="What KSh 14,000 per metre includes" center={false} />
              <ul className="mt-10 space-y-3">
                {included.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                href="/insights/perimeter-wall-cost-kenya/"
                className="mt-8 inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline"
              >
                What changes the price <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="group rounded-2xl bg-mist p-6 open:pb-7" {...(i === 0 ? { open: true } : {})}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                    <h3>{f.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-white transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="Our walls" title="Walls we have built" />
            <ul className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-2">
              {walls.map((p) => (
                <li key={p.slug} className="h-full">
                  <ProjectCard p={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaPanel
          title="Ready for an exact price?"
          text="Send us the boundary length, the site location and a few photos. We measure on site and give you one fixed price per metre."
          message="Hello Redbay Group, I would like a quote for a perimeter wall. My site is in:"
          button="Get a wall quote on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
