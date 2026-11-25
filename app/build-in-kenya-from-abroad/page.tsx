import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/build-in-kenya-from-abroad/";

export const metadata = pageMeta({
  title: "Build a Home in Kenya from Abroad",
  description:
    "Building a home in Kenya while living abroad: drawings, a priced bill of quantities, site supervision with photo updates and independent inspections.",
  path,
});

const worries = [
  { heading: "You cannot see the work", text: "Photos and promises are not the same as an inspection. You need someone who checks the work against the drawings." },
  { heading: "Costs creep up", text: "Without a priced bill of quantities, every extra becomes a surprise bill and you have nothing to compare it with." },
  { heading: "Paying before the work is done", text: "Large payments upfront leave you with no leverage if the work is late or poor." },
  { heading: "No one is accountable", text: "When family, a fundi and a supplier each do a part, nobody owns the result." },
];

const steps = [
  { heading: "Drawings and approvals", text: "We prepare architectural and structural drawings for approval, or review the ones you already have.", href: "/services/drawings/" },
  { heading: "A priced bill of quantities", text: "Every item listed with quantities, labour and materials shown separately, so you know the cost before you commit.", href: "/bill-of-quantities-service/" },
  { heading: "Managed on site", text: "We plan the programme, supervise the work, control the budget and send regular written updates with photos.", href: "/services/project-management/" },
  { heading: "Independent checks", text: "A written inspection report with photos before you pay for key stages, such as foundation, slab and roof.", href: "/services/site-audits/" },
  { heading: "Handover", text: "A walk-through of the finished house, a list of items to fix, and a check that they are fixed.", href: "/services/project-management/" },
];

const faqs = [
  {
    q: "Can you manage my build if I live abroad?",
    a: "Yes. Project management for owners who cannot be on site is one of our services. We supervise the work and send you regular written updates with photos, covering progress and spending.",
  },
  {
    q: "How will I know what has been done before I pay?",
    a: "We check the work on site against the drawings and the bill of quantities and send you a written report with photos. You decide on the next payment after you have read it.",
  },
  {
    q: "I already have a contractor. Can you just watch the work?",
    a: "Yes. We can supervise or inspect work built by someone else, and report what we find. We agree the scope with you in writing first.",
  },
  {
    q: "Where do we start?",
    a: "Send us your plans, or just your plot location and what you want to build, on WhatsApp. We tell you what is needed and what it is likely to involve.",
  },
];

export default function AbroadPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Building and project management for Kenyans abroad",
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
          crumbs={[{ name: "Build from abroad", path }]}
          label="Kenyans abroad"
          title="Build your home in Kenya, from wherever you live."
          intro="Drawings, a priced bill of quantities, a managed build and independent inspections, so you can see what has been done and what it costs without being on the plot."
        />

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="The problem" title="What goes wrong when you build from far away" />
            <ul className="mt-14 grid gap-4 md:grid-cols-2">
              {worries.map((w) => (
                <li key={w.heading} className="rounded-3xl bg-mist p-8">
                  <h3 className="text-xl font-semibold tracking-tight">{w.heading}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="How it works" title="One team from drawings to handover" />
            <ol className="mt-14 grid gap-4 md:grid-cols-2">
              {steps.map((s, i) => (
                <li key={s.heading}>
                  <Link href={s.href} className="group flex h-full gap-4 rounded-3xl bg-white p-7 transition-shadow hover:shadow-md">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">{i + 1}</span>
                    <span>
                      <span className="flex items-center gap-1.5 text-lg font-semibold tracking-tight">
                        {s.heading} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-slate">{s.text}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="Read first" title="Guides for owners abroad" center={false} />
              <ul className="mt-10 space-y-3">
                {([
                  ["Building in Kenya from abroad: avoid being cheated", "/insights/build-a-house-in-kenya-from-abroad-safely/"],
                  ["How to check a building contractor", "/insights/how-to-check-a-building-contractor/"],
                  ["Does your building quotation include everything?", "/insights/does-your-quotation-include-everything/"],
                  ["Cost of building a house per square metre in Kenya", "/insights/cost-of-building-a-house-per-square-metre-kenya/"],
                  ["House cost calculator", "/house-cost-calculator/"],
                ] as const).map(([t, h]) => (
                  <li key={h}>
                    <Link href={h} className="text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline">{t}</Link>
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

        <CtaPanel
          title="Planning a home back in Kenya?"
          text="Message us on WhatsApp with your plot location and what you want to build. We will tell you what you need and what to do first."
          message="Hello Redbay Group, I live abroad and want to build in Kenya. My plot is in:"
          button="Message us on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
