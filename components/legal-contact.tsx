import {
  LEGAL_ADDRESS,
  LEGAL_EMAIL,
  LEGAL_NAME,
  LEGAL_PHONE_DISPLAY,
  LEGAL_PHONE_TEL,
} from "@/lib/legal";
import { legalLink } from "@/components/legal-page";

/** Business contact block. Used only on the Privacy and Terms pages. */
export function LegalContact() {
  return (
    <address className="not-italic">
      <span className="block font-semibold">{LEGAL_NAME}</span>
      <span className="block">{LEGAL_ADDRESS}</span>
      <span className="block">
        Email:{" "}
        <a className={legalLink} href={`mailto:${LEGAL_EMAIL}`}>
          {LEGAL_EMAIL}
        </a>
      </span>
      <span className="block">
        Phone (call or text):{" "}
        <a className={legalLink} href={`tel:${LEGAL_PHONE_TEL}`}>
          {LEGAL_PHONE_DISPLAY}
        </a>
      </span>
    </address>
  );
}
