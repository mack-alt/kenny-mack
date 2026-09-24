"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  BIO,
  BOOK_URL,
  copy,
  DIRECTORY_URL,
  EMAIL,
  LANG_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  STORAGE_KEY,
  type Lang,
} from "@/lib/content";

const LANG_EVENT = "kenny-mack-lang-change";

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "vi" || value === "es";
}

function subscribeLang(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANG_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANG_EVENT, onStoreChange);
  };
}

function readLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : "en";
}

function chooseLang(next: Lang) {
  window.localStorage.setItem(STORAGE_KEY, next);
  window.dispatchEvent(new Event(LANG_EVENT));
}

function GrassMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 40c0-8-1-14-6-22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M24 40c0-10 .2-16 .6-24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M24 40c0-8 3-14 8-20"
        fill="none"
        stroke="#f0e0b8"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.4 3.8h2.1c.4 0 .8.3.9.7l.8 2.6c.1.4 0 .8-.3 1.1l-1.3 1.1a12.4 12.4 0 0 0 5.7 5.7l1.1-1.3c.3-.3.7-.4 1.1-.3l2.6.8c.4.1.7.5.7.9v2.1c0 .5-.4.9-.9 1A15.2 15.2 0 0 1 3.5 4.7c.1-.5.5-.9.9-.9Z"
      />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 5.5h14A1.5 1.5 0 0 1 20.5 7v8a1.5 1.5 0 0 1-1.5 1.5H9.2L5 20.2V5.5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 6.5h15a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1Zm.7 1.6 6.8 4.4 6.8-4.4H5.2Z"
      />
    </svg>
  );
}

export function BusinessCard() {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => "en" as Lang);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-lg justify-center px-4 py-6 sm:py-14">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-70"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 160" className="h-full w-full text-moss/25">
          <path
            d="M40 150c8-40 4-70-8-110"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M70 150c6-48 10-78 4-120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M330 150c-4-44 6-80 16-118"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M360 150c-8-36-2-70 8-108"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <main className="relative z-10 w-full max-w-md">
        <article className="overflow-hidden rounded-[1.75rem] border border-line/80 bg-paper shadow-[0_24px_60px_-32px_rgba(27,67,50,0.55)]">
          <div className="relative aspect-[4/3] w-full">
            {/* Native img keeps /kenny-mack on the URL; next/image dropped basePath in the export. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/kenny-mack/kenny-family.jpg"
              alt="Kenny Mack with his kids near the Seattle waterfront"
              width={1122}
              height={1402}
              decoding="async"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#245c40]"
              aria-hidden="true"
            />
          </div>
          <header className="relative bg-gradient-to-b from-[#245c40] to-forest px-6 pb-8 pt-6 text-foam">
            <div className="flex items-center gap-2.5">
              <GrassMark className="h-9 w-9 text-foam" />
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-foam/90">
                  Blades of Grass
                </p>
                <p className="text-xs font-medium tracking-[0.16em] text-gold">BoG</p>
              </div>
            </div>

            <h1 className="mt-6 text-balance font-serif text-[2.35rem] font-medium leading-[1.05] tracking-tight text-paper">
              Kenneth “Kenny” Mack
            </h1>
            <p className="mt-3 text-sm font-medium text-gold">{t.area}</p>
            <p className="mt-3 max-w-[34ch] text-pretty text-base leading-relaxed text-foam/95">
              {t.tagline}
            </p>
          </header>

          <div className="px-5 py-5 sm:px-6">
            <div
              role="group"
              aria-label={t.language}
              className="grid grid-cols-3 gap-1 rounded-full bg-mist p-1"
            >
              {LANG_OPTIONS.map((option) => {
                const selected = lang === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => chooseLang(option.id)}
                    className={`min-h-11 rounded-full px-2 text-[0.8rem] leading-tight transition sm:text-sm ${
                      selected
                        ? "bg-forest font-semibold text-paper shadow-sm"
                        : "font-medium text-ink hover:bg-paper"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-forest px-2 text-sm font-semibold text-paper"
              >
                <PhoneIcon />
                {t.call}
              </a>
              <a
                href={`sms:${PHONE_TEL}`}
                className="flex min-h-12 items-center justify-center gap-1.5 rounded-2xl bg-moss px-2 text-sm font-semibold text-paper"
              >
                <TextIcon />
                {t.text}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex min-h-12 items-center justify-center gap-1.5 rounded-2xl border border-forest/20 bg-linen px-2 text-sm font-semibold text-forest"
              >
                <MailIcon />
                {t.email}
              </a>
            </div>

            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex min-h-12 items-center justify-center rounded-2xl bg-clay px-4 text-center text-sm font-semibold text-paper"
            >
              {t.book}
            </a>
            <a
              href={DIRECTORY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex min-h-11 items-center justify-center text-sm font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
            >
              {t.directory}
            </a>

            <section className="mt-7 border-t border-line pt-6" aria-labelledby="how-heading">
              <h2 id="how-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-sage">
                {t.howHeading}
              </h2>
              <ul className="mt-3 space-y-2.5">
                {t.howItems.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-snug">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-moss" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-7 border-t border-line pt-6" aria-labelledby="story-heading">
              <h2 id="story-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-sage">
                {t.storyHeading}
              </h2>
              {t.storyNote ? (
                <p className="mt-3 rounded-2xl bg-mist px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                  {t.storyNote}
                </p>
              ) : null}
              <div lang="en" translate="no" className="mt-3 space-y-3">
                {BIO.map((paragraph) => (
                  <p key={paragraph} className="font-serif text-[1.05rem] font-medium leading-relaxed text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-7 border-t border-line pt-6 text-center" aria-labelledby="contact-heading">
              <h2 id="contact-heading" className="text-xs font-bold uppercase tracking-[0.16em] text-sage">
                {t.contactHeading}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                <a className="font-semibold text-forest" href={`tel:${PHONE_TEL}`}>
                  {t.callOrText} {PHONE_DISPLAY}
                </a>
                <span aria-hidden="true"> · </span>
                <a className="font-semibold text-forest" href={`mailto:${EMAIL}`}>
                  {t.emailWord} {EMAIL}
                </a>
              </p>
              <p className="mt-4 text-xs leading-relaxed text-bark">{t.family}</p>
            </section>
          </div>
        </article>
      </main>
    </div>
  );
}
