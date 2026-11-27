import type { Metadata } from "next";
import Image from "next/image";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import {
  communityCover,
  communityFeatured,
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

export default function CommunityDevelopmentPage() {
  return (
    <>
      <AcademicsBanner
        title="Community Development"
        subtitle={communityIntro.tagline}
        label="COMEX"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        {/* Cover artwork + office intro */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <figure className="relative aspect-[23/10] overflow-hidden bg-[#f5c400]">
                <Image
                  src={communityCover}
                  alt="When we root for each other we grow together — NU Clark COMEX"
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                  priority
                />
              </figure>
            </Reveal>

            <div className="grid gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
              <Reveal>
                <p className="text-sm font-semibold text-royal">
                  {communityIntro.kicker}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                  {communityIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
                  {communityIntro.about}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${communityIntro.email}`}
                    className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
                  >
                    Volunteer with COMEX
                    <Icon name="arrow-right" className="size-3.5" />
                  </a>
                  <a
                    href={communityIntro.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
                  >
                    Follow on Facebook
                  </a>
                </div>
              </Reveal>

              <Reveal delay={60} className="self-start lg:pt-8">
                <dl className="space-y-5 text-sm">
                  <div>
                    <dt className="font-semibold text-navy">Email</dt>
                    <dd>
                      <a
                        href={`mailto:${communityIntro.email}`}
                        className="text-royal underline-offset-2 hover:underline"
                      >
                        {communityIntro.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Campus</dt>
                    <dd className="mt-0.5 leading-relaxed text-slate">
                      {communityIntro.address}
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured field story */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <article className="grid items-start gap-8 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-12">
              <Reveal>
                <SquarePost
                  src={communityFeatured.image}
                  alt={communityFeatured.title}
                  priority
                />
              </Reveal>
              <Reveal delay={50} className="lg:pt-6">
                <p className="text-sm font-semibold text-royal">From the field</p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  {communityFeatured.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                  {communityFeatured.text}
                </p>
              </Reveal>
            </article>
          </div>
        </section>

        {/* Vision / mission */}
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="text-sm font-semibold text-gold">Vision</p>
              <p className="mt-3 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                {communityVision}
              </p>
            </Reveal>
            <Reveal delay={50}>
              <p className="text-sm font-semibold text-gold">Mission</p>
              <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
                {communityMission}
              </p>
            </Reveal>
          </div>
        </section>

        {/* NUVP + programs with paired posts */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <p className="text-sm font-semibold text-royal">
                {communityVolunteer.short}
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {communityVolunteer.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate">
                {communityVolunteer.text}
              </p>
            </Reveal>

            <ul className="mt-12 space-y-14">
              {communityPrograms.map((program, i) => {
                const flip = i % 2 === 1;
                return (
                  <Reveal key={program.title} as="li" delay={i * 30}>
                    <article
                      className={`grid items-start gap-6 lg:grid-cols-2 lg:gap-12 ${
                        flip ? "" : ""
                      }`}
                    >
                      <div className={flip ? "lg:order-2" : undefined}>
                        <SquarePost
                          src={program.image}
                          alt={program.title}
                        />
                      </div>
                      <div
                        className={`lg:pt-4 ${flip ? "lg:order-1" : ""}`}
                      >
                        <p className="text-sm font-semibold text-royal">
                          {program.sdg}
                        </p>
                        <h3 className="mt-2 text-xl font-extrabold leading-snug text-navy sm:text-2xl">
                          {program.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-navy/70">
                          {program.subtitle}
                        </p>
                        <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                          {program.text}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Impact */}
        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <p className="text-sm font-semibold text-gold">Impact</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Through community extension
              </h2>
              <p className="mt-2 text-sm text-white/65">
                University Community Extension figures · as of June 2026
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
              {communityImpact.map((stat, i) => (
                <Reveal key={stat.label} as="li" delay={i * 35}>
                  <p className="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/80">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Extra gallery */}
        {communityGallery.length > 0 && (
          <section className="bg-mist">
            <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
              <Reveal>
                <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  More from COMEX
                </h2>
                <p className="mt-2 max-w-2xl text-base text-slate">
                  Recent posts from the Community Extension Services Office.
                </p>
              </Reveal>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5">
                {communityGallery.map((src, i) => (
                  <Reveal key={src} delay={i * 40}>
                    <SquarePost
                      src={src}
                      alt="COMEX community extension activity"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Voices + CTA */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Voices from partners
              </h2>
            </Reveal>

            <ul className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
              {communityFeedback.map((item, i) => (
                <Reveal key={item.attribution} as="li" delay={i * 40}>
                  <blockquote className="h-full border-t-2 border-gold pt-5">
                    <p className="text-base leading-relaxed text-navy">
                      “{item.quote}”
                    </p>
                    <footer className="mt-4 text-sm font-semibold text-royal">
                      — {item.attribution}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </ul>

            <div className="mt-14 flex flex-col gap-5 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-extrabold text-navy">
                  Ready to serve with COMEX?
                </h3>
                <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate">
                  Email the office to volunteer, propose a partnership, or ask
                  about NUVP.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${communityIntro.email}`}
                  className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
                >
                  Email COMEX
                  <Icon name="arrow-right" className="size-3.5" />
                </a>
                <a
                  href={communityIntro.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-line px-5 py-2.5 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
