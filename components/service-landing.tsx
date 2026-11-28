import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

// One layout for the single-service pages (supervision, inspection): what you get, how it works, FAQ.
export type ServiceLandingProps = {
  path: string;
  crumb: string;
  label: string;
  title: string;
  intro: string;
  serviceName: string;
  serviceDescription: string;
  getHeading: string;
  gets: string[];
  sideHeading: string;
  sideItems: string[];
  sideNote: string;
  message: string;
  button: string;
  faqs: { q: string; a: string }[];
  links: { label: string; href: string }[];
  ctaTitle: string;
  ctaText: string;
};

export function ServiceLanding(p: ServiceLandingProps) {
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: p.serviceName,
    serviceType: p.serviceName,
    description: p.serviceDescription,
    url: `${site.url}${p.path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={serviceLd} />
        <JsonLd data={faqLd} />
        <PageHero crumbs={[{ name: p.crumb, path: p.path }]} label={p.label} title={p.title} intro={p.intro} />

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="What you get" title={p.getHeading} center={false} />
              <ul className="mt-10 space-y-3">
                {p.gets.map((x) => (
                  <li key={x} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                    <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-charcoal-deep p-8 text-white md:p-10">
              <h2 className="text-xl font-semibold">{p.sideHeading}</h2>
              <ul className="mt-6 space-y-3">
                {p.sideItems.map((x) => (
                  <li key={x} className="flex gap-3 text-[15px] leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-white/10 pt-5 text-[15px] leading-relaxed text-white/70">{p.sideNote}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(p.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-red px-6 text-[15px] font-semibold text-white transition-colors hover:bg-red/90"
                >
                  {p.button}
                </a>
                <Link href="/book-a-site-visit/" className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 px-6 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                  Book a site visit
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="FAQ" title="Common questions" />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {p.faqs.map((f, i) => (
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
              {p.links.map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 font-medium underline-offset-4 hover:underline">
                  {l.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaPanel title={p.ctaTitle} text={p.ctaText} message={p.message} button={p.button} />
      </main>
      <Footer />
    </>
  );
}
