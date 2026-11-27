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

function PostFigure({
  src,
  alt = "",
  priority = false,
}: {
  src: string;
  alt?: string;
  priority?: boolean;
}) {
  return (
    <figure className="relative aspect-square overflow-hidden bg-[#eef1f8]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 25vw, 50vw"
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
        subtitle="NUrturing communities through geNUine service."
        label="COMEX"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
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

            <div className="grid gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
              <Reveal>
                <p className="text-sm font-semibold text-royal">
                  {communityIntro.kicker}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                  {communityIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-snug text-navy/90">
                  {communityIntro.tagline}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                  {communityIntro.about}
                </p>
              </Reveal>

              <Reveal delay={60} className="self-start lg:pt-6">
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="font-semibold text-navy">Volunteer / COMEX</p>
                    <a
                      href={`mailto:${communityIntro.email}`}
                      className="mt-0.5 inline-block text-royal underline-offset-2 hover:underline"
                    >
                      {communityIntro.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Facebook</p>
                    <a
                      href={communityIntro.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 text-royal underline-offset-2 hover:underline"
                    >
                      NU Clark COMEX
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Campus</p>
                    <p className="mt-0.5 leading-relaxed text-slate">
                      {communityIntro.address}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Vision / mission — typography only, no photo-as-texture */}
        <section className="bg-navy text-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <h2 className="text-sm font-semibold text-gold">Vision</h2>
              <p className="mt-3 text-xl font-extrabold leading-snug tracking-tight sm:text-2xl">
                {communityVision}
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h2 className="text-sm font-semibold text-gold">Mission</h2>
              <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
                {communityMission}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Volunteer programs — text first; posts in a clean square strip */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                {communityVolunteer.title}
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate">
                {communityVolunteer.text}
              </p>
            </Reveal>

            <ol className="mt-10 space-y-0 divide-y divide-line border-y border-line">
              {communityPrograms.map((program, i) => (
                <Reveal key={program.title} as="li" delay={i * 30}>
                  <div className="grid gap-2 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                    <span className="text-sm font-bold tabular-nums text-royal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold text-navy">
                        {program.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-navy/70">
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

        {/* Impact — simple stats, no photo wallpaper */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Extension impact
              </h2>
              <p className="mt-2 text-sm text-slate">
                University Community Extension figures · as of June 2026
              </p>
            </Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
              {communityImpact.map((stat, i) => (
                <Reveal key={stat.label} as="li" delay={i * 35}>
                  <p className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Field posts — all square, contained */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                From the field
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                Community immersion, assessments, and service days — from the
                COMEX feed.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
              {communityGallery.map((src, i) => (
                <Reveal key={src} delay={i * 30}>
                  <PostFigure
                    src={src}
                    alt={i === 0 ? "COMEX community extension activity" : ""}
                    priority={i === 0}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Voices from partners
              </h2>
            </Reveal>
            <ul className="mt-8 space-y-8">
              {communityFeedback.map((item, i) => (
                <Reveal key={item.attribution} as="li" delay={i * 40}>
                  <blockquote className="max-w-3xl">
                    <p className="text-base leading-relaxed text-navy sm:text-lg">
                      “{item.quote}”
                    </p>
                    <footer className="mt-3 text-sm font-semibold text-royal">
                      — {item.attribution}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </ul>

            <div className="mt-12 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-lg text-sm leading-relaxed text-slate">
                Volunteer or partner with NU Clark COMEX.
              </p>
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
