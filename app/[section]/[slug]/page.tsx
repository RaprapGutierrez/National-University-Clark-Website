import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutDetail, aboutPageTitle } from "@/components/about/AboutPages";
import PageBanner from "@/components/PageBanner";
import ImageBanner from "@/components/ImageBanner";
import Blocks from "@/components/Blocks";
import { sections } from "@/lib/site";
import { pageContent } from "@/lib/content";

type InnerPageProps = { params: Promise<{ section: string; slug: string }> };

export function generateStaticParams() {
  return sections.flatMap((s) =>
    s.pages.map((p) => ({ section: s.slug, slug: p.slug })),
  );
}

export async function generateMetadata({ params }: InnerPageProps): Promise<Metadata> {
  const { section, slug } = await params;
  if (section !== "about") return {};

  const page = sections.find((entry) => entry.slug === section)?.pages.find((entry) => entry.slug === slug);
  return page ? { title: `${aboutPageTitle(page)} | NU Clark`, description: page.summary } : {};
}

export default async function InnerPage({ params }: InnerPageProps) {
  const { section, slug } = await params;
  const sec = sections.find((s) => s.slug === section);
  const page = sec?.pages.find((p) => p.slug === slug);
  if (!sec || !page) notFound();
  if (section === "about") return <AboutDetail page={page} section={sec} />;

  const blocks = pageContent[`${section}/${slug}`];
  const crumbs = [
    { label: "Home", href: "/" },
    { label: sec.title, href: `/${sec.slug}` },
    { label: page.title },
  ];

  return (
    <>
      {section === "academics" ? (
        <ImageBanner
          src={`/banner-${slug}.png`}
          alt={page.title}
          crumbs={crumbs}
        />
      ) : (
        <PageBanner title={page.title} crumbs={crumbs} />
      )}
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
                aria-current={p.slug === slug ? "page" : undefined}
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
