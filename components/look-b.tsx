"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  CTA_TALK,
  FD_ANSWER,
  FD_CTA,
  FD_FAQ,
  FD_HOW_Q,
  FD_PRICE_LINE,
  FD_PRICE_POINTS,
  FD_PRICE_Q,
  FD_QUESTION,
  FD_STEPS,
  FD_WHO,
  TRUST,
  TRUST_FOOTER,
  TRUST_HEADING,
} from "@/lib/card-copy";
import {
  BOOK_URL,
  EMAIL,
  FOUNDING_PRICE,
  FOUNDING_RENEWAL,
  PHONE_DISPLAY,
  PHONE_TEL,
  VCARD_HREF,
} from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import {
  BookingLink,
  ContactQr,
  EnglishNote,
  GrassMark,
  LanguageChips,
  SaveContact,
} from "@/components/card-ui";
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
              Blades of Grass Marketing
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
        <section className="relative overflow-hidden" aria-labelledby="hero-q">
          <HeroField />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-3 pb-8 sm:px-6 lg:px-8 lg:pt-8">
            <div className="grid items-start gap-4 lg:gap-x-14 lg:gap-y-6">
              <div lang="en" translate="no" className="min-w-0 max-w-2xl">
                <p className="text-[0.78rem] font-bold tracking-[0.22em] text-sage uppercase">Front Desk for salons</p>
                <h1
                  id="hero-q"
                  className="mt-2 text-balance font-serif text-[1.75rem] leading-[1.08] font-semibold tracking-[-0.03em] text-forest sm:text-4xl lg:text-[2.6rem] lg:leading-[1.02]"
                >
                  {FD_QUESTION}
                </h1>
                <p className={`${body} mt-4`}>{FD_ANSWER}</p>
                <p className="mt-4 font-serif text-xl leading-snug font-medium text-forest">{FD_PRICE_LINE}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <BookingLink className="bg-forest px-6 text-paper">{FD_CTA}</BookingLink>
                  <a href={`tel:${PHONE_TEL}`} className="btn inline-flex min-h-12 items-center justify-center rounded-full border border-forest/20 bg-paper px-6 text-lg font-bold text-forest">
                    Call Kenny · {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8" aria-labelledby="how-heading">
          <div className="reveal max-w-3xl">
            <Rule />
            <h2 id="how-heading" className="display-heading font-serif font-medium text-forest">{FD_HOW_Q}</h2>
            <ol lang="en" translate="no" className="mt-5 grid gap-3 sm:grid-cols-3">
              {FD_STEPS.map((step, i) => (
                <li key={step} className="rounded-2xl bg-mist px-4 py-4 text-lg leading-snug text-ink">
                  <span className="block font-serif text-2xl font-semibold text-forest">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-forest text-paper" aria-labelledby="price-heading">
          <div lang="en" translate="no" className="reveal mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
            <Rule gold />
            <h2 id="price-heading" className="display-heading font-serif font-medium text-[#f0e0b8]">{FD_PRICE_Q}</h2>
            <p className="mt-4 font-serif text-[2rem] leading-tight text-paper">{FOUNDING_PRICE}</p>
            <ul className="mt-4 max-w-3xl space-y-2">
              {FD_PRICE_POINTS.map((pt) => (
                <li key={pt} className={`${body} text-paper`}>• {pt}</li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-paper/80">{FOUNDING_RENEWAL}</p>
            <div className="mt-6">
              <BookingLink className="bg-[#f0e0b8] px-8 text-forest">{FD_CTA}</BookingLink>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14" aria-labelledby="faq-heading">
          <div className="reveal max-w-3xl">
            <Rule />
            <h2 id="faq-heading" className="display-heading font-serif font-medium text-forest">Questions salon owners ask</h2>
            <dl lang="en" translate="no" className="mt-5 space-y-5">
              {FD_FAQ.map((item) => (
                <div key={item.q}>
                  <dt><h3 className="font-serif text-xl font-semibold text-forest">{item.q}</h3></dt>
                  <dd className={`${body} mt-1`}>{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="mx-auto w-full max-w-xl px-4 pb-10 sm:px-6" aria-labelledby="card-heading">
          <article className="rounded-[1.6rem] border border-forest/15 bg-paper p-5 shadow-[0_28px_60px_-32px_rgba(27,67,50,0.6)] sm:p-6">
            <h2 id="card-heading" className="font-serif text-[2.4rem] leading-[0.95] font-semibold text-forest" translate="no">
              Who is behind this?
            </h2>
            <p className={`${body} mt-3`} lang="en">{FD_WHO}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-[7.25rem] shrink-0">
                <ContactQr alt={t.qrAlt} />
              </div>
              <div className="grid min-w-0 flex-1 gap-2">
                <a className={link} href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                <SaveContact label={t.saveContact} />
              </div>
            </div>
            <a className={`${link} mt-2`} href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </article>
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
