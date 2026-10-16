import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "@/components/lid/logo";
import { Actions, BulletList, DemoBand, PageHero, Section, StepPath } from "@/components/lid/ui";
import {
  CALL_FLOW_ANSWER,
  DEMO_POSTER_SRC,
  DEMO_VIDEO_SRC,
  HOME_ANSWER,
  OFFER_ANSWER,
  PATH_ANSWER,
  PRICING_ANSWER,
  PROTECT_ANSWER,
  VIDEO_ANSWER,
} from "@/lib/lid";

export const metadata: Metadata = {
  title: {
    absolute: "Locked In Dispatch · Virtual front desk for locksmith shops",
  },
  description:
    "Locked In Dispatch is a virtual front desk for locksmith shops from Blades of Grass Marketing. We answer calls, take the job details, and alert your shop.",
};

const JOBS = ["Home lockout", "Car lockout", "Rekey", "Lock change", "Emergency"];

export default function LockedInDispatchHome() {
  return (
    <>
      <PageHero
        kicker="Virtual front desk for locksmith shops"
        title="What does Locked In Dispatch do for my shop?"
        answer={HOME_ANSWER}
        aside={
          <div className="lid-hero-aside" aria-hidden="true">
            <Shield className="lid-hero-shield" />
          </div>
        }
      >
        <Actions />
      </PageHero>

      <Section id="path" title="What are the three steps?" answer={PATH_ANSWER}>
        <StepPath hrefFor={(id) => `/locked-in-dispatch/how-it-works#${id}`} />
      </Section>

      <Section id="call" title="What happens when a caller reaches my shop?" answer={CALL_FLOW_ANSWER}>
        <BulletList
          items={[
            "The virtual front desk answers in your shop's name.",
            "Every call opens with a recorded-call notice.",
            "It takes the name, location, job type, and urgency.",
            "It never quotes a price.",
            "It says a job is booked only after the booking goes through.",
            "Your shop gets an alert so you can call the customer back.",
          ]}
        />
        <p className="lid-note">Job types the desk can take down include:</p>
        <ul className="lid-chips" aria-label="Examples of job types">
          {JOBS.map((job) => (
            <li key={job}>{job}</li>
          ))}
        </ul>
        <p className="lid-note">
          <Link href="/locked-in-dispatch/how-it-works">Read the full call flow</Link>
        </p>
      </Section>

      <Section id="recording" title="What does the screen recording show?" answer={VIDEO_ANSWER}>
        <figure className="lid-video-block">
          <div className="lid-video">
            <video
              controls
              playsInline
              preload="metadata"
              poster={DEMO_POSTER_SRC}
              width={1080}
              height={1920}
              aria-label="Screen recording of the locksmith virtual front desk. No person is on camera."
            >
              <source src={DEMO_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
          <figcaption>
            Screen recording of a locksmith call. The picture is a phone screen. No person is on camera.
          </figcaption>
        </figure>
      </Section>

      <Section id="protect" title="How we test and protect your calls" answer={PROTECT_ANSWER}>
        <p className="lid-note">
          <Link href="/locked-in-dispatch/calls">Read how a call is handled</Link>
        </p>
      </Section>

      <Section id="pricing" title="What does Locked In Dispatch cost?" answer={PRICING_ANSWER}>
        <p className="lid-note">
          <Link href="/locked-in-dispatch/pricing">Compare Starter and Growth</Link>
        </p>
      </Section>

      <Section id="offer" title="What if it is not working for my shop?" answer={OFFER_ANSWER} />

      <DemoBand />
    </>
  );
}
