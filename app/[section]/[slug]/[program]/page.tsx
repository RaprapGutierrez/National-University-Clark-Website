import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AcademicsBanner from "@/components/AcademicsBanner";
import ProgramOutcomes from "@/components/ProgramOutcomes";
import Reveal from "@/components/Reveal";
import { sections, APPLY_URL } from "@/lib/site";
import { programsBySchool } from "@/lib/programs";

const CONTACT_URL = "/about"; // change to your contact page

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
    <div className="mb-4 sm:mb-6">
      {kicker && (
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-royal sm:text-sm sm:tracking-[0.2em]">
          {kicker}
        </p>
      )}
      <h2 className="mt-1 text-xl font-extrabold text-navy sm:text-3xl">
        {title}
      </h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-gold sm:mt-3 sm:h-1.5 sm:w-16" />
      {text && (
        <p className="mt-2 max-w-2xl text-sm text-slate sm:mt-3 sm:text-base">
          {text}
        </p>
      )}
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
  const about = data.about.filter((p) => !p.startsWith("Add "));
  const careers = data.careers ?? [];

  // Extra sections (Senior High School: track, strengths, related degrees, why study)
  const extras = data.extraSections ?? [];

  // Mission and vision only show for programs that have them
  const hasMissionVision = Boolean(data.mission && data.vision);

  // Sections that exist for this program (used by the sidebar jump links)
  const aboutAfterMission = Boolean(data.aboutAfterMission);
  const aboutHeadings = aboutAfterMission
    ? ["About BS Computer Science", "Specialization in Artificial Intelligence"]
    : [];

  const toc = [
    {
      id: "about",
      label: "About the program",
      show: about.length > 0 && !aboutAfterMission,
    },
    { id: "careers", label: "Career opportunities", show: careers.length > 0 },
    {
      id: "mission-vision",
      label: "Mission and vision",
      show: hasMissionVision,
    },
    {
      id: "about",
      label: "About the program",
      show: about.length > 0 && aboutAfterMission,
    },
    {
      id: "specialization",
      label: "Specialization",
      show: aboutAfterMission && about.length > 1,
    },
    ...extras.map((s, i) => ({
      id: `extra-${i}`,
      label: s.label ?? s.title,
      show: true,
    })),
    {
      id: "objectives",
      label: "Educational objectives",
      show: data.objectives.length > 0,
    },
    {
      id: "outcomes",
      label: "Program outcomes",
      show: data.outcomes.length > 0,
    },
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

      <main className="mx-auto grid max-w-6xl gap-6 px-4 py-5 sm:gap-10 sm:px-5 sm:py-8 lg:grid-cols-[1fr_280px] lg:items-start">
        {/* Mobile section nav — underline tabs, not pills */}
        <nav
          aria-label="On this page"
          className="-mx-4 border-b border-line bg-white lg:col-span-2 lg:hidden"
        >
          <div className="flex snap-x snap-mandatory gap-0 overflow-x-auto overscroll-x-contain px-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="shrink-0 snap-start border-b-2 border-transparent px-3 py-3 text-[12px] font-bold text-slate transition-colors active:text-navy hover:border-gold hover:text-navy"
              >
                {t.label}
              </a>
            ))}
          </div>
        </nav>

        <article className="min-w-0 space-y-9 sm:space-y-14 lg:space-y-16">
          {about.length > 0 && !aboutAfterMission && (
            <section
              id="about"
              className="scroll-mt-[var(--site-header-offset)]"
            >
              <Reveal>
                <SectionTitle
                  kicker="Overview"
                  title={`About the ${data.title}`}
                />
                <div className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8">
                  <div className="space-y-3 border-l-[3px] border-gold pl-3 text-[15px] leading-relaxed text-slate sm:space-y-4 sm:border-l-4 sm:pl-4 sm:text-lg">
                    {about.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </section>
          )}

          {careers.length > 0 && (
            <section
              id="careers"
              className="scroll-mt-[var(--site-header-offset)]"
            >
              <Reveal>
                <SectionTitle
                  kicker="After graduation"
                  title="Career opportunities"
                />
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {careers.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-gold bg-navy px-3 py-1.5 text-xs font-bold text-white sm:border-2 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Reveal>
            </section>
          )}

          {hasMissionVision && (
            <section
              id="mission-vision"
              className="scroll-mt-[var(--site-header-offset)]"
            >
              <Reveal>
                <SectionTitle
                  kicker="Our direction"
                  title="Mission and vision"
                />
              </Reveal>
              <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
                <Reveal className="h-full">
                  <div className="h-full rounded-2xl border-2 border-gold bg-navy p-4 text-white shadow-md sm:rounded-3xl sm:p-8 sm:shadow-lg">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.2em]">
                      Our Mission
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/90 sm:mt-3 sm:text-base">
                      {data.mission}
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={100} className="h-full">
                  <div className="h-full rounded-2xl border-2 border-navy bg-gold p-4 text-navy shadow-md sm:rounded-3xl sm:p-8 sm:shadow-lg">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.2em]">
                      Our Vision
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-navy/90 sm:mt-3 sm:text-base">
                      {data.vision}
                    </p>
                  </div>
                </Reveal>
              </div>
            </section>
          )}

          {aboutAfterMission &&
            about.map((para, i) => (
              <section
                key={i}
                id={i === 0 ? "about" : "specialization"}
                className="scroll-mt-[var(--site-header-offset)]"
              >
                <Reveal>
                  <SectionTitle
                    kicker={i === 0 ? "Overview" : "Focus"}
                    title={aboutHeadings[i] ?? `About the ${data.title}`}
                  />
                  <div className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8">
                    <p className="border-l-[3px] border-gold pl-3 text-[15px] leading-relaxed text-slate sm:border-l-4 sm:pl-4 sm:text-lg">
                      {para}
                    </p>
                  </div>
                </Reveal>
              </section>
            ))}

          {/* Extra sections (Senior High School) */}
          {extras.map((s, i) => (
            <section
              key={s.title}
              id={`extra-${i}`}
              className="scroll-mt-[var(--site-header-offset)]"
            >
              <Reveal>
                <SectionTitle kicker={s.kicker} title={s.title} />

                {(s.paragraphs || s.items) && (
                  <div className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:rounded-3xl sm:p-8">
                    {s.paragraphs && (
                      <div className="space-y-3 border-l-[3px] border-gold pl-3 text-[15px] leading-relaxed text-slate sm:space-y-4 sm:border-l-4 sm:pl-4 sm:text-lg">
                        {s.paragraphs.map((para, k) => (
                          <p key={k}>{para}</p>
                        ))}
                      </div>
                    )}
                    {s.items && (
                      <ul
                        className={`space-y-2 text-[15px] text-slate sm:text-base ${
                          s.paragraphs ? "mt-4 sm:mt-5" : ""
                        }`}
                      >
                        {s.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {s.groups && (
                  <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                    {s.groups.map((g) => (
                      <div
                        key={g.label}
                        className="rounded-2xl border border-line bg-white p-4 shadow-sm sm:rounded-3xl sm:p-5"
                      >
                        <h3 className="text-base font-extrabold text-navy sm:text-lg">
                          {g.label}
                        </h3>
                        <ul className="mt-3 space-y-1.5 text-sm text-slate">
                          {g.items.map((item) => (
                            <li key={item} className="flex gap-2.5">
                              <span
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            </section>
          ))}

          {data.objectives.length > 0 && (
            <section
              id="objectives"
              className="scroll-mt-[var(--site-header-offset)]"
            >
              <Reveal>
                <SectionTitle
                  kicker="What we aim for"
                  title="Program educational objectives"
                  text="What graduates are expected to achieve in their careers and communities a few years after graduating."
                />
              </Reveal>
              <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                {data.objectives.map((o, i) => (
                  <Reveal key={i} delay={(i % 2) * 100} className="h-full">
                    <div className="flex h-full gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-md motion-reduce:transform-none sm:gap-4 sm:rounded-3xl sm:p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-extrabold text-gold sm:h-11 sm:w-11 sm:text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-snug text-slate sm:text-base sm:leading-relaxed">
                        {o}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          {data.outcomes.length > 0 && (
            <ProgramOutcomes outcomes={data.outcomes} />
          )}

          {accreditations.length > 0 && (
            <section
              id="accreditation"
              className="scroll-mt-[var(--site-header-offset)]"
            >
              <Reveal>
                <SectionTitle
                  kicker="Recognition"
                  title="Accreditation"
                  text="Our certifications reflect independent verification of the University’s systems and practices against recognized standards."
                />
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
                  {accreditations.map((entry) => {
                    const [label, ...details] = entry.split(" · ");
                    const logo = logoFor(label);
                    return (
                      <div
                        key={entry}
                        className="flex items-center gap-3 rounded-2xl border border-line bg-white p-3.5 shadow-sm sm:gap-5 sm:rounded-3xl sm:p-5"
                      >
                        {logo && (
                          <Image
                            src={logo}
                            alt={`${label} logo`}
                            width={96}
                            height={96}
                            className="h-14 w-14 shrink-0 object-contain sm:h-24 sm:w-24"
                          />
                        )}
                        <div className="border-l-[3px] border-gold pl-3 sm:border-l-4 sm:pl-4">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-royal sm:text-xs">
                            Accredited by
                          </p>
                          <b className="mt-0.5 block text-base text-navy sm:mt-1 sm:text-lg">
                            {label}
                          </b>
                          {details.length > 0 && (
                            <span className="mt-1 block text-xs text-slate sm:text-sm">
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

        <aside className="space-y-3 sm:space-y-4 lg:sticky lg:top-[var(--site-header-offset)] lg:self-start">
          {data.image && (
            <div className="relative mx-auto hidden aspect-[4/3] w-3/4 lg:mb-2 lg:block lg:w-full">
              <div
                className="absolute inset-x-[10%] bottom-0 top-[20%] rounded-[28%] bg-gold/90 blur-[1px]"
                aria-hidden="true"
              />
              <div className="relative h-full w-full drop-shadow-[0_10px_14px_rgba(0,0,0,0.25)]">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  sizes="280px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          )}

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

          <div className="rounded-2xl border border-line bg-white p-3 shadow-sm sm:rounded-3xl sm:p-4">
            <h2 className="mb-2 px-2 pt-1 text-[11px] font-extrabold uppercase tracking-[0.14em] text-navy sm:mb-3 sm:px-3 sm:text-sm sm:tracking-[0.15em]">
              More in {school.title}
            </h2>
            <div className="flex flex-col gap-0.5">
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
              className="mt-2 inline-block px-3 py-1 text-sm font-semibold text-royal hover:underline"
            >
              ← Back to school
            </Link>
          </div>
        </aside>
      </main>

      <div className="mx-auto max-w-6xl px-4 pb-8 sm:px-5 sm:pb-12">
        <Reveal>
          <section className="grid items-center gap-5 rounded-2xl bg-navy p-5 text-white sm:gap-8 sm:rounded-3xl sm:p-10 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-left">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.2em]">
                Enrollment
              </p>
              <h2 className="mt-1.5 text-xl font-extrabold sm:mt-2 sm:text-4xl">
                Ready to Apply in {data.title}?
              </h2>
              <div className="mt-4 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:justify-center md:justify-start">
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

            <div className="mx-auto hidden text-center sm:block">
              <div className="rounded-2xl bg-white p-3 shadow-lg">
                <Image
                  src="/qr-nu-clark.webp"
                  alt="QR code for NU Clark"
                  width={160}
                  height={160}
                  sizes="160px"
                  loading="lazy"
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
