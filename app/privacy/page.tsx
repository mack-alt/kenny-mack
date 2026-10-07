import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeading, LegalPage, legalLink } from "@/components/legal-page";
import { LegalContact } from "@/components/legal-contact";
import { LEGAL_NAME } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy · Blades of Grass",
  description:
    "How Kenneth Mack (Blades of Grass) uses the name, phone, email, and messages people share, including text message opt-in data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>{LEGAL_NAME} runs this card and the Blades of Grass front desk service.</p>
      <LegalHeading>What we collect</LegalHeading>
      <p>We collect your name, phone number, and email, and the messages you send us or give us in person.</p>
      <LegalHeading>How we use it</LegalHeading>
      <p>
        We use that information to reply to you, schedule appointments and demos, send the text messages you
        agreed to, and provide the front desk service.
      </p>
      <LegalHeading>We do not sell it</LegalHeading>
      <p>We do not sell your personal information.</p>
      <LegalHeading>Mobile numbers and text messages</LegalHeading>
      <p>
        No mobile information will be shared with third parties or affiliates for marketing or promotional
        purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
      </p>
      <p>
        <strong>Mobile numbers and SMS opt-in data are not shared or sold.</strong>
      </p>
      <p>
        You can stop texts at any time by replying STOP. Reply HELP for help. The full text message terms are in
        our{" "}
        <Link href="/terms#sms" className={legalLink}>
          Terms
        </Link>{" "}
        and on the{" "}
        <Link href="/sms-terms" className={legalLink}>
          SMS Terms
        </Link>{" "}
        page.
      </p>
      <LegalHeading>Contact us or ask us to delete it</LegalHeading>
      <p>Tell us you want your information deleted, and we will delete it.</p>
      <LegalContact />
    </LegalPage>
  );
}
