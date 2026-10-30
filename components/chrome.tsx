import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10";

// Small charcoal-black pill used for section labels and tags
export function Badge({ children, tone = "black" }: { children: ReactNode; tone?: "black" | "light" }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium ${
        tone === "black" ? "bg-charcoal-deep text-white" : "bg-white/10 text-white"
      }`}
    >
      {children}
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="block h-4 w-4 rounded-[4px] bg-red" aria-hidden="true" />
      <span className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-charcoal-deep"}`}>
        Redbay <span className={`font-normal ${light ? "text-white/60" : "text-slate"}`}>Group</span>
      </span>
    </span>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-md">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <Link href="/" aria-label="Redbay Group, home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-9 text-[15px] text-slate lg:flex" aria-label="Main">
          <Link className="hover:text-charcoal-deep" href="/#about">About</Link>
          <Link className="hover:text-charcoal-deep" href="/#companies">Our companies</Link>
          <Link className="hover:text-charcoal-deep" href="/projects">Projects</Link>
          <Link className="hover:text-charcoal-deep" href="/#approach">Approach</Link>
        </nav>
        <Button asChild size="sm">
          <Link href="/#contact">Start a project</Link>
        </Button>
      </div>
    </header>
  );
}

export function SectionHead({ label, title, text, center = true }: { label: string; title: string; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      <Badge>{label}</Badge>
      <h2 className="heading mt-5 text-[clamp(2.1rem,4.4vw,3.4rem)]">{title}</h2>
      {text && <p className="mt-5 text-lg leading-relaxed text-slate">{text}</p>}
    </Reveal>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className={`${wrap} grid gap-8 py-12 md:grid-cols-2 md:items-end`}>
        <div>
          <Logo />
          <p className="mt-3 text-[15px] text-slate">{site.tagline}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Divisions">
            {["Homes", "Schools", "Interiors", "Energy"].map((d) => (
              <li key={d}>
                <Badge>{d}</Badge>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm leading-relaxed text-slate md:text-right">
          <p>
            <a className="hover:text-charcoal-deep" href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <span className="mx-2" aria-hidden="true">/</span>
            <a className="hover:text-charcoal-deep" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="mt-1">
            © {site.name}. {site.legal} is an {site.nca} licensed contractor, {site.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
