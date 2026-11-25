import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { cardItem, cardRow, CtaPanel, Footer, Nav, PageHero, SectionHead, whatsappLink, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { insights } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";
import { services } from "@/lib/services";
import { Gallery } from "@/components/gallery";
import { projects, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, description: s.seoDescription, path: `/services/${s.slug}/` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const path = `/services/${s.slug}/`;
  const guides = s.guides.map((g) => insights.find((x) => x.slug === g)!).filter(Boolean);
  const work = s.projects.map((p) => projects.find((x) => x.slug === p)!).filter(Boolean);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.seoDescription,
    url: `${site.url}${path}`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Kenya" },
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={serviceLd} />
        <JsonLd data={faqLd} />
        <PageHero
          crumbs={[{ name: "Services", path: "/services/" }, { name: s.name, path }]}
          label="Specialised service"
          title={s.title}
          intro={s.intro}
        >
          <div className="rounded-3xl bg-charcoal-deep p-8 text-white">
            <h2 className="text-sm font-medium text-white/60">Signs you need it</h2>
            <ul className="mt-4 space-y-3">
              {s.signs.map((x) => (
                <li key={x} className="flex gap-3 text-[15px] leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-7">
              <a href={whatsappLink(s.message)} target="_blank" rel="noopener noreferrer">
                Message us on WhatsApp
              </a>
            </Button>
          </div>
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="Where we work" title="Areas we cover" />
            <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {s.areas.map((a, i) => (
                <Reveal as="li" key={a.heading} delay={(i % 3) * 0.05} className="h-full rounded-2xl border border-line p-7">
                  <span className="block h-1.5 w-8 rounded-full bg-red" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{a.heading}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate">{a.text}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-2`}>
            <div>
              <SectionHead label="Methods" title="How we do it" center={false} />
              <div className="mt-10 space-y-6">
                {s.methods.map((m) => (
                  <div key={m.heading}>
                    <h3 className="text-lg font-semibold tracking-tight">{m.heading}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-slate">{m.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHead label="How we work" title="From first visit to handover" center={false} />
              <ol className="mt-10 space-y-4">
                {s.process.map((p, i) => (
                  <li key={p} className="flex gap-4 rounded-2xl bg-white p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">{i + 1}</span>
                    <span className="text-[15px] leading-relaxed text-charcoal">{p}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {s.gallery && (
          <section className="py-24 md:py-28">
            <div className={wrap}>
              <SectionHead label="On site" title={s.gallery.title} text={s.gallery.text} />
              <div className="mt-14">
                <Gallery base={s.gallery.base} photos={s.gallery.photos} />
              </div>
            </div>
          </section>
        )}

        <section className="py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="FAQ" title="Common questions" />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {s.faqs.map((f, i) => (
                <details key={f.q} className="group rounded-2xl bg-mist p-6 open:pb-7" {...(i === 0 ? { open: true } : {})}>
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
            <ul className="mx-auto mt-12 grid max-w-4xl gap-3 md:grid-cols-2">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/insights/${g.slug}/`} className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-line p-6 transition-colors hover:bg-mist">
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

        {work.length > 0 && (
          <section className="bg-mist py-24 md:py-28">
            <div className={wrap}>
              <SectionHead label="Our work" title="Our recent work" />
              <ul className={`mt-14 ${work.length === 1 ? "mx-auto grid max-w-md" : cardRow}`}>
                {work.map((p) => (
                  <li key={p.slug} className={work.length === 1 ? "h-full" : cardItem}>
                    <ProjectCard p={p} />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <CtaPanel
          title={`Need ${s.name.toLowerCase()}?`}
          text="Send the location, photos if you have them, and a rough size. We will tell you what is needed and give you a fixed quote."
          message={s.message}
          button="Message us on WhatsApp"
        />
      </main>
      <Footer />
    </>
  );
}
