import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeading, LegalPage } from "@/components/legal-page";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy · Blades of Grass",
  description:
    "How Kenneth Mack, doing business as Blades of Grass, uses the name, phone, email, and messages people share.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        Kenneth Mack, doing business as Blades of Grass, in the Seattle area, WA, runs this card and the front
        desk service.
      </p>
      <LegalHeading>What we collect</LegalHeading>
      <p>We collect your name, phone number, and email, and the messages you send us or give us in person.</p>
      <LegalHeading>How we use it</LegalHeading>
      <p>We use that information to reply to you, schedule demos, and provide the front desk service.</p>
      <LegalHeading>We do not sell it</LegalHeading>
      <p>We do not sell your personal information.</p>
      <p>
        No mobile information will be shared with third parties or affiliates for marketing or promotional
        purposes. Text messaging originator opt-in data and consent will not be shared with any third parties,
        excluding aggregators and providers of the text message services.
      </p>
      <LegalHeading>Contact us or ask us to delete it</LegalHeading>
      <p>Kenneth Mack, doing business as Blades of Grass · 10411 SE 174th St, Renton, WA 98055 · 206-743-6296</p>
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
        . Tell us you want your information deleted, and we will delete it.
      </p>
      <p>
        <Link
          href="/sms-terms"
          className="font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4"
        >
          SMS Terms
        </Link>
      </p>
    </LegalPage>
  );
}
