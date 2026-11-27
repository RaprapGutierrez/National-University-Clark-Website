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

/** Real campus photography for team bands — not cropped social graphics. */
const teamPhotos = [
  "/campus.jpg",
  "/student-1.jpg",
  "/carousel-img-3.jpg",
] as const;

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
        {/* Designed cover at natural ratio + copy beside contact */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <figure className="relative aspect-[2/1] overflow-hidden bg-navy">
                <Image
                  src={careersCover}
                  alt="Looking for job opportunities at NU Clark"
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                  priority
                />
              </figure>
            </Reveal>

            <div className="grid gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
              <Reveal>
                <p className="text-sm font-semibold text-royal">
                  {careersIntro.kicker}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                  {careersIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-snug text-navy/90">
                  {careersIntro.tagline}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                  {careersIntro.lead}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${careersIntro.email}?subject=Application`}
                    className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
                  >
                    Email application
                    <Icon name="arrow-right" className="size-3.5" />
                  </a>
                  <a
                    href={careersIntro.talentHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
                  >
                    NU Clark Talent Hub
                  </a>
                </div>
              </Reveal>

              <Reveal delay={60} className="self-start lg:pt-6">
                <div className="space-y-5 border-t border-line pt-6 text-sm lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                  <div>
                    <p className="font-semibold text-navy">Apply</p>
                    <a
                      href={`mailto:${careersIntro.email}`}
                      className="mt-0.5 inline-block text-royal underline-offset-2 hover:underline"
                    >
                      {careersIntro.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Facebook</p>
                    <a
                      href={careersIntro.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 text-royal underline-offset-2 hover:underline"
                    >
                      Careers at NU Clark
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Campus</p>
                    <p className="mt-0.5 leading-relaxed text-slate">
                      {careersIntro.address}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Why join NU Clark
              </h2>
            </Reveal>
            <ul className="mt-8 grid gap-8 sm:grid-cols-3">
              {careersPillars.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 40}>
                  <h3 className="text-lg font-extrabold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Openings */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
              <div>
                <Reveal>
                  <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    Open roles
                  </h2>
                  <p className="mt-2 text-base text-slate">
                    Recent postings for the Clark campus. Apply by email with
                    the position in the subject line.
                  </p>
                </Reveal>

                <ul className="mt-8 divide-y divide-line border-y border-line">
                  {careersOpenings.map((job, i) => (
                    <Reveal key={job.title} as="li" delay={i * 30}>
                      <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                        <div>
                          <p className="text-xs font-semibold text-royal">
                            {job.type} · {job.category}
                          </p>
                          <h3 className="mt-1 text-lg font-extrabold text-navy">
                            {job.title}
                          </h3>
                          {job.note && (
                            <p className="mt-0.5 text-sm text-slate">{job.note}</p>
                          )}
                        </div>
                        <a
                          href={`mailto:${careersIntro.email}?subject=${encodeURIComponent(
                            `Application — ${job.title}`,
                          )}`}
                          className="inline-flex shrink-0 items-center justify-center gap-1.5 self-start bg-navy px-4 py-2 text-sm font-bold text-white transition hover:bg-royal sm:self-center"
                        >
                          Apply
                          <Icon name="arrow-right" className="size-3.5" />
                        </a>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>

              <Reveal delay={60}>
                <aside className="bg-mist px-6 py-7 sm:px-7">
                  <h3 className="text-lg font-extrabold text-navy">
                    How to apply
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    Send PDFs to{" "}
                    <a
                      href={`mailto:${careersIntro.email}`}
                      className="font-bold text-navy underline-offset-2 hover:underline"
                    >
                      {careersIntro.email}
                    </a>
                    .
                  </p>
                  <ol className="mt-5 list-decimal space-y-1.5 pl-4 text-sm text-navy">
                    {careersRequirements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </aside>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Teams with real photos */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Teams at NU Clark
              </h2>
            </Reveal>

            <ul className="mt-10 space-y-8">
              {careersTeams.map((team, i) => (
                <Reveal key={team.title} as="li" delay={i * 35}>
                  <div className="grid overflow-hidden bg-white lg:grid-cols-2">
                    <figure
                      className={`relative aspect-[3/2] lg:aspect-auto lg:min-h-[16rem] ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={teamPhotos[i % teamPhotos.length]}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-center"
                      />
                    </figure>
                    <div
                      className={`flex flex-col justify-center px-6 py-7 sm:px-8 ${
                        i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <h3 className="text-xl font-extrabold text-navy">
                        {team.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {team.text}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-navy/80">
                        {team.roles.join(" · ")}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* HR posts — full square graphics, no crop */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Life at work
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                Moments from Careers at NU Clark and campus HR — shown as
                posted.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
              {careersCultureImages.map((src, i) => (
                <Reveal key={src} delay={i * 40}>
                  <figure className="relative aspect-square overflow-hidden bg-[#eef1f8]">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-contain object-center"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Frequently asked
              </h2>
            </Reveal>
            <dl className="mt-8 divide-y divide-line border-y border-line">
              {careersFaqs.map((item, i) => (
                <Reveal key={item.q} delay={i * 30}>
                  <div className="grid gap-2 py-5 sm:grid-cols-[minmax(0,15rem)_1fr] sm:gap-8">
                    <dt className="font-extrabold text-navy">{item.q}</dt>
                    <dd className="text-sm leading-relaxed text-slate sm:text-base">
                      {item.a}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
            <p className="mt-8 text-sm text-slate">
              HR:{" "}
              <a
                href={`mailto:${careersIntro.hrEmail}`}
                className="font-bold text-royal underline-offset-2 hover:underline"
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
