import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Privacy Policy · Blades of Grass",
  description:
    "How Kenneth Mack (Blades of Grass) collects, uses, and shares the information people give us, including mobile numbers and text message opt-in data.",
};

export default function PrivacyPage() {
  return <LegalDocument id="privacy" />;
}
