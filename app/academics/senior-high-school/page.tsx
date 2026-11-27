import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import { CardCorner, PanelShapes } from "@/components/Shapes";
import { programsBySchool } from "@/lib/programs";
import { APPLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Senior High School | NU Clark",
  description:
    "NU Clark Senior High School Academic Track — STEM, BUEN, and ASSH clusters for Grades 11 and 12.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Senior High School" },
];

const pathways = [
  {
    cluster: "STEM",
    label: "Science, Technology, Engineering and Mathematics",
    careers:
      "Engineering and Architecture · Computing Technologies · Sciences and Allied Health",
  },
  {
    cluster: "BUEN",
    label: "Business and Entrepreneurship",
    careers: "Management and Accountancy",
  },
  {
    cluster: "ASSH",
    label: "Arts, Social Sciences and Humanities",
    careers: "Education, Arts and Social Sciences (EASS)",
  },
];

const highlights = [
  {
    title: "World-class labs",
    text: "Hands-on learning in modern laboratories and facilities built for real problem-solving.",
  },
  {
    title: "Industry immersion",
    text: "Work immersion and partner pathways that connect classroom skills to Clark’s tech and business hub.",
  },
  {
    title: "Fast-track calendar",
    text: "A modern tri-semester system that keeps you moving without cutting academic depth.",
  },
];

export default function SeniorHighSchoolPage() {
  const programs = programsBySchool["senior-high-school"] ?? [];

  return (
    <>
      <AcademicsBanner
        title="Senior High School"
        subtitle="Tracks and strands for Grades 11 and 12 — choose the cluster that fits your next step."
        label="Academics"
        crumbs={crumbs}
      />

      <main className="pb-14 sm:pb-16">
        {/* Intro */}
        <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-5 sm:pt-10">
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-8">
              <div className="border-l-4 border-gold pl-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                  Academic Track
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
                  Education that works for Grades 11 and 12
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
                  NU Clark Senior High School offers three Academic Track
                  clusters. Build a strong foundation for college, career, and
                  lifelong learning — with the same NU spirit of{" "}
                  <span className="font-semibold text-navy">
                    Education that Works
                  </span>
                  .
                </p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={APPLY_URL}
                  className="rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply now
                </a>
                <Link
                  href="/academics"
                  className="rounded-full px-6 py-3 text-center font-bold text-navy ring-2 ring-navy/70 transition hover:bg-navy hover:text-white"
                >
                  ← All schools
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Clusters */}
        <section
          id="clusters"
          className="mx-auto max-w-6xl scroll-mt-[var(--site-header-offset)] px-4 py-12 sm:px-5 sm:py-16"
        >
          <Reveal>
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                Choose your path
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
                Clusters
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-16 rounded-full bg-gold" />
                <span className="h-1.5 w-3 rounded-full bg-gold/50" />
              </div>
              <p className="mt-3 max-w-2xl text-base text-slate">
                Pick the cluster that matches the college program and career you
                want.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:gap-5 lg:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80} className="h-full">
                <Link
                  href={`/academics/senior-high-school/${p.slug}`}
                  className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-navy p-5 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none sm:p-6"
                >
                  <CardCorner />
                  {p.image && (
                    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-white/5">
                      <Image
                        src={p.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 320px, 90vw"
                        className="object-contain p-3 transition duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-extrabold text-gold sm:text-2xl">
                    {p.title}
                  </h3>
                  {p.text && (
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {p.text}
                    </p>
                  )}
                  <span className="mt-auto inline-flex items-center gap-2 self-start pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold leading-none text-navy transition-transform duration-300 group-hover:translate-x-1">
                      Explore cluster
                      <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Pathways */}
        <section className="border-y border-line bg-white/70">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                  Career pathways
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
                  Where each cluster can lead
                </h2>
                <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
              </div>
            </Reveal>
            <ul className="space-y-3">
              {pathways.map((row, i) => (
                <Reveal key={row.cluster} delay={i * 60}>
                  <li className="flex flex-col gap-1 rounded-2xl border border-line bg-white px-4 py-4 sm:flex-row sm:items-baseline sm:gap-6 sm:px-5">
                    <span className="shrink-0 text-sm font-extrabold uppercase tracking-wider text-royal">
                      {row.cluster}
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-navy">{row.label}</p>
                      <p className="mt-0.5 text-sm text-slate">{row.careers}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Why SHS */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
          <Reveal>
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                Why NU Clark
              </p>
              <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
                Built for Senior High that works
              </h2>
              <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
            </div>
          </Reveal>
          <ol className="space-y-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <li className="grid gap-3 border-l-4 border-gold pl-4 sm:grid-cols-[3rem_1fr] sm:items-start sm:gap-5 sm:border-l-0 sm:pl-0">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-gold sm:h-12 sm:w-12 sm:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-extrabold text-navy sm:text-xl">
                      {h.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate sm:text-base">
                      {h.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 sm:px-5">
          <Reveal>
            <div className="relative isolate grid items-center gap-6 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
              <PanelShapes />
              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Ready for Senior High at NU Clark?
                </h2>
                <p className="mt-2 max-w-xl text-white/80">
                  Start your online application, or browse all academic schools
                  first.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <a
                  href={APPLY_URL}
                  className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply now
                </a>
                <Link
                  href="/academics"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                >
                  All schools
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
