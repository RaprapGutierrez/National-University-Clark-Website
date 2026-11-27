import type { Metadata } from "next";
import Image from "next/image";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import {
  communityCover,
  communityFeedback,
  communityGallery,
  communityImpact,
  communityIntro,
  communityMission,
  communityPrograms,
  communityVision,
  communityVolunteer,
} from "@/lib/community";

export const metadata: Metadata = {
  title: "Community Development | NU Clark",
  description:
    "NU Clark Community Extension Services Office: volunteerism, sustainable community projects, and genuine service.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Community Development" },
];

export default function CommunityDevelopmentPage() {
  return (
    <>
      <AcademicsBanner
        title="Community Development"
        subtitle="NUrturing communities through geNUine service."
        label="COMEX"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <figure className="relative aspect-[21/9] overflow-hidden bg-navy sm:aspect-[2.7/1]">
                <Image
                  src={communityCover}
                  alt="NU Clark Community Extension Services"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
              </figure>
            </Reveal>

            <div className="grid gap-8 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                  {communityIntro.kicker}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
                  {communityIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-navy">
                  {communityIntro.tagline}
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
                  {communityIntro.about}
                </p>
              </Reveal>

              <Reveal delay={80} className="self-center">
                <ul className="divide-y divide-line border-y border-line">
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Volunteer / COMEX
                    </p>
                    <a
                      href={`mailto:${communityIntro.email}`}
                      className="mt-1 inline-block text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      {communityIntro.email}
                    </a>
                  </li>
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Facebook
                    </p>
                    <a
                      href={communityIntro.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      NU Clark COMEX
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </li>
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Campus
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {communityIntro.address}
                    </p>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-navy text-white">
          <Image
            src={communityGallery[1]}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70"
          />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:px-5 sm:py-20 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Vision
              </p>
              <p className="mt-4 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                {communityVision}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-l-2 border-gold/70 pl-5 sm:pl-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                  Mission
                </p>
                <p className="mt-3 text-base leading-relaxed text-white/90 sm:text-lg">
                  {communityMission}
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Become a volunteer
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {communityVolunteer.title}
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
                {communityVolunteer.text}
              </p>
            </Reveal>

            <ol className="mt-12 space-y-0 divide-y divide-line border-y border-line bg-white">
              {communityPrograms.map((program, i) => (
                <Reveal key={program.title} as="li" delay={i * 40}>
                  <div className="grid gap-3 px-5 py-6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:px-6">
                    <span className="font-extrabold tabular-nums text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">
                        {program.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.14em] text-royal">
                        {program.subtitle}
                      </p>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate sm:text-base">
                        {program.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Impact
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Through community development work
              </h2>
              <p className="mt-2 text-sm text-white/65">
                University Community Extension figures · as of June 2026
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {communityImpact.map((stat, i) => (
                <Reveal key={stat.label} as="li" delay={i * 45}>
                  <p className="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/80">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                From the field
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Extension in action
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {communityGallery.map((src, i) => (
                <Reveal
                  key={src}
                  delay={i * 40}
                  className={
                    i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                  }
                >
                  <figure
                    className={`relative overflow-hidden bg-navy ${
                      i === 0
                        ? "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[28rem]"
                        : "aspect-square"
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes={
                        i === 0
                          ? "(min-width: 1024px) 50vw, 100vw"
                          : "(min-width: 1024px) 25vw, 50vw"
                      }
                      className="object-cover object-center"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Community feedback
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Voices from partners
              </h2>
            </Reveal>
            <ul className="mt-10 space-y-8">
              {communityFeedback.map((item, i) => (
                <Reveal key={item.attribution} as="li" delay={i * 50}>
                  <blockquote className="max-w-3xl border-l-2 border-gold pl-5 sm:pl-6">
                    <p className="text-base leading-relaxed text-navy sm:text-lg">
                      “{item.quote}”
                    </p>
                    <footer className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-royal">
                      {item.attribution}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </ul>

            <p className="mt-12 text-sm text-slate">
              Want to volunteer or partner with NU Clark COMEX?{" "}
              <a
                href={`mailto:${communityIntro.email}`}
                className="font-bold text-royal underline-offset-4 hover:underline"
              >
                Email {communityIntro.email}
              </a>
              {" · "}
              <a
                href={communityIntro.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-royal underline-offset-4 hover:underline"
              >
                Follow NU Clark COMEX
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
