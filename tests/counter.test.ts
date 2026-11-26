// The cookie-free visit counter (public/hit.php) and the private stats page, run on real PHP.
import { spawn, type ChildProcess } from "node:child_process";
import { copyFileSync, existsSync, mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterAll, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { ownVisitsIgnored } from "@/lib/own-visits";

const PORT = 3191;
const url = `http://127.0.0.1:${PORT}`;
const phone = "Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 Chrome/130.0 Mobile Safari/537.36";
const stats = "stats-29384cae6090.php";
let dir = "";
let php: ChildProcess;

const hit = (fields: Record<string, string>, ua = phone) =>
  fetch(`${url}/hit.php`, { method: "POST", headers: { "user-agent": ua }, body: new URLSearchParams(fields) });
const read = (file: string) => {
  const p = join(dir, "_stats", file);
  return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : null;
};
const today = () => Object.values(read("counts.json") ?? {})[0] as Record<string, Record<string, number>>;
const todaySources = () => Object.values(read("sources.json") ?? {})[0] as Record<string, { visit?: number; whatsapp?: number; pages?: Record<string, number> }>;

beforeAll(async () => {
  dir = mkdtempSync(join(tmpdir(), "counter-"));
  for (const f of ["hit.php", stats]) copyFileSync(join(process.cwd(), "public", f), join(dir, f));
  php = spawn("php", ["-S", `127.0.0.1:${PORT}`, "-t", dir], { stdio: "ignore" });
  for (let i = 0; i < 50; i++) {
    try {
      await fetch(url + "/hit.php");
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 100));
    }
  }
  throw new Error("PHP did not start");
});
afterAll(() => {
  php?.kill();
  rmSync(dir, { recursive: true, force: true });
});
beforeEach(() => rmSync(join(dir, "_stats"), { recursive: true, force: true }));

describe("counter rejects bad requests", () => {
  it("only accepts POST", async () => {
    expect((await fetch(`${url}/hit.php`)).status).toBe(405);
  });
  it.each([
    ["unknown event", { e: "hack", p: "/" }],
    ["path without leading slash", { e: "view", p: "projects/" }],
    ["path with odd characters", { e: "view", p: "/<script>/" }],
    ["very long path", { e: "view", p: "/" + "a".repeat(200) }],
  ])("%s", async (_n, body) => {
    expect((await hit(body)).status).toBe(400);
    expect(read("counts.json")).toBeNull();
  });
  it("ignores bots without recording anything", async () => {
    expect((await hit({ e: "view", p: "/" }, "Googlebot/2.1")).status).toBe(204);
    expect(read("counts.json")).toBeNull();
  });
});

describe("counter records visits", () => {
  it("counts views and taps per page", async () => {
    await hit({ e: "view", p: "/" });
    await hit({ e: "view", p: "/" });
    await hit({ e: "whatsapp", p: "/" });
    await hit({ e: "call", p: "/contact/" });
    expect(today()).toEqual({ "/": { view: 2, whatsapp: 1 }, "/contact/": { call: 1 } });
  });

  it("records the source once per visit, plus the taps it led to", async () => {
    await hit({ e: "view", p: "/projects/tala-bungalow-shell/", s: "facebook", l: "1" }); // arrives
    await hit({ e: "view", p: "/projects/", s: "facebook" }); // second page, same visit
    await hit({ e: "whatsapp", p: "/projects/", s: "facebook" });
    expect(todaySources()).toEqual({ facebook: { visit: 1, whatsapp: 1, pages: { "/projects/tala-bungalow-shell/": 1 } } });
  });

  it("ignores made-up sources but still counts the page", async () => {
    await hit({ e: "view", p: "/", s: "evil", l: "1" });
    expect(read("sources.json")).toBeNull();
    expect(today()).toEqual({ "/": { view: 1 } });
  });
});

describe("private stats page", () => {
  it("shows totals and sources without PHP errors", async () => {
    await hit({ e: "view", p: "/about/", s: "google", l: "1" });
    await hit({ e: "whatsapp", p: "/about/", s: "google" });
    const html = await (await fetch(`${url}/${stats}`)).text();
    expect(html).not.toMatch(/Warning|Notice|Fatal|Deprecated/);
    expect(html).toContain("Where visitors came from");
    expect(html).toContain("<b>Google</b>");
    expect(html).toContain("Landed on: /about/ (1)");
  });

  it("works with no data yet", async () => {
    const html = await (await fetch(`${url}/${stats}?days=7`)).text();
    expect(html).not.toMatch(/Warning|Notice|Fatal|Deprecated/);
    expect(html).toContain("No source data yet");
  });

  it("is hidden from search engines", async () => {
    const res = await fetch(`${url}/${stats}`);
    expect(res.headers.get("x-robots-tag")).toContain("noindex");
  });
});

describe("counter records where visitors are and their device", () => {
  it("records the time zone and device once per arrival", async () => {
    await hit({ e: "view", p: "/", s: "direct", l: "1", z: "Europe/London" });
    await hit({ e: "view", p: "/projects/", s: "direct", z: "Europe/London" }); // later page: not counted
    await hit({ e: "view", p: "/", s: "direct", l: "1", z: "Africa/Nairobi" });
    const day = Object.values(read("place.json") ?? {})[0] as { tz: Record<string, number>; dev: Record<string, number> };
    expect(day.tz).toEqual({ "Europe/London": 1, "Africa/Nairobi": 1 });
    expect(day.dev).toEqual({ mobile: 2 });
  });
  it("stores nonsense time zones as Unknown", async () => {
    await hit({ e: "view", p: "/", s: "direct", l: "1", z: "<script>alert(1)</script>" });
    const day = Object.values(read("place.json") ?? {})[0] as { tz: Record<string, number> };
    expect(day.tz).toEqual({ Unknown: 1 });
  });
  it("shows visitors abroad on the stats page", async () => {
    await hit({ e: "view", p: "/", s: "direct", l: "1", z: "Europe/London" });
    await hit({ e: "view", p: "/", s: "direct", l: "1", z: "Africa/Nairobi" });
    const html = await (await fetch(`${url}/${stats}`)).text();
    expect(html).toContain("United Kingdom");
    expect(html).toMatch(/Visitors outside Kenya: <b>1<\/b> of 2/);
  });
});

describe("own-visits switch", () => {
  it("stops counting with ?notrack=1 and starts again with ?notrack=0", () => {
    expect(ownVisitsIgnored("?notrack=1", null)).toBe(true);
    expect(ownVisitsIgnored("?notrack=0", "1")).toBe(false);
  });
  it("keeps the remembered choice on later pages", () => {
    expect(ownVisitsIgnored("", "1")).toBe(true);
    expect(ownVisitsIgnored("?src=fb", "1")).toBe(true);
    expect(ownVisitsIgnored("", null)).toBe(false);
    expect(ownVisitsIgnored("?notrack=maybe", null)).toBe(false);
  });
});
