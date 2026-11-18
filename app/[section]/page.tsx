import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutOverview } from "@/components/about/AboutPages";
import PageBanner from "@/components/PageBanner";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import { sections, APPLY_URL } from "@/lib/site";

const CONTACT_URL = "/about"; // change to your contact page

type SectionProps = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  return sections.map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: SectionProps): Promise<Metadata> {
  const { section } = await params;
  const about = sections.find((entry) => entry.slug === "about");
  return section === "about"
    ? {
        title: "About NU Clark | National University",
        description: about?.intro,
      }
    : {};
}

export default async function SectionPage({ params }: SectionProps) {
  const { section } = await params;
  const data = sections.find((s) => s.slug === section);
  if (!data) notFound();
  if (section === "about") return <AboutOverview section={data} />;

  const isAcademics = data.slug === "academics";
  const crumbs = [{ label: "Home", href: "/" }, { label: data.title }];

  return (
    <>
      {isAcademics ? (
        <AcademicsBanner
          title="Academics"
          subtitle="Choose a school to see the programs it offers."
          label="National University Clark"
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

        {isAcademics && (
          <Reveal className="mt-12 sm:mt-16">
            <section className="grid items-center gap-8 rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-extrabold sm:text-3xl">
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
        )}
      </main>
    </>
  );
}
