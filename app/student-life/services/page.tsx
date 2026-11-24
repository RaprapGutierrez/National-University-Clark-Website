import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { PanelShapes } from "@/components/Shapes";
import {
  OFFICE_HOURS,
  quickLinks,
  serviceGroups,
  servicesIntro,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | NU Clark Student Life",
  description:
    "Guidance, admissions, registrar, treasury, clinic, ITSO, SDAO, and other student support offices at NU Clark.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Student Life", href: "/student-life" },
  { label: "Services" },
];

export default function ServicesPage() {
  return (
    <>
      <AcademicsBanner
        title="Services"
        subtitle={servicesIntro.lead}
        label="Student Life"
        crumbs={crumbs}
      />

      <main className="pb-16">
        <section className="relative isolate overflow-hidden border-b border-line bg-navy text-white">
          <PanelShapes />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-5 sm:py-12 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                Office hours
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                {servicesIntro.title}
              </h2>
              <p className="mt-3 text-white/85">{OFFICE_HOURS}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-gold hover:text-navy"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-14 px-4 py-10 sm:px-5 sm:py-14">
          {serviceGroups.map((group, gi) => (
            <section key={group.id} id={group.id}>
              <SectionTitle
                kicker={`0${gi + 1}`}
                title={group.title}
                text={group.text}
              />
              <div className="grid gap-4 md:grid-cols-2">
                {group.offices.map((office, i) => (
                  <Reveal key={office.title} delay={(i % 2) * 80}>
                    <article className="group flex h-full gap-4 border-l-4 border-gold bg-white p-5 shadow-[0_16px_40px_-30px_rgba(31,47,122,0.5)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-28px_rgba(31,47,122,0.55)] sm:p-6">
                      <span
                        aria-hidden
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-sm font-extrabold tracking-wide text-gold"
                      >
                        {office.short}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-extrabold text-navy sm:text-xl">
                          {office.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate">
                          {office.text}
                        </p>
                        <div className="mt-4 space-y-1 text-sm">
                          {office.email && (
                            <p>
                              <a
                                className="font-bold text-royal underline-offset-2 hover:underline"
                                href={`mailto:${office.email}`}
                              >
                                {office.email}
                              </a>
                            </p>
                          )}
                          {office.phone && (
                            <p className="font-semibold text-navy">
                              {office.phone}
                            </p>
                          )}
                        </div>
                        {office.href && (
                          <a
                            href={office.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition group-hover:bg-royal"
                          >
                            {office.hrefLabel ?? "Learn more"} →
                          </a>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}
