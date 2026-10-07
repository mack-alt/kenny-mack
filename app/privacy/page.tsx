import type { Metadata } from "next";
import Link from "next/link";
import { LegalHeading, LegalPage, legalLink } from "@/components/legal-page";
import { LegalContact } from "@/components/legal-contact";
import { LEGAL_NAME } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy · Blades of Grass",
  description:
    "How Kenneth Mack (Blades of Grass) collects, uses, and shares the information people give us, including mobile numbers and text message opt-in data.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>
        This policy explains how {LEGAL_NAME}, called &ldquo;Blades of Grass&rdquo; or &ldquo;we&rdquo; here,
        collects, uses, and shares information through this card, our texts, calls, and emails, and the Blades of Grass front desk
        service.
      </p>

      <LegalHeading>What we collect</LegalHeading>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <strong>What you give us:</strong> your name, phone number, and email, and what you write or say to us in
          texts, the chat form, the demo booking form, calls, emails, or in person.
        </li>
        <li>
          <strong>Text choices:</strong> records of when you agreed to our texts and when you opted out, so we can
          honor your choice.
        </li>
        <li>
          <strong>Technical information:</strong> this card is hosted on GitHub Pages, and GitHub logs visitors&apos;
          IP addresses for security. The chat and booking tools on this card are provided by LeadConnector, which
          may collect technical details such as your browser and device to run them. This card saves your language
          choice in your own browser. We do not use advertising or analytics tools on this card.
        </li>
      </ul>

      <LegalHeading>How we use it</LegalHeading>
      <p>
        We use your information to reply to you, schedule and confirm appointments and demos, send the texts you
        agreed to, provide the front desk service, keep track of your text choices, and meet our legal obligations.
      </p>

      <LegalHeading>When we run the front desk for a shop</LegalHeading>
      <p>
        Some shops use Blades of Grass to answer their calls and texts. When you contact one of those shops, we
        handle your information for that shop, only to answer you and book what you asked for. The shop&apos;s own
        privacy policy also applies.
      </p>

      <LegalHeading>We do not sell it</LegalHeading>
      <p>We do not sell your personal information. We share it only:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          with the companies that run our phone, text, chat, booking, and email tools, only so they can provide
          those services to us;
        </li>
        <li>with the shop you contacted, if you reached that shop through our front desk; and</li>
        <li>when the law requires it, or to protect someone&apos;s rights or safety.</li>
      </ul>

      <LegalHeading>Mobile numbers and text messages</LegalHeading>
      <p>
        No mobile information will be shared with third parties or affiliates for marketing or promotional
        purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.
      </p>
      <p>
        <strong>Mobile numbers and SMS opt-in data are not shared or sold.</strong>
      </p>
      <p>
        The companies that deliver our texts handle your number only to send and receive our messages. You can
        stop texts at any time by replying STOP. Reply HELP for help. The full text message terms are in our{" "}
        <Link href="/terms#sms" className={legalLink}>
          Terms
        </Link>{" "}
        and on the{" "}
        <Link href="/sms-terms" className={legalLink}>
          SMS Terms
        </Link>{" "}
        page.
      </p>

      <LegalHeading>Health information</LegalHeading>
      <p>
        We do not ask for health information. Sometimes, when people book or ask about a salon or spa service, they
        mention something about their health, such as a skin or nail condition, an allergy, a pregnancy, or a recent
        treatment. If you share something like that with us, or with a shop&apos;s front desk that we run, we use it
        only to answer you and handle the booking you asked for. We do not sell it or use it for marketing, and we
        share it only with the shop you contacted and the companies that run our messaging and booking tools. You
        can ask us to delete it at any time. Please share only what the shop needs to know.
      </p>

      <LegalHeading>Children</LegalHeading>
      <p>
        This card and our services are for business owners and other adults. They are not directed to children
        under 13, and we do not knowingly collect personal information from children under 13. If we learn that we
        have, we will delete it. If you believe a child under 13 has given us information, please contact us.
      </p>

      <LegalHeading>Keeping and deleting your information</LegalHeading>
      <p>
        We keep your information while we need it for the reasons above, or longer if the law requires it. Tell us
        you want your information deleted, and we will delete it and reply within 45 days. We may keep a record that
        you opted out of texts, so that we do not text you again.
      </p>

      <LegalHeading>Changes to this policy</LegalHeading>
      <p>If we change this policy, we will update this page and the dates at the top.</p>

      <LegalHeading>Contact us</LegalHeading>
      <p>To ask a question, see your information, or have it deleted, contact us:</p>
      <LegalContact />
    </LegalPage>
  );
}
