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

function SalonPhoto({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`relative m-0 min-w-0 overflow-hidden rounded-[1.4rem] bg-mist shadow-[0_24px_50px_-30px_rgba(27,67,50,0.55)] ${className}`}>
      {/* Native img keeps /kenny-mack on the URL in the static export. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/kenny-mack/salon/${src}`}
        alt={alt}
        width={1200}
        height={800}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes="(min-width: 1024px) 560px, 100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </figure>
  );
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
            <p className="mt-1 text-[0.62rem] leading-tight font-bold tracking-[0.12em] text-sage uppercase sm:text-[0.68rem] sm:tracking-[0.16em]">
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
        {t.storyNote ? (
          <div className="mt-3">
            <EnglishNote note={t.storyNote} />
          </div>
        ) : null}
      </div>

      <main id="content">
        <section className="relative overflow-hidden" aria-labelledby="hero-q">
          <HeroField />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pt-3 pb-8 sm:px-6 lg:px-8 lg:pt-8">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-x-12">
              <div lang="en" translate="no" className="min-w-0 max-w-2xl">
                <p className="text-[0.78rem] font-bold tracking-[0.22em] text-sage uppercase">Front Desk for salons</p>
                <h1
                  id="hero-q"
                  className="mt-2 text-balance font-serif text-[2.15rem] leading-[1.04] font-semibold tracking-[-0.03em] text-forest sm:text-5xl lg:text-[3.4rem] lg:leading-[1]"
                >
                  {FD_QUESTION}
                </h1>
                <p className={`${body} mt-4`}>{FD_ANSWER}</p>
                <p className="mt-4 text-pretty font-serif text-xl leading-snug font-medium text-forest">{FD_PRICE_LINE}</p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <BookingLink className="bg-forest px-6 text-paper">{FD_CTA}</BookingLink>
                  <a href={`tel:${PHONE_TEL}`} className="btn inline-flex min-h-12 items-center justify-center rounded-full border border-forest/20 bg-paper px-6 text-lg font-bold text-forest">
                    Call Kenny · {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
              <SalonPhoto
                src="hair-salon-interior.webp"
                alt="Empty modern hair salon with black styling chairs and round mirrors"
                className="aspect-[4/3] lg:aspect-[5/4]"
                eager
              />
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14" aria-labelledby="how-heading">
          <div className="reveal">
            <Rule />
            <h2 id="how-heading" className="display-heading font-serif font-medium text-forest">{FD_HOW_Q}</h2>
            <ol lang="en" translate="no" className="mt-6 grid gap-3 md:grid-cols-3">
              {FD_STEPS.map((step, i) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-forest/10 bg-paper/80 px-4 py-4 text-lg leading-snug text-ink md:flex-col md:gap-2 md:px-5 md:py-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest font-serif text-lg font-semibold text-paper">{i + 1}</span>
                  {step}
                </li>
              ))}
            </ol>
            <SalonPhoto
              src="nail-manicure-hands.webp"
              alt="Close-up of a nail technician's hands shaping a client's nails at the manicure station"
              className="mt-6 aspect-[3/2] md:aspect-[21/8]"
            />
          </div>
        </section>

        <section className="bg-forest text-paper" aria-labelledby="price-heading">
          <div lang="en" translate="no" className="reveal mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12 lg:px-8 lg:py-16">
            <div className="min-w-0">
            <Rule gold />
            <h2 id="price-heading" className="display-heading font-serif font-medium text-[#f0e0b8]">{FD_PRICE_Q}</h2>
            <p className="mt-4 text-pretty font-serif text-[1.65rem] leading-tight text-paper sm:text-[2rem]">{FOUNDING_PRICE}</p>
            <ul className="mt-5 max-w-3xl space-y-2.5">
              {FD_PRICE_POINTS.map((pt) => (
                <li key={pt} className="flex gap-3 text-lg leading-snug text-paper">
                  <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f0e0b8]" aria-hidden="true" />
                  <span className="min-w-0 text-pretty">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-paper/80">{FOUNDING_RENEWAL}</p>
            <div className="mt-6">
              <BookingLink className="bg-[#f0e0b8] px-8 text-forest">{FD_CTA}</BookingLink>
            </div>
            </div>
            <SalonPhoto
              src="lash-tweezers-tray.webp"
              alt="Lash tweezers resting on a tray of eyelash extensions"
              className="aspect-[3/2] ring-1 ring-paper/15 lg:aspect-[4/5]"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14" aria-labelledby="faq-heading">
          <div className="reveal grid items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
            <div className="min-w-0">
            <Rule />
            <h2 id="faq-heading" className="display-heading font-serif font-medium text-forest">Questions salon owners ask</h2>
            <dl lang="en" translate="no" className="mt-6 divide-y divide-forest/10 border-y border-forest/10">
              {FD_FAQ.map((item) => (
                <div key={item.q} className="py-4">
                  <dt><h3 className="text-pretty font-serif text-xl leading-snug font-semibold text-forest">{item.q}</h3></dt>
                  <dd className={`${body} mt-1.5`}>{item.a}</dd>
                </div>
              ))}
            </dl>
            </div>
            <SalonPhoto
              src="nail-polish-wall.webp"
              alt="Rows of gel polish bottles on gold wall shelves in a nail salon"
              className="aspect-[3/2] lg:sticky lg:top-24 lg:aspect-[4/5]"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-xl px-5 py-6 sm:px-6" aria-labelledby="card-heading">
          <article className="rounded-[1.6rem] border border-forest/15 bg-paper p-5 shadow-[0_28px_60px_-32px_rgba(27,67,50,0.6)] sm:p-6">
            <h2 id="card-heading" className="font-serif text-[2rem] leading-[1] font-semibold tracking-[-0.02em] text-forest sm:text-[2.4rem]" translate="no">
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
            <h2 id="trust-heading" className="display-heading font-serif font-medium text-forest normal-case">
              {TRUST_HEADING}
            </h2>
            <div lang="en" translate="no" className="mt-5 space-y-4">
              {TRUST.map((paragraph) => (
                <p key={paragraph} className={body}>
                  {paragraph}
                </p>
              ))}
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-0 border-t border-forest/10 pt-3">
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
                      <span className="inline-flex min-h-12 items-center text-lg font-semibold text-forest/70">{part}</span>
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
