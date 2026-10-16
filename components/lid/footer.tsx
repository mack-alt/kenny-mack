import Link from "next/link";
import { BRAND, COMPANY, DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL } from "@/lib/lid";

export function Footer() {
  return (
    <footer className="lid-footer">
      <div className="lid-wrap lid-footer-grid">
        <div>
          <p className="lid-footer-brand">{BRAND}</p>
          <p className="lid-footer-company">A service of {COMPANY}.</p>
          <p className="lid-footer-line">Virtual front desk for locksmith shops.</p>
        </div>
        <div>
          <p className="lid-footer-label">Demo line</p>
          <a className="lid-footer-phone" href={`tel:${DEMO_PHONE_TEL}`}>
            {DEMO_PHONE_DISPLAY}
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
