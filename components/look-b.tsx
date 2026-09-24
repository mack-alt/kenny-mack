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

const body = "max-w-full text-pretty text-lg leading-relaxed [overflow-wrap:break-word]";
const heading = "max-w-full text-balance font-serif text-[1.7rem] font-medium leading-tight sm:text-3xl";
const headingInk = `${heading} text-forest`;
const headingGold = `${heading} text-[#f0e0b8]`;

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
        <span key={`${part}-${index}`} className="inline-flex whitespace-nowrap items-baseline gap-2">
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

export function LookB() {
  const { t } = useLang();

  return (
    <div className="min-h-dvh bg-[#f3ecdf] text-ink">
      <div className="mx-auto w-full max-w-6xl px-4 pb-1 pt-4 sm:px-6 lg:px-8">
        <LanguageChips className="sm:ml-auto sm:max-w-md" />
        <div className="mt-3">
          <EnglishNote note={t.storyNote} />
        </div>
      </div>

      <section className="mx-auto w-full max-w-6xl px-5 pb-8 pt-6 sm:px-6 lg:px-8 lg:pb-12 lg:pt-8">
        <h1
          lang="en"
          translate="no"
          className="max-w-full font-serif text-[2.2rem] font-bold leading-[0.98] tracking-[-0.02em] text-forest sm:text-balance sm:text-6xl lg:text-[4.6rem] lg:leading-[0.98]"
        >
          {HERO_LINES[0]}
          <span className="mt-1 block sm:mt-3">{HERO_LINES[1]}</span>
        </h1>
        <div lang="en" translate="no" className="mt-5 max-w-2xl space-y-4">
          <p className="font-serif text-[1.45rem] font-medium leading-snug text-ink sm:text-[1.7rem]">
            {HERO_ATTENTION}
          </p>
          <p className={body}>{HERO_BODY}</p>
          <p className="font-serif text-xl font-medium leading-snug text-forest sm:text-2xl">{HERO_PATH}</p>
        </div>
        <BookingLink className="mt-6 bg-forest px-6 text-paper">{CTA_SEE}</BookingLink>
        <ContactRow t={t} className="mt-4" />
      </section>

      <section className="border-y border-forest/10 bg-paper" aria-labelledby="help-heading">
        <div className="mx-auto w-full max-w-6xl px-5 pt-8 sm:px-6 lg:px-8">
          <h2 id="help-heading" className={headingInk}>
            {HELP_HEADING}
          </h2>
        </div>
        <ul className="mx-auto grid w-full max-w-6xl lg:grid-cols-3">
          {HELP.map((offer) => (
            <li
              key={offer.name}
              lang="en"
              translate="no"
              className="min-w-0 border-b border-line px-5 py-6 last:border-b-0 sm:px-6 lg:border-b-0 lg:border-r lg:px-6 lg:py-8 lg:last:border-r-0"
            >
              <h3 className="text-balance font-serif text-[1.55rem] font-semibold leading-tight text-forest sm:text-[1.7rem]">
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
          ))}
        </ul>
      </section>

      <section className="bg-forest text-paper" aria-labelledby="language-heading">
        <div lang="en" translate="no" className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10">
          <h2 id="language-heading" className={headingGold}>
            {LANGUAGE_HEADING}
          </h2>
          <div className="mt-4 max-w-4xl space-y-4">
            {LANGUAGE.map((paragraph) => (
              <p key={paragraph} className={`${body} text-paper`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10" aria-labelledby="look-heading">
        <h2 id="look-heading" className={headingInk}>
          {LOOK_HEADING}
        </h2>
        <div lang="en" translate="no" className="mt-4 max-w-2xl space-y-4">
          {LOOK.map((paragraph) => (
            <Prose
              key={paragraph}
              text={paragraph}
              className={
                paragraph.includes("→")
                  ? "font-serif text-xl font-medium leading-snug text-forest"
                  : body
              }
            />
          ))}
        </div>
        <BookingLink className="mt-6 bg-forest px-6 text-paper">{CTA_TALK}</BookingLink>
      </section>

      <section
        className="border-t border-forest/10 bg-paper"
        aria-labelledby="meet-heading"
      >
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-5 py-8 sm:px-6 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,1.2fr)] lg:items-center lg:gap-10 lg:px-8 lg:py-10">
          <div lang="en" translate="no" className="order-1 min-w-0 lg:order-2">
            <h2 id="meet-heading" className={headingInk}>
              {MEET_HEADING}
            </h2>
            <div className="mt-4 space-y-4">
              {MEET.map((paragraph) => (
                <p key={paragraph} className={body}>
                  {paragraph}
                </p>
              ))}
            </div>
            <BookingLink className="mt-6 border border-forest/15 bg-[#f3ecdf] px-6 text-forest">
              {CTA_HI}
            </BookingLink>
          </div>
          <FamilyPhoto
            alt={t.photoAlt}
            className="order-2 aspect-[4/5] w-full max-w-full rounded-[1.25rem] object-cover object-center lg:order-1"
          />
        </div>
      </section>

      <section className="bg-[#1b4332] px-5 py-8 text-paper sm:px-6 lg:px-8 lg:py-10" aria-labelledby="way-heading">
        <div className="mx-auto w-full max-w-5xl">
          <h2 id="way-heading" className={`${headingGold} sm:text-center`}>
            {WAY_HEADING}
          </h2>
          <ul lang="en" translate="no" className="mt-5 space-y-4 sm:text-center">
            {WAY.map((line) => (
              <li key={line} className="max-w-full text-balance font-serif text-[1.3rem] font-medium leading-snug sm:text-2xl">
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-6 sm:text-center">
            <BookingLink className="bg-[#f0e0b8] px-8 text-forest">{CTA_LOOK}</BookingLink>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-6 lg:px-8 lg:py-10" aria-labelledby="trust-heading">
        <h2 id="trust-heading" className={headingInk}>
          {TRUST_HEADING}
        </h2>
        <div lang="en" translate="no" className="mt-4 max-w-3xl space-y-4">
          {TRUST.map((paragraph) => (
            <p key={paragraph} className={body}>
              {paragraph}
            </p>
          ))}
          <ul className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
            {TRUST_LINKS.split(" · ").map((part) => (
              <li key={part} className="text-lg leading-snug">
                {part === "Contact" ? (
                  <a
                    className="inline-flex min-h-12 items-center font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
                    href={`mailto:${EMAIL}`}
                  >
                    {part}
                  </a>
                ) : (
                  <span className="inline-flex min-h-12 items-center">{part}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
