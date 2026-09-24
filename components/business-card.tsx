"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  ABOUT_BOG,
  BOOK_URL,
  copy,
  DIRECTORY_URL,
  EMAIL,
  HERO,
  LANG_OPTIONS,
  OUTCOMES,
  PHONE_DISPLAY,
  PHONE_TEL,
  STORAGE_KEY,
  STORY,
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

function TextIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 5.5h14A1.5 1.5 0 0 1 20.5 7v8a1.5 1.5 0 0 1-1.5 1.5H9.2L5 20.2V5.5Z"
      />
    </svg>
  );
}

function Actions({
  textLabel,
  bookLabel,
  stacked = false,
}: {
  textLabel: string;
  bookLabel: string;
  stacked?: boolean;
}) {
  const shared =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-3 text-center text-[0.95rem] font-semibold leading-tight";
  return (
    <div className={stacked ? "grid gap-2" : "grid grid-cols-2 gap-2"}>
      <a
        href={`sms:${PHONE_TEL}`}
        className={`${shared} bg-forest text-paper`}
        aria-label={`${textLabel}, ${PHONE_DISPLAY}`}
      >
        <TextIcon />
        {textLabel}
      </a>
      <a
        href={BOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`${shared} bg-clay text-paper`}
      >
        {bookLabel}
      </a>
    </div>
  );
}

export function BusinessCard() {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => "en" as Lang);
  const t = copy[lang];
  const heroActions = useRef<HTMLDivElement>(null);
  const footerActions = useRef<HTMLDivElement>(null);
  const [heroOnScreen, setHeroOnScreen] = useState(true);
  const [footerOnScreen, setFooterOnScreen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const watch = (el: HTMLElement | null, set: (visible: boolean) => void) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => set(entry.isIntersecting),
        { rootMargin: "0px 0px -72px 0px", threshold: 0.2 },
      );
      observer.observe(el);
      return () => observer.disconnect();
    };
    const stopHero = watch(heroActions.current, setHeroOnScreen);
    const stopFooter = watch(footerActions.current, setFooterOnScreen);
    return () => {
      stopHero?.();
      stopFooter?.();
    };
  }, []);

  const showDock = !heroOnScreen && !footerOnScreen;

  return (
    <div className="relative mx-auto flex min-h-dvh w-full max-w-lg justify-center px-3 py-4 sm:px-4 sm:py-12">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-48 opacity-60"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 160" className="h-full w-full text-moss/20">
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

      <main className={`relative z-10 w-full max-w-md ${showDock ? "pb-24" : ""}`}>
        <div
          role="group"
          aria-label={t.language}
          className="mb-3 grid grid-cols-3 gap-1 rounded-full bg-paper/80 p-1 shadow-sm"
        >
          {LANG_OPTIONS.map((option) => {
            const selected = lang === option.id;
            const name = option.id === "en" ? "English" : option.label;
            return (
              <button
                key={option.id}
                type="button"
                aria-pressed={selected}
                aria-label={name}
                onClick={() => chooseLang(option.id)}
                className={`min-h-11 rounded-full px-2 text-[0.8rem] leading-tight transition sm:text-sm ${
                  selected
                    ? "bg-forest font-semibold text-paper shadow-sm"
                    : "font-medium text-ink hover:bg-linen"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <article className="overflow-hidden rounded-[1.75rem] border border-line/80 bg-paper shadow-[0_24px_60px_-32px_rgba(27,67,50,0.55)]">
          {/* Native img keeps /kenny-mack on the URL; next/image dropped basePath in the export. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kenny-mack/kenny-family.jpg"
            alt={t.photoAlt}
            width={1122}
            height={1402}
            decoding="async"
            fetchPriority="high"
            className="block h-auto w-full"
          />

          <div className="px-5 pb-8 pt-6 sm:px-6">
            <header>
              <h1 className="font-serif text-[2.85rem] font-medium leading-[0.95] tracking-tight text-forest">
                Kenny Mack
              </h1>
              <p className="mt-2.5 flex items-center gap-2 text-sm font-semibold text-sage">
                <GrassMark className="h-5 w-5 text-forest" />
                {t.role}
              </p>
            </header>

            <div lang="en" className="mt-5 space-y-3.5">
              <p className="text-pretty font-serif text-[1.35rem] font-medium leading-snug text-ink">
                {HERO.lead}
              </p>
              <p className="text-pretty text-[1.02rem] leading-relaxed text-ink">{HERO.body}</p>
              <p className="text-pretty font-serif text-[1.15rem] font-medium leading-snug text-forest">
                {HERO.close}
              </p>
            </div>

            <div ref={heroActions} className="mt-5">
              <Actions textLabel={t.textKenny} bookLabel={t.book} stacked />
            </div>

            <section className="mt-8 border-t border-line pt-7" aria-labelledby="what-heading">
              <h2
                id="what-heading"
                className="font-serif text-[1.65rem] font-medium leading-tight text-forest"
              >
                {t.whatHeading}
              </h2>
              <div lang="en" className="mt-4 space-y-3.5">
                {ABOUT_BOG.map((paragraph) => (
                  <p key={paragraph} className="text-pretty text-[1.02rem] leading-relaxed text-ink">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-8 border-t border-line pt-7" aria-label="Get found, stay responsive, grow">
              <ul className="space-y-6">
                {OUTCOMES.map((outcome) => (
                  <li key={outcome.id} lang="en">
                    <h3 className="font-serif text-[1.35rem] font-medium leading-tight text-forest">
                      {outcome.title}
                    </h3>
                    <p className="mt-1.5 text-pretty text-[1.02rem] leading-relaxed text-ink">
                      {outcome.body}
                    </p>
                    {outcome.id === "found" ? (
                      <a
                        href={DIRECTORY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
                      >
                        {t.listings}
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-8 border-t border-line pt-7" aria-labelledby="about-heading">
              <h2 id="about-heading" className="sr-only">
                {t.aboutHeading}
              </h2>
              {t.storyNote ? (
                <p className="mb-4 rounded-2xl bg-mist px-3.5 py-2.5 text-sm leading-relaxed text-ink">
                  {t.storyNote}
                </p>
              ) : null}
              <div lang="en" translate="no" className="space-y-3.5">
                {STORY.map((paragraph, index) => (
                  <p
                    key={paragraph}
                    className={
                      index === 0
                        ? "font-serif text-[1.85rem] font-medium leading-tight text-forest"
                        : "text-pretty font-serif text-[1.12rem] font-medium leading-relaxed text-ink"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-8 border-t border-line pt-7" aria-labelledby="contact-heading">
              <h2
                id="contact-heading"
                className="font-serif text-[1.65rem] font-medium leading-tight text-forest"
              >
                {t.contactHeading}
              </h2>
              <a
                href={`sms:${PHONE_TEL}`}
                className="mt-3 block font-serif text-[2rem] font-medium leading-none text-forest"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="mt-3 text-sm leading-relaxed text-ink">
                <a className="font-semibold text-forest" href={`tel:${PHONE_TEL}`}>
                  {t.call}
                </a>
                <span aria-hidden="true"> · </span>
                <a className="font-semibold text-forest" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </p>
              <a
                href={DIRECTORY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
              >
                {t.directory}
              </a>
              <div ref={footerActions} className="mt-4">
                <Actions textLabel={t.textKenny} bookLabel={t.book} stacked />
              </div>
            </section>
          </div>
        </article>
      </main>

      {showDock ? (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-3 pt-3 shadow-[0_-12px_40px_-24px_rgba(27,67,50,0.5)] backdrop-blur-md pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto max-w-md">
            <Actions textLabel={t.textKenny} bookLabel={t.book} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
