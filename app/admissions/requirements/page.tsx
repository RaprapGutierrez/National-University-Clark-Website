import type { Metadata } from "next";
import AdmissionsCta from "@/components/admissions/AdmissionsCta";
import AdmissionsShell from "@/components/admissions/AdmissionsShell";
import RequirementsPanel from "@/components/admissions/RequirementsPanel";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import {
  ENROLLMENT_NOTE,
  requirementGroups,
  requirementTips,
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
    <AdmissionsShell
      active="requirements"
      title="Requirements"
      subtitle="Pick your applicant type, prepare the checklist, then apply online."
      crumbs={crumbs}
      notice={ENROLLMENT_NOTE || undefined}
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 py-10 sm:px-5 sm:py-14">
        <section>
          <SectionTitle
            showAccent={false}
            kicker="What to prepare"
            title="Documents by applicant type"
            text="Switch between Senior High, freshman, transferee, and second-degree to see your list."
          />

          <Reveal>
            <RequirementsPanel groups={requirementGroups} />
          </Reveal>
        </section>

        <section>
          <SectionTitle
            showAccent={false}
            kicker="Before you go"
            title="Quick tips"
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {requirementTips.map((tip, i) => (
              <Reveal key={tip.title} delay={i * 70}>
                <article className="h-full border-l-4 border-navy bg-white px-5 py-5 ring-1 ring-line">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-royal">
                    Tip {i + 1}
                  </p>
                  <h3 className="mt-2 text-lg font-extrabold text-navy">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate">
                    {tip.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </div>

      <div className="px-4 sm:px-5">
        <AdmissionsCta
          kicker="Next step"
          title="Ready to submit your documents?"
          text="Apply online first. Admissions will email the exact list for your case."
        />
      </div>
    </AdmissionsShell>
  );
}
