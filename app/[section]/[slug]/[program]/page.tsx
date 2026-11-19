import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcademicsBanner from "@/components/AcademicsBanner";
import Blocks from "@/components/Blocks";
import Reveal from "@/components/Reveal";
import { sections, APPLY_URL } from "@/lib/site";
import { programsBySchool } from "@/lib/programs";
import type { Block } from "@/lib/content";

const CONTACT_URL = "/about"; // change to your contact page

// Yellow outline that follows the shape of the cutout, like a sticker
const STICKER =
  "drop-shadow(4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(-4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 -4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 10px 14px rgba(0, 0, 0, 0.25))";

// Accreditation name (starts with) -> logo in /public
const ACCREDITATION_LOGOS: Record<string, string> = {
  PACUCOA: "/pacucoa.png",
  CHED: "/ched.png",
  FAAP: "/faap.png",
};

function logoFor(label: string) {
  const key = Object.keys(ACCREDITATION_LOGOS).find((k) =>
    label.toUpperCase().startsWith(k),
  );
  return key ? ACCREDITATION_LOGOS[key] : null;
}

export function generateStaticParams() {
  const academics = sections.find((s) => s.slug === "academics");
  if (!academics) return [];
  return academics.pages.flatMap((school) =>
    (programsBySchool[school.slug] ?? []).map((p) => ({
      section: academics.slug,
      slug: school.slug,
      program: p.slug,
    })),
  );
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ section: string; slug: string; program: string }>;
}) {
  const { section, slug, program } = await params;
  const sec = sections.find((s) => s.slug === section);
  const school = sec?.pages.find((p) => p.slug === slug);
  const programs = programsBySchool[slug] ?? [];
  const data = programs.find((p) => p.slug === program);
  if (section !== "academics" || !sec || !school || !data) notFound();

  const blocks: Block[] = [
    { type: "text", heading: `About the ${data.title}`, body: data.about },
    ...(data.careers && data.careers.length > 0
      ? [
          {
            type: "list" as const,
            heading: "Career opportunities",
            items: data.careers,
          },
        ]
      : []),
    {
      type: "mv",
      items: [
        { label: "Our Mission", text: data.mission },
        { label: "Our Vision", text: data.vision },
      ],
    },
    ...(data.objectives.length > 0
      ? [
          {
            type: "list" as const,
            heading: "Program educational objectives",
            items: data.objectives,
          },
        ]
      : []),
    { type: "list", heading: "Program outcomes", items: data.outcomes },
  ];

  const crumbs = [
    { label: "Home", href: "/" },
    { label: sec.title, href: `/${sec.slug}` },
    { label: school.title, href: `/${sec.slug}/${school.slug}` },
    { label: data.title },
  ];

  // Skip the placeholder text from lib/programs.ts
  const accreditations = data.accreditation.filter(
    (a) => !a.startsWith("Add "),
  );

  return (
    <>
      <AcademicsBanner
        title={data.title}
        subtitle={data.text ?? school.title}
        label={school.title}
        crumbs={crumbs}
      />

      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0">
          <Blocks blocks={blocks} />

          {/* Accreditation */}
          {accreditations.length > 0 && (
            <Reveal>
              <section className="mt-12">
                <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">
                  Accreditation
                </h2>
                <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                <p className="mt-3 max-w-2xl text-slate">
                  Our certifications reflect independent verification of the
                  University&rsquo;s systems and practices against recognized
                  standards.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {accreditations.map((entry) => {
                    const [label, ...details] = entry.split(" · ");
                    const logo = logoFor(label);
                    return (
                      <div
                        key={label}
                        className="flex items-center gap-5 rounded-3xl border border-line bg-white p-5 shadow-sm"
                      >
                        {logo && (
                          <Image
                            src={logo}
                            alt={`${label} logo`}
                            width={96}
                            height={96}
                            className="h-24 w-24 shrink-0 object-contain"
                          />
                        )}
                        <div className="border-l-4 border-gold pl-4">
                          <p className="text-xs font-bold uppercase tracking-wider text-royal">
                            Accredited by
                          </p>
                          <b className="mt-1 block text-lg text-navy">
                            {label}
                          </b>
                          {details.length > 0 && (
                            <span className="mt-1 block text-sm text-slate">
                              {details.join(" · ")}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </Reveal>
          )}
        </article>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          {data.image && (
            <div
              className="mx-auto mb-8 aspect-[4/3] w-3/4 lg:w-full"
              style={{ filter: STICKER }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  sizes="300px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          )}

          <div className="rounded-3xl border border-line bg-white p-4 shadow-sm">
            <h2 className="mb-3 px-3 pt-1 text-sm font-extrabold uppercase tracking-[0.15em] text-navy">
              More in {school.title}
            </h2>
            <div className="flex flex-col gap-1">
              {programs.map((p) => {
                const active = p.slug === program;
                return (
                  <Link
                    key={p.slug}
                    href={`/${sec.slug}/${school.slug}/${p.slug}`}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-xl border-l-4 px-3 py-2 text-sm transition ${
                      active
                        ? "border-gold bg-navy font-bold text-white"
                        : "border-transparent text-slate hover:border-royal hover:bg-royal/5"
                    }`}
                  >
                    {p.title}
                  </Link>
                );
              })}
            </div>
            <Link
              href={`/${sec.slug}/${school.slug}`}
              className="mt-3 inline-block px-3 text-sm font-semibold text-royal hover:underline"
            >
              ← Back to {school.title}
            </Link>
          </div>
        </aside>
      </main>

      {/* Apply block */}
      <div className="mx-auto max-w-6xl px-5 pb-12">
        <Reveal>
          <section className="grid items-center gap-8 rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Enrollment
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl">
                Ready to Apply in {data.title}?
              </h2>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={APPLY_URL}
                  className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply Now
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
