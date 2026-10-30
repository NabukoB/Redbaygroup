"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companies, site } from "@/lib/site";

const wrap = "mx-auto w-full max-w-[1240px] px-5 md:px-10";

function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <span className="block h-4 w-4 rounded-[4px] bg-red" aria-hidden="true" />
      <span className="text-lg font-semibold tracking-tight text-charcoal-deep">
        Redbay <span className="font-normal text-slate">Group</span>
      </span>
    </span>
  );
}

const links = [
  { href: "/about/", label: "About" },
  { href: "/projects/", label: "Projects" },
  { href: "/insights/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Close menus when the page changes
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMenuOpen(false);
    setDropOpen(false);
  }

  // Close the dropdown on outside click or Escape
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const isActive = (href: string) => pathname === href || pathname === href.replace(/\/$/, "");
  const linkCls = (href: string) =>
    `hover:text-charcoal-deep ${isActive(href) ? "text-charcoal-deep font-medium" : ""}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/90 backdrop-blur-md">
      <div className={`${wrap} flex h-16 items-center justify-between`}>
        <Link href="/" aria-label="Redbay Group, home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] text-slate lg:flex" aria-label="Main">
          <Link className={linkCls("/about/")} href="/about/">About</Link>
          <div className="relative" ref={dropRef}>
            <button
              type="button"
              className={`flex items-center gap-1 hover:text-charcoal-deep ${pathname.startsWith("/companies") ? "font-medium text-charcoal-deep" : ""}`}
              aria-expanded={dropOpen}
              aria-controls="companies-menu"
              onClick={() => setDropOpen((v) => !v)}
            >
              Our companies
              <ChevronDown className={`h-4 w-4 transition-transform ${dropOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <AnimatePresence>
              {dropOpen && (
                <motion.div
                  id="companies-menu"
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-9 w-[340px] -translate-x-1/2 rounded-2xl border border-line bg-white p-2 shadow-[0_12px_40px_rgba(28,29,31,0.12)]"
                >
                  {companies.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/companies/${c.slug}/`}
                      className="block rounded-xl px-4 py-3 hover:bg-mist"
                    >
                      <span className="block font-medium text-charcoal-deep">{c.name}</span>
                      <span className="block text-sm text-slate">{c.line}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {links.slice(1).map((l) => (
            <Link key={l.href} className={linkCls(l.href)} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="flex h-10 w-10 items-center justify-center rounded-md bg-red text-white sm:hidden"
            aria-label={`Call Redbay Group on ${site.phone}`}
          >
            <Phone className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact/">Start a project</Link>
          </Button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-charcoal-deep hover:bg-mist lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className={`${wrap} py-4`}>
              <p className="px-1 pb-2 pt-1 text-sm text-slate">Our companies</p>
              <ul className="grid grid-cols-2 gap-2">
                {companies.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/companies/${c.slug}/`} className="block rounded-xl bg-mist px-4 py-3 font-medium">
                      {c.name.replace("Redbay ", "")}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="mt-3 divide-y divide-line">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block px-1 py-3.5 text-lg font-medium">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-3 w-full">
                <Link href="/contact/">Start a project</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
