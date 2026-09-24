/**
 * Founder-card wording from the Nexus organized content (2026-09-23).
 * Both looks render these strings as written. Do not rewrite them.
 */

export const HERO_KICKER = "YOUR BUSINESS IS BUSY.";

export const HERO_LEAD = "Make it easy for customers to reach you anyway.";

export const HERO_FRICTION =
  "Calls get missed. Texts wait. Information gets scattered. Language can add friction.";

export const HERO_BODY =
  "B-O-G helps local businesses make it easier for customers to find you, understand you, reach you, and book your service.";

export const CTA_TALK = "Talk With B-O-G";

export const HELP_HEADING = "How we help";

/** Name and detail stay separated only by the source em dash. */
export const HELP = [
  "THE OPEN DOOR™ — free local listing; services/contact/location/booking; multilingual access",
  "THE OPEN LINE™ — AI front desk when busy; missed ops, FAQ, texts, toward booking",
  "THE GROWTH LOOP™ — reactivation, reviews, follow-up, promos, local marketing, ads; path first then more people",
] as const;

export const LANGUAGE_HEADING = "Language matters";

export const LANGUAGE_LINE =
  "A good customer and a good business shouldn't miss each other because communicating is difficult.";

export const LANGUAGE_MORE =
  "Multilingual from the beginning. Less friction. More understanding. More opportunity.";

export const MEET_HEADING = "Meet Kenny";

export const MEET = [
  "I'm Kenny, founder of Blades of Grass.",
  "I spend time with local business owners, learn how their businesses actually work, and look for ways technology can make things simpler.",
  "I believe technology should support the human relationship — not replace it.",
  "I'm also Dad to Prana and Sergen, which is a big part of why building something meaningful matters to me.",
] as const;

export const CTA_HI = "Say Hi to Kenny";

export const CLOSE = [
  "GET FOUND. The Open Door™",
  "GET ANSWERED. The Open Line™",
  "GROW. The Growth Loop™",
] as const;

export const CTA_LOOK = "Let's Look At Your Business";

const HELP_DASH = " — ";

export function splitHelp(line: string): { name: string; detail: string } {
  const at = line.indexOf(HELP_DASH);
  if (at === -1) return { name: line, detail: "" };
  return {
    name: line.slice(0, at),
    detail: line.slice(at + HELP_DASH.length),
  };
}
