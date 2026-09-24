"use client";

import Link from "next/link";
import { useLang } from "@/lib/use-lang";
import { EnglishNote, LanguageChips } from "@/components/card-ui";

export function Chooser() {
  const { t } = useLang();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 py-6 sm:py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-sage">Blades of Grass</p>
          <h1 className="mt-1 font-serif text-4xl font-medium leading-none text-forest sm:text-5xl">
            Pick a look
          </h1>
        </div>
        <LanguageChips className="sm:max-w-xs" />
      </div>
      <p className="mt-3 max-w-md text-base leading-relaxed text-ink">
        Same words on both. Customers first. The family photo is the close.
      </p>
      <div className="mt-3">
        <EnglishNote note={t.storyNote} />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/preview-a"
          className="overflow-hidden rounded-[1.6rem] border border-line/80 bg-paper px-4 py-4 shadow-[0_18px_40px_-28px_rgba(27,67,50,0.6)]"
        >
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-straw">Look A</p>
          <p className="mt-1 font-serif text-[1.7rem] font-medium leading-none text-forest">Card</p>
          <ol className="mt-3 space-y-1.5 text-sm leading-snug text-ink">
            <li>1. YOUR BUSINESS IS BUSY.</li>
            <li>2. Three help cards</li>
            <li>3. Language matters</li>
            <li>4. Meet Kenny, photo at the end</li>
          </ol>
        </Link>

        <Link
          href="/preview-b"
          className="overflow-hidden rounded-[1.6rem] bg-forest px-4 py-4 text-paper shadow-[0_18px_40px_-28px_rgba(27,67,50,0.6)]"
        >
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#f0e0b8]">Look B</p>
          <p className="mt-1 font-serif text-[1.7rem] font-medium leading-none">Poster</p>
          <p className="mt-3 font-serif text-[1.65rem] font-medium leading-[0.9] tracking-tight">
            YOUR BUSINESS IS BUSY.
          </p>
          <p className="mt-3 text-sm leading-snug text-[#f7f3ea]">
            Bold type first. Offers in a band. Family photo at the close.
          </p>
        </Link>
      </div>
    </main>
  );
}
