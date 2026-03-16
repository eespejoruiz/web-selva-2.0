import { WHO_ARE_YOU_OPTIONS } from "@/lib/data"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import { QuienEresDetail } from "@/components/sections/QuienEresDetail"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const option = WHO_ARE_YOU_OPTIONS.find((o) => o.slug === slug)
  if (!option) return {}

  return {
    title: `${option.title} | Web Selva Ecomarketing`,
    description: option.paragraph.substring(0, 160) + "...",
  }
}

export function generateStaticParams() {
  return WHO_ARE_YOU_OPTIONS.map((option) => ({
    slug: option.slug,
  }))
}

export default async function QuienEresDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const option = WHO_ARE_YOU_OPTIONS.find((o) => o.slug === slug)
  if (!option) notFound()

  return <QuienEresDetail option={option} />
}