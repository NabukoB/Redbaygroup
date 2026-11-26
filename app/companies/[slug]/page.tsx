import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { OtherCompanies, ProjectsFor, StepsSection } from "@/components/blocks";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { DivisionArt } from "@/components/division-art";
import { Gallery } from "@/components/gallery";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { designs } from "@/lib/designs";
import { insights } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";
import { companies, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/companies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const c = companies.find((x) => x.slug === slug);
  if (!c) return {};
  return pageMeta({ title: c.seoTitle, description: c.seoDescription, path: `/companies/${c.slug}/` });
}

export default async function CompanyPage({ params }: PageProps<"/companies/[slug]">) {
  const { slug } = await params;
  const c = companies.find((x) => x.slug === slug);
  if (!c) notFound();
  // Guides that point to this company in their "See it in practice" list
  // Interior renders from our designs, shown on the Interiors page as inspiration
  const ideas = c.division === "Interiors" ? designs.filter((d) => d.interiorsFrom !== undefined) : [];
  const guides = insights.filter((g) => g.related?.some((r) => r.href === `/companies/${c.slug}/`));

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.name,
    serviceType: c.services.map((s) => s.name),
    description: c.seoDescription,
    url: `${site.url}/companies/${c.slug}/`,
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "Country", name: "Kenya" },
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={serviceLd} />
        <PageHero
          crumbs={[{ name: c.name, path: `/companies/${c.slug}/` }]}
          label={c.name}
          title={c.line}
          intro={c.intro}
        >
          <DivisionArt division={c.division} />
        </PageHero>

        <section className="border-t border-line py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="What we do" title={`${c.name} services`} text={c.text} />
            <ul className={`mt-14 grid gap-4 sm:grid-cols-2 ${c.services.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
              {c.services.map((s, i) => (
                <Reveal as="li" key={s.name} delay={(i % 3) * 0.05} className="h-full rounded-2xl border border-line p-7">
                    <span className="block h-1.5 w-8 rounded-full bg-red" aria-hidden="true" />
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate">{s.text}</p>
                  </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <ProjectsFor
          division={c.division}
          title={{ Homes: "Homes we have built", Schools: "Schools we have built", Interiors: "Interior projects", Energy: "Energy projects" }[c.division]}
        />
        {ideas.length > 0 && (
          <section className="bg-mist py-24 md:py-28">
            <div className={wrap}>
              <SectionHead
                label="Inspiration"
                title="Interior ideas"
                text="Warm, modern finishes we can create in your home: gypsum ceilings with hidden lighting, timber doors, built-in wardrobes and fitted kitchens. These are 3D renders, not photos of completed work."
              />
              {ideas.map((d) => (
                <div key={d.slug} className="mt-12">
                  <Gallery base={`/designs/${d.slug}`} photos={d.photos.slice(d.interiorsFrom)} />
                  <p className="mt-6 text-center text-[15px] text-slate">
                    Interiors from the{" "}
                    <Link href={`/designs/${d.slug}/`} className="font-medium text-charcoal-deep underline underline-offset-4 hover:text-red">
                      {d.name}
                    </Link>{" "}
                    design.
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
        {guides.length > 0 && (
          <section className="py-24 md:py-28">
            <div className={wrap}>
              <SectionHead label="Guides" title="Read before you decide" />
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
        )}
        {c.slug === "energy" && (
          <section className="border-t border-line py-16">
            <div className={`${wrap} text-center`}>
              <Link href="/hybrid-solar-wind-systems/" className="inline-flex items-center gap-1.5 text-lg font-medium text-charcoal-deep underline underline-offset-4 hover:text-red">
                Does wind make sense at your site? Try the hybrid system check <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        )}
        <StepsSection />
        <OtherCompanies current={c.slug} />
        <CtaPanel message={`Hello Redbay Group, I would like to talk about a ${c.division.toLowerCase()} project.`} />
      </main>
      <Footer />
    </>
  );
}
