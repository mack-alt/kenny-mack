"use client";

import {
  BOOK_URL,
  DIRECTORY_URL,
  EMAIL,
  LANG_OPTIONS,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHOTO_SRC,
  QR_SRC,
  VCARD_HREF,
  type Copy,
} from "@/lib/content";
import { chooseLang, useLang } from "@/lib/use-lang";

const bookingClass =
  "btn inline-flex min-h-14 w-full max-w-full items-center justify-center rounded-2xl px-5 text-center text-lg font-semibold leading-snug shadow-[0_14px_30px_-18px_rgba(27,67,50,0.85)] sm:w-auto";

export function GrassMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        d="M24 42c0-9-1.2-16-6.5-24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M24 42c0-11 .2-18 .6-26"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path
        d="M24 42c0-9 3.2-16 8.4-22"
        fill="none"
        stroke="#c4a36a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
      data-magnetic=""
      className={className ? `${bookingClass} ${className}` : bookingClass}
    >
      {children}
    </a>
  );
}

export function SaveContact({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a data-magnetic="" href={VCARD_HREF} className={`btn save-contact ${className}`}>
      {label}
    </a>
  );
}

export function ContactQr({ alt }: { alt: string }) {
  return (
    // Native img keeps /kenny-mack on the URL; next/image dropped basePath in the export.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={QR_SRC}
      alt={alt}
      width={258}
      height={258}
      decoding="async"
      loading="lazy"
      className="h-auto w-full rounded-2xl bg-white p-1.5 shadow-[inset_0_0_0_1px_rgba(27,67,50,0.08)]"
    />
  );
}

export function FamilyPhoto({
  alt,
  className,
  priority = false,
  loading,
}: {
  alt: string;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
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
      loading={loading}
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
      className={`grid w-full min-w-0 grid-cols-3 gap-1.5 rounded-2xl border border-forest/10 bg-paper p-1.5 shadow-[0_10px_24px_-20px_rgba(27,67,50,0.8)] ${className}`}
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
            className={`min-h-12 min-w-0 rounded-xl px-1 text-center text-[0.95rem] font-semibold leading-tight transition-[background-color,color,scale] duration-200 ${
              selected ? "bg-forest text-paper" : "text-ink hover:bg-linen"
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
  return (
    <div className={`grid gap-2 ${className}`}>
      <a className="link-row" href={`tel:${PHONE_TEL}`}>
        <span>
          {t.callText} {PHONE_DISPLAY}
        </span>
      </a>
      <a className="link-row" href={`mailto:${EMAIL}`}>
        <span className="[overflow-wrap:anywhere]">{EMAIL}</span>
      </a>
      <a className="link-row" href={DIRECTORY_URL} target="_blank" rel="noopener noreferrer">
        <span>{t.directory}</span>
      </a>
    </div>
  );
}

export function EnglishNote({ note }: { note: string | null }) {
  if (!note) return null;
  return (
    <p className="rounded-2xl border border-forest/10 bg-paper px-3.5 py-2.5 text-lg leading-relaxed text-ink">
      {note}
    </p>
  );
}
