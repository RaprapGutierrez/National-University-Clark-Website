import type { Metadata } from "next";
import Link from "next/link";
import AdmissionsCta from "@/components/admissions/AdmissionsCta";
import AdmissionsShell from "@/components/admissions/AdmissionsShell";
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

const jumpLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#how-to-apply", label: "How to apply" },
  { href: "#uaeb", label: "UAEB" },
  { href: "#discounts", label: "Other discounts" },
];

const programAccent: Record<
  string,
  { bar: string; chip: string; label: string }
> = {
  "Gold Scholar": {
    bar: "bg-gold",
    chip: "bg-gold text-navy",
    label: "text-gold",
  },
  "Blue Scholar": {
    bar: "bg-sky",
    chip: "bg-sky text-navy",
    label: "text-sky",
  },
  "White Scholar": {
    bar: "bg-white",
    chip: "bg-white text-navy",
    label: "text-white",
  },
  NSP: {
    bar: "bg-royal",
    chip: "bg-royal text-white",
    label: "text-gold",
  },
};

export default function ScholarshipsPage() {
  return (
    <AdmissionsShell
      active="scholarships"
      title="Scholarships"
      subtitle="Academic scholarships, UAEB support, and other tuition discounts at NU Clark."
      crumbs={crumbs}
      notice={SCHOLARSHIP_NOTICE || undefined}
    >
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-10 sm:px-5 sm:py-14">
        {/* Jump links */}
        <nav
          aria-label="On this page"
          className="flex flex-wrap gap-2 border-b border-line pb-5"
        >
          {jumpLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy ring-1 ring-line transition hover:ring-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Intro */}
        <Reveal>
          <section className="grid items-stretch gap-6 overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-[0_24px_60px_-36px_rgba(31,47,122,0.4)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                A.Y. 2026–2027
              </p>
              <h2 className="mt-2 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                {intro.title}
              </h2>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-1.5 w-16 rounded-full bg-gold" />
                <span className="h-1.5 w-3 rounded-full bg-gold/50" />
              </div>
              <p className="mt-4 text-lg font-bold text-royal">{intro.lead}</p>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-slate">
                {intro.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#programs"
                  className="rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
                >
                  See programs →
                </a>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:-translate-y-0.5"
                >
                  NU Quest →
                </a>
              </div>
            </div>
            <div className="relative min-h-[280px] border-t border-line bg-navy p-4 sm:p-5 lg:border-l lg:border-t-0">
              <ProtectedPic
                {...pics.programs}
                sizes="(min-width: 1024px) 420px, 100vw"
              />
              <p className="mt-3 text-center text-xs font-semibold text-white/70">
                Tap the poster to preview
              </p>
            </div>
          </section>
        </Reveal>

        {/* Programs */}
        <section id="programs" className="scroll-mt-28">
          <SectionTitle
            kicker="Programs"
            title="Scholarship tracks"
            text="Compare eligibility and benefits. Slots are limited each cycle."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {programs.map((p, i) => {
              const accent = programAccent[p.label] ?? programAccent.NSP;
              return (
                <Reveal key={p.name} delay={(i % 2) * 90}>
                  <article className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border-2 border-gold bg-navy text-white shadow-lg">
                    <div className={`h-1.5 w-full ${accent.bar}`} />
                    <div className="grid flex-1 gap-0 sm:grid-cols-[minmax(0,11rem)_minmax(0,1fr)]">
                      <div className="border-b border-gold/30 p-4 sm:border-b-0 sm:border-r sm:border-gold/30">
                        <ProtectedPic {...p.image} sizes="180px" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <span
                          className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${accent.chip}`}
                        >
                          {p.label}
                        </span>
                        <h3 className={`mt-2 text-xl font-extrabold ${accent.label}`}>
                          {p.name}
                        </h3>
                        <p className="mt-3 text-base leading-relaxed text-white">
                          {p.eligibility}
                        </p>
                        <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-gold">
                          Benefits
                        </p>
                        <ul className="mt-2 flex flex-wrap gap-2">
                          {p.benefits.map((b) => (
                            <li
                              key={b}
                              className="rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/25"
                            >
                              {b}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-auto pt-4 text-sm leading-relaxed text-white/75">
                          {p.note} Limited slots only.
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* How to apply */}
        <section id="how-to-apply" className="scroll-mt-28">
          <SectionTitle
            kicker="Process"
            title="How to apply for a scholarship"
            text="Two steps when the call is open — submit online, then watch your email."
          />

          <ol className="relative grid gap-4 md:grid-cols-2">
            {applySteps.map((s, i) => (
              <li
                key={s.title}
                className="relative rounded-[1.25rem] border border-line bg-white p-6 shadow-[0_14px_40px_-28px_rgba(31,47,122,0.45)]"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-extrabold text-gold">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-royal">{s.date}</p>
                    <h3 className="mt-1 text-xl font-extrabold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-slate">
                      {s.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-[1.25rem] border border-line bg-white p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-extrabold text-navy">
                  Required documents
                </h3>
                <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-bold text-navy ring-1 ring-line">
                  {documents.length} items
                </span>
              </div>
              <p className="mt-1 text-sm text-slate">
                Submit everything online through your NU Quest account.
              </p>
              <ol className="mt-5 space-y-2.5">
                {documents.map((d, i) => (
                  <li
                    key={d}
                    className="flex gap-3 rounded-xl border border-line bg-mist/50 px-4 py-3.5"
                  >
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-extrabold text-gold"
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1 text-base font-medium leading-snug text-navy">
                      {d}
                    </span>
                  </li>
                ))}
              </ol>
              <p className="mt-4 rounded-xl border border-dashed border-gold/70 bg-gold/10 p-4 text-base leading-relaxed text-navy">
                {documentsNote}
              </p>
            </div>

            <div className="rounded-[1.25rem] border border-line bg-white p-6">
              <h3 className="text-xl font-extrabold text-navy">
                Application reminders
              </h3>
              <ul className="mt-5 space-y-3">
                {reminders.map((r, i) => (
                  <li
                    key={r.title}
                    className="rounded-xl border border-line bg-mist/40 p-4"
                  >
                    <p className="flex items-center gap-2 text-base font-extrabold text-navy">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-sm text-navy">
                        {i + 1}
                      </span>
                      {r.title}
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-slate">
                      {r.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <details className="group mt-5 rounded-[1.25rem] border border-line bg-white open:shadow-md">
            <summary className="cursor-pointer list-none px-6 py-5 text-base font-extrabold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                Other information & important notes
                <span className="text-royal transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-line px-6 pb-6 pt-4">
              <ul className="space-y-3 text-base leading-relaxed text-slate">
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
              <p className="mt-4 rounded-xl bg-navy px-4 py-3.5 text-base font-bold leading-relaxed text-gold">
                Important: {importantNote}
              </p>
            </div>
          </details>

          <details className="group mt-3 rounded-[1.25rem] border border-line bg-white open:shadow-md">
            <summary className="cursor-pointer list-none px-6 py-5 font-extrabold text-navy marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="flex items-center justify-between gap-3">
                Reference posters
                <span className="text-royal transition group-open:rotate-45">
                  +
                </span>
              </span>
            </summary>
            <div className="border-t border-line px-6 pb-6 pt-4">
              <p className="mb-4 text-sm text-slate">
                Tap a poster to preview it full size.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <ProtectedPic {...pics.application} />
                <ProtectedPic {...pics.steps} />
                <ProtectedPic {...pics.requirements} />
                <ProtectedPic {...pics.reminders} />
              </div>
            </div>
          </details>
        </section>

        {/* UAEB */}
        <section
          id="uaeb"
          className="relative isolate scroll-mt-28 rounded-[1.75rem] border-2 border-gold bg-navy p-6 text-white sm:p-8 lg:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[1.6rem]"
          >
            <PanelShapes />
          </div>
          <div className="relative z-10">
            <SectionTitle
              light
              kicker="SDAO announcement"
              title={uaeb.title}
              text={uaeb.dates}
            />
            <div className="max-w-3xl space-y-4 text-base leading-relaxed text-white sm:text-lg">
              {uaeb.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-8 grid gap-5 xl:grid-cols-2">
              <div className="rounded-2xl border border-gold/50 bg-black/20 p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-gold">Eligibility</h3>
                <ul className="mt-4 space-y-4 text-base leading-relaxed text-white">
                  {uaeb.eligibility.map((e) => (
                    <li key={e} className="flex gap-3">
                      <CheckIcon className="mt-1 shrink-0 text-gold" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gold/50 bg-black/20 p-5 sm:p-6">
                <h3 className="text-xl font-extrabold text-gold">
                  Requirements
                </h3>
                <ul className="mt-4 space-y-4 text-base leading-relaxed text-white">
                  {uaeb.requirements.map((r) => (
                    <li key={r} className="flex gap-3">
                      <CheckIcon className="mt-1 shrink-0 text-gold" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-gold/50 bg-black/20 p-5 sm:p-6">
              <h3 className="text-xl font-extrabold text-gold">
                Recommendation letter
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white">
                {uaeb.letter.text}
              </p>
              <p className="mt-4 text-base font-bold text-gold">
                Include in the letter:
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {uaeb.letter.include.map((l) => (
                  <li
                    key={l}
                    className="rounded-xl bg-navy/60 px-4 py-3 text-base leading-snug text-white ring-1 ring-gold/40"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <details className="group mt-6 rounded-2xl border border-gold/50 bg-black/20 open:pb-5">
              <summary className="cursor-pointer list-none px-5 py-4 text-base font-bold text-gold marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  View UAEB posters
                  <span
                    aria-hidden
                    className="grid h-8 w-8 place-items-center rounded-full bg-gold text-lg text-navy transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="grid gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3">
                {uaeb.images.map((img) => (
                  <ProtectedPic key={img.src} {...img} />
                ))}
              </div>
            </details>

            <p className="mt-6 text-base leading-relaxed text-white">
              Questions? Email{" "}
              <a
                className="font-bold text-gold underline underline-offset-2"
                href={`mailto:${SDAO_EMAIL}`}
              >
                {SDAO_EMAIL}
              </a>
              .
            </p>
          </div>
        </section>

        {/* Other discounts */}
        <section id="discounts" className="scroll-mt-28">
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
                className="group flex items-center justify-between gap-3 rounded-2xl border border-line bg-white px-5 py-4 text-base font-bold leading-snug text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:shadow-md"
              >
                <span className="border-l-4 border-gold pl-3">{d.name}</span>
                <span className="text-royal transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="flex flex-col gap-5 rounded-[1.5rem] border border-line bg-white p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
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
            <Link
              href="/admissions/requirements"
              className="mt-3 inline-flex text-sm font-bold text-royal underline-offset-4 hover:underline"
            >
              Also preparing admission documents? →
            </Link>
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
              All on nu.edu.ph →
            </a>
          </div>
        </section>
      </div>

      <div className="px-4 sm:px-5">
        <AdmissionsCta
          kicker="Enroll at NU Clark"
          title="Start your application anytime"
          text="Scholarship cycles open on announced dates. You can still apply for admission and prepare for the next call."
        />
      </div>
    </AdmissionsShell>
  );
}
