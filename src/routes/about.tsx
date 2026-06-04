import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MeadowOps" },
      {
        name: "description",
        content:
          "MeadowOps is a focused, outcome-aware AI company helping SMBs and growth-stage startups implement systems that reduce waste and increase output.",
      },
      { property: "og:title", content: "About Us — MeadowOps" },
      {
        property: "og:description",
        content: "Not a generic agency. A focused company with defined products and a proprietary methodology.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        label="About Us"
        title="Not an agency."
        highlight="A focused, outcome-aware AI company."
        description="MeadowOps helps SMBs and growth-stage startups implement AI systems that replace manual operations, reduce costs, and scale output — without confusion, wasted budget, or failed tools."
      />
    </SiteLayout>
  );
}
