import Link from "next/link";
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL, EMAIL, LOCATION, TRADE_LINE } from "@/lib/lid";

export function Footer() {
  return (
    <footer className="lid-footer">
      <div className="lid-wrap lid-footer-grid">
        <div>
          <p className="lid-footer-brand">{TRADE_LINE}</p>
          <p className="lid-footer-company">{LOCATION}</p>
          <p className="lid-footer-line">Virtual front desk for locksmith shops.</p>
        </div>
        <div>
          <p className="lid-footer-label">Demo line</p>
          <a className="lid-footer-phone" href={`tel:${DEMO_PHONE_TEL}`}>
            {DEMO_PHONE_DISPLAY}
          </a>
          <p className="lid-footer-label">Email</p>
          <a className="lid-footer-phone" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>
        <nav aria-label="Policies">
          <ul className="lid-footer-links">
            <li>
              <Link href="/privacy">Privacy</Link>
            </li>
            <li>
              <Link href="/terms">Terms</Link>
            </li>
            <li>
              <Link href="/sms-terms">SMS Terms</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
