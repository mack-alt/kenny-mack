import { LookB } from "@/components/look-b";
import { DEMO_POSTER_SRC } from "@/lib/content";

export default function Home() {
  return (
    <>
      <link rel="preload" as="image" href={DEMO_POSTER_SRC} fetchPriority="high" />
      <main>
        <LookB />
      </main>
      {/* Exact LeadConnector loader. It is synchronous on purpose so the tag matches the carrier snippet. */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6aadccf5599f010aece4c178"
        data-source="WEB_USER"
      />
    </>
  );
}
