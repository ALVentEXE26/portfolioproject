import { notFound } from "next/navigation";
import { getLogBySlug, getLogSlugs } from "@/lib/logs";
import type { Metadata } from "next";

interface LogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getLogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(".md", ""),
  }));
}

export async function generateMetadata({
  params,
}: LogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const log = getLogBySlug(slug);
  if (!log) return { title: "Log Not Found" };
  return {
    title: `${log.metadata.title} | ALVentEXE Logs`,
    description: log.metadata.summary,
  };
}

export default async function LogPage({ params }: LogPageProps) {
  const { slug } = await params;
  const log = getLogBySlug(slug);
  if (!log) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <p className="mb-4 text-sm text-[#3B82F6]">{log.metadata.date}</p>
      <h1 className="mb-8 text-3xl font-bold text-[#E5E7EB]">
        {log.metadata.title}
      </h1>
      <div className="prose prose-invert max-w-none">
        {log.content.split("\n").map((line, i) => (
          <p key={i} className="mb-4 text-[#9CA3AF]">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}