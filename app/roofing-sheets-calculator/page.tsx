import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { RoofingCalculator } from "@/components/roofing-calculator";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/roofing-sheets-calculator/";

export const metadata = pageMeta({
  title: "Roofing Sheets Calculator Kenya",
  description:
    "Work out how many iron sheets your roof needs. Enter the roof width and length, pick corrugated or box profile, and get the sheet count.",
  path,
  image: "roofing-sheets-calculator",
});

const included = [
  "Roof width divided by the effective cover of one sheet, rounded up",
  "Effective cover, not full width, because neighbouring sheets overlap",
  "Each sheet runs ridge to eaves, with the overhang added",
  "A few spare sheets for cutting and damage",
  "Ridge caps, flashings and fixings counted separately",
];

const faqs = [
  {
    q: "Why does the count use effective cover?",
    a: "A corrugated sheet is 865 mm wide but covers 762 mm once it overlaps its neighbour. Counting by full width gives too few sheets.",
  },
  {
    q: "How many sheets for a 10 m by 4 m roof?",
    a: "With two slopes of 10 m by 4 m in corrugated sheet, you need 14 sheets across each slope, so 28 sheets, each 4 m long, plus a few spare.",
  },
  {
    q: "Does this include price?",
    a: "No. Sheet prices change often with gauge, profile and finish. Send us the count and we quote the materials and labour together.",
  },
];

export default function RoofingCalculatorPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Roofing sheets calculator",
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
          crumbs={[{ name: "Roofing sheets calculator", path }]}
          label="Calculator"
          title="How many iron sheets does your roof need?"
          intro="Enter your roof size and sheet profile for an instant count of iron sheets, then send it to us for a roofing quote."
        >
          <RoofingCalculator />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="The method" title="How the count is worked out" center={false} />
              <ul className="mt-10 space-y-3">
                {included.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                href="/insights/types-of-iron-sheets-kenya/"
                className="mt-8 inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline"
              >
                Types of iron sheets explained <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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


        <div className="pb-12">
          <div className={wrap}>
            <ShareButtons path="/roofing-sheets-calculator/" title="Roofing sheets calculator: how many iron sheets does your roof need?" />
          </div>
        </div>

        <CtaPanel
          title="Ready for a roofing quote?"
          text="Send us the roof size, the site location and a few photos. We count the sheets and give you one fixed price for materials and labour."
          message="Hello Redbay Group, I would like a quote for roofing. My site is in:"
          button="Get a roofing quote on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
