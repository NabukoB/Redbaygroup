import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHead, wrap } from "@/components/chrome";

const tools = [
  { href: "/house-cost-calculator/", name: "House cost calculator", text: "A quick published-guide estimate from your floor area." },
  { href: "/perimeter-wall-calculator/", name: "Perimeter wall calculator", text: "Wall cost from your boundary length." },
  { href: "/roofing-sheets-calculator/", name: "Roofing sheets calculator", text: "How many sheets your roof needs." },
  { href: "/building-materials-calculator/", name: "Building materials calculator", text: "Blocks, cement, sand and ballast." },
  { href: "/contractor-checklist/", name: "Contractor checklist", text: "One page to check before you sign." },
  { href: "/hybrid-solar-wind-systems/", name: "Does wind make sense at your site?", text: "A five-question solar and wind check." },
] as const;

export function FreeTools({ heading = "Free tools to plan your project" }: { heading?: string }) {
  return (
    <section id="tools" className="scroll-mt-16 border-t border-line py-20 md:py-24">
      <div className={wrap}>
        <SectionHead label="Free tools" title={heading} text="Quick answers before you speak to anyone. Each one ends with an easy way to ask us for the real figures." />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <li key={t.href} className="h-full">
              <Link href={t.href} className="group flex h-full flex-col justify-between rounded-3xl bg-mist p-7 transition-colors hover:bg-[#ebebe9]">
                <span>
                  <span className="block text-lg font-semibold tracking-tight">{t.name}</span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-slate">{t.text}</span>
                </span>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-charcoal-deep">
                  Try it <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
