import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Badge, Breadcrumbs, CtaPanel, Footer, Nav, wrap } from "@/components/chrome";
import { Gallery } from "@/components/gallery";
import { ProjectCard } from "@/components/project-card";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";
import { companies, photoSrc, projects, site } from "@/lib/site";

const withPages = projects.filter((p) => p.slug && p.photos?.length);

export const dynamicParams = false;

export function generateStaticParams() {
  return withPages.map((p) => ({ slug: p.slug! }));
}

const titleFor = (p: (typeof projects)[number]) =>
  p.division === "Interiors" ? `Interior Finishes for a Home in ${p.place}` : `${p.name}, ${p.place}`;

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = withPages.find((x) => x.slug === slug);
  if (!p) return {};
  const meta = pageMeta({ title: titleFor(p), description: p.summary!, path: `/projects/${p.slug}/` });
  // Share card uses the project's own cover photo
  const cover = `${site.url}${photoSrc(p.slug!, p.photos![0].file, 1600)}`;
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [{ url: cover, width: 1600, height: 1200, alt: p.photos![0].alt }] },
    twitter: { ...meta.twitter, images: [cover] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const p = withPages.find((x) => x.slug === slug);
  if (!p) notFound();
  const company = companies.find((c) => c.division === p.division)!;
  // Guides that point to this project in their "See it in practice" list
  const guides = insights.filter((g) => g.related?.some((r) => r.href === `/projects/${p.slug}/`));

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: titleFor(p),
    description: p.summary,
    url: `${site.url}/projects/${p.slug}/`,
    locationCreated: { "@type": "Place", name: `${p.place}, Kenya` },
    creator: { "@id": `${site.url}/#organization` },
    image: p.photos!.map((ph) => ({
      "@type": "ImageObject",
      contentUrl: `${site.url}${photoSrc(p.slug!, ph.file, 1600)}`,
      caption: ph.alt,
    })),
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={projectLd} />
        <section className="pb-16 pt-10 md:pt-14">
          <div className={wrap}>
            <Breadcrumbs items={[{ name: "Projects", path: "/projects/" }, { name: titleFor(p), path: `/projects/${p.slug}/` }]} />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>{p.division}</Badge>
                  <span className="text-sm text-slate">{p.place}</span>
                </div>
                <h1 className="heading mt-5 text-[clamp(2.4rem,5vw,4rem)]">{titleFor(p)}</h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">{p.summary}</p>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="rounded-3xl bg-charcoal-deep p-8 text-white">
                  <h2 className="text-sm font-medium text-white/60">What we did</h2>
                  <ul className="mt-4 space-y-3">
                    {p.scope?.map((s) => (
                      <li key={s} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/companies/${company.slug}/`} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white underline-offset-4 hover:underline">
                    Delivered by {company.name} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className={wrap}>
            <h2 className="sr-only">Photos</h2>
            <Gallery base={`/projects/${p.slug}`} photos={p.photos!} />
            {guides.length > 0 && (
              <div className="mt-12 rounded-3xl border border-line p-8">
                <h2 className="text-lg font-semibold">Guides for this kind of build</h2>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/insights/${g.slug}/`} className="inline-flex items-start gap-1.5 text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline">
                        {g.title} <ArrowUpRight className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        <section className="bg-mist py-20 md:py-24">
          <div className={wrap}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="heading text-[clamp(2rem,4vw,3rem)]">More projects</h2>
              <Link href="/projects/" className="inline-flex items-center gap-1.5 font-medium text-charcoal-deep underline-offset-4 hover:underline">
                All projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {(() => {
                const idx = withPages.findIndex((x) => x.slug === p.slug);
                return [1, 2, 3].map((k) => withPages[(idx + k) % withPages.length]).filter((x) => x.slug !== p.slug);
              })().map((o) => (
                <li key={o.slug} className="h-full">
                  <ProjectCard p={o} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaPanel
          title={p.cta?.title ?? (p.division === "Interiors" ? "Want a finish like this?" : "Planning a home like this?")}
          text={
            p.cta?.text ??
            (p.division === "Interiors"
              ? "Send us photos of your space and tell us what you have in mind. We will advise and give you a clear quote."
              : "Send us your drawings and we will return an itemised bill of quantities and a fixed quote.")
          }
          message={`Hello Redbay Group, I saw your ${p.place} project and would like a quote.`}
        />
      </main>
      <Footer />
    </>
  );
}
