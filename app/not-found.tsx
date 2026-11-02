import type { Metadata } from "next";
import Link from "next/link";
import { Badge, Footer, Nav, wrap } from "@/components/chrome";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/projects/", label: "Projects", text: "Homes, schools and interiors we have built." },
  { href: "/designs/", label: "Home designs", text: "Designs we have developed with our clients." },
  { href: "/insights/", label: "Insights", text: "Plain-English building guides." },
  { href: "/contact/", label: "Contact", text: "Call or WhatsApp us about your project." },
];

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <section className="py-20 md:py-28">
          <div className={`${wrap} text-center`}>
            <Badge>404</Badge>
            <h1 className="heading mx-auto mt-5 max-w-2xl text-[clamp(2.4rem,5vw,4rem)]">This page doesn’t exist.</h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate">
              The link may be old or mistyped. Try one of these instead.
            </p>
            <ul className="mx-auto mt-12 grid max-w-4xl gap-3 text-left sm:grid-cols-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="block h-full rounded-2xl bg-mist p-6 transition-colors hover:bg-[#ebebe9]">
                    <span className="block text-lg font-semibold tracking-tight">{l.label}</span>
                    <span className="mt-1 block text-[15px] text-slate">{l.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild variant="charcoal" className="mt-10">
              <Link href="/">Go to the home page</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
