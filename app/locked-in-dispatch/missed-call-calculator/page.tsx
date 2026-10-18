import type { Metadata } from "next";
import Link from "next/link";
import { MissedCallCalculator } from "@/components/lid/missed-call-calculator";
import { DemoBand, PageHero } from "@/components/lid/ui";
import { CALC_ANSWER } from "@/lib/lid";

export const metadata: Metadata = {
  title: "Missed-call cost calculator",
  description:
    "Enter your own missed calls, job value, and booking percent. Locked In Dispatch turns those numbers into a monthly and yearly estimate. Nothing is sent.",
};

export default function MissedCallCalculatorPage() {
  return (
    <>
      <PageHero
        kicker="Missed-call cost calculator"
        title="How much are missed calls costing my shop?"
        answer={CALC_ANSWER}
        trail={
          <p className="lid-crumb">
            <Link href="/locked-in-dispatch">Locked In Dispatch</Link>
            <span aria-hidden="true"> / </span>
            Calculator
          </p>
        }
      />
      <div className="lid-wrap lid-calc-page">
        <MissedCallCalculator />
      </div>
      <DemoBand />
    </>
  );
}
