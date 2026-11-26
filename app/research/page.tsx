import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import NewsCard from "@/components/news/NewsCard";
import ResearcherCard from "@/components/research/ResearcherCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { researchers, researchUpdates } from "@/lib/research";
import { sections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Research | NU Clark",
  description:
    "Meet the researchers of National University Clark and follow the latest research news and updates.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Research" }];

export default function ResearchPage() {
  const academics = sections.find((s) => s.slug === "academics");
  const schools = (academics?.pages ?? []).filter(
    (p) => p.slug !== "office-of-the-academic-director",
  );

  // Researchers grouped by school. Anyone with an unknown school goes under "Other".
  const known = new Set(schools.map((s) => s.slug));
  const groups = [
    ...schools.map((school) => ({
      key: school.slug,
      title: school.title,
      people: researchers.filter((r) => r.school === school.slug),
    })),
    {
      key: "other",
      title: "Other",
      people: researchers.filter((r) => !known.has(r.school)),
    },
  ].filter((g) => g.people.length > 0);

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
              text="Publications, presentations, awards, and other research news from NU Clark."
            />
            {researchUpdates.length === 0 ? (
              <EmptyState
                title="No research updates yet"
                text="News and updates from NU Clark researchers will appear here."
              />
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {researchUpdates.map((post, i) => (
                  <Reveal
                    key={post.slug}
                    delay={(i % 3) * 80}
                    className="h-full"
                  >
                    <NewsCard post={post} linkLabel="Read more" />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
