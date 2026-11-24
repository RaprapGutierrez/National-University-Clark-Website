import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import AdmissionsTabs from "@/components/AdmissionsTabs";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { PanelShapes } from "@/components/Shapes";
import {
  APPLY_URL,
  CONTACT_URL,
  ENROLLMENT_NOTE,
  steps,
} from "@/lib/admissions";

export const metadata: Metadata = {
  title: "Apply Now | NU Clark Admissions",
  description:
    "Follow these six steps to apply and enroll at National University Clark.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Apply Now" },
];

export default function ApplyNowPage() {
  return (
    <>
      <AcademicsBanner
        title="Apply Now"
        subtitle="From your application form to your Certificate of Registration — six clear steps."
        label="Admissions"
        crumbs={crumbs}
      />

      <AdmissionsTabs active="apply-now" />

      <main className="pb-16">
        {ENROLLMENT_NOTE && (
          <div className="border-b border-gold/40 bg-navy">
            <p className="mx-auto max-w-6xl px-4 py-3.5 text-sm font-bold text-gold sm:px-5 sm:text-base">
              {ENROLLMENT_NOTE}
            </p>
          </div>
        )}

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14">
          <SectionTitle
            kicker="Your path"
            title="How enrollment works"
            text="Follow the sequence below. You can start the online form anytime, then gather documents when Admissions emails you."
          />

          <ol className="relative mx-auto max-w-3xl">
            <span
              aria-hidden
              className="absolute bottom-8 left-[1.35rem] top-8 w-0.5 origin-top bg-gradient-to-b from-gold via-royal/40 to-line sm:left-[1.6rem]"
            />

            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 70} as="li" className="relative">
                <div className="grid grid-cols-[auto_1fr] gap-4 pb-10 sm:gap-6 sm:pb-12">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-gold bg-navy text-lg font-extrabold text-gold shadow-[0_0_0_6px_var(--color-mist)] sm:h-14 sm:w-14 sm:text-xl">
                    {i + 1}
                  </span>
                  <div className="min-w-0 pt-1 sm:pt-2">
                    <h3 className="text-xl font-extrabold text-navy sm:text-2xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-slate">{s.text}</p>
                    {i === 2 && (
                      <Link
                        href="/admissions/requirements"
                        className="mt-3 inline-flex text-sm font-bold text-royal underline-offset-4 hover:underline"
                      >
                        See full requirements →
                      </Link>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <section className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border-2 border-gold bg-navy px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
          <PanelShapes />
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
              Ready when you are
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
              Start your NU Clark application
            </h2>
            <p className="mt-3 text-white/85">
              Open NU Quest to begin. Looking for aid? Check scholarships before
              you enroll.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
              >
                Start your application →
              </a>
              <Link
                href="/admissions/scholarships"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
              >
                View scholarships
              </Link>
              <a
                href={CONTACT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 font-bold text-gold underline-offset-4 hover:underline"
              >
                Contact Admissions
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
