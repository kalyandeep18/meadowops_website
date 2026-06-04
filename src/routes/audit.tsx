import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/audit")({
  head: () => ({
    meta: [
      { title: "Book an Audit — MeadowOps" },
      {
        name: "description",
        content:
          "Start with clarity. We find what's slowing you down and identify where AI can create the biggest impact first.",
      },
      { property: "og:title", content: "Book an Audit — MeadowOps" },
      {
        property: "og:description",
        content: "Find your biggest operational bottleneck and turn it into a system that saves time and cost.",
      },
      { property: "og:url", content: "/audit" },
    ],
    links: [{ rel: "canonical", href: "/audit" }],
  }),
  component: AuditPage,
});

function AuditPage() {
  return (
    <SiteLayout>
      <PageHero
        label="The Audit"
        title="Find the biggest bottleneck"
        highlight="before you build anything."
        description="The audit is where clarity begins. We map your operations, surface wasted effort, and show you exactly where AI creates the most impact first — in the right order."
      />
    </SiteLayout>
  );
}
