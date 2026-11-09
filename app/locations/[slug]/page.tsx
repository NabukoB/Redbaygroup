import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { StepsSection } from "@/components/blocks";
import { cardItem, cardRow, CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/insights";
import { locations } from "@/lib/locations";
import { pageMeta } from "@/lib/seo";
import { projects, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) return {};
  return pageMeta({ title: l.seoTitle, description: l.seoDescription, path: `/locations/${l.slug}/` });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const { slug } = await params;
  const l = locations.find((x) => x.slug === slug);
  if (!l) notFound();
  const work = l.projects.map((s) => projects.find((p) => p.slug === s)!).filter(Boolean);
  const guides = l.guides.map((s) => insights.find((g) => g.slug === s)!).filter(Boolean);
  const others = locations.filter((x) => x.slug !== l.slug);
  const url = `${site.url}/locations/${l.slug}/`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: l.title,
    serviceType: ["Building construction", "House construction", "School construction", "Interior finishes"],
    description: l.seoDescription,
    url,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      ...l.counties.map((c) => ({ "@type": "AdministrativeArea", name: `${c} County, Kenya` })),
      ...l.towns.map((t) => ({ "@type": "Place", name: `${t}, Kenya` })),
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: l.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={serviceLd} />
        <JsonLd data={faqLd} />
        <PageHero
          crumbs={[{ name: "Areas we serve", path: "/locations/" }, { name: l.name, path: `/locations/${l.slug}/` }]}
          label={`${l.counties.join(", ")} ${l.counties.length > 1 ? "counties" : "County"}`}
          title={l.title}
          intro={l.intro}
        >
          <div className="rounded-3xl bg-charcoal-deep p-8 text-white">
            <h2 className="text-sm font-medium text-white/60">Places we cover here</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {l.towns.map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 text-sm">
                  <MapPin className="h-3.5 w-3.5 text-red" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/60">
              {site.legal} is an {site.nca} contractor registered with the National Construction Authority.
            </p>
          </div>
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="Building here" title={`What to plan for in ${l.name.replace(" and around", "")}`} />
            <ul className="mt-14 grid gap-4 sm:grid-cols-2">
              {l.local.map((x, i) => (
                <Reveal as="li" key={x.heading} delay={(i % 2) * 0.05} className="h-full rounded-2xl border border-line p-7">
                  <span className="block h-1.5 w-8 rounded-full bg-red" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{x.heading}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{x.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="Our work here" title={work.length > 1 ? "Projects in this area" : "A project in this area"} />
            <ul className={`mt-14 ${work.length === 1 ? "mx-auto grid max-w-md" : cardRow}`}>
              {work.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={(i % 3) * 0.05} className={work.length === 1 ? "h-full" : cardItem}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="Guides" title="Read before you build" />
            <ul className="mx-auto mt-12 grid max-w-4xl gap-3 md:grid-cols-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link
                    href={`/insights/${g.slug}/`}
                    className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-line p-6 transition-colors hover:bg-mist"
                  >
                    <span>
                      <span className="block text-lg font-semibold tracking-tight">{g.title}</span>
                      <span className="mt-1 block text-[15px] leading-relaxed text-slate">{g.description}</span>
                    </span>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="FAQ" title="Common questions" />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {l.faqs.map((f, i) => (
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
          </div>
        </section>

        <StepsSection />

        <section className="pb-12">
          <div className={wrap}>
            <nav aria-label="Other areas" className="rounded-3xl border border-line p-8">
              <h2 className="text-lg font-semibold">Other areas we serve</h2>
              <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/locations/${o.slug}/`} className="inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline">
                      {o.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <CtaPanel
          title="Get a fixed quote for your project."
          text="Send your drawings, the site location and a few photos on WhatsApp. We will reply with an itemised bill of quantities and one fixed price."
          message={l.message}
          button="Get a quote on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
