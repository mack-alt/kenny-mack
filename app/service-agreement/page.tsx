import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";

export const metadata: Metadata = {
  title: "Service Agreement · Blades of Grass",
  description:
    "Front Desk for salons from Blades of Grass Marketing: $297/month plus tax, month-to-month, with a full refund in the first month.",
};

export default function ServiceAgreementPage() {
  return <LegalDocument id="agreement" />;
}
