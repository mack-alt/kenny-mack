"use client";

import {
  CTA_HI,
  CTA_LOOK,
  CTA_SEE,
  CTA_TALK,
  HELP,
  HELP_HEADING,
  HERO_ATTENTION,
  HERO_BODY,
  HERO_LINES,
  HERO_PATH,
  LANGUAGE,
  LANGUAGE_HEADING,
  LOOK,
  LOOK_HEADING,
  MEET,
  MEET_HEADING,
  TRUST,
  TRUST_HEADING,
  TRUST_LINKS,
  WAY,
  WAY_HEADING,
} from "@/lib/card-copy";
import { DIRECTORY_URL, EMAIL } from "@/lib/content";
import { useLang } from "@/lib/use-lang";
import {
  BookingLink,
  ContactRow,
  EnglishNote,
  FamilyPhoto,
  LanguageChips,
} from "@/components/card-ui";

const body = "text-pretty text-lg leading-relaxed";

export function LookB() {
  const { t } = useLang();

  return (
    <div className="min-h-dvh bg-[#f3ecdf] text-ink">
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-5 pb-2 pt-4 sm:px-6 lg:px-8">
        <LanguageChips className="w-full sm:ml-auto sm:max-w-md" />
        <EnglishNote note={t.storyNote} />
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-2 sm:px-6 lg:px-8 lg:pb-12">
        <h1
          lang="en"
          translate="no"
          className="max-w-5xl font-serif text-[2.65rem] font-bold leading-[0.95] tracking-[-0.03em] text-forest sm:text-6xl lg:text-[4.6rem]"
        >
          {HERO_LINES[0]}
          <span className="mt-2 block">{HERO_LINES[1]}</span>
        </h1>
        <div lang="en" translate="no" className="mt-5 max-w-2xl space-y-4">
          <p className="font-serif text-[1.45rem] font-medium leading-snug text-ink sm:text-[1.7rem]">
            {HERO_ATTENTION}
          </p>
          <p className={body}>{HERO_BODY}</p>
          <p className="font-serif text-xl font-medium leading-snug text-forest sm:text-2xl">{HERO_PATH}</p>
        </div>
        <BookingLink className="mt-6 w-full bg-forest px-6 text-paper sm:w-auto">{CTA_SEE}</BookingLink>
        <ContactRow t={t} className="mt-3" />
      </section>

      <section className="border-y border-forest/10 bg-paper" aria-labelledby="help-heading">
        <div className="mx-auto w-full max-w-6xl px-5 pt-7 sm:px-6 lg:px-8 lg:pt-8">
          <h2 id="help-heading" className="font-serif text-[1.7rem] font-medium leading-tight text-forest sm:text-3xl">
            {HELP_HEADING}
          </h2>
        </div>
        <ul className="mx-auto grid w-full max-w-6xl lg:grid-cols-3">
          {HELP.map((offer) => (
            <li
              key={offer.name}
              lang="en"
              translate="no"
              className="border-b border-line px-5 py-6 last:border-b-0 sm:px-6 lg:border-b-0 lg:border-r lg:px-6 lg:py-8 lg:last:border-r-0"
            >
              <h3 className="font-serif text-[1.55rem] font-semibold leading-tight tracking-tight text-forest sm:text-[1.7rem]">
                {offer.name}
              </h3>
              <div className="mt-3 space-y-3">
                {offer.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={body}>
                    {paragraph}
                  </p>
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
          ))}
        </ul>
      </section>

      <section className="bg-forest text-paper" aria-labelledby="language-heading">
        <div lang="en" translate="no" className="mx-auto w-full max-w-6xl px-5 py-7 sm:px-6 lg:px-8 lg:py-8">
          <h2 id="language-heading" className="font-serif text-[1.7rem] font-medium leading-tight text-[#f0e0b8] sm:text-3xl">
            {LANGUAGE_HEADING}
          </h2>
          <div className="mt-3 max-w-4xl space-y-3">
            {LANGUAGE.map((paragraph) => (
              <p key={paragraph} className={`${body} text-paper`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10" aria-labelledby="look-heading">
        <h2 id="look-heading" className="font-serif text-[1.7rem] font-medium leading-tight text-forest sm:text-3xl">
          {LOOK_HEADING}
        </h2>
        <div lang="en" translate="no" className="mt-3 max-w-2xl space-y-3">
          {LOOK.map((paragraph) => (
            <p key={paragraph} className={paragraph.includes("→") ? "font-serif text-xl font-medium leading-snug text-forest" : body}>
              {paragraph}
            </p>
          ))}
        </div>
        <BookingLink className="mt-6 w-full bg-forest px-6 text-paper sm:w-auto">{CTA_TALK}</BookingLink>
      </section>

      <section
        className="border-t border-forest/10 bg-paper"
        aria-labelledby="meet-heading"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-5 px-5 py-8 sm:px-6 lg:grid-cols-[minmax(240px,0.85fr)_minmax(0,1.15fr)] lg:gap-10 lg:px-8 lg:py-10">
          <div lang="en" translate="no" className="order-1 min-w-0 lg:order-2">
            <h2 id="meet-heading" className="font-serif text-[1.7rem] font-medium leading-tight text-forest sm:text-3xl">
              {MEET_HEADING}
            </h2>
            <div className="mt-3 space-y-3">
              {MEET.map((paragraph) => (
                <p key={paragraph} className={body}>
                  {paragraph}
                </p>
              ))}
            </div>
            <BookingLink className="mt-6 w-full border border-forest/15 bg-[#f3ecdf] px-6 text-forest sm:w-auto">
              {CTA_HI}
            </BookingLink>
          </div>
          <FamilyPhoto
            alt={t.photoAlt}
            className="order-2 aspect-[3/2] w-full rounded-[1.25rem] object-cover object-top lg:order-1"
          />
        </div>
      </section>

      <section className="bg-[#1b4332] px-5 py-8 text-paper sm:px-6 lg:px-8 lg:py-10" aria-labelledby="way-heading">
        <div className="mx-auto w-full max-w-5xl">
          <h2 id="way-heading" className="text-center font-serif text-[1.7rem] font-medium leading-tight text-[#f0e0b8] sm:text-3xl">
            {WAY_HEADING}
          </h2>
          <ul lang="en" translate="no" className="mt-4 space-y-3 sm:text-center">
            {WAY.map((line) => (
              <li key={line} className="font-serif text-[1.35rem] font-medium leading-snug sm:text-2xl">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-6 text-center">
            <BookingLink className="w-full bg-[#f0e0b8] px-8 text-forest sm:w-auto">{CTA_LOOK}</BookingLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className="font-serif text-[1.7rem] font-medium leading-tight text-forest sm:text-3xl">
          {TRUST_HEADING}
        </h2>
        <div lang="en" translate="no" className="mt-3 max-w-3xl space-y-3">
          {TRUST.map((paragraph) => (
            <p key={paragraph} className={body}>
              {paragraph}
            </p>
          ))}
          <p className={body}>
            {TRUST_LINKS.split(" · ").map((part, index) => (
              <span key={part}>
                {index > 0 ? " · " : null}
                {part === "Contact" ? (
                  <a
                    className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
                    href={`mailto:${EMAIL}`}
                  >
                    {part}
                  </a>
                ) : (
                  part
                )}
              </span>
            ))}
          </p>
        </div>
      </section>
    </div>
  );
}
