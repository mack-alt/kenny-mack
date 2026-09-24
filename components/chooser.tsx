"use client";

import Link from "next/link";
import { useLang } from "@/lib/use-lang";
import { EnglishNote, FamilyPhoto, LanguageChips } from "@/components/card-ui";

export function Chooser() {
  const { t } = useLang();

  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-4 py-6 sm:py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-sage">
            Blades of Grass
          </p>
          <h1 className="mt-1 font-serif text-4xl font-medium leading-none text-forest sm:text-5xl">
            Pick a look
          </h1>
        </div>
        <LanguageChips className="sm:max-w-xs" />
      </div>
      <p className="mt-3 max-w-md text-base leading-relaxed text-ink">
        Same words on both. Open each one and choose with your eyes.
      </p>
      <div className="mt-3">
        <EnglishNote note={t.storyNote} />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link
          href="/preview-a"
          className="group overflow-hidden rounded-[1.6rem] border border-line/80 bg-paper shadow-[0_18px_40px_-28px_rgba(27,67,50,0.6)]"
        >
          <FamilyPhoto
            alt=""
            className="aspect-[16/10] w-full object-cover object-top transition duration-300 group-hover:scale-[1.02]"
          />
          <div className="px-4 py-4">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-straw">Look A</p>
            <p className="mt-1 font-serif text-[1.7rem] font-medium leading-none text-forest">Card</p>
            <p className="mt-2 text-sm leading-snug text-ink">
              Tall handshake. Big photo, three help cards, a close strip.
            </p>
          </div>
        </Link>

        <Link
          href="/preview-b"
          className="group overflow-hidden rounded-[1.6rem] bg-forest text-paper shadow-[0_18px_40px_-28px_rgba(27,67,50,0.6)]"
        >
          <FamilyPhoto
            alt=""
            className="aspect-[16/10] w-full object-cover object-top opacity-95 transition duration-300 group-hover:scale-[1.02]"
          />
          <div className="px-4 py-4">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#f0e0b8]">
              Look B
            </p>
            <p className="mt-1 font-serif text-[1.7rem] font-medium leading-none">Poster</p>
            <p className="mt-2 text-sm leading-snug text-[#f7f3ea]">
              One bold page. Offers in a band, one close.
            </p>
          </div>
        </Link>
      </div>
    </main>
  );
}
