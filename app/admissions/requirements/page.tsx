import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import { APPLY_URL, requirementGroups } from "@/lib/admissions";

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

// Check icon (replaces the emoji check mark)
function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0 text-gold"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function RequirementsPage() {
  return (
    <>
      <AcademicsBanner
        title="Admission Requirements"
        subtitle="Pick the category that matches you and prepare these documents."
        label="Admissions"
        crumbs={crumbs}
      />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {requirementGroups.map((g, i) => (
            <Reveal key={`${g.level}-${g.title}`} delay={(i % 2) * 100}>
              <section className="h-full rounded-3xl border-2 border-line bg-white p-6 shadow-lg">
                <span className="inline-block rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                  {g.level}
                </span>
                <h2 className="mt-3 text-2xl font-extrabold text-navy">
                  {g.title}
                </h2>
                <ul className="mt-4 space-y-2 text-slate">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate">
          After you submit your application, the Admissions Office will email
          you the exact list for your case.
        </p>

        <a
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
        >
          Apply now →
        </a>
      </main>
    </>
  );
}
