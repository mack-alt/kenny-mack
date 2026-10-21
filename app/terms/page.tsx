import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Terms · Blades of Grass",
  description:
    "Terms for this card and for Blades of Grass Front Desk Texts, including how to opt in, opt out, and get help.",
};

export default function TermsPage() {
  return <LegalDocument id="terms" />;
}
