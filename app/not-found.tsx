import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-md flex-col items-center justify-center px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Blades of Grass</p>
      <h1 className="mt-3 font-serif text-4xl text-forest">Kenny Mack</h1>
      <p className="mt-3 text-base leading-relaxed text-ink">This page is not on the card.</p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-12 items-center justify-center rounded-2xl bg-forest px-5 text-sm font-semibold text-paper"
      >
        Back to the looks
      </Link>
    </main>
  );
}
