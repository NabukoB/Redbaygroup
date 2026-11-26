import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { HybridCheck } from "@/components/hybrid-check";
import { JsonLd } from "@/components/json-ld";
import { ShareButtons } from "@/components/share-buttons";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/hybrid-solar-wind-systems/";

export const metadata = pageMeta({
  title: "Solar and Wind Hybrid Systems in Kenya",
  description:
    "Solar and wind hybrid power for homes, schools and farms in Kenya: when wind pays, a site check first, then design and installation by Redbay Energy.",
  path,
  image: "hybrid-solar-wind-systems",
});

const parts = [
  { heading: "Solar panels", text: "Do most of the work in daylight, and work almost anywhere in Kenya." },
  { heading: "A wind turbine on a mast", text: "Adds power in the evening, at night and in stormy weather, when the sun is weak. It needs a windy, open site." },
  { heading: "Charge controllers and batteries", text: "Each source charges the batteries safely, and the batteries carry you through the night." },
  { heading: "An inverter", text: "Turns battery power into normal household power. A grid connection can be added where net metering applies." },
];

const steps = [
  { heading: "Site check", text: "We look at the wind, the surroundings and where the mast would stand, and list what you need to run, especially at night." },
  { heading: "Wind readings where needed", text: "If the wind is unknown, we recommend measuring it at the planned height before you buy a turbine." },
  { heading: "Design to your use", text: "Batteries are sized to your night load, then panels and turbine to refill them. We tell you plainly if solar alone is the better buy." },
  { heading: "Mast and foundation", text: "As a building contractor, we build the footing and tower base, so the mast stands on something designed for it." },
  { heading: "Installation and handover", text: "The system is installed, tested and explained to you, with a maintenance routine for the turbine and batteries." },
];

const faqs = [
  {
    q: "Is wind worth it in my area?",
    a: "It depends on your exact site, not just the county. Open, high ground, ridges, lakeshores and parts of the coast tend to be windier; sheltered plots are not. Use the check on this page, then we confirm on site.",
  },
  {
    q: "Can I put a small turbine on my roof?",
    a: "We do not recommend it. Wind near a roof is turbulent, and vibration can carry into the building. A turbine on its own mast, clear of trees and roofs, is the better choice.",
  },
  {
    q: "Which turbines do you work with?",
    a: "Redbay Energy installs Elege vertical-axis turbines, chosen for sites where the wind changes direction often. They suit gusty sites; on steady, strong wind, other types can be more efficient, and we say so if your site needs one.",
  },
  {
    q: "What if my site has little wind?",
    a: "Then more solar and batteries is usually the better buy, and we will say so. A hybrid only makes sense when the wind is there.",
  },
  {
    q: "Who is a hybrid system for?",
    a: "Boarding schools, homes off the grid, farms and places with frequent blackouts, where power is needed at night and the site is windy.",
  },
];

export default function HybridPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Solar and wind hybrid power systems",
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: "KE",
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={faqLd} />
        <JsonLd data={serviceLd} />
        <PageHero
          crumbs={[{ name: "Redbay Energy", path: "/companies/energy/" }, { name: "Solar and wind hybrid systems", path }]}
          label="Redbay Energy"
          title="Does wind make sense at your site?"
          intro="Answer five quick questions and see whether a solar and wind hybrid, wind measurements first, or solar and batteries alone is the better start."
        >
          <HybridCheck />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="How it works" title="Two sources, one battery bank" />
            <ul className="mt-14 grid gap-4 md:grid-cols-2">
              {parts.map((p) => (
                <li key={p.heading} className="rounded-3xl bg-mist p-8">
                  <h3 className="text-xl font-semibold tracking-tight">{p.heading}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="What we do" title="From site check to handover" />
            <ol className="mt-14 grid gap-4 md:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.heading} className="flex gap-4 rounded-3xl bg-white p-7">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">{i + 1}</span>
                  <span>
                    <span className="block text-lg font-semibold tracking-tight">{s.heading}</span>
                    <span className="mt-1 block text-[15px] leading-relaxed text-slate">{s.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="Read first" title="Guides on solar and wind" center={false} />
              <ul className="mt-10 space-y-3">
                {([
                  ["Solar and wind hybrid systems explained", "/insights/solar-wind-hybrid-systems/"],
                  ["Small wind turbines for homes and schools in Kenya", "/insights/small-wind-turbines-kenya/"],
                  ["Solar power for homes and schools", "/insights/solar-power-for-homes-and-schools/"],
                  ["Net metering in Kenya", "/insights/net-metering-kenya/"],
                  ["Solar for schools in Kenya", "/insights/solar-for-schools-kenya/"],
                ] as const).map(([t, h]) => (
                  <li key={h}>
                    <Link href={h} className="inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline">
                      {t} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
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
            <ShareButtons path={path} title="Does wind make sense at your site? Solar and wind hybrid systems in Kenya" />
          </div>
        </div>

        <CtaPanel
          title="Want your site checked?"
          text="Message us on WhatsApp with the location and what you need to power. We will tell you whether wind is worth measuring or solar alone is enough."
          message="Hello Redbay Group, I would like Redbay Energy to look at my site for a solar and wind system. The site is in:"
          button="Message Redbay Energy"
        />
      </main>
      <Footer />
    </>
  );
}
