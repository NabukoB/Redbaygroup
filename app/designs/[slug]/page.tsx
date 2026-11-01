import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Breadcrumbs, CtaPanel, Footer, Nav, wrap, whatsappLink } from "@/components/chrome";
import { DesignCard } from "@/components/design-card";
import { Gallery } from "@/components/gallery";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { designs } from "@/lib/designs";
import { pageMeta } from "@/lib/seo";
import { imgSrc, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return designs.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/designs/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const d = designs.find((x) => x.slug === slug);
  if (!d) return {};
  const meta = pageMeta({ title: `${d.name}: House Design`, description: d.summary, path: `/designs/${d.slug}/` });
  const cover = `${site.url}${imgSrc(`/designs/${d.slug}`, "1", 1600)}`;
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images: [{ url: cover, alt: d.photos[0].alt }] },
    twitter: { ...meta.twitter, images: [cover] },
  };
}

export default async function DesignPage({ params }: PageProps<"/designs/[slug]">) {
  const { slug } = await params;
  const d = designs.find((x) => x.slug === slug);
  if (!d) notFound();
  const base = `/designs/${d.slug}`;
  const others = designs.filter((x) => x.slug !== d.slug).slice(0, 3);

  const designLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${d.name} (concept design)`,
    description: d.summary,
    genre: "Architectural concept design",
    url: `${site.url}${base}/`,
    publisher: { "@id": `${site.url}/#organization` },
    image: d.photos.map((ph) => ({ "@type": "ImageObject", contentUrl: `${site.url}${imgSrc(base, ph.file, 1600)}`, caption: ph.alt })),
  };

  return (
    <>
      <Nav />
      <main>
        <JsonLd data={designLd} />
        <section className="pb-14 pt-10 md:pt-14">
          <div className={wrap}>
            <Breadcrumbs items={[{ name: "Home designs", path: "/designs/" }, { name: d.name, path: `${base}/` }]} />
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
              <Reveal className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge>Concept design</Badge>
                  <span className="text-sm text-slate">{d.style}</span>
                </div>
                <h1 className="heading mt-5 text-[clamp(2.4rem,5vw,4rem)]">{d.name}</h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">{d.summary}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <a href={whatsappLink(`Hello Redbay Group, I like the ${d.name} design and would like to talk about building it.`)} target="_blank" rel="noopener noreferrer">
                      Build this home
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/designs/">All designs</Link>
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-5">
                <div className="rounded-3xl bg-charcoal-deep p-8 text-white">
                  <h2 className="text-sm font-medium text-white/60">Design features</h2>
                  <ul className="mt-4 space-y-3">
                    {d.features.map((f) => (
                      <li key={f} className="flex gap-3 text-[15px] leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-white/10 pt-4 text-sm leading-relaxed text-white/60">
                    3D render of a client-commissioned design, not a photo of a completed building.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className={wrap}>
            <h2 className="sr-only">Views of the design</h2>
            <Gallery base={base} photos={d.photos} />
          </div>
        </section>

        <section className="bg-mist py-20 md:py-24">
          <div className={wrap}>
            <h2 className="heading text-center text-[clamp(2rem,4vw,3rem)]">More designs</h2>
            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug} className="h-full">
                  <DesignCard d={o} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaPanel
          title="Want a home like this?"
          text="We adapt the design to your plot and budget, then give you an itemised bill of quantities and a fixed quote."
          message={`Hello Redbay Group, I like the ${d.name} design and would like to talk about building it.`}
        />
      </main>
      <Footer />
    </>
  );
}
