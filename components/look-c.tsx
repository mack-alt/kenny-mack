"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_CHIP_CLASS, ContactQr, GrassMark, LanguageChips, SaveContact } from "@/components/card-ui";
import { DemoReel } from "@/components/demo-reel";
import { Motion } from "@/components/motion";
import { BOOK_URL, EMAIL, PHONE_DISPLAY, PHONE_TEL, VCARD_HREF } from "@/lib/content";
import { MONTHLY_PRICE, salonCopy, type SalonCopy } from "@/lib/salon-copy";
import { useLang } from "@/lib/use-lang";

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

function AnsweredCall({ copy }: { copy: SalonCopy }) {
  return (
    <div className="mx-auto w-full max-w-[22rem]">
      <div className="rounded-[2rem] bg-zinc-950 p-2.5 shadow-[0_30px_60px_-34px_rgba(24,24,27,0.6)] ring-1 ring-white/15">
        <div className="rounded-[1.55rem] bg-gradient-to-b from-[#fff8ef] to-[#f3ecdf] px-3.5 pt-4 pb-3.5">
          <p className="text-center text-[0.68rem] font-semibold tracking-[0.18em] text-zinc-400 uppercase">{copy.phoneKicker}</p>
          <div className="mt-3 rounded-[1.25rem] bg-white px-4 py-3.5 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.45)]">
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-forest uppercase">{copy.phoneIncoming}</p>
            <p className="mt-1 text-[1.15rem] leading-tight font-semibold tracking-[-0.02em] text-zinc-900">{copy.phoneAnswered}</p>
          </div>
          <div className="mt-2.5 rounded-[1.25rem] bg-white px-4 py-3.5 shadow-[0_10px_24px_-18px_rgba(24,24,27,0.45)]">
            <p className="text-[1.05rem] leading-snug font-semibold tracking-[-0.02em] text-zinc-900">{copy.phoneBooked}</p>
          </div>
          <div className="mt-2.5 rounded-[1.25rem] bg-forest px-4 py-3.5 text-white shadow-[0_16px_28px_-18px_rgba(27,67,50,0.8)]">
            <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-emerald-100 uppercase">{copy.phoneSummaryLabel}</p>
            <p className="mt-1 text-[0.98rem] leading-snug">{copy.phoneSummary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Book({ label, className = btnPrimary }: { label: string; className?: string }) {
  return (
    <a href={BOOK_URL} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
    </a>
  );
}

function Num({ n }: { n: number }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest/10 text-sm font-semibold text-forest">{n}</span>
  );
}

function PriceCompare({ copy }: { copy: SalonCopy }) {
  const [avg, setAvg] = useState("");
  const trimmed = avg.trim();
  const value = Number(trimmed);
  const valid = trimmed !== "" && Number.isFinite(value) && value > 0;
  const needed = valid ? Math.ceil(MONTHLY_PRICE / value) : null;
  const card = `${glass} ${hoverCard} flex flex-col p-6`;
  return (
    <div id="price-compare" className="reveal mt-12">
      <h3 className="text-balance text-[1.6rem] leading-[1.15] font-semibold tracking-[-0.03em] text-zinc-900 sm:text-[2rem]">
        {copy.compareTitle}
      </h3>
      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        <li className={card}>
          <p className="text-lg font-semibold tracking-[-0.015em] text-zinc-900">{copy.dayTitle}</p>
          <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600">{copy.dayBody}</p>
        </li>
        <li className={card}>
          <p className="text-lg font-semibold tracking-[-0.015em] text-zinc-900">{copy.apptTitle}</p>
          <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600">{copy.apptBody}</p>
          <div className="mt-auto pt-5">
            <label htmlFor="avg-service" className="sr-only">{copy.calcLabel}</label>
            <div className="flex items-center rounded-2xl border border-zinc-900/10 bg-white px-3.5 transition focus-within:border-forest focus-within:ring-2 focus-within:ring-forest/15">
              <span className="text-lg text-zinc-500">$</span>
              <input
                id="avg-service"
                type="number"
                inputMode="decimal"
                min={1}
                step={1}
                value={avg}
                placeholder={copy.calcPlaceholder}
                onChange={(e) => setAvg(e.target.value)}
                className="min-h-12 w-full min-w-0 bg-transparent px-1.5 text-lg font-semibold text-zinc-900 outline-none placeholder:text-base placeholder:font-medium placeholder:text-zinc-400"
              />
            </div>
            {needed ? (
              <p className="mt-3 rounded-2xl bg-forest/[0.07] px-4 py-3 text-[1rem] leading-snug text-forest" aria-live="polite">
                <span className="text-xl font-semibold">{needed}</span> {copy.bookingsCover(needed)}
              </p>
            ) : null}
          </div>
        </li>
        <li className={card}>
          <p className="text-lg font-semibold tracking-[-0.015em] text-zinc-900">{copy.deskTitle}</p>
          <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600">{copy.deskIntro}</p>
          <p className="mt-4 text-sm font-semibold tracking-[0.12em] text-forest uppercase">{copy.deskMoneyLabel}</p>
          <p className="mt-1 text-pretty text-[1rem] leading-relaxed text-zinc-600">{copy.deskMoney}</p>
          <p className="mt-4 text-sm font-semibold tracking-[0.12em] text-forest uppercase">{copy.deskOtherLabel}</p>
          <p className="mt-1 text-pretty text-[1rem] leading-relaxed text-zinc-600">{copy.deskOther}</p>
        </li>
      </ul>
    </div>
  );
}

export function LookC() {
  const { lang, t } = useLang();
  const copy = salonCopy[lang];
  const footerLinks = [
    { href: "/trust", label: copy.links.trust },
    { href: "/privacy", label: copy.links.privacy },
    { href: "/terms", label: copy.links.terms },
    { href: "/sms-terms", label: copy.links.sms },
    { href: "/service-agreement", label: copy.links.agreement },
  ];

  return (
    <div
      className="look-c relative min-h-dvh overflow-x-clip bg-[#fafaf8] pb-[calc(5.75rem+env(safe-area-inset-bottom))] text-zinc-900"
      style={{ fontFamily: "var(--font-inter), ui-sans-serif, system-ui, sans-serif" }}
      lang={lang}
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
              <p className="text-[0.72rem] leading-snug text-zinc-500 sm:text-[0.75rem]">Blades of Grass Marketing and Solutions</p>
            </div>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full bg-zinc-900 px-4 text-[0.9rem] font-semibold text-white transition hover:bg-forest">
            <span className="sr-only">{t.callText} </span>{PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <div className={`${wrap} relative pt-5`}>
        <LanguageChips className={NAV_CHIP_CLASS} />
      </div>

      <main id="content" className="relative">
        <section id="hero" className={`${wrap} pt-8 pb-16 sm:pt-10 sm:pb-24`} aria-labelledby="hero-q">
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:items-center lg:justify-start lg:gap-10">
            <DemoReel className="lc-reel" />
            <a href={`sms:${PHONE_TEL}`} className={`${btnPrimary} w-full max-w-xs lg:w-auto`}>
              {copy.textKenny}
            </a>
          </div>
          <div className="mt-10 grid items-center gap-10 lg:mt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="min-w-0">
              <p className={eyebrow}>{copy.eyebrow}</p>
              <h1 id="hero-q" className="mt-4 text-balance text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.045em] text-zinc-900 sm:text-[3.25rem] lg:text-[3.25rem]">
                {copy.heroQuestion}
              </h1>
              <p className={lead}>{copy.heroAnswer}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Book label={copy.bookCta} />
                <a href={`tel:${PHONE_TEL}`} className={btnGhost}>{copy.callKenny} · {PHONE_DISPLAY}</a>
              </div>
            </div>
            <Photo src="salon-receptionist.webp" alt={copy.photoReception} className="aspect-[4/3] lg:aspect-square" eager />
          </div>
        </section>

        <section id="problem" className={`${wrap} ${section} border-t border-zinc-900/5`} aria-labelledby="label-h">
          <div className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Photo src="salon-color-chair.webp" alt={copy.photoColor} className="aspect-[4/3] lg:order-2" />
            <div className="min-w-0">
              <p className={eyebrow}>{copy.problemEyebrow}</p>
              <h2 id="label-h" className={h2}>{copy.problemTitle}</h2>
              <p className={lead}>{copy.problemBody}</p>
            </div>
          </div>
        </section>

        <section id="past" className={`${wrap} ${section} pt-0 sm:pt-0`} aria-labelledby="past-h">
          <div className="reveal">
            <h2 id="past-h" className={h2}>{copy.pastTitle}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {copy.past.map((item) => (
                <li key={item.t} className={`${glass} ${hoverCard} p-6`}>
                  <p className="text-lg font-semibold tracking-[-0.015em] text-zinc-900">{item.t}</p>
                  <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="owner" className="bg-gradient-to-b from-[#f1efe9] to-[#fafaf8]" aria-labelledby="owner-h">
          <div className={`${wrap} ${section}`}>
            <div className="reveal grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
              <div className="min-w-0">
                <p className={eyebrow}>{copy.ownerEyebrow}</p>
                <h2 id="owner-h" className={h2}>{copy.ownerTitle}</h2>
                <p className={lead}>{copy.ownerBody}</p>
                <h3 className="mt-10 text-lg font-semibold tracking-[-0.015em] text-zinc-900">{copy.howTitle}</h3>
                <ol className="mt-4 space-y-3">
                  {copy.steps.map((step, i) => (
                    <li key={step} className="flex gap-4 text-[1rem] leading-relaxed text-zinc-700">
                      <Num n={i + 1} />
                      <span className="min-w-0 pt-0.5 text-pretty">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <AnsweredCall copy={copy} />
            </div>
            <Photo
              src="salon-vibrant-chair.webp"
              alt={copy.photoTogether}
              className="reveal mt-10 aspect-[4/3] lg:aspect-[16/10]"
            />
          </div>
        </section>

        <section id="pricing" className={`${wrap} ${section}`} aria-labelledby="price-h">
          <div className="reveal grid items-stretch gap-6 overflow-hidden rounded-[2rem] bg-zinc-900 p-3 text-white lg:grid-cols-[1.15fr_0.85fr]">
            <div className="min-w-0 p-5 sm:p-8">
              <p className="text-[0.8rem] font-semibold tracking-[0.14em] text-emerald-200/80 uppercase">{copy.priceEyebrow}</p>
              <h2 id="price-h" className="mt-3 text-[2rem] leading-[1.1] font-semibold tracking-[-0.035em] sm:text-[2.5rem]">{copy.priceTitle}</h2>
              <p className="mt-4 text-pretty text-xl leading-snug font-medium text-white sm:text-2xl">{copy.priceLine}</p>
              <p className="mt-4 inline-flex max-w-full rounded-2xl border border-emerald-300/40 bg-emerald-400/10 px-4 py-2.5 text-[0.98rem] leading-snug font-medium text-emerald-50">
                {copy.refundBadge}
              </p>
              <ul className="mt-6 space-y-3">
                {copy.pricePoints.map((pt) => (
                  <li key={pt} className="flex gap-3 text-[1rem] leading-relaxed text-zinc-300">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-emerald-300" aria-hidden="true"><path d="M5 10.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="min-w-0 text-pretty">{pt}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-zinc-400">{copy.renewal}</p>
              <div className="mt-8"><Book label={copy.bookCta} className={`${btnPrimary} !bg-white !text-zinc-900 hover:!bg-emerald-50 w-full sm:w-auto`} /></div>
            </div>
            <Photo src="salon-owner-book.webp" alt={copy.photoOwner} className="aspect-[4/3] !rounded-[1.6rem] lg:aspect-auto" />
          </div>
          <PriceCompare copy={copy} />
        </section>

        <section id="faq" className={`${wrap} ${section} pt-4 sm:pt-8`} aria-labelledby="faq-h">
          <div className="reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className={eyebrow}>{copy.faqEyebrow}</p>
              <h2 id="faq-h" className={h2}>{copy.faqTitle}</h2>
            </div>
            <div className="divide-y divide-zinc-900/8 border-y border-zinc-900/8">
              {copy.faq.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold tracking-[-0.015em] text-zinc-900 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 text-pretty">{item.q}</span>
                    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-zinc-400 transition duration-200 group-open:rotate-180" aria-hidden="true">
                      <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="pb-5 text-pretty text-[1rem] leading-relaxed text-zinc-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="next" className={`${wrap} pb-16 sm:pb-24`} aria-labelledby="next-h">
          <div className={`${glass} reveal p-6 sm:p-10`}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="next-h" className="text-[1.75rem] leading-[1.1] font-semibold tracking-[-0.035em] text-zinc-900 sm:text-[2.25rem]">{copy.nextTitle}</h2>
              <Book label={copy.bookCta} />
            </div>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {copy.next.map((item, i) => (
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

        <section id="who" className={`${wrap} pb-16 sm:pb-24`} aria-labelledby="who-h">
          <article className={`${glass} mx-auto max-w-xl p-6 sm:p-8`}>
            <h2 id="who-h" className="text-[1.6rem] font-semibold tracking-[-0.03em] text-zinc-900">{copy.whoTitle}</h2>
            <p className="mt-2 text-pretty text-[1rem] leading-relaxed text-zinc-600">{copy.whoBody}</p>
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

        <footer id="trust-footer" className="border-t border-zinc-900/5" aria-labelledby="trust-h">
          <div className={`${wrap} py-12`}>
            <h2 id="trust-h" className="text-sm font-semibold tracking-[0.14em] text-zinc-900 uppercase">{copy.trustTitle}</h2>
            <div className="mt-4 max-w-3xl space-y-2 text-[0.95rem] leading-relaxed text-zinc-500">
              {copy.trust.map((p) => <p key={p}>{p}</p>)}
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-[0.95rem]">
              {footerLinks.map((item) => (
                <li key={item.href} className="inline-flex min-h-11 items-center">
                  <Link className={link} href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li className="inline-flex min-h-11 items-center">
                <a className={link} href={`mailto:${EMAIL}`}>{copy.links.contact}</a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-zinc-400" translate="no">Blades of Grass Marketing</p>
          </div>
        </footer>
      </main>

      <nav className="dock" aria-label={t.dockLabel}>
        <a href={`tel:${PHONE_TEL}`}>{t.callText}</a>
        <a href={VCARD_HREF}>{t.saveContact}</a>
        <a href={BOOK_URL} target="_blank" rel="noopener noreferrer">{copy.talkKenny}</a>
      </nav>
    </div>
  );
}
