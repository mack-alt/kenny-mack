import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeading, LegalPage } from "@/components/legal-page";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

export const metadata: Metadata = {
  title: "SMS Terms · Blades of Grass",
  description:
    "Terms for Blades of Grass Front Desk Texts, including how to opt in, opt out, and get help.",
};

export default function SmsTermsPage() {
  return (
    <LegalPage title="SMS Terms">
      <p>
        Kenneth Mack, doing business as Blades of Grass, in the Seattle area, WA, offers{" "}
        <strong>Blades of Grass Front Desk Texts</strong>.
      </p>
      <p>
        These texts are replies to people who call or text Blades of Grass, appointment and demo scheduling, and
        follow-up about services they asked about.
      </p>
      <LegalHeading>How you opt in</LegalHeading>
      <p>You opt in by texting or calling us first, by entering your number on a form and checking an unchecked consent box, or by giving your number in person and agreeing to receive texts.</p>
      <p>Message frequency varies.</p>
      <p>Message and data rates may apply.</p>
      <p>Reply STOP to opt out at any time. Reply HELP for help.</p>
      <p>Carriers are not liable for delayed or undelivered messages.</p>
      <LegalHeading>Help</LegalHeading>
      <p>
        Email{" "}
        <a
          className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
          href={`mailto:${EMAIL}`}
        >
          {EMAIL}
        </a>{" "}
        or call or text{" "}
        <a
          className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
          href={`tel:${PHONE_TEL}`}
        >
          {PHONE_DISPLAY}
        </a>
        .
      </p>
      <p>
        <Link
          href="/privacy"
          className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
        >
          Privacy Policy
        </Link>
      </p>
    </LegalPage>
  );
}
