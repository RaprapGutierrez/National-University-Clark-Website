import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import Blocks from "@/components/Blocks";
import { sections } from "@/lib/site";
import { pageContent } from "@/lib/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return sections.flatMap((s) =>
    s.pages.map((p) => ({ section: s.slug, slug: p.slug })),
  );
}

export default async function InnerPage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  const sec = sections.find((s) => s.slug === section);
  const page = sec?.pages.find((p) => p.slug === slug);
  if (!sec || !page) notFound();

  const blocks = pageContent[`${section}/${slug}`];

  return (
    <>
      <PageBanner
        title={page.title}
        crumbs={[
          { label: "Home", href: "/" },
          { label: sec.title, href: `/${sec.slug}` },
          { label: page.title },
        ]}
      />
      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1fr_280px]">
        <article>
          <p className="mb-10 max-w-2xl text-lg text-slate">{page.summary}</p>

          {blocks ? (
            <Blocks blocks={blocks} />
          ) : (
            <div className="rounded-2xl border border-dashed border-line bg-white p-8 text-slate">
              Content for {page.title} is coming soon.
            </div>
          )}

          {page.cta && (
            <a
              href={page.cta.href}
              className="mt-10 inline-block rounded-full bg-navy px-6 py-3 font-bold text-white hover:bg-royal"
            >
              {page.cta.label}
            </a>
          )}
        </article>

        <aside>
          <h2 className="mb-3 font-bold">More in {sec.title}</h2>
          <div className="flex flex-col gap-1">
            {sec.pages.map((p) => (
              <Link
                key={p.slug}
                href={`/${sec.slug}/${p.slug}`}
                className={`rounded-lg px-3 py-2 text-sm hover:bg-white ${
                  p.slug === slug
                    ? "bg-white font-bold text-royal"
                    : "text-slate"
                }`}
              >
                {p.title}
              </Link>
            ))}
          </div>
        </aside>
      </main>
    </>
  );
}
