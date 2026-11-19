import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import { sections, APPLY_URL } from "@/lib/site";
import { programsBySchool } from "@/lib/programs";

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

function SectionTitle({
  kicker,
  title,
  text,
}: {
  kicker?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-6">
      {kicker && (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
          {kicker}
        </p>
      )}
      <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
      {text && <p className="mt-3 max-w-2xl text-slate">{text}</p>}
    </div>
  );
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
  const careers = data.careers ?? [];

  // Sections that exist for this program (used by the sidebar jump links)
  const toc = [
    { id: "about", label: "About the program", show: true },
    { id: "careers", label: "Career opportunities", show: careers.length > 0 },
    { id: "mission-vision", label: "Mission and vision", show: true },
    {
      id: "objectives",
      label: "Educational objectives",
      show: data.objectives.length > 0,
    },
    { id: "outcomes", label: "Program outcomes", show: true },
    {
      id: "accreditation",
      label: "Accreditation",
      show: accreditations.length > 0,
    },
  ].filter((t) => t.show);

  return (
    <>
      <AcademicsBanner
        title={data.title}
        subtitle={data.text ?? school.title}
        label={school.title}
        crumbs={crumbs}
      />

      <main className="mx-auto grid max-w-6xl gap-10 px-5 py-8 lg:grid-cols-[1fr_300px]">
        <article className="min-w-0 space-y-14 sm:space-y-16">
          {/* About */}
          <section id="about" className="scroll-mt-24">
            <Reveal>
              <SectionTitle
                kicker="Overview"
                title={`About the ${data.title}`}
              />
              <div className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
                <div className="space-y-4 border-l-4 border-gold pl-4 text-lg text-slate">
                  {data.about.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          {/* Careers */}
          {careers.length > 0 && (
            <section id="careers" className="scroll-mt-24">
              <Reveal>
                <SectionTitle
                  kicker="After graduation"
                  title="Career opportunities"
                />
                <div className="flex flex-wrap gap-3">
                  {careers.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border-2 border-gold bg-navy px-4 py-2 text-sm font-bold text-white shadow-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </section>
          )}

          {/* Mission and vision */}
          <section id="mission-vision" className="scroll-mt-24">
            <Reveal>
              <SectionTitle kicker="Our direction" title="Mission and vision" />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-2">
              <Reveal className="h-full">
                <div className="h-full rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                    Our Mission
                  </p>
                  <p className="mt-3 text-white/90">{data.mission}</p>
                </div>
              </Reveal>
              <Reveal delay={100} className="h-full">
                <div className="h-full rounded-3xl border-2 border-navy bg-gold p-6 text-navy shadow-lg sm:p-8">
                  <p className="text-sm font-bold uppercase tracking-[0.2em]">
                    Our Vision
                  </p>
                  <p className="mt-3 font-medium text-navy/90">{data.vision}</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Objectives */}
          {data.objectives.length > 0 && (
            <section id="objectives" className="scroll-mt-24">
              <Reveal>
                <SectionTitle
                  kicker="What we aim for"
                  title="Program educational objectives"
                  text="What graduates are expected to achieve in their careers and communities a few years after graduating."
                />
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.objectives.map((o, i) => (
                  <Reveal key={i} delay={(i % 2) * 100} className="h-full">
                    <div className="flex h-full gap-4 rounded-3xl border border-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-md motion-reduce:transform-none">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-slate">{o}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {/* Outcomes */}
          <section id="outcomes" className="scroll-mt-24">
            <Reveal>
              <SectionTitle
                kicker="What you will be able to do"
                title="Program outcomes"
                text="The skills and abilities students gain by the time they finish the program."
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {data.outcomes.map((o, i) => (
                <Reveal key={i} delay={(i % 2) * 100} className="h-full">
                  <div className="flex h-full gap-4 rounded-3xl border-l-4 border-gold bg-white p-5 shadow-sm ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <p className="text-slate">{o}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Accreditation */}
          {accreditations.length > 0 && (
            <section id="accreditation" className="scroll-mt-24">
              <Reveal>
                <SectionTitle
                  kicker="Recognition"
                  title="Accreditation"
                  text="Our certifications reflect independent verification of the University’s systems and practices against recognized standards."
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  {accreditations.map((entry) => {
                    const [label, ...details] = entry.split(" · ");
                    const logo = logoFor(label);
                    return (
                      <div
                        key={entry}
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
              </Reveal>
            </section>
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

          {/* On this page */}
          <nav
            aria-label="On this page"
            className="hidden rounded-3xl border border-line bg-white p-4 shadow-sm lg:block"
          >
            <h2 className="mb-3 px-3 pt-1 text-sm font-extrabold uppercase tracking-[0.15em] text-navy">
              On this page
            </h2>
            <div className="flex flex-col gap-1">
              {toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="rounded-xl border-l-4 border-transparent px-3 py-2 text-sm text-slate transition hover:border-gold hover:bg-royal/5"
                >
                  {t.label}
                </a>
              ))}
            </div>
          </nav>

          {/* More programs */}
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
