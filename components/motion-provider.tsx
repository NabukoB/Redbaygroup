"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// "user" = follow the visitor's Reduce Motion setting: movement is skipped,
// elements still appear (fade only), so nothing is ever left hidden.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
