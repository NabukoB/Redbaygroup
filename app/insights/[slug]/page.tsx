import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge, Breadcrumbs, CtaPanel, Footer, Nav, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { insights } from "@/lib/insights";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = insights.find((x) => x.slug === slug);
  if (!p) return {};
  return pageMeta({ title: p.title, description: p.description, path: `/insights/${p.slug}/`, type: "article" });
}

export default async function InsightPage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const p = insights.find((x) => x.slug === slug);
  if (!p) notFound();
  const others = insights.filter((x) => x.slug !== p.slug);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    mainEntityOfPage: `${site.url}/insights/${p.slug}/`,
    image: `${site.url}/og.png`,
    author: { "@id": `${site.url}/#organization` },
    publisher: { "@id": `${site.url}/#organization` },
    inLanguage: "en-KE",
  };

  return (
    <>
      <Nav />
      <main>
        <JsonLd data={articleLd} />
        <article className="pb-20 pt-10 md:pt-14">
          <div className={wrap}>
            <Breadcrumbs items={[{ name: "Insights", path: "/insights/" }, { name: p.title, path: `/insights/${p.slug}/` }]} />
            <Reveal className="mx-auto mt-12 max-w-3xl">
              <Badge>Guide</Badge>
              <h1 className="heading mt-5 text-[clamp(2.3rem,5vw,3.8rem)]">{p.title}</h1>
              <p className="mt-6 text-xl leading-relaxed text-slate">{p.description}</p>
              <p className="mt-6 text-sm text-slate">
                By {site.name} · <time dateTime={p.date}>{new Date(p.date).toLocaleDateString("en-KE", { day: "numeric", month: "long", year: "numeric" })}</time>
              </p>
            </Reveal>
            <div className="mx-auto mt-14 max-w-3xl space-y-12 border-t border-line pt-12">
              {p.sections.map((s) => (
                <Reveal key={s.heading}>
                  <section>
                    <h2 className="heading text-[28px] md:text-[32px]">{s.heading}</h2>
                    {s.body.map((para) => (
                      <p key={para.slice(0, 24)} className="mt-4 text-lg leading-[1.75] text-slate">{para}</p>
                    ))}
                    {s.list && (
                      <ul className="mt-5 space-y-3">
                        {s.list.map((li) => (
                          <li key={li} className="flex gap-3 text-lg leading-relaxed text-charcoal">
                            <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-red" aria-hidden="true" />
                            {li}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                </Reveal>
              ))}
            </div>
            <aside className="mx-auto mt-16 max-w-3xl rounded-3xl bg-mist p-8">
              <h2 className="text-lg font-semibold">More guides</h2>
              <ul className="mt-4 space-y-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link className="text-lg font-medium text-charcoal-deep underline-offset-4 hover:underline" href={`/insights/${o.slug}/`}>
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </article>
        <CtaPanel
          title="Want a builder who explains things?"
          text="Send us your plans and we will walk you through the quote, line by line."
        />
      </main>
      <Footer />
    </>
  );
}
