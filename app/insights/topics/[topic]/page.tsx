import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { CtaPanel, Footer, Nav, PageHero, SectionHead, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { insights } from "@/lib/insights";
import { topics } from "@/lib/knowledge";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/topics/[topic]">): Promise<Metadata> {
  const { topic } = await params;
  const t = topics.find((x) => x.slug === topic);
  if (!t) return {};
  return pageMeta({ title: t.seoTitle, description: t.seoDescription, path: `/insights/topics/${t.slug}/` });
}

export default async function TopicPage({ params }: PageProps<"/insights/topics/[topic]">) {
  const { topic } = await params;
  const t = topics.find((x) => x.slug === topic);
  if (!t) notFound();
  const path = `/insights/topics/${t.slug}/`;
  const guides = t.guides.map((s) => insights.find((i) => i.slug === s)!).filter(Boolean);
  const listLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t.title,
    description: t.seoDescription,
    url: `${site.url}${path}`,
    isPartOf: { "@id": `${site.url}/#website` },
    hasPart: guides.map((g) => ({ "@type": "Article", headline: g.title, url: `${site.url}/insights/${g.slug}/` })),
  };

  return (
    <>
      <Nav />
      <main id="main">
        <JsonLd data={listLd} />
        <PageHero
          crumbs={[{ name: "Knowledge Hub", path: "/insights/" }, { name: t.name, path }]}
          label="Knowledge Hub"
          title={t.title}
          intro={t.intro}
        />
        <section className="pb-20">
          <div className={wrap}>
            <ul className="grid gap-4 md:grid-cols-3">
              {guides.map((p) => (
                <li key={p.slug} className="h-full">
                  <Link href={`/insights/${p.slug}/`} className="group flex h-full flex-col justify-between rounded-3xl bg-mist p-8 transition-colors hover:bg-[#ebebe9]">
                    <div>
                      <span className="text-sm text-slate">Guide</span>
                      <h2 className="heading mt-6 text-2xl">{p.title}</h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-slate">{p.description}</p>
                    </div>
                    <span className="mt-10 inline-flex items-center gap-1.5 font-medium text-charcoal-deep">
                      Read the guide
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="bg-mist py-20 md:py-24">
          <div className={wrap}>
            <SectionHead label="Redbay can help" title="From reading to building" />
            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {t.help.map((h) => (
                <li key={h.href}>
                  <Link href={h.href} className="group flex h-full flex-col justify-between rounded-3xl bg-white p-7 transition-shadow hover:shadow-md">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{h.label}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate">{h.text}</p>
                    </div>
                    <ArrowUpRight className="mt-6 h-4 w-4" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-center">
              <Link href="/insights/" className="font-medium text-charcoal-deep underline-offset-4 hover:underline">All Knowledge Hub topics</Link>
            </p>
          </div>
        </section>
        <CtaPanel title="Ready to talk about your project?" text="Send us your plans or a few photos and we will tell you what is needed, with one fixed price." message={t.message} />
      </main>
      <Footer />
    </>
  );
}
