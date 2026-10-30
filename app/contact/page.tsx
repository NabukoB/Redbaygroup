import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Footer, Nav, PageHero, SectionHead, whatsappLink, wrap } from "@/components/chrome";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { pageMeta } from "@/lib/seo";
import { faqs, site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Contact Us: Get a Building Quote in Kenya",
  description: `Start a project with Redbay Group. Call or WhatsApp ${site.phone}. Send your plans for an itemised bill of quantities and a fixed quote.`,
  path: "/contact/",
});

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ContactPage() {
  const channels = [
    { icon: MessageCircle, label: "WhatsApp", value: "Send plans and photos", href: whatsappLink(), primary: true },
    { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: "Office", value: site.location },
  ];
  return (
    <>
      <Nav />
      <main>
        <JsonLd data={faqLd} />
        <PageHero
          crumbs={[{ name: "Contact", path: "/contact/" }]}
          label="Start a project"
          title="Let’s build something that matters."
          intro="Planning a home? Developing a school? Transforming a space? Tell us about it and we will come back with clear next steps."
        />

        <section className="pb-24">
          <div className={wrap}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {channels.map((c, i) => {
                const inner = (
                  <>
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${c.primary ? "bg-red" : "bg-charcoal-deep"}`}>
                      <c.icon className="h-5 w-5 text-white" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <span className="mt-8 block text-sm text-slate">{c.label}</span>
                    <span className="mt-1 block break-words text-lg font-semibold tracking-tight">{c.value}</span>
                  </>
                );
                return (
                  <Reveal key={c.label} delay={i * 0.05}>
                    <li className="h-full">
                      {c.href ? (
                        <a
                          href={c.href}
                          {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="block h-full rounded-3xl bg-mist p-7 transition-colors hover:bg-[#ebebe9]"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="h-full rounded-3xl bg-mist p-7">{inner}</div>
                      )}
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        <section className="border-t border-line py-24 md:py-28">
          <div className={`${wrap} grid gap-12 lg:grid-cols-12`}>
            <div className="lg:col-span-5">
              <SectionHead
                label="Getting a quote"
                title="What to send us."
                text="The more we know, the faster and more accurate the quote."
                center={false}
              />
            </div>
            <Reveal delay={0.1} className="lg:col-span-7">
              <ol className="space-y-4">
                {[
                  ["Your drawings", "Architectural and structural drawings, if you have them."],
                  ["The site location", "A pin or the town and road, so we can plan a site visit."],
                  ["Photos of the site", "A few photos help us understand access and ground conditions."],
                  ["Your timeline", "When you would like to start, and any deadline you are working to."],
                ].map(([t, d], i) => (
                  <li key={t} className="flex gap-5 rounded-2xl border border-line p-6">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight">{t}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed text-slate">{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </section>

        <section className="bg-mist py-24 md:py-28">
          <div className={wrap}>
            <SectionHead label="FAQ" title="Common questions." />
            <div className="mx-auto mt-12 max-w-3xl space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.03}>
                  <details className="group rounded-2xl bg-white p-6 open:pb-7" {...(i === 0 ? { open: true } : {})}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold tracking-tight [&::-webkit-details-marker]:hidden">
                      <h3>{f.q}</h3>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal-deep text-white transition-transform group-open:rotate-45" aria-hidden="true">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
