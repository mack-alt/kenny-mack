"use client";

import Link from "next/link";
import {
  CL_CONCERNS_H,
  CL_EYEBROW,
  CL_LABEL,
  CL_LABEL_H,
  CL_NEXT,
  CL_NEXT_H,
  CL_PAST,
  CL_PAST_H,
  CL_QUESTION,
  CL_VACATION,
  CL_VACATION_H,
  CTA_TALK,
  FD_ANSWER,
  FD_CTA,
  FD_FAQ,
  FD_HOW_Q,
  FD_PRICE_LINE,
  FD_PRICE_POINTS,
  FD_PRICE_Q,
  FD_STEPS,
  FD_WHO,
  TRUST,
  TRUST_FOOTER,
  TRUST_HEADING,
} from "@/lib/card-copy";
import { BOOK_URL, EMAIL, FOUNDING_PRICE, FOUNDING_RENEWAL, PHONE_DISPLAY, PHONE_TEL, VCARD_HREF } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import { ContactQr, EnglishNote, GrassMark, LanguageChips, SaveContact } from "@/components/card-ui";
import { Motion } from "@/components/motion";

const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const section = "py-16 sm:py-24";
const eyebrow = "text-[0.8rem] font-semibold tracking-[0.14em] text-forest uppercase";
const h2 = "mt-3 text-balance text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] text-zinc-900 sm:text-[2.75rem]";
const lead = "mt-4 max-w-2xl text-pretty text-[1.0625rem] leading-[1.65] text-zinc-600 sm:text-lg";
const glass =
  "rounded-3xl border border-white/70 bg-white/70 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_20px_40px_-28px_rgba(24,24,27,0.35)] backdrop-blur-xl";
const hoverCard = "transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_28px_50px_-30px_rgba(24,24,27,0.45)]";
const btnPrimary =
  "inline-flex min-h-13 items-center justify-center whitespace-nowrap rounded-full bg-forest px-7 py-3.5 text-[1.0625rem] font-semibold text-white shadow-[0_12px_24px_-12px_rgba(27,67,50,0.7)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#143628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";
const btnGhost =
  "inline-flex min-h-13 items-center justify-center whitespace-nowrap rounded-full border border-zinc-900/10 bg-white/80 px-7 py-3.5 text-[1.0625rem] font-semibold text-zinc-900 transition duration-200 hover:-translate-y-0.5 hover:border-zinc-900/20 hover:bg-white";
const link = "font-medium text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition hover:decoration-forest";

function Photo({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <figure className={`group relative m-0 min-w-0 overflow-hidden rounded-[2rem] bg-zinc-100 shadow-[0_30px_60px_-36px_rgba(24,24,27,0.45)] ${className}`}>
      {/* Native img keeps /kenny-mack on the URL in the static export. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/kenny-mack/salon/${src}`}
        alt={alt}
        width={1200}
        height={800}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        sizes="(min-width: 1024px) 600px, 100vw"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
      />
    </figure>
  );
}

function Book({ className = btnPrimary }: { className?: string }) {
  return (
    <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {FD_CTA}
    </a>
  );
}

function Num({ n }: { n: number }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-sm font-semibold text-forest">{n}</span>
  );
}

export function LookC() {
  const { t } = useLang();

  return (
    <div
      className="look-c relative min-h-dvh overflow-x-clip bg-[#fafaf8] pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-zinc-900"
      style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}
    >
      <Motion />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[radial-gradient(60rem_28rem_at_80%_-10%,rgba(27,67,50,0.10),transparent_60%),radial-gradient(40rem_24rem_at_0%_10%,rgba(214,196,170,0.25),transparent_60%)]" />
      <a className="skip" href="#content">{t.skip}</a>

      <header className="sticky top-0 z-30 border-b border-zinc-900/5 bg-[#fafaf8]/80 backdrop-blur-xl">
        <div className={`${wrap} flex items-center justify-between gap-3 py-3`}>
          <div className="flex min-w-0 items-center gap-2.5">
            <GrassMark className="h-8 w-8 shrink-0 text-forest" />
            <div className="min-w-0 leading-tight" translate="no">
              <p className="text-[0.95rem] font-semibold tracking-[-0.01em] text-zinc-900">Kenny Mack</p>
              <p className="text-[0.75rem] text-zinc-500">Blades of Grass Marketing</p>
            </div>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-zinc-900 px-4 text-[0.9rem] font-semibold text-white transition hover:bg-forest">
            <span className="sr-only">{t.callText} </span>{PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <div className={`${wrap} relative pt-5`}>
        <LanguageChips className="mx-auto max-w-md !rounded-full !border-zinc-900/5 !bg-white/70 !shadow-none backdrop-blur [&>button]:!rounded-full" />
        {t.storyNote ? <div className="mx-auto mt-3 max-w-md"><EnglishNote note={t.storyNote} /></div> : null}
      </div>

      <main id="content" className="relative">
        {/* Clarify: question, then the direct answer first. */}
        <section className={`${wrap} pt-10 pb-16 sm:pt-12 sm:pb-24`} aria-labelledby="hero-q">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div lang="en" translate="no" className="min-w-0">
              <p className={eyebrow}>{CL_EYEBROW}</p>
              <h1 id="hero-q" className="mt-4 text-balance text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.045em] text-zinc-900 sm:text-[3.25rem] lg:text-[3.25rem]">
                {CL_QUESTION}
              </h1>
              <p className={lead}>{FD_ANSWER}</p>
              <p className="mt-6 inline-flex max-w-full rounded-2xl border border-forest/15 bg-forest/[0.06] px-4 py-2.5 text-[0.98rem] leading-snug font-medium text-forest">
                {FD_PRICE_LINE}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Book />
                <a href={`tel:${PHONE_TEL}`} className={btnGhost}>Call Kenny · {PHONE_DISPLAY}</a>
              </div>
            </div>
            <Photo src="hair-salon-interior.webp" alt="Empty modern hair salon with black styling chairs and round mirrors" className="aspect-[4/3] lg:aspect-square" eager />
          </div>
        </section>

        {/* Label */}
        <section className={`${wrap} ${section} border-t border-zinc-900/5`} aria-labelledby="label-h">
          <div className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Photo src="nail-manicure-hands.webp" alt="Close-up of a nail technician's hands working on a client's nails" className="aspect-[4/3] lg:order-2" />
            <div lang="en" translate="no" className="min-w-0">
              <p className={eyebrow}>The problem</p>
              <h2 id="label-h" className={h2}>{CL_LABEL_H}</h2>
              <p className={lead}>{CL_LABEL}</p>
            </div>
          </div>
        </section>

        {/* Overview past pain */}
        <section className={`${wrap} ${section} pt-0 sm:pt-0`} aria-labelledby="past-h">
          <div className="reveal" lang="en" translate="no">
            <h2 id="past-h" className={h2}>{CL_PAST_H}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {CL_PAST.map((item) => (
                <li key={item.t} className={`${glass} ${hoverCard} p-6`}>
                  <p className="text-lg font-semibold tracking-[-0.015em] text-zinc-900">{item.t}</p>
                  <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sell the vacation */}
        <section className="bg-gradient-to-b from-[#f1efe9] to-[#fafaf8]" aria-labelledby="vac-h">
          <div className={`${wrap} ${section}`}>
            <div className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Photo src="nail-polish-wall.webp" alt="Rows of gel polish bottles on gold wall shelves in a nail salon" className="aspect-[4/3]" />
              <div lang="en" translate="no" className="min-w-0">
                <p className={eyebrow}>The calm version</p>
                <h2 id="vac-h" className={h2}>{CL_VACATION_H}</h2>
                <p className={lead}>{CL_VACATION}</p>
                <h3 className="mt-10 text-lg font-semibold tracking-[-0.015em] text-zinc-900">{FD_HOW_Q}</h3>
                <ol className="mt-4 space-y-3">
                  {FD_STEPS.map((step, i) => (
                    <li key={step} className="flex gap-4 text-[1rem] leading-relaxed text-zinc-700">
                      <Num n={i + 1} />
                      <span className="min-w-0 pt-0.5 text-pretty">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Price */}
        <section className={`${wrap} ${section}`} aria-labelledby="price-h">
          <div lang="en" translate="no" className="reveal grid items-stretch gap-6 overflow-hidden rounded-[2rem] bg-zinc-900 p-3 text-white lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0 p-5 sm:p-8">
              <p className="text-[0.8rem] font-semibold tracking-[0.14em] text-emerald-200/80 uppercase">Founding offer</p>
              <h2 id="price-h" className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] sm:text-[2.5rem]">{FD_PRICE_Q}</h2>
              <p className="mt-4 text-pretty text-xl leading-snug font-medium text-white sm:text-2xl">{FOUNDING_PRICE}</p>
              <ul className="mt-6 space-y-3">
                {FD_PRICE_POINTS.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[1rem] leading-relaxed text-zinc-300">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true"><path d="M5 10.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="min-w-0 text-pretty">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-400">{FOUNDING_RENEWAL}</p>
              <div className="mt-8"><Book className={`${btnPrimary} !bg-white !text-zinc-900 hover:!bg-emerald-50 w-full sm:w-auto`} /></div>
            </div>
            <Photo src="lash-tweezers-tray.webp" alt="Lash tweezers resting on a tray of eyelash extensions" className="aspect-[4/3] !rounded-[1.6rem] lg:aspect-auto" />
          </div>
        </section>

        {/* Explain away concerns */}
        <section className={`${wrap} ${section} pt-4 sm:pt-8`} aria-labelledby="faq-h">
          <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className={eyebrow}>Straight answers</p>
              <h2 id="faq-h" className={h2}>{CL_CONCERNS_H}</h2>
            </div>
            <dl lang="en" translate="no" className="divide-y divide-zinc-900/8 border-y border-zinc-900/8">
              {FD_FAQ.map((item) => (
                <div key={item.q} className="py-5">
                  <dt className="text-lg font-semibold tracking-[-0.015em] text-zinc-900">{item.q}</dt>
                  <dd className="mt-1.5 text-pretty text-[1rem] leading-relaxed text-zinc-600">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Reinforce: CTA, then what happens next */}
        <section className={`${wrap} pb-16 sm:pb-24`} aria-labelledby="next-h">
          <div className={`${glass} reveal p-6 sm:p-10`} lang="en" translate="no">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="next-h" className="text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.035em] text-zinc-900 sm:text-[2.25rem]">{CL_NEXT_H}</h2>
              <Book />
            </div>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {CL_NEXT.map((item, i) => (
                <li key={item.t} className="flex gap-4">
                  <Num n={i + 1} />
                  <div className="min-w-0">
                    <p className="font-semibold tracking-[-0.01em] text-zinc-900">{item.t}</p>
                    <p className="mt-1 text-pretty text-[0.98rem] leading-relaxed text-zinc-600">{item.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Who */}
        <section className={`${wrap} pb-16 sm:pb-24`} aria-labelledby="who-h">
          <article className={`${glass} mx-auto max-w-xl p-6 sm:p-8`}>
            <h2 id="who-h" className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-900" translate="no">Who is behind this?</h2>
            <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600" lang="en">{FD_WHO}</p>
            <div className="mt-5 flex items-center gap-4">
              <div className="w-[6.5rem] shrink-0"><ContactQr alt={t.qrAlt} /></div>
              <div className="grid min-w-0 flex-1 gap-2.5">
                <a className={`${link} text-lg`} href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
                <a className={`${link} [overflow-wrap:anywhere]`} href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <SaveContact label={t.saveContact} />
              </div>
            </div>
          </article>
        </section>

        <footer className="border-t border-zinc-900/5" aria-labelledby="trust-h">
          <div className={`${wrap} py-12`}>
            <h2 id="trust-h" className="text-sm font-semibold tracking-[0.14em] text-zinc-900 uppercase">{TRUST_HEADING}</h2>
            <div lang="en" translate="no" className="mt-4 max-w-3xl space-y-2 text-[0.95rem] leading-relaxed text-zinc-500">
              {TRUST.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[0.95rem]">
              {TRUST_FOOTER.map((part) => (
                <li key={part} className="inline-flex min-h-11 items-center">
                  {part === "Privacy" ? <Link className={link} href="/privacy">{part}</Link>
                    : part === "Terms" ? <Link className={link} href="/terms">{part}</Link>
                    : part === "SMS Terms" ? <Link className={link} href="/sms-terms">{part}</Link>
                    : part === "Contact" ? <a className={link} href={`mailto:${EMAIL}`}>{part}</a>
                    : <span className="text-zinc-500">{part}</span>}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-400" translate="no">Blades of Grass Marketing</p>
          </div>
        </footer>
      </main>

      <nav className="dock" aria-label={t.dockLabel}>
        <a href={`tel:${PHONE_TEL}`}>{t.callText}</a>
        <a href={VCARD_HREF}>{t.saveContact}</a>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">{CTA_TALK}</a>
      </nav>
    </div>
  );
}
