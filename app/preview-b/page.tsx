import type { Metadata } from "next";
import { LookB } from "@/components/look-b";
import { HERO_BODY } from "@/lib/card-copy";

export const metadata: Metadata = {
  title: "Look B · Poster — Kenny Mack",
  description: HERO_BODY,
};

export default function PreviewB() {
  return (
    <main>
      <LookB />
    </main>
  );
}
