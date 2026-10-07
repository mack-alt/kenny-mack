import Link from "next/link";
import { LegalHeading, legalLink } from "@/components/legal-page";
import { LegalContact } from "@/components/legal-contact";
import { LEGAL_NAME, SMS_PROGRAM } from "@/lib/legal";

/** The SMS program terms. Shared word for word by /terms/ and /sms-terms/. */
export function SmsSection({ headingId = "sms" }: { headingId?: string }) {
  return (
    <>
      <LegalHeading id={headingId}>Text messages (SMS)</LegalHeading>
      <p>
        <strong>Program name:</strong> {SMS_PROGRAM}, from {LEGAL_NAME}.
      </p>
      <p>
        <strong>Purpose:</strong> appointment and customer-service texts from Blades of Grass. These are replies
        to people who call or text Blades of Grass, appointment and demo scheduling, and follow-up about services
        they asked about.
      </p>
      <LegalHeading>How you opt in</LegalHeading>
      <p>
        You opt in by texting or calling us first, by entering your number on a form and checking an unchecked
        consent box, or by giving your number in person and agreeing to receive texts. Agreeing to texts is not a
        condition of buying anything.
      </p>
      <LegalHeading>Frequency, rates, and opting out</LegalHeading>
      <p>Message frequency varies.</p>
      <p>Msg &amp; data rates may apply.</p>
      <p>Reply STOP to opt out, HELP for help.</p>
      <p>
        After you reply STOP, we will send one text confirming you are opted out and no more texts after that.
        You can text START to opt back in.
      </p>
      <p>Carriers are not liable for delayed or undelivered messages.</p>
      <LegalHeading>SMS support</LegalHeading>
      <LegalContact />
      <p>
        How we handle your mobile number and opt-in data is in our{" "}
        <Link href="/privacy" className={legalLink}>
          Privacy Policy
        </Link>
        . Mobile numbers and SMS opt-in data are not shared or sold.
      </p>
    </>
  );
}
