import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeading, LegalPage, legalLink } from "@/components/legal-page";
import { SmsSection } from "@/components/sms-section";
import { LEGAL_NAME } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms · Blades of Grass",
  description:
    "Terms for this card and for Blades of Grass Front Desk Texts, including how to opt in, opt out, and get help.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms">
      <p>
        These terms cover this card and the text messages from {LEGAL_NAME}. By using this card or agreeing to
        our texts, you agree to these terms.
      </p>
      <LegalHeading>Paid services</LegalHeading>
      <p>
        Prices, guarantees, cancellation terms, and responsibilities for paid Blades of Grass services are set
        out in writing before service begins.
      </p>
      <SmsSection headingId="sms" />
      <p>
        The text message terms are also on their own page:{" "}
        <Link href="/sms-terms" className={legalLink}>
          SMS Terms
        </Link>
        .
      </p>
      <LegalHeading>Privacy</LegalHeading>
      <p>
        Read our{" "}
        <Link href="/privacy" className={legalLink}>
          Privacy Policy
        </Link>{" "}
        to see what we collect and how we use it.
      </p>
      <LegalHeading>Changes</LegalHeading>
      <p>
        If we change these terms, we will update this page and the date at the top. Questions about these terms
        go to the contact listed under SMS support above.
      </p>
    </LegalPage>
  );
}
