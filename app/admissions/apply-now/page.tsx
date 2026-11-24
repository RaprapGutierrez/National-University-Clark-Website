import type { Metadata } from "next";
import AdmissionsCta from "@/components/admissions/AdmissionsCta";
import AdmissionsShell from "@/components/admissions/AdmissionsShell";
import ApplySteps from "@/components/admissions/ApplySteps";
import SectionTitle from "@/components/SectionTitle";
import { ENROLLMENT_NOTE } from "@/lib/admissions";

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
        <SectionTitle
          kicker="Your path"
          title="How enrollment works"
          text="Follow the sequence below. Start the online form anytime, then gather documents when Admissions emails you."
        />
        <ApplySteps />
      </div>

      <div className="px-4 sm:px-5">
        <AdmissionsCta />
      </div>
    </AdmissionsShell>
  );
}
