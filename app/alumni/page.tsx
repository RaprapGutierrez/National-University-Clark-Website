import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import { alumni, alumniInfo } from "@/lib/alumni";
import { programsBySchool } from "@/lib/programs";
import { sections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alumni | NU Clark",
  description:
    "Meet NU Clark graduates and see where an NU Clark education can lead.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Alumni" }];
const CONTACT_URL = "/about";

const shortName: Record<string, string> = {
  "senior-high-school": "SHS",
  sabm: "SABM",
  seas: "SEAS",
  satc: "SATC",
  engineering: "ENG",
  hospitality: "Health",
};

export default function AlumniPage() {
  const academics = sections.find((s) => s.slug === "academics");
  const schools = (academics?.pages ?? []).filter(
    (p) => p.slug !== "office-of-the-academic-director",
  );

  const groups = schools.map((school) => {
    const rows = (programsBySchool[school.slug] ?? []).map((program) => ({
      program,
      people: alumni.filter((a) => a.program === program.slug),
    }));
    const people = rows.flatMap((r) =>
      r.people.map((person) => ({ person, program: r.program })),
    );
    return { school, rows, people };
  });

  const withAlumni = groups.filter((g) => g.people.length > 0);
  const total = alumni.length;

  return (
    <>
      <AcademicsBanner
        title="Alumni"
        subtitle="Once a Nationalian, always a Nationalian."
        label="Nationalians"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                {alumniInfo.kicker}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                {alumniInfo.heading}
              </h2>
              <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-slate">
                {alumniInfo.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <Link
                href={CONTACT_URL}
                className="mt-8 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-royal underline-offset-4 hover:underline"
              >
                Want to be featured? Contact us
              </Link>
            </div>

            <ol className="divide-y divide-line self-start border-y border-line">
              {alumniInfo.points.map((p, i) => (
                <li
                  key={p.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 py-4"
                >
                  <span className="font-extrabold tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-extrabold text-navy">{p.title}</p>
                    <p className="mt-1 text-sm text-slate">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                  Directory · {total}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  By school
                </h2>
              </div>
              {withAlumni.length > 0 && (
                <nav aria-label="Jump to school" className="flex flex-wrap gap-x-4 gap-y-1">
                  {withAlumni.map(({ school }) => (
                    <a
                      key={school.slug}
                      href={`#${school.slug}`}
                      className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy underline-offset-4 hover:underline"
                    >
                      {shortName[school.slug] ?? school.title}
                    </a>
                  ))}
                </nav>
              )}
            </div>

            {total === 0 ? (
              <div className="border border-line bg-white p-6 sm:p-8">
                <p className="text-xl font-extrabold text-navy sm:text-2xl">
                  Graduates are being added
                </p>
                <p className="mt-3 max-w-md text-slate">
                  Nationalians who agree to be listed will appear here with
                  photos, batch, and where they are now.
                </p>
                <Link
                  href={CONTACT_URL}
                  className="mt-6 inline-block text-[11px] font-bold uppercase tracking-[0.16em] text-royal underline-offset-4 hover:underline"
                >
                  Nominate an alumnus
                </Link>

                <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.18em] text-royal">
                  Programs on deck
                </p>
                <ul className="mt-3 columns-1 gap-x-8 text-sm text-navy sm:columns-2">
                  {groups.flatMap((g) =>
                    g.rows.map(({ program }) => (
                      <li
                        key={program.slug}
                        className="mb-1.5 break-inside-avoid"
                      >
                        <span className="font-semibold text-royal">
                          {shortName[g.school.slug]}
                        </span>
                        {" · "}
                        {program.title}
                      </li>
                    )),
                  )}
                </ul>
              </div>
            ) : (
              <div className="space-y-12">
                {withAlumni.map(({ school, people, rows }) => {
                  const emptyPrograms = rows.filter(
                    (r) => r.people.length === 0,
                  );
                  return (
                    <section
                      key={school.slug}
                      id={school.slug}
                      className="scroll-mt-[var(--site-header-offset)]"
                    >
                      <h3 className="mb-4 flex items-baseline justify-between gap-4 border-b border-gold pb-3">
                        <span className="text-xl font-extrabold text-navy sm:text-2xl">
                          {school.title}
                        </span>
                        <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.14em] text-royal">
                          {people.length}{" "}
                          {people.length === 1 ? "profile" : "profiles"}
                        </span>
                      </h3>

                      <ul className="divide-y divide-line border-y border-line bg-white">
                        {people.map(({ person, program }) => {
                          const initials = person.name
                            .split(" ")
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")
                            .toUpperCase();
                          const meta = [
                            person.batch ? `Batch ${person.batch}` : null,
                            person.status,
                          ]
                            .filter(Boolean)
                            .join(" · ");
                          const workplace = [
                            person.jobClassification,
                            person.company,
                          ]
                            .filter(Boolean)
                            .join(" · ");

                          return (
                            <li
                              key={person.slug}
                              id={person.slug}
                              className="flex gap-4 px-4 py-4 sm:px-5"
                            >
                              {person.photo ? (
                                <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-navy sm:h-16 sm:w-16">
                                  <Image
                                    src={person.photo}
                                    alt={person.name}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                  />
                                </div>
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy text-sm font-extrabold text-gold sm:h-16 sm:w-16"
                                >
                                  {initials}
                                </span>
                              )}
                              <div className="min-w-0">
                                <p className="font-extrabold text-navy">
                                  {person.name}
                                </p>
                                <p className="mt-0.5 text-sm text-royal">
                                  {program.title}
                                  {meta ? ` · ${meta}` : ""}
                                </p>
                                {workplace && (
                                  <p className="mt-1 text-sm text-slate">
                                    {workplace}
                                  </p>
                                )}
                                {person.linkedin && (
                                  <a
                                    href={person.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-navy underline-offset-4 hover:underline"
                                  >
                                    LinkedIn
                                    <Icon name="external" className="size-3.5" />
                                  </a>
                                )}
                              </div>
                            </li>
                          );
                        })}
                      </ul>

                      {emptyPrograms.length > 0 && (
                        <p className="mt-4 text-sm text-slate">
                          Still open:{" "}
                          {emptyPrograms
                            .map((r) => r.program.title)
                            .join(" · ")}
                        </p>
                      )}
                    </section>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
