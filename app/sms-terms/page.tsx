import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, legalLink } from "@/components/legal-page";
import { SmsSection } from "@/components/sms-section";

export const metadata: Metadata = {
  title: "SMS Terms · Blades of Grass",
  description:
    "Terms for Blades of Grass Front Desk Texts, including how to opt in, opt out, and get help.",
};

export default function SmsTermsPage() {
  return (
    <LegalPage title="SMS Terms">
      <p>
        These are the text message terms from our full{" "}
        <Link href="/terms" className={legalLink}>
          Terms
        </Link>
        , word for word.
      </p>
      <SmsSection headingId="sms" />
    </LegalPage>
  );
}
