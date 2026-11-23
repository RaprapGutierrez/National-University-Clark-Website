import Image from "next/image";
import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
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

// Square picture that opens full size in a new tab
function Pic({ src, alt }: { src: string; alt: string }) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block aspect-square overflow-hidden rounded-2xl border-2 border-gold bg-navy transition hover:-translate-y-1 hover:shadow-lg"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
        className="object-cover"
      />
    </a>
  );
}

export default function ScholarshipsPage() {
  return (
    <>
      <AcademicsBanner
        title="Scholarships"
        subtitle="Your hard work in school can lower the cost of your education."
        label="Admissions"
        crumbs={crumbs}
      />

      <main className="mx-auto max-w-6xl space-y-14 px-5 py-8">
        {SCHOLARSHIP_NOTICE && (
          <p className="rounded-2xl border-2 border-gold bg-navy px-5 py-4 text-center font-bold text-gold">
            {SCHOLARSHIP_NOTICE}
          </p>
        )}

        {/* Intro */}
        <Reveal>
          <section className="grid gap-6 rounded-3xl border-2 border-line bg-white p-6 shadow-lg sm:p-8 lg:grid-cols-2">
            <div className="min-w-0">
              <span className="inline-block rounded-full bg-navy px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                A.Y. 2026–2027
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-navy sm:text-3xl">
                {intro.title}
              </h2>
              <p className="mt-3 text-lg font-bold text-royal">{intro.lead}</p>
              <div className="mt-3 space-y-3 text-slate">
                {intro.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
                >
                  NU Quest application →
                </a>
              </div>
            </div>
            <Pic {...pics.programs} />
          </section>
        </Reveal>

        {/* Programs */}
        <section>
          <h2 className="text-2xl font-extrabold text-navy">
            Scholarship programs
          </h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 100}>
                <article className="flex h-full flex-col rounded-3xl border-2 border-gold bg-navy p-5 text-white shadow-lg">
                  <Pic {...p.image} />
                  <div className="mt-5 flex flex-1 flex-col">
                    <p className="text-xs font-bold uppercase tracking-wider text-gold">
                      {p.label}
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-gold">
                      {p.name}
                    </h3>
                    <p className="mt-3 text-sm text-white/90">{p.eligibility}</p>

                    <p className="mt-4 text-xs font-bold uppercase tracking-wider text-gold">
                      Benefits
                    </p>
                    <ul className="mt-1 space-y-1 font-semibold">
                      {p.benefits.map((b) => (
                        <li key={b}>• {b}</li>
                      ))}
                    </ul>

                    <p className="mt-auto pt-4 text-sm text-white/70">
                      {p.note} Only limited slots are available.
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* How to apply */}
        <section>
          <h2 className="text-2xl font-extrabold text-navy">
            How to apply for a scholarship
          </h2>
          <ol className="mt-5 grid gap-6 md:grid-cols-2">
            {applySteps.map((s, i) => (
              <li
                key={s.title}
                className="flex gap-4 rounded-3xl border-2 border-line bg-white p-6 shadow-lg"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-xl font-extrabold text-gold">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-royal">{s.date}</p>
                  <h3 className="text-xl font-extrabold text-navy">{s.title}</h3>
                  <p className="mt-2 text-slate">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border-2 border-line bg-white p-6 shadow-lg">
              <h3 className="text-xl font-extrabold text-navy">
                Required documents
              </h3>
              <p className="mt-1 text-sm text-slate">
                Submit everything online through your NU Quest account.
              </p>
              <ul className="mt-4 space-y-2 text-slate">
                {documents.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-gold">✔</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-xl border border-dashed border-gold bg-gold/10 p-3 text-sm text-navy">
                {documentsNote}
              </p>
            </div>

            <div className="rounded-3xl border-2 border-line bg-white p-6 shadow-lg">
              <h3 className="text-xl font-extrabold text-navy">
                Application reminders
              </h3>
              <ul className="mt-4 space-y-3 text-slate">
                {reminders.map((r) => (
                  <li key={r.title}>
                    <b className="text-navy">{r.title}.</b> {r.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border-2 border-line bg-white p-6 shadow-lg">
            <h3 className="text-xl font-extrabold text-navy">
              Other information
            </h3>
            <ul className="mt-4 space-y-2 text-slate">
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
            <p className="mt-4 font-bold text-navy">Important: {importantNote}</p>
          </div>

          <p className="mt-6 text-sm text-slate">
            Tap a picture to view it full size.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            <Pic {...pics.steps} />
            <Pic {...pics.requirements} />
            <Pic {...pics.reminders} />
          </div>
        </section>

        {/* UAEB */}
        <section className="rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg sm:p-8">
          <span className="inline-block rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy">
            SDAO announcement
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-gold sm:text-3xl">
            {uaeb.title}
          </h2>
          <p className="mt-2 font-bold">{uaeb.dates}</p>
          <div className="mt-3 max-w-3xl space-y-3 text-white/90">
            {uaeb.intro.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-extrabold text-gold">Eligibility</h3>
              <ul className="mt-3 space-y-2 text-white/90">
                {uaeb.eligibility.map((e) => (
                  <li key={e} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-gold">✔</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-gold">Requirements</h3>
              <ul className="mt-3 space-y-2 text-white/90">
                {uaeb.requirements.map((r) => (
                  <li key={r} className="flex gap-3">
                    <span aria-hidden className="mt-1 text-gold">✔</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-gold/60 bg-white/5 p-5">
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

          <p className="mt-6 text-sm text-white/70">
            Tap a picture to view it full size.
          </p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {uaeb.images.map((img) => (
              <Pic key={img.src} {...img} />
            ))}
          </div>

          <p className="mt-6 text-sm text-white/80">
            Questions? Email{" "}
            <a className="font-bold text-gold underline" href={`mailto:${SDAO_EMAIL}`}>
              {SDAO_EMAIL}
            </a>
            .
          </p>
        </section>

        {/* Other discounts */}
        <section>
          <h2 className="text-2xl font-extrabold text-navy">Other discounts</h2>
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
        </section>

        {/* Contact */}
        <section className="rounded-3xl border-2 border-line bg-white p-6 shadow-lg">
          <h2 className="text-xl font-extrabold text-navy">
            Scholarship questions?
          </h2>
          <p className="mt-2 text-slate">
            Email{" "}
            <a className="font-bold text-royal underline" href={`mailto:${ADMISSIONS_EMAIL}`}>
              {ADMISSIONS_EMAIL}
            </a>{" "}
            or call {ADMISSIONS_PHONE}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
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
      </main>
    </>
  );
}