import { LookB } from "@/components/look-b";

export default function Home() {
  return (
    <>
      <main>
        <LookB />
      </main>
      {/* Exact LeadConnector loader. It is synchronous on purpose so the tag matches the carrier snippet. */}
      {/* eslint-disable-next-line @next/next/no-sync-scripts */}
      <script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="6ac408bea323fc9a2e9618fd"
        data-source="WEB_USER"
      />
    </>
  );
}
