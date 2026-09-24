"use client";

import { useEffect, useRef, useState } from "react";
import {
  CLOSE,
  CTA_HI,
  CTA_LOOK,
  CTA_TALK,
  HELP,
  HELP_HEADING,
  HERO_BODY,
  HERO_FRICTION,
  HERO_KICKER,
  HERO_LEAD,
  LANGUAGE_HEADING,
  LANGUAGE_LINE,
  LANGUAGE_MORE,
  MEET,
  MEET_HEADING,
  splitHelp,
} from "@/lib/card-copy";
import { DIRECTORY_URL } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import {
  BookingLink,
  ContactRow,
  EnglishNote,
  FamilyPhoto,
  LanguageChips,
  LookSwitch,
} from "@/components/card-ui";

export function LookA() {
  const { t } = useLang();
  const heroCta = useRef<HTMLDivElement>(null);
  const closeStrip = useRef<HTMLElement>(null);
  const [heroOnScreen, setHeroOnScreen] = useState(true);
  const [closeOnScreen, setCloseOnScreen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const watch = (el: HTMLElement | null, set: (visible: boolean) => void) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => set(entry.isIntersecting),
        { threshold: 0.35 },
      );
      observer.observe(el);
      return () => observer.disconnect();
    };
    const stopHero = watch(heroCta.current, setHeroOnScreen);
    const stopClose = watch(closeStrip.current, setCloseOnScreen);
    return () => {
      stopHero?.();
      stopClose?.();
    };
  }, []);

  const showDock = scrolled && !heroOnScreen && !closeOnScreen;

  return (
    <div className={`mx-auto w-full max-w-md px-3 pt-3 sm:py-8 ${showDock ? "pb-36" : "pb-6"}`}>
      <div className="mb-3 grid gap-2">
        <LookSwitch current="a" />
        <LanguageChips />
        <EnglishNote note={t.storyNote} />
      </div>

      <article className="overflow-hidden rounded-[1.75rem] border border-line/80 bg-paper shadow-[0_24px_60px_-32px_rgba(27,67,50,0.55)]">
        <FamilyPhoto
          alt={t.photoAlt}
          priority
          className="block aspect-[4/5] w-full object-cover object-[center_42%]"
        />

        <div lang="en" translate="no" className="px-5 pb-6 pt-5">
          <header>
            <p className="text-[0.72rem] font-bold tracking-[0.16em] text-straw">{HERO_KICKER}</p>
            <h1 className="mt-2 font-serif text-[1.85rem] font-medium leading-[1.05] text-forest">
              {HERO_LEAD}
            </h1>
          </header>
          <p className="mt-3 text-pretty text-base leading-snug text-ink">{HERO_FRICTION}</p>
          <p className="mt-2 text-pretty text-base leading-snug text-ink">{HERO_BODY}</p>
          <div ref={heroCta} className="mt-4">
            <BookingLink className="w-full bg-forest text-paper">{CTA_TALK}</BookingLink>
          </div>
          <ContactRow t={t} className="mt-1" />

          <section className="mt-5" aria-labelledby="help-heading">
            <h2 id="help-heading" className="font-serif text-lg font-medium leading-tight text-forest">
              {HELP_HEADING}
            </h2>
            <ul className="mt-2 grid gap-2">
              {HELP.map((line) => {
                const { name, detail } = splitHelp(line);
                const isDoor = name === "THE OPEN DOOR™";
                return (
                  <li key={line} className="rounded-2xl bg-mist px-3.5 py-3">
                    <h3 className="font-serif text-[1.05rem] font-medium leading-tight text-forest">
                      {name}
                    </h3>
                    <p className="mt-1 text-pretty text-[0.95rem] leading-snug text-ink">{detail}</p>
                    {isDoor ? (
                      <a
                        href={DIRECTORY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
                      >
                        {t.directory}
                      </a>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mt-4 border-t border-line pt-3" aria-labelledby="language-heading">
            <h2 id="language-heading" className="font-serif text-base font-medium text-forest">
              {LANGUAGE_HEADING}
            </h2>
            <p className="mt-1 text-pretty text-[0.95rem] leading-snug text-ink">{LANGUAGE_LINE}</p>
            <p className="mt-1 text-pretty text-[0.95rem] leading-snug text-sage">{LANGUAGE_MORE}</p>
          </section>

          <section className="mt-4 border-t border-line pt-3" aria-labelledby="meet-heading">
            <h2 id="meet-heading" className="font-serif text-lg font-medium leading-tight text-forest">
              {MEET_HEADING}
            </h2>
            <p className="mt-1.5 font-serif text-[1.2rem] font-medium leading-snug text-forest">
              {MEET[0]}
            </p>
            <div className="mt-1.5 space-y-1.5">
              {MEET.slice(1).map((paragraph) => (
                <p key={paragraph} className="text-pretty text-[0.95rem] leading-snug text-ink">
                  {paragraph}
                </p>
              ))}
            </div>
            <BookingLink className="mt-3 w-full border border-forest/20 bg-foam text-forest">
              {CTA_HI}
            </BookingLink>
          </section>
        </div>

        <footer ref={closeStrip} className="bg-forest px-5 py-4 text-paper">
          <ul lang="en" translate="no" className="space-y-1">
            {CLOSE.map((line) => (
              <li key={line} className="font-serif text-[1.02rem] font-medium leading-tight">
                {line}
              </li>
            ))}
          </ul>
          <BookingLink className="mt-3 w-full bg-[#f0e0b8] text-forest">{CTA_LOOK}</BookingLink>
        </footer>
      </article>

      {showDock ? (
        <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-paper/95 px-3 pt-2 shadow-[0_-12px_40px_-24px_rgba(27,67,50,0.55)] backdrop-blur-md pb-[max(0.55rem,env(safe-area-inset-bottom))]">
          <div className="mx-auto max-w-md">
            <ul lang="en" translate="no" className="space-y-0.5 text-center">
              {CLOSE.map((line) => (
                <li key={line} className="text-[0.78rem] font-semibold leading-tight text-forest">
                  {line}
                </li>
              ))}
            </ul>
            <BookingLink className="mt-1.5 w-full bg-forest text-paper">{CTA_LOOK}</BookingLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
