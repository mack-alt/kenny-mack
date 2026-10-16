import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/lid/footer";
import { Header } from "@/components/lid/header";
import "./lid.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-lid-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lid-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Locked In Dispatch",
    template: "%s · Locked In Dispatch",
  },
  description:
    "Locked In Dispatch is a virtual front desk for locksmith shops from Blades of Grass Marketing. We answer calls, take the job details, and alert your shop.",
  applicationName: "Locked In Dispatch",
  openGraph: {
    title: "Locked In Dispatch",
    description:
      "A virtual front desk for locksmith shops. Locked In Launch, Locked In Trust, and Locked In Standards and Proof.",
    siteName: "Locked In Dispatch",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export default function LockedInDispatchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`lid ${display.variable} ${body.variable}`}>
      <a className="lid-skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
}
