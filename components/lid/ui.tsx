import Link from "next/link";
import type { ReactNode } from "react";
import { DEMO_BAND_ANSWER, DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL, STEPS } from "@/lib/lid";

export function PageHero({
  kicker,
  title,
  answer,
  trail,
  children,
  aside,
}: {
  kicker?: string;
  title: string;
  answer: string;
  trail?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <header className="lid-hero">
      <div className="lid-wrap lid-hero-layout">
        <div>
          {trail}
          {kicker ? <p className="lid-kicker">{kicker}</p> : null}
          <h1>{title}</h1>
          <p className="lid-answer">{answer}</p>
          {children}
        </div>
        {aside}
      </div>
    </header>
  );
}

export function Section({
  id,
  title,
  answer,
  children,
}: {
  id: string;
  title: string;
  answer: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="lid-section" aria-labelledby={`${id}-title`}>
      <div className="lid-wrap">
        <h2 id={`${id}-title`}>{title}</h2>
        <p className="lid-answer">{answer}</p>
        {children}
      </div>
    </section>
  );
}

export function StatusBadge({ children, tone = "testing" }: { children: ReactNode; tone?: "testing" | "soon" }) {
  return <span className={tone === "soon" ? "lid-soon" : "lid-badge"}>{children}</span>;
}

export function StepPath({ hrefFor }: { hrefFor: (id: string) => string }) {
  return (
    <ol className="lid-path">
      {STEPS.map((step) => (
        <li key={step.id}>
          <div className="lid-path-top">
            <span className="lid-path-index">{step.n}</span>
            <span className="lid-path-when">{step.when}</span>
          </div>
          <h3>{step.name}</h3>
          <p>{step.detail}</p>
          {step.badge ? (
            <p className="lid-path-badge">
              <StatusBadge tone={step.badge.includes("coming soon") ? "soon" : "testing"}>{step.badge}</StatusBadge>
            </p>
          ) : null}
          <Link className="lid-text-link" href={hrefFor(step.id)}>
            See {step.name}
          </Link>
        </li>
      ))}
    </ol>
  );
}

export function Actions({ primary = "pricing" }: { primary?: "pricing" | "call" }) {
  return (
    <div className="lid-actions">
      <a className="lid-btn" href={`tel:${DEMO_PHONE_TEL}`}>
        Call {DEMO_PHONE_DISPLAY}
      </a>
      {primary === "pricing" ? (
        <Link className="lid-btn lid-btn-ghost" href="/locked-in-dispatch/pricing">
          See pricing
        </Link>
      ) : (
        <Link className="lid-btn lid-btn-ghost" href="/locked-in-dispatch/how-it-works">
          See the three steps
        </Link>
      )}
    </div>
  );
}

export function DemoBand() {
  return (
    <aside className="lid-band" aria-labelledby="demo-band-title">
      <div className="lid-wrap">
        <h2 id="demo-band-title">How do I hear the virtual front desk?</h2>
        <p className="lid-answer">{DEMO_BAND_ANSWER}</p>
        <div className="lid-actions">
          <a className="lid-btn lid-btn-gold" href={`tel:${DEMO_PHONE_TEL}`}>
            Call {DEMO_PHONE_DISPLAY}
          </a>
          <Link className="lid-btn lid-btn-ghost-light" href="/locked-in-dispatch/contact">
            Contact form
          </Link>
        </div>
      </div>
    </aside>
  );
}

export function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="lid-bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function NumberedList({ items }: { items: readonly string[] }) {
  return (
    <ol className="lid-steps">
      {items.map((item, index) => (
        <li key={item}>
          <span>{index + 1}</span>
          <p>{item}</p>
        </li>
      ))}
    </ol>
  );
}
