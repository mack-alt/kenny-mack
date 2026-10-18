import type { Metadata } from "next";
import Link from "next/link";
import { HeroVideo } from "@/components/lid/hero-video";
import { MissedCallCalculator } from "@/components/lid/missed-call-calculator";
import { BulletList, Section, StepPath } from "@/components/lid/ui";
import {
  AI_ANSWER,
  BOOKED_ANSWER,
  CALC_ANSWER,
  CONCERNS_ANSWER,
  DEMO_PHONE_TEL,
  EMAIL,
  EMAIL_LINE,
  HANDLED_ANSWER,
  HERO_VIDEO_CAPTIONS,
  HERO_VIDEO_POSTER,
  HERO_VIDEO_SRC,
  HEAR_ANSWER,
  HEAR_FIRST_ANSWER,
  HOME_ANSWER,
  LIMITS_ANSWER,
  LOCATION,
  PATH_ANSWER,
  PRICE_QUOTE_ANSWER,
  PRICING_ANSWER,
  PROTECT_ANSWER,
  REFUND_ANSWER,
  REINFORCE_LINE,
  SHOP_ANSWER,
  TRADE_LINE,
  TRIED_ANSWER,
} from "@/lib/lid";

export const metadata: Metadata = {
  title: {
    absolute: "Missing calls while you're on a job? · Locked In Dispatch",
  },
  description:
    "We answer in your shop's name so the job doesn't go to the next locksmith on Google. Locked In Dispatch is a virtual front desk and a trade name of Blades of Grass Marketing in Burien, WA.",
};

const CONCERNS = [
  { id: "price", title: "Does the desk ever quote a price?", answer: PRICE_QUOTE_ANSWER },
  { id: "booked", title: "When do you say a job is booked?", answer: BOOKED_ANSWER },
  { id: "recorded", title: "Do callers hear that the call is recorded?", answer: HEAR_FIRST_ANSWER },
  { id: "protect", title: "How do you test and protect my calls?", answer: PROTECT_ANSWER },
  { id: "limits", title: "Are there spending limits?", answer: LIMITS_ANSWER },
  { id: "refund", title: "What if it is not working for my shop?", answer: REFUND_ANSWER },
  { id: "ai", title: "Is this AI?", answer: AI_ANSWER },
] as const;

export default function LockedInDispatchHome() {
  return (
    <>
      <header className="lid-hero">
        <div className="lid-wrap lid-hero-closer">
          <p className="lid-kicker">Virtual front desk for locksmith shops</p>
          <h1>Running a locksmith shop and missing calls while you&apos;re on a job?</h1>
          <p className="lid-answer">{HOME_ANSWER}</p>
          <HeroVideo src={HERO_VIDEO_SRC} poster={HERO_VIDEO_POSTER} captions={HERO_VIDEO_CAPTIONS} />
          <div className="lid-hero-cta">
            <p className="lid-trade">
              {TRADE_LINE}. {LOCATION}.
            </p>
            <a className="lid-btn" href={`tel:${DEMO_PHONE_TEL}`}>
              Call the demo line
            </a>
          </div>
        </div>
      </header>

      <Section id="shop" title="Does this sound like your shop?" answer={SHOP_ANSWER}>
        <BulletList
          items={[
            "You're on a job and the phone rings out.",
            "You're under a dash or on a ladder.",
            "The customer calls the next shop.",
          ]}
        />
      </Section>

      <Section id="tried" title="What have you already tried?" answer={TRIED_ANSWER}>
        <BulletList
          items={[
            "Voicemail. Lockout callers don't leave messages.",
            "Forwarding to your cell. You can't answer mid-job.",
            "Answering services that fumble job details or feel like a call center.",
          ]}
        />
      </Section>

      <Section id="handled" title="What does it look like when it's handled?" answer={HANDLED_ANSWER}>
        <BulletList
          items={[
            "Finish the job in front of you.",
            "The next one is waiting with the name, location, job type, and urgency.",
            "Plain reports, and you can check our work.",
          ]}
        />
      </Section>

      <Section id="path" title="What are the three steps?" answer={PATH_ANSWER}>
        <StepPath hrefFor={(id) => `/locked-in-dispatch/how-it-works#${id}`} />
      </Section>

      <Section id="missed-calls" title="How much are missed calls costing my shop?" answer={CALC_ANSWER}>
        <MissedCallCalculator />
        <p className="lid-note">
          <Link href="/locked-in-dispatch/missed-call-calculator">Open the calculator on its own page</Link>
        </p>
      </Section>

      <Section id="pricing" title="What does Locked In Front Desk cost?" answer={PRICING_ANSWER}>
        <p className="lid-note">
          <Link href="/locked-in-dispatch/pricing">Compare Starter and Growth</Link>
        </p>
      </Section>

      <Section id="concerns" title="What about...?" answer={CONCERNS_ANSWER}>
        <div className="lid-concerns">
          {CONCERNS.map((item) => (
            <article key={item.id}>
              <h3 id={`${item.id}-title`}>{item.title}</h3>
              <p className="lid-answer">{item.answer}</p>
            </article>
          ))}
        </div>
      </Section>

      <aside className="lid-band" aria-labelledby="hear-title">
        <div className="lid-wrap">
          <h2 id="hear-title">How do I hear what my callers would hear?</h2>
          <p className="lid-answer">{HEAR_ANSWER}</p>
          <div className="lid-actions">
            <a className="lid-btn lid-btn-gold" href={`tel:${DEMO_PHONE_TEL}`}>
              Call the demo line
            </a>
          </div>
          <p className="lid-reinforce">{REINFORCE_LINE}</p>
          <p className="lid-reinforce">
            <a href={`mailto:${EMAIL}`}>{EMAIL_LINE}</a>
          </p>
        </div>
      </aside>
    </>
  );
}
