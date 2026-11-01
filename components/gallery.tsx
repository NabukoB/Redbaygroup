"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { imgSrc, type ProjectPhoto } from "@/lib/site";

// Photo grid; tapping a photo opens it full screen with next/previous.
export function Gallery({ base, photos }: { base: string; photos: ProjectPhoto[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const n = photos.length;
  const go = (d: number) => setOpen((i) => (i === null ? i : (i + d + n) % n));

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((ph, i) => (
          <li key={ph.file} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block h-full w-full overflow-hidden rounded-2xl bg-mist"
              aria-label={`Open photo ${i + 1} of ${n}: ${ph.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- static export: images are pre-sized WebP */}
              <img
                src={imgSrc(base, ph.file, i === 0 ? 1600 : 800)}
                srcSet={`${imgSrc(base, ph.file, 800)} 800w, ${imgSrc(base, ph.file, 1600)} 1600w`}
                sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 50vw"}
                alt={ph.alt}
                width={800}
                height={600}
                loading={i < 3 ? "eager" : "lazy"}
                decoding="async"
                className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Photo ${open + 1} of ${n}`}
            className="fixed inset-0 z-[100] flex flex-col bg-charcoal-deep/95"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <div className="flex items-center justify-between p-4 text-white" onClick={(e) => e.stopPropagation()}>
              <span className="text-sm text-white/70">
                {open + 1} / {n}
              </span>
              <button type="button" onClick={() => setOpen(null)} className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20" aria-label="Close photo">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="relative flex flex-1 items-center justify-center px-4 pb-6" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={open}
                  src={imgSrc(base, photos[open].file, 1600)}
                  alt={photos[open].alt}
                  className="max-h-[80vh] max-w-full rounded-xl object-contain"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              <button type="button" onClick={() => go(-1)} className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-6" aria-label="Previous photo">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button type="button" onClick={() => go(1)} className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-6" aria-label="Next photo">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            <p className="px-6 pb-6 text-center text-sm text-white/70" onClick={(e) => e.stopPropagation()}>
              {photos[open].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
