import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// A list that always has at least one item, so list[0] is always there
export type NonEmpty<T> = [T, ...T[]];

// The next `count` items after position `at`, wrapping round, never repeating the item itself.
// Used for "more designs / more guides / more projects" so every page links onward.
export function neighbours<T>(list: readonly T[], at: number, count: number): T[] {
  const out: T[] = [];
  for (let k = 1; k <= count && k < list.length; k++) {
    const item = list[(at + k) % list.length];
    if (item !== undefined) out.push(item);
  }
  return out;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
