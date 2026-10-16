"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DEMO_PHONE_DISPLAY, DEMO_PHONE_TEL, NAV } from "@/lib/lid";
import { Shield, Wordmark } from "@/components/lid/logo";

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path;
}

export function Header() {
  const pathname = normalize(usePathname() || "/");

  return (
    <header className="lid-header">
      <div className="lid-wrap lid-header-bar">
        <Link href="/locked-in-dispatch" className="lid-brand" aria-label="Locked In Dispatch, home">
          <Shield className="lid-brand-mark" />
          <Wordmark />
        </Link>
        <nav className="lid-nav" aria-label="Locked In Dispatch">
          <ul>
            {NAV.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={active ? "page" : undefined}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a className="lid-call" href={`tel:${DEMO_PHONE_TEL}`}>
          <span className="lid-call-kicker">Call the demo</span>
          <span className="lid-call-num">{DEMO_PHONE_DISPLAY}</span>
        </a>
      </div>
    </header>
  );
}
