import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import EventCard from "@/components/events/EventCard";
import ResearcherCard from "@/components/research/ResearcherCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { PanelShapes } from "@/components/Shapes";
import {
  RESEARCH_EMAIL,
  RESEARCH_OFFICE_FACEBOOK_URL,
  researchers,
  researchUpdates,
} from "@/lib/research";
import { sections } from "@/lib/site";

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

  // Researchers grouped by school. Anyone without a known school goes under "Other faculty".
  const known = new Set(schools.map((s) => s.slug));
  const groups = [
    ...schools.map((school) => ({
      key: school.slug,
      title: school.title,
      people: researchers.filter((r) => r.school === school.slug),
    })),
    {
      key: "other",
      title: "Other faculty",
      people: researchers.filter((r) => !r.school || !known.has(r.school)),
    },
  ].filter((g) => g.people.length > 0);

  const [latest, ...olderUpdates] = researchUpdates;

  return (
    <>
      <AcademicsBanner
        title="Research"
        subtitle="The researchers of NU Clark, and the latest research news and updates."
        label="NU Clark"
        crumbs={crumbs}
      />

      <main className="pb-16">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-5">
          <nav aria-label="Jump to a section" className="flex flex-wrap gap-2">
            {[
              ["#researchers", "Researchers"],
              ["#updates", "News and updates"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Researchers */}
        <section
          id="researchers"
          className="mx-auto max-w-6xl scroll-mt-[var(--site-header-offset)] px-4 py-10 sm:px-5 sm:py-12"
        >
          <SectionTitle
            kicker="Our people"
            title="Researchers"
            text="Faculty and staff who carry out research at NU Clark."
          />
          {groups.length === 0 ? (
            <EmptyState
              title="Researcher profiles are coming soon"
              text="Researchers from across NU Clark will be introduced here."
            />
          ) : (
            <div className="space-y-10">
              {groups.map((g) => (
                <div key={g.key}>
                  <h3 className="border-l-4 border-gold pl-4 text-xl font-extrabold text-navy">
                    {g.title}
                  </h3>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {g.people.map((person, i) => (
                      <Reveal
                        key={person.slug}
                        delay={(i % 3) * 80}
                        className="h-full"
                      >
                        <ResearcherCard person={person} />
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* News and updates */}
        <section
          id="updates"
          className="scroll-mt-[var(--site-header-offset)] border-t border-line bg-gradient-to-b from-navy/[0.05] to-transparent"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
            <SectionTitle
              kicker="What's new"
              title="Research news and updates"
              text="Publications, presentations, trainings, and other research news from the NU Clark Research Office."
            />
            <a
              href={RESEARCH_OFFICE_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-royal"
            >
              See more on our Facebook page
              <span aria-hidden="true">→</span>
            </a>

            {!latest ? (
              <EmptyState
                title="No research updates yet"
                text="News and updates from NU Clark researchers will appear here."
              />
            ) : (
              <div className="space-y-6">
                <Reveal>
                  <EventCard event={latest} featured />
                </Reveal>
                {olderUpdates.map((post, i) => (
                  <Reveal key={post.slug} delay={(i % 3) * 60}>
                    <EventCard event={post} />
                  </Reveal>
                ))}
              </div>
            )}

            {/* Reach the Research Office */}
            <Reveal className="mt-12">
              <section className="relative isolate grid items-center gap-6 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
                <PanelShapes />
                <div>
                  <h2 className="text-2xl font-extrabold sm:text-3xl">
                    Reach out and collaborate with the NU Clark Research Office
                  </h2>
                  <p className="mt-2 max-w-xl text-white/80">
                    Find more news, updates, and announcements on the Research
                    Office Facebook page, or send us an email.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <a
                    href={RESEARCH_OFFICE_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-center font-bold leading-none text-navy transition hover:-translate-y-0.5"
                  >
                    Visit our Facebook page
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={`mailto:${RESEARCH_EMAIL}`}
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-bold leading-none text-white ring-2 ring-white/70 transition hover:bg-white/10"
                  >
                    {RESEARCH_EMAIL}
                  </a>
                </div>
              </section>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
