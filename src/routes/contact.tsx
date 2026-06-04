import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MeadowOps" },
      {
        name: "description",
        content:
          "Tell us about your operations and we'll find the biggest bottleneck to turn into an AI system that saves time and cost.",
      },
      { property: "og:title", content: "Contact Us — MeadowOps" },
      {
        property: "og:description",
        content: "Start the conversation. Start with clarity, build with purpose, scale with AI.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        label="Contact Us"
        title="Let's find your biggest"
        highlight="bottleneck together."
        description="Reach out at hello@meadowops.com or book an audit. We'll show you where AI can create the biggest impact inside your business — first."
      />
    </SiteLayout>
  );
}
