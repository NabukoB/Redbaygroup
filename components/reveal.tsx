"use client";

import { motion, useInView } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";

// Gentle rise-in when a block scrolls into view.
// Content is visible in the page from the start (fast for visitors and Google).
// Only blocks that start below the screen are hidden, after load, and then rise in.
// Reduced-motion visitors get a plain fade (handled by MotionConfig in layout).
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLElement>(null);
  const [armed, setArmed] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useLayoutEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, []);

  const variants = {
    shown: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const } },
    hidden: { opacity: 0, y: 24, transition: { duration: 0 } },
  };
  const state = armed && !inView ? "hidden" : "shown";

  if (as === "li") {
    return (
      <motion.li ref={ref as RefObject<HTMLLIElement>} className={className} initial={false} animate={state} variants={variants}>
        {children}
      </motion.li>
    );
  }
  return (
    <motion.div ref={ref as RefObject<HTMLDivElement>} className={className} initial={false} animate={state} variants={variants}>
      {children}
    </motion.div>
  );
}
