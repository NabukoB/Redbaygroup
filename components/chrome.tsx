import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { breadcrumbLd } from "@/lib/seo";
import { companies, site } from "@/lib/site";

export { Nav } from "@/components/nav";

export const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10";

export const whatsappLink = (text = "Hello Redbay Group, I would like to start a project.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

// Small charcoal-black pill used for section labels and tags
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-charcoal-deep px-3.5 py-1.5 text-[13px] font-medium text-white">
      {children}
    </span>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="block h-4 w-4 rounded-[4px] bg-red" aria-hidden="true" />
      <span className="text-lg font-semibold tracking-tight text-charcoal-deep">
        Redbay <span className="font-normal text-slate">Group</span>
      </span>
    </span>
  );
}

export function SectionHead({ label, title, text, center = true, as = "h2" }: { label: string; title: string; text?: string; center?: boolean; as?: "h1" | "h2" }) {
  const H = as;
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <Badge>{label}</Badge>
      <H className="heading mt-5 text-[clamp(2.1rem,4.4vw,3.4rem)]">{title}</H>
      {text && <p className="mt-5 text-lg leading-relaxed text-slate">{text}</p>}
    </Reveal>
  );
}

// Visible breadcrumb trail plus the matching structured data
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbLd(all)} />
      <nav aria-label="Breadcrumb" className="text-sm text-slate">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((it, i) => (
            <li key={it.path} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < all.length - 1 ? (
                <Link className="hover:text-charcoal-deep" href={it.path}>{it.name}</Link>
              ) : (
                <span aria-current="page" className="text-charcoal-deep">{it.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

// Top of every inner page: breadcrumb, label, the page's one h1, and intro
export function PageHero({ crumbs, label, title, intro, children }: { crumbs: { name: string; path: string }[]; label: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="pb-16 pt-10 md:pb-20 md:pt-14">
      <div className={wrap}>
        <Breadcrumbs items={crumbs} />
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className={children ? "lg:col-span-6" : "lg:col-span-8"}>
            <Badge>{label}</Badge>
            <h1 className="heading mt-5 text-[clamp(2.5rem,5.4vw,4.4rem)]">{title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate md:text-xl">{intro}</p>
          </Reveal>
          {children && <Reveal delay={0.1} className="lg:col-span-6">{children}</Reveal>}
        </div>
      </div>
    </section>
  );
}

// The black "start a project" panel used at the end of pages
export function CtaPanel({ title = "Let’s build something that matters.", text = "Planning a home? Developing a school? Transforming a space? Let’s bring your vision to life.", message }: { title?: string; text?: string; message?: string }) {
  return (
    <section className="pb-24 md:pb-32">
      <div className={wrap}>
        <Reveal>
          <div className="rounded-[28px] bg-charcoal-deep px-6 py-16 text-center text-white md:px-16 md:py-24">
            <h2 className="heading mx-auto max-w-3xl text-[clamp(2.3rem,5vw,4rem)]">{title}</h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/65">{text}</p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild>
                <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">Start a project on WhatsApp</a>
              </Button>
              <Button asChild variant="outlineLight">
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>Call {site.phone}</a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${wrap} grid gap-10 py-14 md:grid-cols-12`}>
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-slate">
            {site.tagline} Homes, schools, interiors and energy across Kenya.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Divisions">
            {["Homes", "Schools", "Interiors", "Energy"].map((d) => (
              <li key={d}>
                <Badge>{d}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <nav className="grid grid-cols-2 gap-8 text-[15px] md:col-span-4" aria-label="Footer">
          <div>
            <p className="font-semibold text-charcoal-deep">Companies</p>
            <ul className="mt-3 space-y-2 text-slate">
              {companies.map((c) => (
                <li key={c.slug}>
                  <Link className="hover:text-charcoal-deep" href={`/companies/${c.slug}/`}>{c.name.replace("Redbay ", "")}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-charcoal-deep">Group</p>
            <ul className="mt-3 space-y-2 text-slate">
              <li><Link className="hover:text-charcoal-deep" href="/about/">About</Link></li>
              <li><Link className="hover:text-charcoal-deep" href="/projects/">Projects</Link></li>
              <li><Link className="hover:text-charcoal-deep" href="/insights/">Insights</Link></li>
              <li><Link className="hover:text-charcoal-deep" href="/contact/">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <div className="text-[15px] md:col-span-3">
          <p className="font-semibold text-charcoal-deep">Talk to us</p>
          <ul className="mt-3 space-y-2 text-slate">
            <li><a className="hover:text-charcoal-deep" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a></li>
            <li><a className="hover:text-charcoal-deep" href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a className="hover:text-charcoal-deep" href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className={`${wrap} py-6 text-sm text-slate`}>
          © {site.name}. {site.legal} is an {site.nca} licensed contractor registered with the National Construction Authority.
        </p>
      </div>
    </footer>
  );
}
