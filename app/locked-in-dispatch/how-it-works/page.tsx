import type { Metadata } from "next";
import Link from "next/link";
import { BulletList, DemoBand, NumberedList, PageHero, Section, StatusBadge, StepPath } from "@/components/lid/ui";
import {
  AUDIT_ANSWER,
  CALL_FLOW_ANSWER,
  CALL_STEPS,
  CHECK_ITEMS,
  CHECKS_ANSWER,
  COMING_SOON,
  HOW_PAGE_ANSWER,
  PATH_ANSWER,
  LAUNCH_ANSWER,
  LAUNCH_ITEMS,
  LIVE_NOW,
  REALTIME_ANSWER,
  REPORT_ITEMS,
  REPORTS_ANSWER,
  SCOREBOARD_ANSWER,
  SCOREBOARD_ROWS,
  STANDARDS_ANSWER,
  TRUST_ANSWER,
} from "@/lib/lid";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Locked In Launch, Locked In Trust, and Locked In Standards and Proof. A virtual front desk for locksmith shops, from day 1 through day 46 onward.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        kicker="Three steps"
        title="How does the virtual front desk work for a locksmith shop?"
        answer={HOW_PAGE_ANSWER}
        trail={
          <p className="lid-crumb">
            <Link href="/locked-in-dispatch">Locked In Dispatch</Link>
            <span aria-hidden="true"> / </span>
            How it works
          </p>
        }
      />

      <Section id="path" title="What are the three steps?" answer={PATH_ANSWER}>
        <StepPath hrefFor={(id) => `#${id}`} />
      </Section>

      <Section id="on-a-call" title="What happens on a call?" answer={CALL_FLOW_ANSWER}>
        <NumberedList items={CALL_STEPS} />
      </Section>

      <Section id="launch" title="What is Locked In Launch?" answer={LAUNCH_ANSWER}>
        <BulletList items={LAUNCH_ITEMS} />
      </Section>

      <Section id="trust" title="What is Locked In Trust?" answer={TRUST_ANSWER}>
        <p className="lid-path-badge">
          <StatusBadge>In final testing</StatusBadge>
        </p>
        <BulletList
          items={[
            "Job alerts go out by voice call, text, and email.",
            "A short window opens for a tech to accept.",
            "If no one accepts, the job hands to the next tech.",
            "If it is still open, the owner is alerted.",
            "Live call transfer is in final testing and is not a working feature yet.",
          ]}
        />
      </Section>

      <Section id="scoreboard" title="What is on the tech scoreboard?" answer={SCOREBOARD_ANSWER}>
        <div className="lid-table-scroll">
          <table className="lid-table lid-table-prose">
            <caption>Scoreboard readings for Locked In Trust. The hand-off they describe is in final testing. A live view is coming soon.</caption>
            <thead>
              <tr>
                <th scope="col">Reading</th>
                <th scope="col">What it shows</th>
              </tr>
            </thead>
            <tbody>
              {SCOREBOARD_ROWS.map(([reading, meaning]) => (
                <tr key={reading}>
                  <th scope="row">{reading}</th>
                  <td>{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="standards-and-proof" title="What is Locked In Standards and Proof?" answer={STANDARDS_ANSWER}>
        <BulletList
          items={[
            "System checks, with logged test calls.",
            "A reporting schedule you can keep or change.",
            "Real-time data, with unbuilt views marked coming soon.",
            "External audit protocols: logs on request, and a test call you or an outside party can run.",
          ]}
        />
      </Section>

      <Section id="system-checks" title="What do the system checks cover?" answer={CHECKS_ANSWER}>
        <ul className="lid-checks">
          {CHECK_ITEMS.map((item) => (
            <li key={item.label}>
              <div className="lid-check-copy">
                <strong>{item.label}</strong>
                <span>{item.note}</span>
              </div>
              {item.status ? <StatusBadge>{item.status}</StatusBadge> : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="reports" title="What is the reporting schedule?" answer={REPORTS_ANSWER}>
        <BulletList items={REPORT_ITEMS} />
      </Section>

      <Section id="real-time" title="What real-time data can I see?" answer={REALTIME_ANSWER}>
        <div className="lid-split">
          <article>
            <h3>What you can see live</h3>
            <ul>
              {LIVE_NOW.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article>
            <h3>What is not built yet</h3>
            <ul>
              {COMING_SOON.map((item) => (
                <li key={item}>
                  <StatusBadge tone="soon">Coming soon</StatusBadge>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section id="audit" title="How can an outside party check the calls?" answer={AUDIT_ANSWER}>
        <BulletList
          items={[
            "Logs for your line, shared when you ask.",
            "An audit trail, shared when you ask.",
            "A test-call method you can run yourself.",
            "The same method an outside party can run.",
            "A record you can read. Not a seal from an outside body.",
          ]}
        />
      </Section>

      <DemoBand />
    </>
  );
}
