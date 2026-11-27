import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
  academicPartners,
  academicSchools,
  academicStats,
  shsClusters,
} from "@/lib/academics";
import { APPLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Academics | NU Clark",
  description:
    "Senior High School, colleges, and academic support at National University Clark — find the school and programs that fit you.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Academics" }];

export default function AcademicsPage() {
  const leadPartner = academicPartners.find((p) => p.image);
  const logoPartners = academicPartners.filter((p) => p.logo);

  return (
    <>
      <AcademicsBanner
        title="Academics"
        subtitle="Programs, schools, and partners at National University Clark."
        label="NU Clark"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="relative overflow-x-clip bg-mist pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          {/* Opening — NU-style panel */}
          <section className="pt-8 sm:pt-10">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8eef8] sm:aspect-[5/4]">
                <Image
                  src="/about/campus-exterior.webp"
                  alt="National University Clark campus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center"
                />
              </figure>

              <div className="px-1 pb-2 sm:px-2 lg:pb-0">
                <p className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-royal">
                  Education that works
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                  Find your school at NU Clark
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                  Senior High clusters, five colleges, and partners across Clark
                  — programs built for where you’re headed.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#colleges"
                    className="rounded-full bg-gold px-6 py-3 text-center text-sm font-bold text-navy shadow-md shadow-black/10 transition hover:-translate-y-0.5"
                  >
                    Browse colleges
                  </a>
                  <a
                    href="#senior-high"
                    className="rounded-full px-6 py-3 text-center text-sm font-bold text-navy ring-2 ring-navy/15 transition hover:bg-mist"
                  >
                    Senior High
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mt-8 sm:mt-10">
            <ul className="grid grid-cols-2 gap-4 overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm sm:grid-cols-4 sm:gap-6 sm:p-8">
              {academicStats.map((stat, i) => (
                <Reveal key={stat.label} as="li" delay={i * 40}>
                  <p className="text-2xl font-extrabold text-navy sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate">
                    {stat.label}
                  </p>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* Senior High */}
          <section
            id="senior-high"
            className="mt-14 scroll-mt-[var(--site-header-offset)] sm:mt-20"
          >
            <div className="overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-8 lg:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                <Reveal>
                  <SectionTitle
                    kicker="Grades 11–12"
                    title="Senior High School"
                    text="Three Academic Track clusters with labs, immersion, and a path into college at Clark."
                  />
                  <ul className="space-y-4">
                    {shsClusters.map((c) => (
                      <li
                        key={c.code}
                        className="rounded-2xl border border-line bg-mist px-4 py-4"
                      >
                        <p className="text-sm font-extrabold text-gold">
                          {c.code}
                        </p>
                        <p className="mt-1 font-extrabold text-navy">{c.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate">
                          {c.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/academics/senior-high-school"
                    className="mt-7 inline-flex rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5"
                  >
                    Explore Senior High
                  </Link>
                </Reveal>

                <Reveal delay={60}>
                  <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#e8eef8] sm:aspect-[5/4]">
                    <Image
                      src="/carousel-img-7.jpg"
                      alt="Senior High learning at NU Clark"
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover object-center"
                    />
                  </figure>
                  <p className="mt-3 text-center text-sm font-bold text-navy">
                    STEM · BUEN · ASSH
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Colleges */}
          <section
            id="colleges"
            className="mt-14 scroll-mt-[var(--site-header-offset)] sm:mt-20"
          >
            <Reveal>
              <SectionTitle
                kicker="Colleges"
                title="Five schools. One campus."
                text="Open a school for programs, mission, and vision."
              />
            </Reveal>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {academicSchools.map((school, i) => (
                <Reveal key={school.slug} as="li" delay={i * 60} className="h-full">
                  <Link
                    href={`/academics/${school.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <span className="relative flex h-52 items-end justify-center bg-gradient-to-b from-[#e8eef8] via-[#d4e0f5] to-[#b8c9ec] sm:h-56">
                      <Image
                        src={school.image}
                        alt={school.short}
                        width={380}
                        height={420}
                        className="relative z-10 h-[112%] w-auto object-contain object-bottom transition duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
                      />
                    </span>
                    <span className="flex flex-1 flex-col p-5 sm:p-6">
                      <span className="text-xs font-bold uppercase tracking-[0.14em] text-royal">
                        {school.short}
                      </span>
                      <span className="mt-1 text-lg font-extrabold leading-snug text-navy group-hover:text-royal">
                        {school.title}
                      </span>
                      <span className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                        {school.text}
                      </span>
                      <span className="mt-3 text-xs font-semibold text-navy/60">
                        {school.programs.slice(0, 3).join(" · ")}
                      </span>
                      <span className="mt-4 text-sm font-bold text-royal">
                        View programs →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </section>

          {/* Partners */}
          <section
            id="partners"
            className="mt-14 scroll-mt-[var(--site-header-offset)] sm:mt-20"
          >
            <Reveal>
              <SectionTitle
                kicker="Partners"
                title="Connected to industry"
                text="AILPO partnerships open internships, immersion, and careers."
              />
            </Reveal>

            <div className="grid items-stretch gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6">
              {leadPartner?.image && (
                <Reveal className="overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-sm sm:p-6">
                  <figure className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-mist">
                    <Image
                      src={leadPartner.image}
                      alt={leadPartner.name}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain object-center p-3"
                    />
                  </figure>
                  <p className="mt-4 font-extrabold text-navy">
                    {leadPartner.name}
                  </p>
                  <p className="text-sm text-slate">{leadPartner.note}</p>
                </Reveal>
              )}

              <Reveal delay={50} className="overflow-hidden rounded-3xl border border-line bg-white p-5 shadow-sm sm:p-6">
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {logoPartners.slice(0, 6).map((p) => (
                    <li key={p.name}>
                      <Link
                        href="/linkages"
                        title={p.name}
                        className="flex h-20 items-center justify-center rounded-2xl bg-mist px-3 transition hover:bg-[#e4ebf8]"
                      >
                        <Image
                          src={p.logo!}
                          alt={p.name}
                          width={110}
                          height={44}
                          className="max-h-10 w-auto object-contain"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/linkages"
                  className="mt-6 inline-flex text-sm font-bold text-royal underline-offset-4 hover:underline"
                >
                  Full AILPO network →
                </Link>
              </Reveal>
            </div>
          </section>

          {/* Academic Director */}
          <section
            id="office"
            className="mt-14 scroll-mt-[var(--site-header-offset)] sm:mt-16"
          >
            <div className="grid overflow-hidden rounded-3xl border border-line bg-white shadow-sm lg:grid-cols-2">
              <Reveal className="relative min-h-[16rem] lg:min-h-[22rem]">
                <Image
                  src="/carousel-img-6.jpg"
                  alt="Academic life at NU Clark"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </Reveal>
              <Reveal
                delay={50}
                className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
              >
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                  Support
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                  Academic Director
                </h2>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-16 rounded-full bg-gold" />
                  <span className="h-1.5 w-3 rounded-full bg-gold/50" />
                  <span className="h-1.5 w-1.5 rounded-full bg-gold/30" />
                </div>
                <p className="mt-4 text-base leading-relaxed text-slate">
                  Policies, leadership, and the Language Center — help beyond
                  the lecture hall.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/academics/office-of-the-academic-director"
                    className="rounded-full bg-navy px-6 py-3 text-center text-sm font-bold text-white transition hover:bg-royal"
                  >
                    Office
                  </Link>
                  <Link
                    href="/academics/office-of-the-academic-director/language-center"
                    className="rounded-full px-6 py-3 text-center text-sm font-bold text-navy ring-2 ring-navy/15 transition hover:bg-mist"
                  >
                    Language Center
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* CTA — Nationalian close */}
          <Reveal className="mt-14 sm:mt-16">
            <section className="relative isolate grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
              <svg
                aria-hidden
                viewBox="0 0 400 300"
                preserveAspectRatio="xMaxYMin slice"
                className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-2/3 select-none"
              >
                <polygon
                  points="400,0 220,0 400,200"
                  fill="#f5a000"
                  fillOpacity="0.9"
                />
                <polygon points="400,0 330,0 400,70" className="fill-gold" />
              </svg>
              <svg
                aria-hidden
                viewBox="0 0 300 300"
                preserveAspectRatio="xMinYMax slice"
                className="pointer-events-none absolute bottom-0 left-0 -z-10 h-2/3 w-1/2 select-none"
              >
                <polygon
                  points="0,300 0,120 180,300"
                  className="fill-royal"
                  fillOpacity="0.45"
                />
                <polygon points="0,300 0,220 80,300" className="fill-gold" />
              </svg>

              <div className="text-center md:text-left">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  Admissions
                </p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Ready to study at NU Clark?
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-white/80 md:mx-0">
                  Apply online, or review admissions first.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                  >
                    Apply now
                  </a>
                  <Link
                    href="/admissions"
                    className="inline-block rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                  >
                    Admissions
                  </Link>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
    </>
  );
}
