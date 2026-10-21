"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { LanguageChips, NAV_CHIP_CLASS } from "@/components/card-ui";
import { LegalContact } from "@/components/legal-contact";
import { LegalHeading, LegalPage, legalLink } from "@/components/legal-page";
import { LEGAL_NAME, SMS_NUMBER_DISPLAY, SMS_PROGRAM } from "@/lib/legal";
import { legalChrome, legalDoc, type LegalBlock, type LegalId } from "@/lib/legal-copy";
import { salonCopy } from "@/lib/salon-copy";
import { useLang } from "@/lib/use-lang";

function fill(text: string) {
  return text
    .replaceAll("{{name}}", LEGAL_NAME)
    .replaceAll("{{program}}", SMS_PROGRAM)
    .replaceAll("{{smsNumber}}", SMS_NUMBER_DISPLAY);
}

function Rich({ text }: { text: string }) {
  const chunks = fill(text).split(/(\*\*[^*]+\*\*|\[\[[^\]]+\]\])/g);
  return chunks.map((chunk, index) => {
    if (!chunk) return null;
    if (chunk.startsWith("**") && chunk.endsWith("**")) {
      return <strong key={index}>{chunk.slice(2, -2)}</strong>;
    }
    const link = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(chunk);
    if (link) {
      return (
        <Link key={index} href={link[1]} className={legalLink}>
          {link[2]}
        </Link>
      );
    }
    return <span key={index}>{chunk}</span>;
  });
}

function BlockView({ block }: { block: LegalBlock }) {
  if (block.kind === "h") return <LegalHeading id={block.id}>{block.text}</LegalHeading>;
  if (block.kind === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-6">
        {block.items.map((item) => (
          <li key={item}>
            <Rich text={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.kind === "contact") return null;
  return (
    <p>
      <Rich text={block.text} />
    </p>
  );
}

export function LegalDocument({ id }: { id: LegalId }) {
  const { lang } = useLang();
  const chrome = legalChrome(lang);
  const doc = legalDoc(id, lang);
  const links = salonCopy[lang].links;
  const item =
    "inline-flex min-h-12 items-center text-base font-semibold text-forest underline decoration-straw decoration-2 underline-offset-4";
  const footerLinks: { href: string; label: string }[] = [
    { href: "/trust", label: links.trust },
    { href: "/privacy", label: links.privacy },
    { href: "/terms", label: links.terms },
    { href: "/sms-terms", label: links.sms },
    { href: "/service-agreement", label: links.agreement },
  ];

  const body: ReactNode[] = doc.blocks.map((block, index) => {
    if (block.kind === "contact") {
      return <LegalContact key={`contact-${index}`} emailLabel={chrome.email} phoneLabel={chrome.phone} />;
    }
    return <BlockView key={`${block.kind}-${index}`} block={block} />;
  });

  return (
    <LegalPage
      title={doc.title}
      kicker={chrome.kicker}
      effectiveLabel={chrome.effectiveLabel}
      effective={doc.effective}
      updatedLabel={chrome.updatedLabel}
      updated={doc.updated}
      backLabel={chrome.back}
      before={
        <div className="mx-auto mb-5 w-full max-w-2xl">
          <LanguageChips className={NAV_CHIP_CLASS} />
        </div>
      }
      footer={
        <footer className="mx-auto mt-6 w-full max-w-2xl px-1" aria-label={chrome.footerAria}>
          <ul className="flex flex-wrap gap-x-5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link className={item} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      }
    >
      {body}
    </LegalPage>
  );
}
