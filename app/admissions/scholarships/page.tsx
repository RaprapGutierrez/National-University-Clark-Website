import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import AdmissionsTabs from "@/components/AdmissionsTabs";
import Reveal from "@/components/Reveal";
import {
  APPLY_URL,
  SCHOLARSHIPS_URL,
  academicScholarships,
  otherDiscounts,
} from "@/lib/admissions";

export const metadata: Metadata = {
  title: "Scholarships | NU Clark Admissions",
  description:
    "Academic scholarships and discounts available to NU Clark students.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Scholarships" },
];

export default function ScholarshipsPage() {
  return (
    <>
      <AcademicsBanner
        title="Scholarships"
        subtitle="Your hard work in school can lower the cost of your education."
        label="Admissions"
        crumbs={crumbs}
      />
      <AdmissionsTabs active="scholarships" />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <h2 className="text-2xl font-extrabold text-navy">Academic scholarships</h2>
        <div className="mt-5 grid gap-6 lg:grid-cols-3">
          {academicScholarships.map((s, i) => (
            <Reveal key={s.id} delay={i * 100}>
              <article className="flex h-full flex-col rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg">
                <h3 className="text-xl font-extrabold text-gold">{s.name}</h3>
                <p className="mt-1 text-sm text-white/80">{s.for}</p>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gold">
                  Benefits
                </p>
                <ul className="mt-2 space-y-1 font-semibold">
                  {s.benefits.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>

                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-gold">
                  Requirements
                </p>
                <ul className="mt-2 space-y-1 text-sm text-white/90">
                  {s.requirements.map((r) => (
                    <li key={r}>• {r}</li>
                  ))}
                </ul>

                <p className="mt-auto pt-5 text-sm text-white/70">{s.note}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-12 text-2xl font-extrabold text-navy">
          Other discounts
        </h2>
        <p className="mt-2 text-slate">
          Tap a discount to see who qualifies and what documents to submit.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherDiscounts.map((d) => (
            <a
              key={d.id}
              href={`${SCHOLARSHIPS_URL}/${d.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border-2 border-line bg-white p-5 font-bold text-navy shadow transition hover:-translate-y-1 hover:border-gold"
            >
              {d.name} <span className="text-royal">→</span>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
          >
            Apply now →
          </a>
          <a
            href={SCHOLARSHIPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-navy px-6 py-3 font-bold text-white transition hover:bg-royal"
          >
            All scholarships on nu.edu.ph →
          </a>
        </div>
      </main>
    </>
  );
}
