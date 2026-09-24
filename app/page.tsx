import type { Metadata } from "next";
import { Chooser } from "@/components/chooser";

export const metadata: Metadata = {
  title: "Pick a look · Kenny Mack",
  description:
    "Two short looks for the Blades of Grass founder card. The words are the same on both.",
};

export default function Home() {
  return <Chooser />;
}
