import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import { sections } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.map((s) => ({ section: s.slug }));
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const data = sections.find((s) => s.slug === section);
  if (!data) notFound();

  return (
    <>
      <PageBanner
        title={data.title}
        crumbs={[{ label: "Home", href: "/" }, { label: data.title }]}
      />
      <main className="mx-auto max-w-6xl px-5 py-8">
        <p className="mb-8 max-w-2xl text-lg text-slate">{data.intro}</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.pages.map((p) => (
            <Link
              key={p.slug}
              href={`/${data.slug}/${p.slug}`}
              className="rounded-2xl border border-line bg-white p-6 shadow-sm hover:border-royal"
            >
              <b className="block text-lg">{p.title}</b>
              <span className="mt-1 block text-sm text-slate">{p.summary}</span>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
