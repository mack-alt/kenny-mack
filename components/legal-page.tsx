import Link from "next/link";
import type { ReactNode } from "react";
import { LEGAL_EFFECTIVE, LEGAL_UPDATED } from "@/lib/legal";

export const legalLink =
  "font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-dvh px-4 py-6 text-ink sm:px-6 sm:py-12">
      <article className="mx-auto w-full max-w-2xl rounded-[1.5rem] border border-forest/10 bg-paper px-5 py-8 shadow-[0_24px_60px_-36px_rgba(27,67,50,0.55)] sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Blades of Grass</p>
        <h1 className="mt-3 max-w-full text-balance font-serif text-[2rem] font-medium leading-tight text-forest sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-bark">
          Effective date: {LEGAL_EFFECTIVE}
          <br />
          Last updated: {LEGAL_UPDATED}
        </p>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">{children}</div>
        <p className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center text-base font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
          >
            Back to the card
          </Link>
        </p>
      </article>
      <SiteFooterLinks className="mx-auto mt-6 w-full max-w-2xl px-1" />
    </main>
  );
}

export function LegalHeading({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="scroll-mt-6 pt-2 font-serif text-2xl font-medium leading-tight text-forest">
      {children}
    </h2>
  );
}

/** Privacy and Terms links shown at the bottom of every page that is not the card itself. */
export function SiteFooterLinks({ className = "" }: { className?: string }) {
  const item =
    "inline-flex min-h-12 items-center text-base font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4";
  return (
    <footer className={className} aria-label="Site">
      <ul className="flex flex-wrap gap-x-5">
        <li>
          <Link className={item} href="/privacy">
            Privacy
          </Link>
        </li>
        <li>
          <Link className={item} href="/terms">
            Terms
          </Link>
        </li>
        <li>
          <Link className={item} href="/sms-terms">
            SMS Terms
          </Link>
        </li>
      </ul>
    </footer>
  );
}
