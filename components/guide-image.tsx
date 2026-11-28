import Link from "next/link";
import { CloudRain, Container, Droplets, FileCheck, FileText, ClipboardList, Plug, Sun, Thermometer, Wind } from "lucide-react";
import { guideImage, guidePhotoSource, guidePhotoSrc, type GuidePanel } from "@/lib/guide-images";

const icons = {
  sun: Sun,
  plug: Plug,
  thermometer: Thermometer,
  wind: Wind,
  windsun: Wind,
  droplets: Droplets,
  file: FileText,
  clipboard: ClipboardList,
  stamp: FileCheck,
  rain: CloudRain,
  tank: Container,
} as const;

function Panel({ panel, big }: { panel: GuidePanel; big: boolean }) {
  const Icon = icons[panel.icon];
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-charcoal-deep" role="img" aria-label={panel.label}>
      <span className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-red/20 blur-2xl" aria-hidden="true" />
      <span className="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-white/5" aria-hidden="true" />
      <div className="relative flex flex-col items-center text-center text-white">
        <span className={`flex items-center justify-center rounded-3xl bg-white/10 ${big ? "h-24 w-24" : "h-16 w-16"}`}>
          <Icon className={big ? "h-12 w-12" : "h-8 w-8"} aria-hidden="true" />
          {panel.icon === "windsun" && <Sun className={`absolute -right-2 -top-2 text-red ${big ? "h-8 w-8" : "h-6 w-6"}`} aria-hidden="true" />}
        </span>
        <span className={`mt-4 font-semibold tracking-tight ${big ? "text-xl" : "text-sm"}`}>{panel.label}</span>
        <span className="mt-3 h-1 w-10 rounded-full bg-red" aria-hidden="true" />
      </div>
    </div>
  );
}

// The picture at the top of a guide (hero) or on a guide card (card).
export function GuideImage({ slug, size, priority = false }: { slug: string; size: "hero" | "card"; priority?: boolean }) {
  const img = guideImage(slug);
  if (!img) return null;
  const hero = size === "hero";
  if (img.kind === "panel") {
    return (
      <div className={`overflow-hidden ${hero ? "aspect-[16/9] rounded-3xl" : "aspect-[16/9]"}`}>
        <Panel panel={img} big={hero} />
      </div>
    );
  }
  const source = guidePhotoSource(img);
  const pic = (
    <div className={`relative overflow-hidden ${hero ? "aspect-[16/9] rounded-3xl" : "aspect-[16/9]"}`}>
      {/* eslint-disable-next-line @next/next/no-img-element -- static export: images are pre-sized WebP */}
      <img
        src={guidePhotoSrc(img, 800)}
        srcSet={`${guidePhotoSrc(img, 800)} 800w, ${guidePhotoSrc(img, 1600)} 1600w`}
        sizes={hero ? "(min-width: 768px) 768px, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
        alt={img.alt}
        width={1600}
        height={900}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
  if (!hero) return pic;
  return (
    <figure>
      {pic}
      <figcaption className="mt-3 text-sm text-slate">
        <Link href={source.href} className="underline-offset-4 hover:underline">{source.text}</Link>
      </figcaption>
    </figure>
  );
}
