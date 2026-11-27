import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import AlumniCard from "@/components/alumni/AlumniCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { alumni, alumniInfo } from "@/lib/alumni";
import { programsBySchool } from "@/lib/programs";
import { sections } from "@/lib/site";

export const metadata: Metadata = {
  title:"Alumni | NU Clark",
  description:
"Meet NU Clark graduates and see where an NU Clark education can lead.",
};

const crumbs = [{ label:"Home", href:"/" }, { label:"Alumni" }];

const CONTACT_URL ="/about"; // change to your contact page

// Short names for the jump buttons
const shortName: Record<string, string> = {
"senior-high-school":"Senior High",
  sabm:"SABM",
  seas:"SEAS",
  satc:"SATC",
  engineering:"Engineering",
  hospitality:"Dentistry and Allied Health",
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
    const total = rows.reduce((n, r) => n + r.people.length, 0);
    return { school, rows, total };
  });

  return (
    <>
      <AcademicsBanner
        title="Alumni"
        subtitle="Nationalians who carry the NU Clark name into their careers and communities."
        label="NU Clark"
        crumbs={crumbs}
      />

      <main className="pb-16">
        {/* About the alumni */}
        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <Reveal>
              <div className="border-l-4 border-gold pl-5">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                  {alumniInfo.kicker}
                </p>
                <h2 className="mt-1 text-3xl font-extrabold text-navy">
                  {alumniInfo.heading}
                </h2>
                <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                <div className="mt-4 space-y-4 text-lg text-slate">
                  {alumniInfo.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                <Link
                  href={CONTACT_URL}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-royal"
                >
                  Want to be featured? Get in touch
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>

            <ol className="space-y-4">
              {alumniInfo.points.map((p, i) => (
                <Reveal key={p.title} delay={i * 80}>
                  <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-sm font-extrabold text-navy shadow-md">
                      {String(i + 1).padStart(2,"0")}
                    </span>
                    <div>
                      <b className="block text-navy">{p.title}</b>
                      <span className="text-sm text-slate">{p.text}</span>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Alumni by school and program */}
        <section className="border-t border-line bg-gradient-to-b from-navy/[0.05] to-transparent">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
            <SectionTitle
              kicker="Directory"
              title="Alumni by program"
              text="Graduates from every school and program at NU Clark."
            />

            <nav
              aria-label="Jump to a school"
              className="mb-8 flex flex-wrap gap-2"
            >
              {groups.map(({ school }) => (
                <a
                  key={school.slug}
                  href={`#${school.slug}`}
                  className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
                >
                  {shortName[school.slug] ?? school.title}
                </a>
              ))}
            </nav>

            <div className="space-y-8">
              {groups.map(({ school, rows, total }) => {
                const withPeople = rows.filter((r) => r.people.length > 0);
                const without = rows.filter((r) => r.people.length === 0);
                return (
                  <Reveal key={school.slug}>
                    <section
                      id={school.slug}
                      className="scroll-mt-[var(--site-header-offset)] rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8"
                    >
                      <div className="flex flex-wrap items-end justify-between gap-3 border-l-4 border-gold pl-4">
                        <h3 className="text-xl font-extrabold text-navy">
                          {school.title}
                        </h3>
                        <p className="text-sm font-bold text-royal">
                          {total} {total === 1 ?"profile" :"profiles"}
                        </p>
                      </div>

                      {withPeople.map(({ program, people }) => (
                        <div key={program.slug} className="mt-8">
                          <h4 className="text-lg font-extrabold text-navy">
                            {program.title}
                            {program.text && (
                              <span className="ml-2 text-sm font-medium text-slate">
                                {program.text}
                              </span>
                            )}
                          </h4>
                          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {people.map((person) => (
                              <AlumniCard key={person.slug} person={person} />
                            ))}
                          </div>
                        </div>
                      ))}

                      {without.length > 0 && (
                        <div className="mt-6">
                          <p className="text-sm text-slate">
                            {withPeople.length === 0
                              ?"Alumni profiles for these programs will be added soon."
                              :"More programs, profiles coming soon."}
                          </p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {without.map(({ program }) => (
                              <li
                                key={program.slug}
                                className="rounded-full border border-dashed border-gold/80 bg-gold/10 px-3 py-1.5 text-sm font-semibold text-navy"
                              >
                                {program.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </section>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
