import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import AdmissionsTabs from "@/components/AdmissionsTabs";
import RequirementsPanel from "@/components/admissions/RequirementsPanel";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
  APPLY_URL,
  ENROLLMENT_NOTE,
  requirementGroups,
} from "@/lib/admissions";

export const metadata: Metadata = {
  title: "Admission Requirements | NU Clark",
  description:
    "Documents needed for Senior High School, college freshmen, transferees, and second-degree students at NU Clark.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Requirements" },
];

export default function RequirementsPage() {
  return (
    <>
      <AcademicsBanner
        title="Requirements"
        subtitle="Choose your applicant type and prepare the documents on the checklist."
        label="Admissions"
        crumbs={crumbs}
      />

      <AdmissionsTabs active="requirements" />

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
            kicker="What to prepare"
            title="Documents by applicant type"
            text="One checklist at a time — switch between Senior High, freshman, transferee, and second-degree."
          />

          <Reveal>
            <RequirementsPanel groups={requirementGroups} />
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
            >
              Apply now →
            </a>
            <Link
              href="/admissions/apply-now"
              className="rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-royal"
            >
              See how to apply →
            </Link>
            <p className="w-full text-sm text-slate sm:ml-auto sm:w-auto sm:max-w-sm sm:text-right">
              Admissions confirms the final list for your case after you submit
              the online form.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
