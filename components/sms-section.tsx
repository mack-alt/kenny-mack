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
        <strong>Purpose:</strong> appointment and customer-service texts from Blades of Grass. That means replies to
        your questions, scheduling, confirming, and changing appointments and demos, and follow-up about Blades of
        Grass services you asked about. These texts may be sent using automated technology.
      </p>
      <p>
        These terms cover texts Blades of Grass sends for its own business. If a shop uses the Blades of Grass front
        desk, texts to that shop&apos;s customers are sent for that shop. Ask the shop about its own text terms.
      </p>
      <LegalHeading>How you opt in</LegalHeading>
      <p>We text you only after you clearly say yes. You can say yes in either of these ways:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          Check the unchecked box agreeing to texts on the chat form or the demo booking form on this card, and send
          us your phone number.
        </li>
        <li>Text us first. We reply only about what you asked.</li>
      </ul>
      <p>
        When you check the box, you agree that {LEGAL_NAME} may send you the texts described above, including
        automated texts, at the number you gave. Calling us does not sign you up for texts. Agreeing to texts is
        never required to buy anything from Blades of Grass.
      </p>
      <LegalHeading>Frequency, rates, and opting out</LegalHeading>
      <p>Message frequency varies.</p>
      <p>Msg &amp; data rates may apply.</p>
      <p>Reply STOP to opt out, HELP for help.</p>
      <p>
        You can also opt out by replying QUIT, END, CANCEL, UNSUBSCRIBE, REVOKE, or OPT OUT, or by telling us in any
        other reasonable way, such as by email or a phone call. We honor every opt-out request promptly, and always
        within 10 business days. After you opt out, you may get one last text confirming it, and then we stop
        texting you. To get our texts again later, reply START.
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
