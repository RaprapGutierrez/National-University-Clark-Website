import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import StoryTeaser from "@/components/news/StoryTeaser";
import ResearcherCard from "@/components/research/ResearcherCard";
import Reveal from "@/components/Reveal";
import { PanelShapes } from "@/components/Shapes";
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
      people: researchers.filter((r) => r.school === school.slug),
    })),
    {
      key: "other",
      title: "Other faculty",
      people: researchers.filter((r) => !r.school || !known.has(r.school)),
    },
  ].filter((g) => g.people.length > 0);

  const [latest, ...olderUpdates] = researchUpdates;
  const schoolCount = groups.length;

  return (
    <>
      <AcademicsBanner
        title="Research"
        subtitle="People, publications, and Research Office updates — short reads first."
        label="Research Office"
        crumbs={crumbs}
      />

      <main className="overflow-x-clip pb-16">
        {/* Compact pulse strip */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-line px-2 sm:px-5">
            {[
              { value: String(researchers.length), label: "Researchers" },
              { value: String(researchUpdates.length), label: "Updates" },
              { value: String(schoolCount), label: "Schools" },
            ].map((stat) => (
              <div key={stat.label} className="px-3 py-5 text-center sm:py-6">
                <p className="text-2xl font-extrabold text-navy sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-royal sm:text-xs">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-5">
          <nav
            aria-label="On this page"
            className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[
              ["#updates", "Updates"],
              ["#researchers", "People"],
              ["#collaborate", "Collaborate"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="shrink-0 rounded-full bg-mist px-4 py-2 text-sm font-bold text-navy ring-1 ring-line transition hover:bg-navy hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* Updates — teasers only */}
        <section
          id="updates"
          className="mx-auto max-w-6xl scroll-mt-[var(--site-header-offset)] px-4 py-10 sm:px-5 sm:py-12"
        >
          <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                Desk
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
                Research updates
              </h2>
              <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
            </div>
            <a
              href={RESEARCH_OFFICE_FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
            >
              Facebook page
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          {!latest ? (
            <EmptyState
              title="No research updates yet"
              text="News from NU Clark researchers will appear here."
            />
          ) : (
            <div className="space-y-5">
              <Reveal>
                <StoryTeaser story={toTeaser(latest)} featured />
              </Reveal>
              {olderUpdates.length > 0 && (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {olderUpdates.map((post, i) => (
                    <Reveal
                      key={post.slug}
                      delay={(i % 3) * 50}
                      className="h-full"
                    >
                      <StoryTeaser story={toTeaser(post)} />
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        {/* Researchers — horizontal rail on mobile, grid on desktop */}
        <section
          id="researchers"
          className="scroll-mt-[var(--site-header-offset)] border-y border-line bg-gradient-to-b from-mist to-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
            <div className="mb-6 sm:mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                Directory
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
                Researchers
              </h2>
              <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
              <p className="mt-3 max-w-2xl text-sm text-slate sm:text-base">
                Swipe on phone · grid on larger screens.
              </p>
            </div>

            {groups.length === 0 ? (
              <EmptyState
                title="Profiles coming soon"
                text="Researchers from across NU Clark will be introduced here."
              />
            ) : (
              <div className="space-y-10">
                {groups.map((g) => (
                  <div key={g.key}>
                    <h3 className="mb-4 flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.14em] text-navy">
                      <span className="h-px flex-1 bg-line sm:max-w-8" />
                      {g.title}
                      <span className="rounded-full bg-navy px-2 py-0.5 text-[10px] text-gold">
                        {g.people.length}
                      </span>
                      <span className="h-px flex-1 bg-line" />
                    </h3>

                    {/* Mobile: snap rail */}
                    <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:hidden [&::-webkit-scrollbar]:hidden">
                      {g.people.map((person) => (
                        <div
                          key={person.slug}
                          className="w-[min(85vw,20rem)] shrink-0"
                        >
                          <ResearcherCard person={person} />
                        </div>
                      ))}
                    </div>

                    {/* sm+: grid */}
                    <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
                      {g.people.map((person, i) => (
                        <Reveal
                          key={person.slug}
                          delay={(i % 3) * 60}
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
          </div>
        </section>

        {/* Collaborate */}
        <section
          id="collaborate"
          className="mx-auto max-w-6xl scroll-mt-[var(--site-header-offset)] px-4 pt-10 sm:px-5 sm:pt-12"
        >
          <Reveal>
            <div className="relative isolate grid items-center gap-6 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
              <PanelShapes />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  Collaborate
                </p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Work with the Research Office
                </h2>
                <p className="mt-2 max-w-xl text-white/80">
                  Trainings, presentations, and partnerships — reach out.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href={RESEARCH_OFFICE_FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-center font-bold leading-none text-navy transition hover:-translate-y-0.5"
                >
                  Facebook
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  href={`mailto:${RESEARCH_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-bold leading-none text-white ring-2 ring-white/70 transition hover:bg-white/10"
                >
                  {RESEARCH_EMAIL}
                </a>
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-center text-sm font-bold leading-none text-white/80 underline-offset-4 hover:underline"
                >
                  Academics
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
