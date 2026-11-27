import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import { LANGUAGE_CENTER_URL } from "@/lib/nav-menu";

export const metadata: Metadata = {
  title:"Language Center | NU Clark",
  description:
"NU Clark Language Center — programs and support for language learning.",
};

export default function LanguageCenterPage() {
  const crumbs = [
    { label:"Home", href:"/" },
    { label:"Academics", href:"/academics" },
    {
      label:"Office of the Academic Director",
      href:"/academics/office-of-the-academic-director",
    },
    { label:"Language Center" },
  ];

  return (
    <>
      <AcademicsBanner
        title="Language Center"
        subtitle="Programs and support from the NU Clark Language Center."
        label="Academics"
        crumbs={crumbs}
      />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <Reveal>
          <article className="rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="border-l-4 border-gold pl-4">
              <span className="inline-block rounded-full bg-royal/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-royal">
                Office of the Academic Director
              </span>
              <h2 className="mt-3 text-2xl font-extrabold text-navy">
                NU Clark Language Center
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-slate">
                Visit the Language Center on Facebook for updates, programs, and
                announcements.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={LANGUAGE_CENTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5 hover:bg-[#ffd84a]"
              >
                Open Facebook page
                <span aria-hidden="true" className="text-base leading-none">
                  →
                </span>
              </a>
              <Link
                href="/academics/office-of-the-academic-director"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-3 text-center font-bold text-navy transition hover:border-royal hover:text-royal"
              >
                ← Back to Office of the Academic Director
              </Link>
            </div>
          </article>
        </Reveal>
      </main>
    </>
  );
}
