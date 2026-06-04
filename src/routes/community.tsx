import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — MeadowOps" },
      {
        name: "description",
        content:
          "Join a community of founders and operators building leaner businesses with AI systems that actually do the work.",
      },
      { property: "og:title", content: "Community — MeadowOps" },
      {
        property: "og:description",
        content: "Learn alongside operators turning manual chaos into smart systems.",
      },
      { property: "og:url", content: "/community" },
    ],
    links: [{ rel: "canonical", href: "/community" }],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  return (
    <SiteLayout>
      <PageHero
        label="Community"
        title="Build alongside operators"
        highlight="who think in systems."
        description="A space for founders and teams who are done with AI noise and ready to implement systems that reduce waste and increase output."
      />
    </SiteLayout>
  );
}
