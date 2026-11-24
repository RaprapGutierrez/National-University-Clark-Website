import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import AdmissionsTabs from "@/components/AdmissionsTabs";
import CheckIcon from "@/components/CheckIcon";
import ProtectedPic from "@/components/ProtectedPic";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { PanelShapes } from "@/components/Shapes";
import { APPLY_URL, SCHOLARSHIPS_URL, otherDiscounts } from "@/lib/admissions";
import {
  ADMISSIONS_EMAIL,
  ADMISSIONS_PHONE,
  SDAO_EMAIL,
  SCHOLARSHIP_NOTICE,
  applySteps,
  documents,
  documentsNote,
  importantNote,
  intro,
  otherInfo,
  pics,
  programs,
  reminders,
  uaeb,
} from "@/lib/scholarships";

export const metadata: Metadata = {
  title: "Scholarships | NU Clark Admissions",
  description:
    "Gold, Blue, White, and Nationalian scholarships, the UAEB scholarship, and how to apply at NU Clark.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Admissions", href: "/admissions" },
  { label: "Scholarships" },
];

const programAccent: Record<string, string> = {
  "Gold Scholar": "from-gold/30 via-transparent to-transparent",
  "Blue Scholar": "from-sky/25 via-transparent to-transparent",
  "White Scholar": "from-white/20 via-transparent to-transparent",
  NSP: "from-royal/40 via-transparent to-transparent",
};

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

      <main className="pb-16">
        {SCHOLARSHIP_NOTICE && (
          <div className="border-b border-gold/40 bg-navy">
            <p className="mx-auto max-w-6xl px-4 py-3.5 text-center text-sm font-bold text-gold sm:px-5 sm:text-base">
              {SCHOLARSHIP_NOTICE}
            </p>
          </div>
        )}

        <div className="mx-auto max-w-6xl space-y-16 px-4 py-10 sm:px-5 sm:py-14">
          {/* Intro */}
          <Reveal>
            <section className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                  A.Y. 2026–2027
                </p>
                <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
                  {intro.title}
                </h2>
                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-16 rounded-full bg-gold" />
                  <span className="h-1.5 w-3 rounded-full bg-gold/50" />
                </div>
                <p className="mt-4 text-lg font-bold text-royal">{intro.lead}</p>
                <div className="mt-3 space-y-3 text-slate">
                  {intro.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
                >
                  NU Quest application →
                </a>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <ProtectedPic {...pics.programs} />
                <ProtectedPic {...pics.application} />
              </div>
            </section>
          </Reveal>

          {/* Programs */}
          <section>
            <SectionTitle
              kicker="Programs"
              title="Scholarship tracks"
              text="Each track has its own eligibility and benefits. Slots are limited."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {programs.map((p, i) => (
                <Reveal key={p.name} delay={(i % 2) * 100}>
                  <article className="relative isolate flex h-full flex-col overflow-hidden rounded-[1.5rem] border-2 border-gold bg-navy text-white shadow-lg">
                    <div
                      aria-hidden
                      className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${programAccent[p.label] ?? "from-gold/20"}`}
                    />
                    <div className="relative z-10 p-4 sm:p-5">
                      <ProtectedPic {...p.image} />
                      <div className="mt-5 flex flex-1 flex-col">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                          {p.label}
                        </p>
                        <h3 className="mt-1 text-xl font-extrabold text-gold sm:text-2xl">
                          {p.name}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-white/90">
                          {p.eligibility}
                        </p>
                        <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                          Benefits
                        </p>
                        <ul className="mt-2 space-y-1.5 font-semibold">
                          {p.benefits.map((b) => (
                            <li key={b} className="flex gap-2">
                              <span className="text-gold" aria-hidden>
                                ◆
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-auto pt-5 text-sm text-white/65">
                          {p.note} Only limited slots are available.
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* How to apply */}
          <section>
            <SectionTitle
              kicker="Process"
              title="How to apply for a scholarship"
            />
            <ol className="grid gap-4 md:grid-cols-2">
              {applySteps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex gap-4 border-l-4 border-gold bg-white px-5 py-5 shadow-[0_12px_40px_-28px_rgba(31,47,122,0.45)]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-royal">{s.date}</p>
                    <h3 className="text-lg font-extrabold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-slate">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.25rem] border border-line bg-white p-6">
                <h3 className="text-xl font-extrabold text-navy">
                  Required documents
                </h3>
                <p className="mt-1 text-sm text-slate">
                  Submit everything online through your NU Quest account.
                </p>
                <ul className="mt-4 space-y-2.5">
                  {documents.map((d) => (
                    <li key={d} className="flex gap-3 text-slate">
                      <CheckIcon />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 border border-dashed border-gold/70 bg-gold/10 p-3 text-sm text-navy">
                  {documentsNote}
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-line bg-white p-6">
                <h3 className="text-xl font-extrabold text-navy">
                  Application reminders
                </h3>
                <ul className="mt-4 space-y-4">
                  {reminders.map((r) => (
                    <li key={r.title} className="border-b border-line pb-4 last:border-0 last:pb-0">
                      <p className="font-extrabold text-navy">{r.title}</p>
                      <p className="mt-1 text-sm text-slate">{r.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <details className="group mt-6 rounded-[1.25rem] border border-line bg-white open:shadow-md">
              <summary className="cursor-pointer list-none px-6 py-5 font-extrabold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  Other information
                  <span className="text-royal transition group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-line px-6 pb-6 pt-4">
                <ul className="space-y-2.5 text-slate">
                  {otherInfo.map((o) => (
                    <li key={o} className="flex gap-3">
                      <span
                        className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                        aria-hidden
                      />
                      {o}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 font-bold text-navy">
                  Important: {importantNote}
                </p>
              </div>
            </details>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <ProtectedPic {...pics.steps} />
              <ProtectedPic {...pics.requirements} />
              <ProtectedPic {...pics.reminders} />
            </div>
          </section>

          {/* UAEB */}
          <section className="relative isolate overflow-hidden rounded-[1.75rem] border-2 border-gold bg-navy p-6 text-white sm:p-10">
            <PanelShapes />
            <div className="relative z-10">
              <SectionTitle
                light
                kicker="SDAO announcement"
                title={uaeb.title}
                text={uaeb.dates}
              />
              <div className="max-w-3xl space-y-3 text-white/90">
                {uaeb.intro.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-extrabold text-gold">
                    Eligibility
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-white/90">
                    {uaeb.eligibility.map((e) => (
                      <li key={e} className="flex gap-3">
                        <CheckIcon className="mt-0.5 shrink-0 text-gold" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-gold">
                    Requirements
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-white/90">
                    {uaeb.requirements.map((r) => (
                      <li key={r} className="flex gap-3">
                        <CheckIcon className="mt-0.5 shrink-0 text-gold" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-gold/50 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-lg font-extrabold text-gold">
                  Recommendation letter
                </h3>
                <p className="mt-2 text-white/90">{uaeb.letter.text}</p>
                <p className="mt-3 text-sm font-bold text-gold">
                  Include in the letter:
                </p>
                <ul className="mt-1 space-y-1 text-sm text-white/90">
                  {uaeb.letter.include.map((l) => (
                    <li key={l}>• {l}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {uaeb.images.map((img) => (
                  <ProtectedPic key={img.src} {...img} />
                ))}
              </div>

              <p className="mt-6 text-sm text-white/80">
                Questions? Email{" "}
                <a
                  className="font-bold text-gold underline"
                  href={`mailto:${SDAO_EMAIL}`}
                >
                  {SDAO_EMAIL}
                </a>
                .
              </p>
            </div>
          </section>

          {/* Other discounts */}
          <section>
            <SectionTitle
              kicker="More aid"
              title="Other discounts"
              text="Tap a discount to see who qualifies and what documents to submit."
            />
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {otherDiscounts.map((d) => (
                <a
                  key={d.id}
                  href={`${SCHOLARSHIPS_URL}/${d.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 border-l-4 border-gold bg-white px-5 py-4 font-bold text-navy shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span>{d.name}</span>
                  <span className="text-royal transition group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="flex flex-col gap-5 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-navy">
                Scholarship questions?
              </h2>
              <p className="mt-2 text-slate">
                Email{" "}
                <a
                  className="font-bold text-royal underline"
                  href={`mailto:${ADMISSIONS_EMAIL}`}
                >
                  {ADMISSIONS_EMAIL}
                </a>{" "}
                or call {ADMISSIONS_PHONE}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
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
          </section>
        </div>
      </main>
    </>
  );
}
