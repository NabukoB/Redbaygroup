import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/chrome";
import { photoSrc, type Project } from "@/lib/site";

export function ProjectCard({ p }: { p: Project }) {
  const cover = p.slug && p.photos?.[0];
  const body = (
    <>
      {cover && (
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element -- static export: images are pre-sized WebP */}
          <img
            src={photoSrc(p.slug!, cover.file, 800)}
            srcSet={`${photoSrc(p.slug!, cover.file, 800)} 800w, ${photoSrc(p.slug!, cover.file, 1600)} 1600w`}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            alt={cover.alt}
            width={800}
            height={600}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-charcoal-deep backdrop-blur">
            {p.photos!.length} photos
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-7">
        <div className="flex items-center justify-between gap-3">
          <Badge>{p.division}</Badge>
          <span className="text-sm text-slate">{p.note}</span>
        </div>
        <div className={cover ? "mt-8" : "mt-14"}>
          <h3 className="heading text-2xl md:text-[28px]">{p.name}</h3>
          <p className="mt-1 flex items-center justify-between text-lg text-slate">
            {p.place}
            {cover && (
              <ArrowUpRight className="h-5 w-5 text-charcoal-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            )}
          </p>
        </div>
      </div>
    </>
  );

  const cls = "group flex h-full flex-col overflow-hidden rounded-2xl bg-white";
  return cover ? (
    <Link href={`/projects/${p.slug}/`} className={cls} aria-label={`${p.name}, ${p.place}: view project`}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}
