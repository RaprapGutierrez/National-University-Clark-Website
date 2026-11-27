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
        {/* EOMS intro */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-6xl items-stretch gap-0 lg:grid-cols-[1fr_1.05fr]">
            <Reveal className="flex flex-col justify-center px-4 py-12 sm:px-5 sm:py-16 lg:pr-10 lg:pl-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                {qualityIntro.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
                {qualityIntro.heading}
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate sm:text-lg">
                {qualityIntro.tagline}
              </p>
              <p className="mt-8 max-w-md border-l-2 border-gold pl-4 text-sm font-semibold leading-relaxed text-navy">
                {qualityIntro.highlight}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative aspect-[5/4] overflow-hidden bg-navy sm:aspect-[16/11] lg:aspect-auto lg:min-h-full lg:h-full">
                <Image
                  src={awardsCollage}
                  alt="NU Clark Service Excellence trophies and certificates"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain object-center p-4 sm:p-6"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Awards — one composition: hero + mosaic wall + name index */}
        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                    Service Excellence 2026
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    Seven major awards
                  </h2>
                </div>
                {campusOfTheYear.date && (
                  <p className="text-sm text-white/65">{campusOfTheYear.date}</p>
                )}
              </div>
            </Reveal>

            {/* Asymmetric poster wall — one composition, not stacked clones */}
            <div className="mt-10 grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-3">
              <Reveal className="sm:col-span-2 lg:col-span-8 lg:row-span-2">
                <figure className="relative h-full min-h-[22rem] overflow-hidden bg-[#0c1538] sm:min-h-[26rem] lg:min-h-[32rem]">
                  {campusOfTheYear.image && (
                    <Image
                      src={campusOfTheYear.image}
                      alt={campusOfTheYear.title}
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-contain object-center"
                      priority
                    />
                  )}
                </figure>
              </Reveal>

              {photoAwards.slice(0, 2).map((award, i) => (
                <Reveal
                  key={award.title}
                  delay={(i + 1) * 70}
                  className="lg:col-span-4"
                >
                  <figure className="relative aspect-square overflow-hidden bg-[#0c1538] lg:aspect-auto lg:h-full lg:min-h-[15.5rem]">
                    <Image
                      src={award.image!}
                      alt={award.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-contain object-center"
                    />
                  </figure>
                </Reveal>
              ))}

              {photoAwards[2] && (
                <Reveal delay={210} className="sm:col-span-2 lg:col-span-7">
                  <figure className="relative aspect-[4/3] overflow-hidden bg-[#0c1538] sm:aspect-[16/9] lg:aspect-auto lg:min-h-[16rem]">
                    <Image
                      src={photoAwards[2].image!}
                      alt={photoAwards[2].title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-contain object-center"
                    />
                  </figure>
                </Reveal>
              )}

              <Reveal delay={260} className="lg:col-span-5">
                <ul className="flex h-full min-h-[16rem] flex-col justify-center gap-5 bg-[#0c1538] px-6 py-7 sm:px-8">
                  {textAwards.map((award, i) => (
                    <li key={award.title} className="border-l-2 border-gold pl-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                        {String(photoAwards.length + 2 + i).padStart(2, "0")}
                      </p>
                      <p className="mt-1 text-sm font-extrabold leading-snug text-white sm:text-[0.95rem]">
                        {award.title}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Rankings — editorial lead + supporting strip, not a 3-card grid */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                More recognitions
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Rankings and national awards
              </h2>
            </Reveal>

            <div className="mt-10 space-y-3">
              <Reveal>
                <article className="grid overflow-hidden bg-white lg:grid-cols-2">
                  <div className="relative min-h-[16rem] bg-navy sm:min-h-[20rem] lg:min-h-[24rem]">
                    {rankingsLead.image && (
                      <Image
                        src={rankingsLead.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-10">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-royal">
                      {rankingsLead.category}
                      {rankingsLead.date ? ` · ${rankingsLead.date}` : ""}
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
                      {rankingsLead.title}
                    </h3>
                    {rankingsLead.href && (
                      <Link
                        href={rankingsLead.href}
                        className="mt-6 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-royal underline-offset-4 hover:underline"
                      >
                        Read the story
                        <Icon name="arrow-right" className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>

              <ul className="grid gap-3 lg:grid-cols-2">
                {rankingsRest.map((item, i) => (
                  <Reveal key={item.title} as="li" delay={(i + 1) * 70}>
                    <article className="grid h-full overflow-hidden bg-white sm:grid-cols-[11rem_1fr] lg:grid-cols-[13rem_1fr]">
                      <div className="relative aspect-[16/10] bg-navy sm:aspect-auto sm:min-h-[11rem]">
                        {item.image && (
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            sizes="(min-width: 640px) 13rem, 100vw"
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col justify-center px-5 py-5 sm:px-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                          {item.category}
                          {item.date ? ` · ${item.date}` : ""}
                        </p>
                        <h3 className="mt-2 text-base font-extrabold leading-snug text-navy sm:text-lg">
                          {item.title}
                        </h3>
                        {item.href && (
                          <Link
                            href={item.href}
                            className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-royal underline-offset-4 hover:underline"
                          >
                            Read the story
                            <Icon name="arrow-right" className="size-3.5" />
                          </Link>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Vision / mission — campus as the visual plane */}
        <section className="relative isolate min-h-[28rem] overflow-hidden bg-navy text-white sm:min-h-[32rem]">
          <Image
            src={qualityCampusImage}
            alt="NU Clark campus"
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col justify-end gap-12 px-4 py-14 sm:px-5 sm:py-20 lg:min-h-[32rem] lg:justify-center lg:gap-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Vision
              </p>
              <p className="mt-4 max-w-2xl text-xl font-extrabold leading-snug tracking-tight sm:text-2xl lg:text-[1.75rem] lg:leading-snug">
                {qualityVision}
              </p>
            </Reveal>
            <Reveal delay={90}>
              <div className="max-w-xl border-l-2 border-gold/70 pl-5 sm:pl-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                  Mission
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/90 sm:text-lg">
                  {qualityMission}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Core values — single band, not an icon card farm */}
        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                    Core values
                  </p>
                  <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                    What guides the work
                  </h2>
                </div>
                <Link
                  href="/about/accreditation"
                  className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-royal underline-offset-4 hover:underline"
                >
                  Accreditation
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
              </div>
            </Reveal>

            <ul className="mt-10 flex flex-wrap items-stretch gap-x-0 gap-y-6 border-y border-line py-8 sm:justify-between">
              {qualityValues.map((value, i) => (
                <Reveal
                  key={value.name}
                  as="li"
                  delay={i * 45}
                  className="flex min-w-[6.5rem] flex-1 items-center gap-3 px-1 sm:min-w-0 sm:justify-center sm:px-3"
                >
                  <span className="relative h-10 w-10 shrink-0 sm:h-11 sm:w-11">
                    <Image
                      src={value.icon}
                      alt=""
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </span>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy">
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
