"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  CTA_HI,
  CTA_LOOK,
  CTA_SEE,
  CTA_TALK,
  HELP,
  HELP_HEADING,
  HERO_ATTENTION,
  HERO_BODY,
  HERO_PATH,
  LANGUAGE,
  LANGUAGE_HEADING,
  LOOK,
  LOOK_HEADING,
  MEET,
  MEET_HEADING,
  TRUST,
  TRUST_FOOTER,
  TRUST_HEADING,
  WAY,
  WAY_HEADING,
} from "@/lib/card-copy";
import {
  BOOK_URL,
  DEMO_CAPTION,
  DIRECTORY_URL,
  EMAIL,
  FOUNDING_ANNUAL,
  FOUNDING_ANNUAL_LABEL,
  FOUNDING_DETAIL,
  FOUNDING_GUARANTEE,
  FOUNDING_GUARANTEE_LABEL,
  FOUNDING_LABEL,
  FOUNDING_PRICE,
  FOUNDING_RENEWAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  ROLE_LINE,
  VCARD_HREF,
} from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import {
  BookingLink,
  ContactQr,
  ContactRow,
  EnglishNote,
  FamilyPhoto,
  GrassMark,
  LanguageChips,
  SaveContact,
} from "@/components/card-ui";
import { DemoReel } from "@/components/demo-reel";
import { Motion } from "@/components/motion";

const body = "max-w-full text-pretty text-lg leading-relaxed [overflow-wrap:break-word]";
const link =
  "inline-flex min-h-12 items-center text-lg font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4";

const DOT_LISTS = new Set([
  "Services. Location. Contact. Booking. What you want customers to know.",
  "Reactivation. Reviews. Follow-up. Promotions. Loyalty. Local marketing. Advertising.",
]);

function DotList({ text }: { text: string }) {
  const parts = text.split(/(?<=\.)\s+/);
  return (
    <ul className="flex flex-col gap-2">
      {parts.map((part) => (
        <li key={part} className="rounded-2xl bg-mist px-3.5 py-2.5 text-lg leading-snug text-ink">
          {part}
        </li>
      ))}
    </ul>
  );
}

function ArrowLine({ text, className }: { text: string; className: string }) {
  const parts = text.split(" → ");
  return (
    <p className={`flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}>
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="inline-flex items-baseline gap-2 whitespace-nowrap">
          {index > 0 ? <span>→</span> : null}
          <span>{part}</span>
        </span>
      ))}
    </p>
  );
}

function Prose({ text, className = body }: { text: string; className?: string }) {
  if (DOT_LISTS.has(text)) return <DotList text={text} />;
  if (text.includes(" → ")) return <ArrowLine text={text} className={className} />;
  return <p className={className}>{text}</p>;
}

function Rule({ gold = false }: { gold?: boolean }) {
  return <span className={gold ? "rule rule-gold" : "rule"} aria-hidden="true" />;
}

function HeroField() {
  return (
    <div className="hero-stage" aria-hidden="true">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <svg className="hero-grass" viewBox="0 0 400 130" preserveAspectRatio="none">
        <path d="M18 130c8-42 2-74-10-112" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M48 130c6-50 12-82 2-118" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M78 130c4-36 1-70-8-104" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M318 130c-2-46 8-78 16-116" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M352 130c-8-40-2-74 10-110" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M382 130c-4-32 2-66 12-98" fill="none" stroke="#c4a36a" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

/**
 * The contact card pins while the next section slides over it. When the card is
 * taller than the space between the header and the bottom dock (phones), pin it by
 * its bottom edge instead, so the whole offer can be read before it is covered.
 */
function usePinTop() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const headerGap = 4.5 * rem;
      const dock = 5.75 * rem;
      const fitTop = window.innerHeight - dock - el.offsetHeight - 0.75 * rem;
      el.style.setProperty("--pin-top", `${Math.min(headerGap, fitTop)}px`);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return ref;
}

export function LookB() {
  const { t } = useLang();
  const pinRef = usePinTop();

  return (
    <div className="min-h-dvh pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-ink">
      <Motion />
      <a className="skip" href="#content">
        {t.skip}
      </a>

      <header className="sticky top-0 z-30 flex items-center justify-between gap-3 border-b border-forest/10 bg-[#f7f3ea] px-4 py-2.5 sm:px-6">
        <div className="scroll-progress" aria-hidden="true" />
        <div className="flex min-w-0 items-center gap-2.5">
          <GrassMark className="h-9 w-9 shrink-0 text-forest" />
          <div className="min-w-0" translate="no">
            <p className="truncate font-serif text-xl leading-none text-forest">Kenny Mack</p>
            <p className="mt-1 truncate text-[0.68rem] font-bold tracking-[0.16em] text-sage uppercase">
              Blades of Grass
            </p>
          </div>
        </div>
        <a
          href={`tel:${PHONE_TEL}`}
          className="inline-flex min-h-12 shrink-0 flex-col items-end justify-center rounded-2xl bg-forest px-3.5 py-1.5 text-right text-paper"
        >
          <span className="text-[0.68rem] font-semibold tracking-[0.12em] text-[#f0e0b8] uppercase">{t.callText}</span>
          <span className="text-base leading-none font-bold">{PHONE_DISPLAY}</span>
        </a>
      </header>

      <div className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
        <LanguageChips />
        <div className="mt-3">
          <EnglishNote note={t.storyNote} />
        </div>
      </div>

      <main id="content">
        <section className="relative overflow-hidden">
          <HeroField />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-3 pb-8 sm:px-6 lg:px-8 lg:pt-8">
            <div className="grid items-start gap-4 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-14 lg:gap-y-6">
              <DemoReel className="lg:row-span-2" />
              <div className="min-w-0 text-center lg:pt-1 lg:text-left">
                <p className="text-[0.78rem] font-bold tracking-[0.22em] text-sage uppercase" translate="no">
                  Blades of Grass
                </p>
                <h1
                  id="hero-caption"
                  lang="en"
                  translate="no"
                  className="mt-2 text-balance font-serif text-[1.65rem] leading-[1.08] font-semibold tracking-[-0.03em] text-forest sm:text-4xl lg:text-[2.85rem] lg:leading-[0.98]"
                >
                  {DEMO_CAPTION}
                </h1>
                <SaveContact label={t.saveContact} className="mx-auto mt-4 max-w-md lg:mx-0" />
              </div>
              <div lang="en" translate="no" className="min-w-0 max-w-2xl space-y-3 lg:col-start-2">
                <p className="font-serif text-[1.45rem] leading-snug font-medium text-ink sm:text-[1.7rem]">
                  {HERO_ATTENTION}
                </p>
                <p className={body}>{HERO_BODY}</p>
                <p className="font-serif text-xl leading-snug font-medium text-forest sm:text-2xl">{HERO_PATH}</p>
                <BookingLink className="mt-4 bg-forest px-6 text-paper">{CTA_SEE}</BookingLink>
                <ContactRow t={t} className="mt-4" />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="help-heading">
          <div className="mx-auto w-full max-w-6xl px-5 pt-4 sm:px-6 lg:px-8">
            <div className="reveal">
              <Rule />
              <h2 id="help-heading" className="display-heading font-serif font-medium text-forest">
                {HELP_HEADING}
              </h2>
            </div>
          </div>
          <ul className="mx-auto grid w-full max-w-6xl gap-3 px-4 py-5 sm:px-6 lg:grid-cols-3 lg:px-8">
            {HELP.map((offer) => {
              const forest = offer.name === "ANSWER FOR ME™";
              return (
                <li
                  key={offer.name}
                  lang="en"
                  translate="no"
                  className={`reveal relative min-w-0 overflow-hidden rounded-[1.4rem] border px-5 py-6 ${
                    forest ? "border-forest bg-forest text-paper" : "border-forest/10 bg-paper text-ink"
                  }`}
                >
                  <h3
                    className={`font-serif text-[1.7rem] leading-tight font-semibold sm:text-[1.85rem] ${
                      forest ? "text-[#f0e0b8]" : "text-forest"
                    }`}
                  >
                    {offer.name}
                  </h3>
                  <div className="mt-4 space-y-4">
                    {offer.paragraphs.map((paragraph) => (
                      <Prose key={paragraph} text={paragraph} />
                    ))}
                  </div>
                  {offer.name === "FIND ME™" ? (
                    <a
                      href={DIRECTORY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-12 items-center text-lg font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
                    >
                      {t.directory}
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="bg-forest text-paper" aria-labelledby="language-heading">
          <div lang="en" translate="no" className="reveal mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
            <Rule gold />
            <h2 id="language-heading" className="display-heading font-serif font-medium text-[#f0e0b8]">
              {LANGUAGE_HEADING}
            </h2>
            <div className="mt-5 max-w-4xl space-y-4">
              {LANGUAGE.map((paragraph) => (
                <p key={paragraph} className={`${body} text-paper`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14" aria-labelledby="look-heading">
          <div className="reveal max-w-2xl">
            <Rule />
            <h2 id="look-heading" className="display-heading font-serif font-medium text-forest">
              {LOOK_HEADING}
            </h2>
            <div lang="en" translate="no" className="mt-5 space-y-4">
              {LOOK.map((paragraph) => (
                <Prose
                  key={paragraph}
                  text={paragraph}
                  className={
                    paragraph.includes("→") ? "font-serif text-xl leading-snug font-medium text-forest" : body
                  }
                />
              ))}
            </div>
            <BookingLink className="mt-6 bg-forest px-6 text-paper">{CTA_TALK}</BookingLink>
          </div>
        </section>

        <div className="pin-scene">
          <div ref={pinRef} className="pin-card mx-auto w-full max-w-xl px-4 sm:px-6">
            <article
              className="rounded-[1.6rem] border border-forest/15 bg-paper p-5 shadow-[0_28px_60px_-32px_rgba(27,67,50,0.6)] sm:p-6"
              aria-label={t.saveContact}
            >
              <p
                className="font-serif text-[2.7rem] leading-[0.9] font-semibold tracking-[-0.03em] text-forest"
                lang="en"
                translate="no"
              >
                Kenny Mack
              </p>
              <p className="mt-2 font-serif text-xl text-sage" lang="en" translate="no">
                {ROLE_LINE}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-[7.25rem] shrink-0">
                  <ContactQr alt={t.qrAlt} />
                </div>
                <div className="grid min-w-0 flex-1 gap-2">
                  <a
                    className="inline-flex min-h-12 items-center text-lg leading-snug font-bold text-forest underline decoration-straw decoration-2 underline-offset-4"
                    href={`tel:${PHONE_TEL}`}
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <SaveContact label={t.saveContact} />
                </div>
              </div>
              <a
                className="mt-2 inline-flex min-h-12 items-center text-lg leading-snug font-bold text-forest underline decoration-straw decoration-2 underline-offset-4"
                href={`mailto:${EMAIL}`}
              >
                {EMAIL}
              </a>
              <div className="mt-4 border-t border-line pt-4" lang="en" translate="no">
                <p className="text-[0.72rem] font-bold tracking-[0.16em] text-sage uppercase">{FOUNDING_LABEL}</p>
                <p className="mt-1 font-serif text-[1.65rem] leading-tight text-forest">{FOUNDING_PRICE}</p>
                <p className="mt-2 text-base leading-relaxed text-ink">{FOUNDING_DETAIL}</p>
                <p className="mt-4 text-[0.72rem] font-bold tracking-[0.16em] text-sage uppercase">{FOUNDING_ANNUAL_LABEL}</p>
                <p className="mt-1 text-base leading-relaxed text-ink">{FOUNDING_ANNUAL}</p>
                <p className="mt-4 text-[0.72rem] font-bold tracking-[0.16em] text-sage uppercase">{FOUNDING_GUARANTEE_LABEL}</p>
                <p className="mt-1 text-base leading-relaxed text-ink">{FOUNDING_GUARANTEE}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/70">{FOUNDING_RENEWAL}</p>
              </div>
            </article>
          </div>

          <section className="pin-cover" aria-labelledby="meet-heading">
            <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-5 py-8 sm:px-6 lg:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-10 lg:px-8 lg:py-12">
              <figure className="shot">
                <div className="shot-frame">
                  <FamilyPhoto alt={t.photoAlt} loading="lazy" className="shot-media" />
                </div>
              </figure>
              <div lang="en" translate="no" className="reveal min-w-0">
                <Rule />
                <h2 id="meet-heading" className="display-heading font-serif font-medium text-forest">
                  {MEET_HEADING}
                </h2>
                <div className="mt-4 space-y-4">
                  {MEET.map((paragraph) => (
                    <p key={paragraph} className={body}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                <BookingLink className="mt-6 border border-forest/15 bg-paper px-6 text-forest">{CTA_HI}</BookingLink>
              </div>
            </div>
          </section>
        </div>

        <section className="bg-forest px-5 py-10 text-paper sm:px-6 lg:px-8 lg:py-14" aria-labelledby="way-heading">
          <div className="mx-auto w-full max-w-5xl">
            <div className="reveal">
              <Rule gold />
              <h2 id="way-heading" className="display-heading font-serif font-medium text-[#f0e0b8] sm:text-center">
                {WAY_HEADING}
              </h2>
            </div>
            <ul lang="en" translate="no" className="mt-6 space-y-4 sm:text-center">
              {WAY.map((line) => (
                <li
                  key={line}
                  className="reveal max-w-full font-serif text-[1.35rem] leading-snug font-medium text-balance sm:text-2xl"
                >
                  {line}
                </li>
              ))}
            </ul>
            <div className="reveal mt-7 sm:text-center">
              <BookingLink className="bg-[#f0e0b8] px-8 text-forest">{CTA_LOOK}</BookingLink>
            </div>
          </div>
        </section>

        <footer className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14" aria-labelledby="trust-heading">
          <div className="reveal max-w-3xl">
            <Rule />
            <h2 id="trust-heading" className="display-heading font-serif font-medium text-forest">
              {TRUST_HEADING}
            </h2>
            <div lang="en" translate="no" className="mt-5 space-y-4">
              {TRUST.map((paragraph) => (
                <p key={paragraph} className={body}>
                  {paragraph}
                </p>
              ))}
              <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
                {TRUST_FOOTER.map((part) => (
                  <li key={part}>
                    {part === "Privacy" ? (
                      <Link className={link} href="/privacy">
                        {part}
                      </Link>
                    ) : part === "Terms" ? (
                      <Link className={link} href="/terms">
                        {part}
                      </Link>
                    ) : part === "SMS Terms" ? (
                      <Link className={link} href="/sms-terms">
                        {part}
                      </Link>
                    ) : part === "Contact" ? (
                      <a className={link} href={`mailto:${EMAIL}`}>
                        {part}
                      </a>
                    ) : (
                      <span className="inline-flex min-h-12 items-center text-base leading-snug">{part}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </main>

      <nav className="dock" aria-label={t.dockLabel}>
        <a href={`tel:${PHONE_TEL}`}>{t.callText}</a>
        <a href={VCARD_HREF}>{t.saveContact}</a>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">
          {CTA_TALK}
        </a>
      </nav>
    </div>
  );
}
