import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import {
  awardsCollage,
  qualityCampusAddress,
  qualityCampusImage,
  qualityHighlights,
  qualityIntro,
  qualityMission,
  qualityValues,
  qualityVision,
  serviceExcellenceAwards,
} from "@/lib/quality";

export const metadata: Metadata = {
  title: "Quality Management | NU Clark",
  description:
    "NU Clark Educational Organization Management System: Campus of the Year and major awards from the 2026 National University Service Excellence Awards.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Quality Management" }];

/** Square ceremony / ranking graphics — never crop or letterbox into odd frames. */
function SquarePost({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#eef1f8]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
        className="object-contain object-center"
        priority={priority}
      />
    </figure>
  );
}

export default function QualityManagementPage() {
  const campusOfTheYear = serviceExcellenceAwards[0];
  const photoAwards = serviceExcellenceAwards.slice(1).filter((a) => a.image);
  const textAwards = serviceExcellenceAwards.slice(1).filter((a) => !a.image);
  const [rankingsLead, ...rankingsRest] = qualityHighlights;

  return (
    <>
      <AcademicsBanner
        title="Quality Management"
        subtitle="Awards, excellence, and continuous improvement at NU Clark."
        label="EOMS"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        {/* Intro */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
            <Reveal className="flex flex-col justify-center px-4 py-12 sm:px-5 sm:py-14 lg:pr-12">
              <p className="text-sm font-semibold text-royal">
                {qualityIntro.kicker}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                {qualityIntro.heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                {qualityIntro.tagline}
              </p>
              <p className="mt-6 max-w-md border-l-2 border-gold pl-4 text-sm font-semibold leading-relaxed text-navy">
                {qualityIntro.highlight}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <figure className="relative aspect-square overflow-hidden bg-[#eef1f8] lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src={awardsCollage}
                  alt="NU Clark Service Excellence trophies and certificates"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center p-6 sm:p-8"
                  priority
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Awards — calm hierarchy, not a mosaic wall */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-royal">
                    Service Excellence 2026
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    Seven major awards
                  </h2>
                </div>
                {campusOfTheYear.date && (
                  <p className="text-sm text-slate">{campusOfTheYear.date}</p>
                )}
              </div>
            </Reveal>

            {/* Lead award */}
            <article className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12">
              <Reveal>
                {campusOfTheYear.image && (
                  <SquarePost
                    src={campusOfTheYear.image}
                    alt={campusOfTheYear.title}
                    priority
                  />
                )}
              </Reveal>
              <Reveal delay={50} className="lg:pt-4">
                <p className="text-sm font-semibold text-royal">
                  Headline award
                </p>
                <h3 className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl lg:text-3xl">
                  {campusOfTheYear.title}
                </h3>
                {campusOfTheYear.summary && (
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                    {campusOfTheYear.summary}
                  </p>
                )}
              </Reveal>
            </article>

            {/* Other photo awards — equal squares */}
            {photoAwards.length > 0 && (
              <ul className="mt-14 grid gap-6 sm:grid-cols-3 sm:gap-5">
                {photoAwards.map((award, i) => (
                  <Reveal key={award.title} as="li" delay={i * 45}>
                    <SquarePost src={award.image!} alt={award.title} />
                    <h3 className="mt-4 text-base font-extrabold leading-snug text-navy">
                      {award.title}
                    </h3>
                    {award.summary && (
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {award.summary}
                      </p>
                    )}
                  </Reveal>
                ))}
              </ul>
            )}

            {/* Text-only awards — quiet list */}
            {textAwards.length > 0 && (
              <div className="mt-14 border-t border-line pt-10">
                <Reveal>
                  <h3 className="text-lg font-extrabold text-navy">
                    Also recognized
                  </h3>
                </Reveal>
                <ol className="mt-6 divide-y divide-line border-y border-line bg-white">
                  {textAwards.map((award, i) => (
                    <Reveal key={award.title} as="li" delay={i * 35}>
                      <div className="grid gap-1 px-5 py-5 sm:grid-cols-[3rem_1fr] sm:gap-4 sm:px-6">
                        <span className="text-sm font-bold tabular-nums text-royal">
                          {String(photoAwards.length + 2 + i).padStart(2, "0")}
                        </span>
                        <div>
                          <p className="font-extrabold text-navy">
                            {award.title}
                          </p>
                          {award.summary && (
                            <p className="mt-1 text-sm leading-relaxed text-slate">
                              {award.summary}
                            </p>
                          )}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </section>

        {/* Rankings — square posts + copy, no cover-crop */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-sm font-semibold text-royal">
                More recognitions
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Rankings and national awards
              </h2>
            </Reveal>

            <article className="mt-10 grid items-start gap-8 border-b border-line pb-12 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-12">
              <Reveal>
                {rankingsLead.image && (
                  <SquarePost
                    src={rankingsLead.image}
                    alt={rankingsLead.title}
                  />
                )}
              </Reveal>
              <Reveal delay={50} className="lg:pt-2">
                <p className="text-sm font-semibold text-royal">
                  {rankingsLead.category}
                  {rankingsLead.date ? ` · ${rankingsLead.date}` : ""}
                </p>
                <h3 className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">
                  {rankingsLead.title}
                </h3>
                {rankingsLead.href && (
                  <Link
                    href={rankingsLead.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-royal underline-offset-2 hover:underline"
                  >
                    Read the story
                    <Icon name="arrow-right" className="size-3.5" />
                  </Link>
                )}
              </Reveal>
            </article>

            <ul className="mt-10 grid gap-10 sm:grid-cols-2">
              {rankingsRest.map((item, i) => (
                <Reveal key={item.title} as="li" delay={(i + 1) * 50}>
                  {item.image && (
                    <SquarePost src={item.image} alt={item.title} />
                  )}
                  <p className="mt-4 text-sm font-semibold text-royal">
                    {item.category}
                    {item.date ? ` · ${item.date}` : ""}
                  </p>
                  <h3 className="mt-1 text-base font-extrabold leading-snug text-navy sm:text-lg">
                    {item.title}
                  </h3>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-royal underline-offset-2 hover:underline"
                    >
                      Read the story
                      <Icon name="arrow-right" className="size-3.5" />
                    </Link>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Vision / mission */}
        <section className="relative isolate min-h-[26rem] overflow-hidden bg-navy text-white sm:min-h-[30rem]">
          <Image
            src={qualityCampusImage}
            alt="NU Clark campus"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/55"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col justify-end gap-10 px-4 py-14 sm:px-5 sm:py-16 lg:min-h-[30rem] lg:justify-center lg:gap-14">
            <Reveal>
              <p className="text-sm font-semibold text-gold">Vision</p>
              <p className="mt-3 max-w-2xl text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                {qualityVision}
              </p>
            </Reveal>
            <Reveal delay={70}>
              <div className="max-w-xl border-l-2 border-gold/70 pl-5">
                <p className="text-sm font-semibold text-gold">Mission</p>
                <p className="mt-2 text-base leading-relaxed text-white/90">
                  {qualityMission}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Core values */}
        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-royal">Core values</p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    What guides the work
                  </h2>
                </div>
                <Link
                  href="/about/accreditation"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-royal underline-offset-2 hover:underline"
                >
                  Accreditation
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
              </div>
            </Reveal>

            <ul className="mt-8 flex flex-wrap items-stretch gap-y-5 border-y border-line py-7 sm:justify-between">
              {qualityValues.map((value, i) => (
                <Reveal
                  key={value.name}
                  as="li"
                  delay={i * 40}
                  className="flex min-w-[6.5rem] flex-1 items-center gap-3 px-1 sm:min-w-0 sm:justify-center sm:px-3"
                >
                  <span className="relative h-10 w-10 shrink-0">
                    <Image
                      src={value.icon}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-contain"
                    />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wide text-navy">
                    {value.name}
                  </p>
                </Reveal>
              ))}
            </ul>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">
              {qualityCampusAddress}
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
