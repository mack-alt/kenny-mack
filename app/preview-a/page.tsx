import type { Metadata } from "next";
import { LookA } from "@/components/look-a";
import { HERO_BODY } from "@/lib/card-copy";

export const metadata: Metadata = {
  title: "Look A · Card — Kenny Mack",
  description: HERO_BODY,
};

export default function PreviewA() {
  return (
    <main>
      <LookA />
    </main>
  );
}
