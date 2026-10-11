/**
 * Prospect video tracking for tracked letter and email links.
 *
 * Runs only when the page URL has `?ref=` with a 6-character lowercase code.
 * Only the code and the campaign tags in the URL are sent. No names, phone
 * numbers, or code-to-shop list live in this repo.
 * Every send is fire-and-forget and never waits on the network.
 */

const WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/ZGWdRE90s2DenfiZc3lm/webhook-trigger/0c60a052-79f0-450d-b6c1-2c63ccf2f742";
const CODE_PATTERN = /^[a-z0-9]{6}$/;
const MARKS = [25, 50, 75, 100] as const;
const KEY_PREFIX = "bog-track";

type TrackContext = {
  code: string;
  utm_source: string | null;
  utm_campaign: string | null;
};

let cached: TrackContext | null | undefined;

/** The visit's tracking code and tags, or null when this is not a tracked link. */
function context(): TrackContext | null {
  if (cached !== undefined) return cached;
  cached = null;
  if (typeof window === "undefined") return cached;
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("ref");
    if (code && CODE_PATTERN.test(code)) {
      cached = { code, utm_source: params.get("utm_source"), utm_campaign: params.get("utm_campaign") };
    }
  } catch {
    cached = null;
  }
  return cached;
}

function storageKey(code: string, name: string) {
  return `${KEY_PREFIX}:${code}:${name}`;
}

function readFlag(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeFlag(key: string, value: string) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Storage can be blocked (private mode). Tracking just repeats less carefully.
  }
}

/** Sends once per session per code. Returns false when it was already sent. */
function sendOnce(flag: string, event: string, extra: Record<string, number> = {}) {
  const ctx = context();
  if (!ctx) return false;
  const key = storageKey(ctx.code, flag);
  if (readFlag(key)) return false;
  writeFlag(key, "1");
  const payload = {
    event,
    code: ctx.code,
    utm_source: ctx.utm_source,
    utm_campaign: ctx.utm_campaign,
    page: window.location.origin + window.location.pathname,
    ts: new Date().toISOString(),
    ...extra,
  };
  try {
    void fetch(WEBHOOK, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(payload),
    }).catch(() => {});
  } catch {
    // Never let tracking break the page.
  }
  return true;
}

export function isTracked() {
  return context() !== null;
}

/** Event "opened": once per visit. */
export function trackOpened() {
  sendOnce("opened", "opened");
}

/** Event "unmuted": once per visit, the first time the viewer turns sound on. */
export function trackUnmuted() {
  sendOnce("unmuted", "unmuted");
}

/**
 * Event "watched": call with the video's real playback position. Sends 25, 50,
 * 75 and 100 the first time each mark is reached, once per visit per code.
 */
export function trackWatched(percent: number) {
  const ctx = context();
  if (!ctx || !Number.isFinite(percent)) return;
  const maxKey = storageKey(ctx.code, "max");
  const stored = Number(readFlag(maxKey)) || 0;
  const reached = Math.min(100, Math.max(0, Math.floor(percent)));
  const max = Math.max(stored, reached);
  if (max > stored) writeFlag(maxKey, String(max));
  for (const mark of MARKS) {
    if (max >= mark) sendOnce(`watched-${mark}`, "watched", { percent: mark, max_percent: max });
  }
}
