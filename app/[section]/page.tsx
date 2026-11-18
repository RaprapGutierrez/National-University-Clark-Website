import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/PageBanner";
import ImageBanner from "@/components/ImageBanner";
import Reveal from "@/components/Reveal";
import { sections } from "@/lib/site";

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

  const isAcademics = data.slug === "academics";
  const crumbs = [{ label: "Home", href: "/" }, { label: data.title }];

  return (
    <>
      {isAcademics ? (
        <ImageBanner
          src="/banner-academics-main.png"
          alt="Academics at NU Clark"
          crumbs={crumbs}
        />
      ) : (
        <PageBanner title={data.title} crumbs={crumbs} />
      )}
      <main className="mx-auto max-w-6xl px-5 py-8">
        <Reveal>
          <p className="mb-8 max-w-2xl text-lg text-slate">{data.intro}</p>
        </Reveal>

        {isAcademics ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.pages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  href={`/${data.slug}/${p.slug}`}
                  className="group flex h-full flex-col rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none"
                >
                  <h3 className="text-xl font-extrabold text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">{p.summary}</p>
                  <span className="mt-auto inline-block self-start pt-5">
                    <span className="inline-block rounded-full bg-gold px-5 py-2 text-sm font-bold text-navy transition-transform duration-300 group-hover:translate-x-1">
                      Learn more →
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.pages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  href={`/${data.slug}/${p.slug}`}
                  className="block h-full rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-royal"
                >
                  <b className="block text-lg">{p.title}</b>
                  <span className="mt-1 block text-sm text-slate">
                    {p.summary}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
