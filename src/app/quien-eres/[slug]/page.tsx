import { WHO_ARE_YOU_OPTIONS } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { QuienEresDetail } from "@/components/sections/QuienEresDetail";
import { JsonLd } from "@/components/JsonLd";
import { buildPageMetadata, buildBreadcrumbSchema } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const option = WHO_ARE_YOU_OPTIONS.find((o) => o.slug === slug);
  if (!option) return { robots: { index: false, follow: false } };

  return buildPageMetadata({
    path: `/quien-eres/${slug}`,
    title: option.title,
    description: option.paragraph.substring(0, 160).trim() + "...",
  });
}

export function generateStaticParams() {
  return WHO_ARE_YOU_OPTIONS.map((option) => ({
    slug: option.slug,
  }));
}

export default async function QuienEresDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const option = WHO_ARE_YOU_OPTIONS.find((o) => o.slug === slug);
  if (!option) notFound();

  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Inicio", path: "/" },
          { name: "¿Quién Eres?", path: "/quien-eres" },
          { name: option.label, path: `/quien-eres/${slug}` },
        ])}
      />
      <QuienEresDetail option={option} />
    </>
  );
}
