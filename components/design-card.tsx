import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Design } from "@/lib/designs";
import { imgSrc } from "@/lib/site";

export function DesignCard({ d }: { d: Design }) {
  const base = `/designs/${d.slug}`;
  const cover = d.photos[0];
  return (
    <Link href={`${base}/`} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white" aria-label={`${d.name}: view design`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-mist">
        {/* eslint-disable-next-line @next/next/no-img-element -- static export: images are pre-sized WebP */}
        <img
          src={imgSrc(base, cover.file, 800)}
          srcSet={`${imgSrc(base, cover.file, 800)} 800w, ${imgSrc(base, cover.file, 1600)} 1600w`}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          alt={cover.alt}
          width={800}
          height={600}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-3 top-3 rounded-full bg-charcoal-deep/85 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          Concept design
        </span>
        {d.photos.length > 1 && (
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-deep backdrop-blur">
            {d.photos.length} views
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-7">
        <p className="text-sm text-slate">{d.style}</p>
        <div className="mt-6">
          <h3 className="heading flex items-center justify-between gap-3 text-2xl">
            {d.name}
            <ArrowUpRight className="h-5 w-5 shrink-0 text-charcoal-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </h3>
          <p className="mt-2 line-clamp-2 text-[15px] leading-relaxed text-slate">{d.summary}</p>
        </div>
      </div>
    </Link>
  );
}
