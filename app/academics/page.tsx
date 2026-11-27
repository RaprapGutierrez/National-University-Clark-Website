import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
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

      <main className="overflow-x-clip bg-mist pb-20">
        {/* Light hero — people + gold/navy accents, not a dark cave */}
        <section className="relative isolate overflow-hidden border-b border-line bg-gradient-to-br from-white via-[#eef3fb] to-[#d4e0f5]">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-gold/25 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-royal/15 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl items-end gap-6 px-4 pt-10 sm:px-5 sm:pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
            <Reveal className="pb-10 sm:pb-14 lg:pb-16">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-royal">
                Academics
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-4xl lg:text-5xl">
                Find your school
                <span className="mt-1 block text-royal">at NU Clark</span>
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate sm:text-lg">
                Senior High clusters, five colleges, and partners across Clark —
                education that works for where you’re headed.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#colleges"
                  className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
                >
                  Browse colleges
                  <Icon name="arrow-right" className="size-3.5" />
                </a>
                <a
                  href="#senior-high"
                  className="inline-flex items-center gap-2 border border-navy/20 bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
                >
                  Senior High
                </a>
              </div>
            </Reveal>

            <Reveal
              delay={70}
              className="relative flex min-h-[17rem] items-end justify-center sm:min-h-[21rem] lg:min-h-[26rem]"
            >
              <div className="relative h-full w-full max-w-xl">
                <Image
                  src="/school-seas.png"
                  alt=""
                  width={400}
                  height={460}
                  className="absolute bottom-0 left-0 w-[42%] object-contain object-bottom drop-shadow-lg"
                  priority
                />
                <Image
                  src="/school-engineering.png"
                  alt=""
                  width={520}
                  height={560}
                  className="absolute bottom-0 left-[22%] z-10 w-[56%] object-contain object-bottom drop-shadow-xl"
                  priority
                />
                <Image
                  src="/school-sabm.png"
                  alt=""
                  width={440}
                  height={500}
                  className="absolute bottom-0 right-0 z-20 w-[46%] object-contain object-bottom drop-shadow-lg"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Bright stats band */}
        <section className="border-b border-line bg-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4 sm:gap-8 sm:px-5 sm:py-10">
            {academicStats.map((stat, i) => (
              <Reveal key={stat.label} as="li" delay={i * 30}>
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

        {/* SHS — light panel + photo, not a dark overlay */}
        <section
          id="senior-high"
          className="scroll-mt-[var(--site-header-offset)] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
              <Reveal>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-royal">
                  Grades 11–12
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">
                  Senior High School
                </h2>
                <p className="mt-3 text-base leading-relaxed text-slate">
                  Three Academic Track clusters with labs, immersion, and a
                  path into college at Clark.
                </p>
                <ul className="mt-6 space-y-4">
                  {shsClusters.map((c) => (
                    <li key={c.code} className="flex gap-4">
                      <span className="shrink-0 text-sm font-extrabold text-gold">
                        {c.code}
                      </span>
                      <span>
                        <span className="block font-extrabold text-navy">
                          {c.name}
                        </span>
                        <span className="mt-0.5 block text-sm text-slate">
                          {c.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/academics/senior-high-school"
                  className="mt-7 inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-navy hover:text-white"
                >
                  Explore Senior High
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
              </Reveal>
              <Reveal delay={60}>
                <figure className="relative aspect-[4/3] overflow-hidden shadow-[0_24px_60px_-28px_rgba(31,47,122,0.45)] sm:aspect-[5/4]">
                  <Image
                    src="/carousel-img-4.jpg"
                    alt="Senior High at NU Clark"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/70 to-transparent p-5">
                    <p className="text-sm font-bold text-white">
                      STEM · BUEN · ASSH
                    </p>
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Colleges — bright stage + airy cards */}
        <section
          id="colleges"
          className="scroll-mt-[var(--site-header-offset)] bg-mist"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-royal">
                Colleges
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">
                Five schools. One campus.
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                Tap a school to open programs, mission, and vision.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {academicSchools.map((school, i) => (
                <Reveal key={school.slug} as="li" delay={i * 40}>
                  <Link
                    href={`/academics/${school.slug}`}
                    className="group block"
                  >
                    <span className="relative flex h-56 items-end justify-center bg-gradient-to-b from-[#d7e2f6] via-[#b8c9ec] to-[#8fa8dc] sm:h-60">
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-1.5 bg-gold"
                      />
                      <Image
                        src={school.image}
                        alt={school.short}
                        width={380}
                        height={420}
                        className="relative z-10 h-[112%] w-auto object-contain object-bottom transition duration-500 group-hover:scale-[1.05] motion-reduce:transition-none"
                      />
                    </span>
                    <span className="mt-4 block text-xs font-bold uppercase tracking-wide text-royal">
                      {school.short}
                    </span>
                    <span className="mt-1 block text-lg font-extrabold leading-snug text-navy group-hover:text-royal">
                      {school.title}
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-slate">
                      {school.text}
                    </span>
                    <span className="mt-3 block text-xs font-semibold text-navy/65">
                      {school.programs.slice(0, 3).join(" · ")}
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-royal">
                      View programs
                      <Icon
                        name="arrow-right"
                        className="size-3.5 transition group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Partners — light, airy */}
        <section
          id="partners"
          className="scroll-mt-[var(--site-header-offset)] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-royal">
                Partners
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy">
                Connected to industry
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                AILPO partnerships open internships, immersion, and careers.
              </p>
            </Reveal>

            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
              {leadPartner?.image && (
                <Reveal>
                  <figure className="relative aspect-[16/11] overflow-hidden bg-[#eef3fb] shadow-[0_20px_50px_-30px_rgba(31,47,122,0.4)]">
                    <Image
                      src={leadPartner.image}
                      alt={leadPartner.name}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-contain object-center p-3"
                    />
                  </figure>
                  <p className="mt-3 font-extrabold text-navy">
                    {leadPartner.name}
                  </p>
                  <p className="text-sm text-slate">{leadPartner.note}</p>
                </Reveal>
              )}
              <Reveal delay={50}>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {logoPartners.slice(0, 6).map((p) => (
                    <li key={p.name}>
                      <Link
                        href="/linkages"
                        title={p.name}
                        className="flex h-20 items-center justify-center bg-mist px-3 transition hover:bg-[#e4ebf8]"
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
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-royal underline-offset-4 hover:underline"
                >
                  Full AILPO network
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Support — bright photo, light copy panel */}
        <section
          id="office"
          className="scroll-mt-[var(--site-header-offset)] bg-mist"
        >
          <div className="mx-auto grid max-w-6xl overflow-hidden bg-white shadow-[0_24px_60px_-36px_rgba(31,47,122,0.45)] lg:grid-cols-2">
            <Reveal className="relative min-h-[15rem] sm:min-h-[18rem] lg:min-h-[22rem]">
              <Image
                src="/student-5.jpg"
                alt="Students at NU Clark"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </Reveal>
            <Reveal
              delay={50}
              className="flex flex-col justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10"
            >
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-royal">
                Support
              </p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Academic Director
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate">
                Policies, leadership, and the Language Center — help beyond the
                lecture hall.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/academics/office-of-the-academic-director"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-royal"
                >
                  Office
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
                <Link
                  href="/academics/office-of-the-academic-director/language-center"
                  className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-royal"
                >
                  Language Center
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA — gold lift, not another dark slab */}
        <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-5 sm:pt-14">
          <div className="flex flex-col gap-5 bg-gradient-to-r from-navy to-royal px-6 py-8 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-10">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">
                Ready to study at NU Clark?
              </h2>
              <p className="mt-1 text-sm text-white/80">
                Apply online, or review admissions first.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-white"
              >
                Apply now
                <Icon name="arrow-right" className="size-3.5" />
              </a>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 border border-white/40 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Admissions
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
