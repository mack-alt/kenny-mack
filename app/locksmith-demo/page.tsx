import type { Metadata } from "next";
import { GrassMark } from "@/components/card-ui";

export const metadata: Metadata = {
  title: "B-O-G Front Desk for Locksmith Shops · Kenny Mack",
  description: "See how the B-O-G front desk answers calls for your locksmith shop while you're on the job.",
  robots: { index: false, follow: false },
};

const SMS_BODY = "Hi Kenny, I'd like to set up a phone demo for my locksmith shop.";
const SMS_HREF = `sms:+12067436296?&body=${encodeURIComponent(SMS_BODY)}`;
const PHONE = "206-743-6296";

const STEPS = [
  "A caller is locked out. You're on a job and can't pick up.",
  "The B-O-G front desk answers in your shop's name.",
  "It takes the caller's name, location, job type and how urgent it is.",
  "The job details go straight to you, so you can dispatch or call back.",
];

const JOBS = ["Home lockout", "Car lockout", "Rekey", "Lock change", "Emergency"];

const SETUP = [
  "A quick setup call",
  "Your intake questions, customized",
  "Your number, forwarded",
  "A live test before it goes on",
];

function TextButton() {
  return (
    <a
      href={SMS_HREF}
      className="inline-flex min-h-14 w-full items-center justify-center rounded-2xl bg-forest px-5 py-3 text-center text-lg font-bold text-paper shadow-sm sm:w-auto"
    >
      Text Kenny to set up a phone demo
    </a>
  );
}

export default function LocksmithDemoPage() {
  return (
    <div className="min-h-dvh text-ink">
      <header className="flex items-center justify-between gap-3 border-b border-forest/10 bg-[#f7f3ea] px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <GrassMark className="h-9 w-9 shrink-0 text-forest" />
          <div className="min-w-0" translate="no">
            <p className="truncate font-serif text-xl leading-none text-forest">Kenny Mack</p>
            <p className="mt-1 truncate text-[0.68rem] font-bold tracking-[0.16em] text-sage uppercase">Blades of Grass</p>
          </div>
        </div>
        <a href={SMS_HREF} className="inline-flex min-h-12 shrink-0 flex-col items-end justify-center rounded-2xl bg-forest px-3.5 py-1.5 text-right text-paper">
          <span className="text-[0.68rem] font-semibold tracking-[0.12em] text-[#f0e0b8] uppercase">Text Kenny</span>
          <span className="text-base leading-none font-bold">{PHONE}</span>
        </a>
      </header>

      <main className="mx-auto w-full max-w-3xl px-5 pt-6 pb-16 sm:px-6">
        <section className="text-center">
          <p className="text-[0.78rem] font-bold tracking-[0.22em] text-sage uppercase">For locksmith shops</p>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-forest text-balance sm:text-5xl">
            The front desk that answers your calls while you&rsquo;re on the job.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty">
            Every missed call can be a lockout job that goes to the next shop. B-O-G picks up, takes the details, and sends the job to you.
          </p>
        </section>

        <section className="mt-6 flex justify-center">
          <video
            className="w-full max-w-[22rem] rounded-3xl border border-forest/15 bg-forest shadow-lg"
            src="/kenny-mack/locksmith-demo.mp4"
            poster="/kenny-mack/locksmith-demo-poster.jpg"
            controls
            playsInline
            preload="metadata"
            width={1080}
            height={1920}
          />
        </section>

        <section className="mt-6 flex flex-col items-center gap-2 text-center">
          <TextButton />
          <p className="text-base">
            Or text <a className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4" href={SMS_HREF}>{PHONE}</a>
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-forest">How it works</h2>
          <ol className="mt-3 flex flex-col gap-2">
            {STEPS.map((s, i) => (
              <li key={s} className="flex gap-3 rounded-2xl bg-mist px-3.5 py-3 text-lg leading-snug">
                <span className="font-bold text-forest">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-forest">Every call, captured</h2>
          <p className="mt-2 text-lg leading-relaxed">Name, location, job type, details and urgency, for jobs like:</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {JOBS.map((j) => (
              <li key={j} className="rounded-full border border-forest/20 bg-paper px-3.5 py-1.5 text-base font-semibold text-forest">{j}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-forest">Simple setup</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {SETUP.map((s) => (
              <li key={s} className="rounded-2xl bg-mist px-3.5 py-2.5 text-lg leading-snug">✓ {s}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10 rounded-3xl border border-straw/60 bg-paper px-5 py-5 text-center">
          <p className="text-[0.78rem] font-bold tracking-[0.22em] text-sage uppercase">Our promise</p>
          <p className="mt-2 font-serif text-xl leading-snug text-forest">
            If it isn&rsquo;t working for you in the first 30 days, we&rsquo;ll refund your first month&rsquo;s fee.
          </p>
        </section>

        <section className="mt-10 text-center">
          <h2 className="font-serif text-2xl text-forest">See B-O-G work for your shop.</h2>
          <p className="mt-2 text-lg">Text Kenny and he&rsquo;ll set up a phone demo you can call yourself.</p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <TextButton />
            <p className="text-base">Kenny Mack · <a className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4" href={SMS_HREF}>{PHONE}</a></p>
          </div>
        </section>
      </main>
    </div>
  );
}
