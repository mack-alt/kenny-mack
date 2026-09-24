"use client";

import {
  BOOK_URL,
  DIRECTORY_URL,
  EMAIL,
  LANG_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHOTO_SRC,
  type Copy,
} from "@/lib/content";
import { chooseLang, useLang } from "@/lib/use-lang";

const bookingClass =
  "inline-flex min-h-14 items-center justify-center rounded-2xl px-5 text-center text-lg font-semibold leading-tight";

export function BookingLink({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <a
      href={BOOK_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? `${bookingClass} ${className}` : bookingClass}
    >
      {children}
    </a>
  );
}

export function FamilyPhoto({
  alt,
  className,
  priority = false,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // Native img keeps /kenny-mack on the URL; next/image dropped basePath in the export.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={PHOTO_SRC}
      alt={alt}
      width={1122}
      height={1402}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}

export function LanguageChips({ className = "" }: { className?: string }) {
  const { lang, t } = useLang();

  return (
    <div
      role="group"
      aria-label={t.language}
      className={`grid grid-cols-3 gap-1 rounded-full bg-paper/85 p-1 shadow-sm ${className}`}
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
            className={`min-h-12 rounded-full px-2 text-base leading-tight transition ${
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
  );
}

export function ContactRow({ t, className = "" }: { t: Copy; className?: string }) {
  const link = "inline-flex min-h-12 items-center text-lg font-semibold leading-snug text-forest underline decoration-straw decoration-2 underline-offset-4";
  return (
    <p className={`flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 ${className}`}>
      <a className={link} href={`tel:${PHONE_TEL}`}>
        {t.callText} {PHONE_DISPLAY}
      </a>
      <a className={link} href={`mailto:${EMAIL}`}>
        {EMAIL}
      </a>
      <a className={link} href={DIRECTORY_URL} target="_blank" rel="noopener noreferrer">
        {t.directory}
      </a>
    </p>
  );
}

export function EnglishNote({ note }: { note: string | null }) {
  if (!note) return null;
  return (
    <p className="rounded-2xl bg-paper/80 px-3.5 py-2.5 text-lg leading-relaxed text-ink shadow-sm">
      {note}
    </p>
  );
}
