"use client";

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
} from "@/components/card-ui";

export function LookB() {
  const { t } = useLang();

  return (
    <div className="min-h-dvh bg-[#f3ecdf] text-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-2 px-4 pb-2 pt-3 sm:px-6 lg:px-8">
        <LanguageChips className="w-full sm:ml-auto sm:max-w-sm" />
        <EnglishNote note={t.storyNote} />
      </div>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
        <h1
          lang="en"
          translate="no"
          className="max-w-5xl font-serif text-[3.15rem] font-bold leading-[0.86] tracking-[-0.03em] text-forest sm:text-7xl lg:text-[5.35rem]"
        >
          {HERO_KICKER}
        </h1>
        <p
          lang="en"
          translate="no"
          className="mt-4 max-w-2xl font-serif text-[1.55rem] font-medium leading-[1.12] text-ink sm:text-[1.85rem] lg:text-[2rem]"
        >
          {HERO_LEAD}
        </p>
        <div lang="en" translate="no" className="mt-4 max-w-2xl">
          <p className="text-pretty text-base leading-snug sm:text-lg">{HERO_FRICTION}</p>
          <p className="mt-2 text-pretty text-base leading-snug sm:text-lg">{HERO_BODY}</p>
          <BookingLink className="mt-4 bg-forest px-6 text-paper">{CTA_TALK}</BookingLink>
          <ContactRow t={t} className="mt-1" />
        </div>
      </section>

      <section className="border-y border-forest/10 bg-paper" aria-labelledby="help-heading">
        <div className="mx-auto w-full max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
          <h2 id="help-heading" className="font-serif text-lg font-medium text-forest">
            {HELP_HEADING}
          </h2>
        </div>
        <ul className="mx-auto grid w-full max-w-6xl md:grid-cols-3">
          {HELP.map((line) => {
            const { name, detail } = splitHelp(line);
            const isDoor = name === "THE OPEN DOOR™";
            return (
              <li
                key={line}
                lang="en"
                translate="no"
                className="border-b border-line px-4 py-4 last:border-b-0 sm:px-6 md:border-b-0 md:border-r md:px-6 md:py-5 md:last:border-r-0"
              >
                <h3 className="font-serif text-[1.2rem] font-semibold leading-tight tracking-tight text-forest sm:text-[1.35rem]">
                  {name}
                </h3>
                <p className="mt-1.5 text-pretty text-[0.95rem] leading-snug text-ink">{detail}</p>
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

      <section className="bg-forest text-paper" aria-labelledby="language-heading">
        <div lang="en" translate="no" className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 lg:px-8 lg:py-5">
          <h2 id="language-heading" className="font-serif text-lg font-medium text-[#f0e0b8]">
            {LANGUAGE_HEADING}
          </h2>
          <p className="mt-1 max-w-4xl font-serif text-xl font-medium leading-snug sm:text-2xl">{LANGUAGE_LINE}</p>
          <p className="mt-1 max-w-3xl text-sm leading-snug text-[#f0e0b8] sm:text-base">{LANGUAGE_MORE}</p>
        </div>
      </section>

      <section
        className="mx-auto grid w-full max-w-6xl items-center gap-4 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,1.2fr)] lg:gap-8 lg:px-8 lg:py-6"
        aria-labelledby="meet-heading"
      >
        <div lang="en" translate="no" className="order-1 min-w-0 lg:order-2">
          <h2 id="meet-heading" className="font-serif text-lg font-medium text-forest">
            {MEET_HEADING}
          </h2>
          <p className="mt-1 font-serif text-lg font-medium leading-snug text-forest">{MEET[0]}</p>
          <div className="mt-1 space-y-1">
            {MEET.slice(1).map((paragraph) => (
              <p key={paragraph} className="text-pretty text-[0.95rem] leading-snug text-ink">
                {paragraph}
              </p>
            ))}
          </div>
          <BookingLink className="mt-3 border border-forest/15 bg-paper px-5 text-forest">{CTA_HI}</BookingLink>
        </div>
        <FamilyPhoto
          alt={t.photoAlt}
          className="order-2 aspect-[3/2] w-full rounded-[1.25rem] object-cover object-top lg:order-1"
        />
      </section>

      <section className="bg-[#1b4332] px-4 py-7 text-center text-paper sm:px-6 lg:py-8">
        <ul
          lang="en"
          translate="no"
          className="mx-auto flex w-full max-w-5xl flex-col gap-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-2"
        >
          {CLOSE.map((line) => (
            <li key={line} className="font-serif text-xl font-semibold leading-tight sm:text-2xl">
              {line}
            </li>
          ))}
        </ul>
        <BookingLink className="mt-5 bg-[#f0e0b8] px-8 text-base text-forest sm:min-h-14 sm:text-lg">
          {CTA_LOOK}
        </BookingLink>
      </section>
    </div>
  );
}
