import type { Metadata } from "next";
import Link from "next/link";
import { DemoBand, PageHero } from "@/components/lid/ui";
import { FAQ, FAQ_PAGE_ANSWER } from "@/lib/lid";

export const metadata: Metadata = {
  title: "Questions",
  description:
    "Answers about the Locked In Dispatch virtual front desk, Locked In Launch, Locked In Trust, Locked In Standards and Proof, pricing, and the demo line.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        kicker="Questions"
        title="What should I know before I call the demo?"
        answer={FAQ_PAGE_ANSWER}
        trail={
          <p className="lid-crumb">
            <Link href="/locked-in-dispatch">Locked In Dispatch</Link>
            <span aria-hidden="true"> / </span>
            FAQ
          </p>
        }
      />
      <div className="lid-wrap lid-faq">
        {FAQ.map((item) => (
          <article key={item.question} aria-labelledby={`q-${slug(item.question)}`}>
            <h2 id={`q-${slug(item.question)}`}>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
      <DemoBand />
    </>
  );
}

function slug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
