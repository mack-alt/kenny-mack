import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, DemoBand, PageHero, Section } from "@/components/lid/ui";
import { COMPARE_ANSWER, INCLUDED_ANSWER, OFFER_ANSWER, OFFER_SENTENCE, PRICE_ROWS, PRICING_ANSWER } from "@/lib/lid";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Starter is $1,500 to set up and $468/mo for up to 10 techs. Growth is $3,000 to set up and $929/mo for up to 25 techs. Each extra tech is $45/mo.",
};

const INCLUDED = [
  "Locked In Launch, days 1 through 14.",
  "Locked In Trust, days 15 through 45. Tech hand-off is in final testing.",
  "Locked In Standards and Proof, day 46 onward.",
  "Call activity reports weekly for six weeks after go-live, then monthly, or on a frequency you choose.",
  "A monthly account review of 15 to 30 minutes.",
  "Each extra tech is $45/mo.",
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        kicker="Pricing"
        title="What does Locked In Dispatch cost?"
        answer={PRICING_ANSWER}
        trail={
          <p className="lid-crumb">
            <Link href="/locked-in-dispatch">Locked In Dispatch</Link>
            <span aria-hidden="true"> / </span>
            Pricing
          </p>
        }
      />

      <Section id="plans" title="How do Starter and Growth compare?" answer={COMPARE_ANSWER}>
        <div className="lid-table-scroll">
          <table className="lid-table">
            <caption>Starter and Growth prices in U.S. dollars. The setup fee is charged once and is not refundable.</caption>
            <thead>
              <tr>
                <th scope="col">Plan</th>
                <th scope="col">Starter</th>
                <th scope="col">Growth</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="included" title="What is included in both plans?" answer={INCLUDED_ANSWER}>
        <BulletList items={INCLUDED} />
      </Section>

      <Section id="offer" title="What if it is not working for my shop?" answer={OFFER_ANSWER}>
        <p className="lid-offer">{OFFER_SENTENCE}</p>
      </Section>

      <DemoBand />
    </>
  );
}
