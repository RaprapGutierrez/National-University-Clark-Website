import type { Metadata } from "next";
import AdmissionsCta from "@/components/admissions/AdmissionsCta";
import AdmissionsShell from "@/components/admissions/AdmissionsShell";
import ApplySteps from "@/components/admissions/ApplySteps";
import { APPLY_URL, ENROLLMENT_NOTE } from "@/lib/admissions";

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
    <AdmissionsShell
      active="apply-now"
      title="Apply Now"
      subtitle="From your application form to your Certificate of Registration — six clear steps."
      crumbs={crumbs}
      notice={ENROLLMENT_NOTE || undefined}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-14">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
              Your path
            </p>
            <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-4xl">
              How enrollment works
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate">
              Follow the sequence below. Start the online form anytime, then
              gather documents when Admissions emails you.
            </p>
          </div>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-royal"
          >
            Start application →
          </a>
        </div>

        <ApplySteps />
      </div>

      <div className="px-4 sm:px-5">
        <AdmissionsCta />
      </div>
    </AdmissionsShell>
  );
}
