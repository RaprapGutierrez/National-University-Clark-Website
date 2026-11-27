import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import { Icon } from "@/components/Icon";
import FeaturedLead from "@/components/news/FeaturedLead";
import PhotoBoard from "@/components/news/PhotoBoard";
import {
  RESEARCH_EMAIL,
  RESEARCH_OFFICE_FACEBOOK_URL,
  researchers,
  researchUpdates,
} from "@/lib/research";
import { sections } from "@/lib/site";
import { toTeaser } from "@/lib/story";

export const metadata: Metadata = {
  title: "Research | NU Clark",
  description:
    "Meet the researchers of National University Clark and follow the latest research news and updates from the NU Clark Research Office.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Research" }];

export default function ResearchPage() {
  const academics = sections.find((s) => s.slug === "academics");
  const schools = (academics?.pages ?? []).filter(
    (p) => p.slug !== "office-of-the-academic-director",
  );

  const known = new Set(schools.map((s) => s.slug));
  const groups = [
    ...schools.map((school) => ({
      key: school.slug,
      title: school.title,
      short:
        school.slug === "senior-high-school"
          ? "SHS"
          : school.slug === "hospitality"
            ? "Health"
            : school.slug.toUpperCase(),
      people: researchers.filter((r) => r.school === school.slug),
    })),
    {
      key: "other",
      title: "Other faculty",
      short: "Other",
      people: researchers.filter((r) => !r.school || !known.has(r.school)),
    },
  ].filter((g) => g.people.length > 0);

  const [latest, ...older] = researchUpdates;
  const boardPosts = older.length > 0 ? older : researchUpdates;

  return (
    <>
      <AcademicsBanner
        title="Research"
        subtitle="Research Office updates and the people behind the work."
        label="Research Office"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        {latest && <FeaturedLead story={toTeaser(latest)} />}

        <section
          id="updates"
          className="scroll-mt-[var(--site-header-offset)] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            {researchUpdates.length === 0 ? (
              <EmptyState
                title="No updates yet"
                text="Research Office posts will appear here."
              />
            ) : (
              <PhotoBoard
                posts={boardPosts}
                heading="Updates"
                kicker="Research Office"
              />
            )}
          </div>
        </section>

        <section
          id="researchers"
          className="scroll-mt-[var(--site-header-offset)] border-y border-line bg-mist"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                  Roster · {researchers.length}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  Researchers
                </h2>
              </div>
              <a
                href={RESEARCH_OFFICE_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-navy underline-offset-4 hover:underline"
              >
                Research Office Facebook
                <Icon name="external" className="size-3.5" />
              </a>
            </div>

            {groups.length === 0 ? (
              <EmptyState
                title="Roster coming soon"
                text="Faculty researchers will be listed here."
              />
            ) : (
              <div className="space-y-10">
                {groups.map((g) => (
                  <div key={g.key}>
                    <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                      {g.short} · {g.title}
                    </h3>
                    <ul className="divide-y divide-line border-y border-line bg-white">
                      {g.people.map((person) => {
                        const initials = person.name
                          .replace(/,.*$/, "")
                          .split(" ")
                          .filter(Boolean)
                          .map((w) => w[0])
                          .filter((_, i, all) => i === 0 || i === all.length - 1)
                          .join("")
                          .toUpperCase();
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
                              <p className="font-extrabold leading-snug text-navy">
                                {person.name}
                              </p>
                              {person.title && (
                                <p className="mt-0.5 text-sm text-royal">
                                  {person.title}
                                </p>
                              )}
                              {person.department && (
                                <p className="text-xs text-slate">
                                  {person.department}
                                </p>
                              )}
                              {person.bio && (
                                <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate">
                                  {person.bio}
                                </p>
                              )}
                              {person.links && person.links.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-x-3">
                                  {person.links.map((l) => (
                                    <a
                                      key={l.href}
                                      href={l.href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.12em] text-royal underline-offset-4 hover:underline"
                                    >
                                      {l.label}
                                      <Icon name="external" className="size-3" />
                                    </a>
                                  ))}
                                </div>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section
          id="collaborate"
          className="relative isolate overflow-hidden bg-navy text-white"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rotate-45 bg-gold/90"
          />
          <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-[1.2fr_0.8fr] sm:px-5 sm:py-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Collaborate
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Research Office
              </h2>
              <p className="mt-3 max-w-lg text-white/80">
                Trainings, colloquia, conference support, and faculty research
                coordination.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3 sm:items-end">
              <a
                href={`mailto:${RESEARCH_EMAIL}`}
                className="text-sm font-bold text-gold underline-offset-4 hover:underline"
              >
                {RESEARCH_EMAIL}
              </a>
              <a
                href={RESEARCH_OFFICE_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-white underline-offset-4 hover:underline"
              >
                Facebook page
                <Icon name="external" className="size-3.5" />
              </a>
              <Link
                href="/academics"
                className="text-sm font-bold text-white/70 underline-offset-4 hover:text-white hover:underline"
              >
                Academics
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
