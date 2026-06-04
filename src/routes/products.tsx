import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services — MeadowOps" },
      {
        name: "description",
        content:
          "Three defined products and a proprietary methodology to audit, build, and activate AI systems for your business.",
      },
      { property: "og:title", content: "Products & Services — MeadowOps" },
      {
        property: "og:description",
        content: "AI systems designed and implemented for your workflow, team, and goals.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <PageHero
        label="Products & Services"
        title="The systems we build"
        highlight="to 10x your operations."
        description="Three defined products and a proprietary methodology that guide every AI system we design, implement, and activate inside your business."
      />
    </SiteLayout>
  );
}
