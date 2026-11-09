import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const path = "/bill-of-quantities-service/";

export const metadata = pageMeta({
  title: "Bill of Quantities (BoQ) Service in Kenya",
  description:
    "Get an itemised bill of quantities for your building drawings from Redbay, an NCA-registered contractor. Know the real cost before you build or compare quotes.",
  path,
});

const youGet = [
  "Every item measured from your drawings: substructure, walling, roofing, finishes, plumbing, electrical and external works",
  "Current rates for materials and labour, item by item",
  "Totals for each stage, so you can plan building in phases",
  "A clear list of what is included and what is not",
  "A summary you can use to compare other builders' quotes line by line",
];

const send = [
  "Architectural drawings: plans, elevations and sections",
  "Structural drawings, if you have them",
  "The site location",
  "The finishes you have in mind: basic, standard or high-end",
];

const faqs = [
  {
    q: "Why do I need a bill of quantities?",
    a: "A BoQ tells you what your building will really cost before you start, shows you where the money goes, and lets you compare builders fairly. Without one, cheap quotes often leave items out that come back later as extra costs.",
  },
  {
    q: "How much does a BoQ cost?",
    a: "It depends on the size of the building and how complete the drawings are. Send us the drawings and we will quote the fee before we start.",
  },
  {
    q: "Do I have to hire you to build?",
    a: "No. The BoQ is yours to use however you choose, including to get quotes from other builders. If you do build with us, it becomes the basis of our fixed quotation.",
  },
  {
    q: "Can you prepare a BoQ without drawings?",
    a: "We need drawings to measure accurately. If you do not have them yet, we can give you a rough budget from a description of the house and advise on getting drawings done.",
  },
];

export default function BoqServicePage() {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bill of quantities preparation",
    serviceType: "Bill of quantities (BoQ) preparation",
    description: "Itemised bills of quantities measured from building drawings, for homes, schools and commercial buildings in Kenya.",
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const message = "Hello Redbay Group, I would like a bill of quantities for my drawings. My site is in: ";

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={serviceLd} />
        <JsonLd data={faqLd} />
        <PageHero
          crumbs={[{ name: "Bill of quantities service", path }]}
          label="BoQ service"
          title="Know the real cost before you build."
          intro="Send us your drawings and we will prepare an itemised bill of quantities: every item measured and priced, so you can budget, build in phases and compare quotes with confidence."
        />

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="What you get" title="An itemised BoQ for your building" center={false} />
              <ul className="mt-10 space-y-3">
                {youGet.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-charcoal-deep p-8 text-white md:p-10">
              <h2 className="text-xl font-semibold">What to send us</h2>
              <ul className="mt-6 space-y-3">
                {send.map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-white/70">
                We confirm the fee before we start. The BoQ is yours to keep and use, whether or not you build with us.
              </p>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center rounded-full bg-red px-6 text-[15px] font-semibold text-white transition-colors hover:bg-red/90"
              >
                Send drawings on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="FAQ" title="Common questions" />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="group rounded-2xl bg-white p-6 open:pb-7" {...(i === 0 ? { open: true } : {})}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                    <h3>{f.q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-white transition-transform group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate">{f.a}</p>
                </details>
              ))}
            </div>
            <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3">
              <Link href="/insights/how-to-read-a-bill-of-quantities/" className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                How to read a BoQ <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link href="/insights/does-your-quotation-include-everything/" className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                Does your quotation include everything? <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <CtaPanel
          title="Get your bill of quantities."
          text="Send your drawings and the site location on WhatsApp. We will confirm the fee and how long it will take."
          message={message}
          button="Send drawings on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
