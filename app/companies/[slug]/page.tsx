import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OtherCompanies, ProjectsFor, StepsSection } from "@/components/blocks";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { DivisionArt } from "@/components/division-art";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
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
      <main>
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
                <Reveal key={s.name} delay={(i % 3) * 0.05}>
                  <li className="h-full rounded-2xl border border-line p-7">
                    <span className="block h-1.5 w-8 rounded-full bg-red" aria-hidden="true" />
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate">{s.text}</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <ProjectsFor
          division={c.division}
          title={{ Homes: "Homes we have built", Schools: "Schools we have built", Interiors: "Interior projects", Energy: "Energy projects" }[c.division]}
        />
        <StepsSection />
        <OtherCompanies current={c.slug} />
        <CtaPanel message={`Hello Redbay Group, I would like to talk about a ${c.division.toLowerCase()} project.`} />
      </main>
      <Footer />
    </>
  );
}
