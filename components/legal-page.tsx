import Link from "next/link";
import type { ReactNode } from "react";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-dvh bg-[#f3ecdf] text-ink">
      <article className="mx-auto w-full max-w-2xl px-5 py-8 sm:px-6 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Blades of Grass</p>
        <h1 className="mt-3 max-w-full text-balance font-serif text-[2rem] font-medium leading-tight text-forest sm:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-base leading-relaxed text-bark">Last updated September 27, 2026</p>
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
    </main>
  );
}

export function LegalHeading({ children }: { children: ReactNode }) {
  return <h2 className="pt-2 font-serif text-2xl font-medium leading-tight text-forest">{children}</h2>;
}
