import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { HouseCalculator } from "@/components/house-calculator";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/house-cost-calculator/";

export const metadata = pageMeta({
  title: "House Construction Cost Calculator Kenya",
  description:
    "Estimate what a house costs to build in Kenya per square metre, using published Nairobi figures for a standard bungalow and a luxury maisonette.",
  path,
});

const included = [
  "Institute of Quantity Surveyors of Kenya (IQSK) building cost figures, as reported in October 2025",
  "Nairobi and Central: KSh 48,750 per m² for a standard bungalow",
  "Nairobi and Central: KSh 84,000 per m² for a luxury maisonette",
  "Costs are for the building only, not land, approvals or the perimeter wall",
  "Your own cost depends on drawings, finishes, soil and access",
];

const faqs = [
  {
    q: "How much does it cost to build a house in Kenya per square metre?",
    a: "Published figures for Nairobi and Central put a standard bungalow at about KSh 48,750 per m² and a luxury maisonette at about KSh 84,000 per m². The real figure for your house depends on your drawings and finishes.",
  },
  {
    q: "Is this a Redbay price?",
    a: "No. It is a published industry guide, so you can plan a budget. We give our own price after pricing your drawings in a bill of quantities.",
  },
  {
    q: "How do I get an exact cost?",
    a: "Send us your drawings. We prepare a bill of quantities that lists every item with quantities and one fixed price.",
  },
];

export default function HouseCalculatorPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "House cost calculator",
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
          crumbs={[{ name: "House cost calculator", path }]}
          label="Calculator"
          title="What does it cost to build your house?"
          intro="Enter the floor area for a published-guide estimate, then send it to us for a bill of quantities and a real quote."
        >
          <HouseCalculator />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="The figures" title="Where the numbers come from" center={false} />
              <ul className="mt-10 space-y-3">
                {included.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                href="/insights/cost-of-building-a-house-per-square-metre-kenya/"
                className="mt-8 inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline"
              >
                How building costs are worked out <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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


        <CtaPanel
          title="Want the real number?"
          text="Send us your drawings and the site location. We prepare a bill of quantities with labour and materials listed separately, and one fixed price."
          message="Hello Redbay Group, I would like a bill of quantities and quote for my house. My site is in:"
          button="Get a house quote on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
