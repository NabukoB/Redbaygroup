import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { MaterialsCalculator } from "@/components/materials-calculator";
import { ShareButtons } from "@/components/share-buttons";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/building-materials-calculator/";

export const metadata = pageMeta({
  title: "Building Materials Calculator: Blocks and Cement",
  description:
    "How many blocks, bags of cement, sand and ballast do you need? Enter your wall size or concrete volume for a quick estimate, then ask Redbay for a BoQ.",
  path,
  image: "building-materials-calculator",
});

const assumptions = [
  "Blocks are 400 × 200 mm on the face, which is 12.5 blocks per square metre of wall before joints. This is slightly generous.",
  "Spare: 5% added to blocks, cement, sand and ballast for breakage, cutting and waste.",
  "Concrete: the dry materials needed are 1.54 times the wet volume. Cement weighs 1,440 kg per cubic metre and comes in 50 kg bags.",
  "Mortar, plaster and screed are not included. Steel is not included, because it comes from the structural drawings.",
];

const faqs = [
  { q: "How many blocks do I need per square metre of wall?", a: "About 12.5 for a 400 × 200 mm block, before allowing for spares. Multiply your wall area, after taking out doors and windows, by 12.5 and add about 5%." },
  { q: "How many bags of cement are in a cubic metre of concrete?", a: "For a 1 : 2 : 4 mix, about 6 to 7 bags of 50 kg, depending on the allowance for waste. A richer mix such as 1 : 1.5 : 3 needs more cement and a leaner one needs less." },
  { q: "Is this the same as a bill of quantities?", a: "No. A bill of quantities lists every item from your drawings with labour and materials shown separately. This calculator gives quick quantities for planning and for checking a quotation." },
];

export default function MaterialsCalculatorPage() {
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Building materials calculator",
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
          crumbs={[{ name: "Building materials calculator", path }]}
          label="Calculator"
          title="How many blocks and bags of cement do you need?"
          intro="Enter the size of your walls and the volume of concrete for quick quantities you can use to plan, or to check a quotation."
        >
          <MaterialsCalculator />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="How it works" title="What the numbers assume" center={false} />
              <ul className="mt-10 space-y-3">
                {assumptions.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link href="/insights/how-many-blocks-and-bags-of-cement-for-a-house/" className="mt-8 inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline">
                Read the guide: how many blocks and bags of cement <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="group rounded-2xl bg-mist p-6 open:pb-7" {...(i === 0 ? { open: true } : {})}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                    <h3>{f.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-white transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <div className="pb-12">
          <div className={wrap}>
            <ShareButtons path={path} title="Building materials calculator: blocks and cement" />
          </div>
        </div>

        <CtaPanel
          title="Need exact quantities and prices?"
          text="Send us your drawings and we prepare an itemised bill of quantities, with labour and materials shown separately."
          message="Hello Redbay Group, I would like a bill of quantities for my project. My site is in:"
          button="Ask for a bill of quantities"
        />
      </main>
      <Footer />
    </>
  );
}
