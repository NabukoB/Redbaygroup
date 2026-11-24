// When a page's source last changed, read from git at build time, for the sitemap's <lastmod>.
// Files with changes not yet committed count as changed today. Falls back to a fixed date without git.
import { execFileSync } from "node:child_process";

const FALLBACK = "2026-11-04";

const git = (args: string[]) => {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
};

export function changed(...files: string[]): Date {
  if (git(["status", "--porcelain", "--", ...files])) return new Date(new Date().toISOString().slice(0, 10));
  return new Date(git(["log", "-1", "--format=%cs", "--", ...files]) || FALLBACK);
}
