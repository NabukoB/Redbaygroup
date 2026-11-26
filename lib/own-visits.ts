// A switch so the owner's own visits are not counted. Open any page once with ?notrack=1 on a device
// to stop counting it, and ?notrack=0 to count it again. Kept free of browser globals so it can be tested.

export const NOTRACK_KEY = "rb_notrack";

// `stored` is what the browser remembered last time ("1" means do not count).
export function ownVisitsIgnored(search: string, stored: string | null): boolean {
  const flag = new URLSearchParams(search).get("notrack");
  if (flag === "1") return true;
  if (flag === "0") return false;
  return stored === "1";
}
