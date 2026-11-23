import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
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
        subtitle="From your application form to your Certificate of Registration, in six steps."
        label="Admissions"
        crumbs={crumbs}
      />

      <main className="mx-auto max-w-6xl px-5 py-8">
        {ENROLLMENT_NOTE && (
          <p className="mb-8 rounded-2xl border-2 border-gold bg-navy px-5 py-4 font-bold text-gold">
            {ENROLLMENT_NOTE}
          </p>
        )}

        <ol className="grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 100}>
              <li className="flex h-full gap-4 rounded-3xl border-2 border-line bg-white p-6 shadow-lg">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-xl font-extrabold text-gold">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-xl font-extrabold text-navy">
                    {s.title}
                  </h2>
                  <p className="mt-2 text-slate">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
          >
            Start your application →
          </a>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-royal"
          >
            Have questions? Contact us →
          </a>
        </div>
      </main>
    </>
  );
}
