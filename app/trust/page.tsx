import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Trust · Blades of Grass",
  description: "How Blades of Grass Marketing sets expectations for listings, communication, languages, and paid services.",
};

export default function TrustPage() {
  return <LegalDocument id="trust" />;
}
