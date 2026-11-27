import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutDetail, aboutPageTitle } from "@/components/about/AboutPages";
import AcademicsBanner from "@/components/AcademicsBanner";
import Blocks from "@/components/Blocks";
import Reveal from "@/components/Reveal";
import { sections, APPLY_URL } from "@/lib/site";
import { pageContent } from "@/lib/content";

const CONTACT_URL ="/about"; // change to your contact page

type InnerPageProps = { params: Promise<{ section: string; slug: string }> };

const dedicatedStudentLife = new Set([
  "organizations",
  "events",
  "services",
]);

export function generateStaticParams() {
  return sections.flatMap((s) =>
    s.pages
      .filter(
        (p) =>
          !(s.slug === "student-life" && dedicatedStudentLife.has(p.slug)),
      )
      .map((p) => ({ section: s.slug, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: InnerPageProps): Promise<Metadata> {
  const { section, slug } = await params;
  if (section !== "about") return {};

  const page = sections
    .find((entry) => entry.slug === section)
    ?.pages.find((entry) => entry.slug === slug);
  return page
    ? { title:`${aboutPageTitle(page)} | NU Clark`, description: page.summary }
    : {};
}

export default async function InnerPage({ params }: InnerPageProps) {
  const { section, slug } = await params;
  const sec = sections.find((s) => s.slug === section);
  const page = sec?.pages.find((p) => p.slug === slug);
  if (!sec || !page) notFound();
  if (section === "about") return <AboutDetail page={page} section={sec} />;

  const blocks = pageContent[`${section}/${slug}`];
  const crumbs = [
    { label:"Home", href:"/" },
    { label: sec.title, href:`/${sec.slug}` },
    { label: page.title },
  ];

  const isAcademics = section === "academics";
  const showApply = section !== "student-life";
  const backLabel = isAcademics ?"← All schools" :`← All ${sec.title}`;

  return (
    <>
      <AcademicsBanner
        title={page.title}
        subtitle={page.summary}
        label={sec.title}
        crumbs={crumbs}
      />

      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          {/* Intro card */}
          <Reveal>
            <div className="mb-10 rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <div className="border-l-4 border-gold pl-4">
                <span className="inline-block rounded-full bg-royal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal">
                  {sec.title}
                </span>
                <p className="mt-3 max-w-2xl text-lg text-slate">
                  {page.summary}
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                {showApply && (
                  <a
                    href={APPLY_URL}
                    className="rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                  >
                    Apply now
                  </a>
                )}
                <Link
                  href={`/${sec.slug}`}
                  className="rounded-full px-6 py-3 text-center font-bold text-navy ring-2 ring-navy/70 transition hover:bg-navy hover:text-white"
                >
                  {backLabel}
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Page content */}
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

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-3xl border border-line bg-white p-4 shadow-sm">
            <h2 className="mb-3 px-3 pt-1 text-sm font-extrabold uppercase tracking-[0.15em] text-navy">
              More in {sec.title}
            </h2>
            <div className="flex flex-col gap-1">
              {sec.pages.map((p) => {
                const active = p.slug === slug;
                return (
                  <Link
                    key={p.slug}
                    href={`/${sec.slug}/${p.slug}`}
                    aria-current={active ?"page" : undefined}
                    className={`rounded-xl border-l-4 px-3 py-2 text-sm transition ${
                      active
                        ?"border-gold bg-navy font-bold text-white"
                        :"border-transparent text-slate hover:border-royal hover:bg-royal/5"
                    }`}
                  >
                    {p.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </main>

      {/* Enrollment block */}
      <div className="mx-auto max-w-6xl px-5 pb-12">
        <Reveal>
          <section className="grid items-center gap-8 rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-extrabold">
                Ready to become a Nationalian?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-white/80 md:mx-0">
                Start your online application today, or scan the QR code with
                your phone.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={APPLY_URL}
                  className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply now
                </a>
                <Link
                  href={CONTACT_URL}
                  className="inline-block rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="mx-auto text-center">
              <div className="rounded-2xl bg-white p-3 shadow-lg">
                <Image
                  src="/qr-nu-clark.webp"
                  alt="QR code for NU Clark"
                  width={160}
                  height={160}
                  className="h-36 w-36 sm:h-40 sm:w-40"
                />
              </div>
              <p className="mt-2 text-sm text-white/80">Scan to apply</p>
            </div>
          </section>
        </Reveal>
      </div>
    </>
  );
}
