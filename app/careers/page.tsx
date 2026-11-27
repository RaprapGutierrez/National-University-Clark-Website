import type { Metadata } from "next";
import Image from "next/image";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import {
  careersCover,
  careersCultureImages,
  careersFaqs,
  careersIntro,
  careersOpenings,
  careersPillars,
  careersRequirements,
  careersTeams,
} from "@/lib/careers";

export const metadata: Metadata = {
  title: "Careers | NU Clark",
  description:
    "Build your future at NU Clark. Faculty, administrative, and student services careers — apply via careers@nu-clark.edu.ph.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Careers" }];

export default function CareersPage() {
  return (
    <>
      <AcademicsBanner
        title="Careers"
        subtitle="Join a community where growth is nurtured and every voice matters."
        label="Talent"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <figure className="relative aspect-[21/9] overflow-hidden bg-navy sm:aspect-[2.7/1]">
                <Image
                  src={careersCover}
                  alt="Careers at NU Clark"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
              </figure>
            </Reveal>

            <div className="grid gap-8 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                  {careersIntro.kicker}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
                  {careersIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-navy">
                  {careersIntro.tagline}
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
                  {careersIntro.lead}
                </p>
              </Reveal>

              <Reveal delay={80} className="self-center">
                <ul className="divide-y divide-line border-y border-line">
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Apply
                    </p>
                    <a
                      href={`mailto:${careersIntro.email}`}
                      className="mt-1 inline-block text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      {careersIntro.email}
                    </a>
                  </li>
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Facebook
                    </p>
                    <a
                      href={careersIntro.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      Careers at NU Clark
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </li>
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      System openings
                    </p>
                    <a
                      href={careersIntro.talentHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      NU Clark Talent Hub
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Unlock your potential
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Shape futures. Build your career.
              </h2>
            </Reveal>
            <ol className="mt-10 grid gap-8 sm:grid-cols-3">
              {careersPillars.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 50}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                More than a workplace
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Teams that keep NU Clark moving
              </h2>
            </Reveal>

            <ul className="mt-10 grid gap-8 lg:grid-cols-3">
              {careersTeams.map((team, i) => (
                <Reveal key={team.title} as="li" delay={i * 60}>
                  <h3 className="text-lg font-extrabold text-navy">
                    {team.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {team.text}
                  </p>
                  <ul className="mt-4 space-y-1.5 border-l-2 border-gold/80 pl-4">
                    {team.roles.map((role) => (
                      <li key={role} className="text-sm text-navy">
                        {role}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
              <div>
                <Reveal>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                    Openings at NU Clark
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    Roles we’re hiring for
                  </h2>
                </Reveal>

                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {careersOpenings.map((job, i) => (
                    <Reveal key={job.title} as="li" delay={i * 40}>
                      <div className="grid gap-1 py-5 sm:grid-cols-[7rem_1fr] sm:gap-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal sm:pt-1">
                          {job.type}
                        </p>
                        <div>
                          <h3 className="font-extrabold text-navy">
                            {job.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate">
                            {job.category}
                            {job.note ? ` · ${job.note}` : ""}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <Reveal delay={80}>
                <div className="border-t border-line bg-mist px-6 py-8 sm:px-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                    How to apply
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    Send your documents in PDF to{" "}
                    <a
                      href={`mailto:${careersIntro.email}`}
                      className="font-bold text-navy underline-offset-4 hover:underline"
                    >
                      {careersIntro.email}
                    </a>
                    . Indicate your intended position in the subject line.
                  </p>
                  <ol className="mt-6 space-y-2">
                    {careersRequirements.map((item, i) => (
                      <li
                        key={item}
                        className="grid grid-cols-[2rem_1fr] gap-2 text-sm text-navy"
                      >
                        <span className="font-extrabold tabular-nums text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ol>
                  <a
                    href={`mailto:${careersIntro.email}?subject=Application`}
                    className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-royal underline-offset-4 hover:underline"
                  >
                    Email your application
                    <Icon name="arrow-right" className="size-3.5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Life at NU Clark
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                A great place to work
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {careersCultureImages.map((src, i) => (
                <Reveal key={src} delay={i * 50}>
                  <figure className="relative aspect-square overflow-hidden bg-[#0c1538]">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover object-center"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                FAQ
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Common questions
              </h2>
            </Reveal>
            <dl className="mt-10 divide-y divide-line border-y border-line">
              {careersFaqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 40}>
                  <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8">
                    <dt className="font-extrabold text-navy">{item.q}</dt>
                    <dd className="text-sm leading-relaxed text-slate sm:text-base">
                      {item.a}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <p className="mt-8 text-sm text-slate">
              HR inquiries:{" "}
              <a
                href={`mailto:${careersIntro.hrEmail}`}
                className="font-bold text-royal underline-offset-4 hover:underline"
              >
                {careersIntro.hrEmail}
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
