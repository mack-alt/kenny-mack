import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/lid/contact-form";
import { PageHero } from "@/components/lid/ui";
import { CONTACT_ANSWER, DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/lid";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call the Locked In Dispatch demo line at 206-743-6296. The contact form on this page is a placeholder and does not send.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="How do I reach Locked In Dispatch?"
        answer={CONTACT_ANSWER}
        trail={
          <p className="lid-crumb">
            <Link href="/locked-in-dispatch">Locked In Dispatch</Link>
            <span aria-hidden="true"> / </span>
            Contact
          </p>
        }
      />
      <div className="lid-wrap lid-contact-grid">
        <article className="lid-phone-card">
          <p className="lid-kicker">Call the demo line</p>
          <p>
            <a href={`tel:${DEMO_PHONE_TEL}`}>{DEMO_PHONE_DISPLAY}</a>
          </p>
          <p>Hear the virtual front desk and judge it yourself.</p>
        </article>
        <ContactForm />
      </div>
    </>
  );
}
