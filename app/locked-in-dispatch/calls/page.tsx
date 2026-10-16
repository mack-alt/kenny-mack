import type { Metadata } from "next";
import Link from "next/link";
import { DemoBand, PageHero, Section } from "@/components/lid/ui";
import { HEAR_FIRST_ANSWER, LIMITS_ANSWER, NOT_SAY_ANSWER, PROTECT_ANSWER } from "@/lib/lid";

export const metadata: Metadata = {
  title: "How we test and protect your calls",
  description:
    "Every Locked In Dispatch call opens with a recorded-call notice. The virtual front desk never quotes prices, and it says a job is booked only after the booking goes through.",
};

export default function CallsPage() {
  return (
    <>
      <PageHero
        kicker="Your calls"
        title="How we test and protect your calls"
        answer={PROTECT_ANSWER}
        trail={
          <p className="lid-crumb">
            <Link href="/locked-in-dispatch">Locked In Dispatch</Link>
            <span aria-hidden="true"> / </span>
            Your calls
          </p>
        }
      />

      <Section id="notice" title="What do callers hear first?" answer={HEAR_FIRST_ANSWER} />

      <Section id="words" title="What will the front desk not say?" answer={NOT_SAY_ANSWER} />

      <Section id="limits" title="How do you keep a line from running away?" answer={LIMITS_ANSWER}>
        <p className="lid-note">
          Day 46 onward, Locked In Standards and Proof adds routine system checks and a test call you or an outside
          party can run. <Link href="/locked-in-dispatch/how-it-works#system-checks">See the system checks</Link>
        </p>
      </Section>

      <DemoBand />
    </>
  );
}
