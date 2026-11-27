import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  admissionsEmail,
  campusContact,
  campusDirectors,
  campusMap,
  founderPortrait,
  milestones,
  qualityManagement,
  strategicDirections,
  universityOverview,
} from "@/lib/about";
import { AboutIcon } from "./AboutIcon";
import { CampusGallery, TourVideo } from "./CampusMedia";
import { GraduateAttributes, UniversityValues } from "./UniversityValues";
import { UniversityBoard } from "./UniversityBoard";
import { UniversityRecognitions } from "./UniversityRecognitions";

const heading ="mb-5 font-serif text-[1.85rem] leading-tight tracking-tight text-[#101f55]";
const copy ="leading-relaxed text-[#475264]";
const rule ="border-[#d8d4c7]";
const ruledList ="divide-y divide-[#d8d4c7] border-y border-[#d8d4c7]";
const sourceLink ="inline-flex items-center gap-1.5 text-sm font-semibold text-[#24477b] underline decoration-[#24477b]/35 underline-offset-4 hover:decoration-current";

function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className={sourceLink}>
      {children}
      <AboutIcon name="external" className="size-3.5 shrink-0" />
    </a>
  );
}

export function OurStory() {
  return (
    <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-12">
      <section aria-labelledby="from-quiapo">
        <h2 id="from-quiapo" className="mb-5 font-serif text-[clamp(2.1rem,3.5vw,3.15rem)] leading-[1.05] tracking-tight text-[#101f55]">
          From Quiapo to Clark
        </h2>
        <p className={copy}>
          National University began in 1900 as Colegio Filipino, a school founded by Don Mariano Fortunato Jhocson in Quiapo, Manila.
        </p>
        <p className={`mt-4 ${copy}`}>
          In 2023, NU opened its tenth campus in Mabalacat City, bringing senior high school and college programs to Clark.
        </p>
        <div className="mt-5">
          <SourceLink href={universityOverview}>Read National University’s history</SourceLink>
        </div>
        <figure className="mt-7 max-w-md">
          <Image
            {...founderPortrait}
            width={612}
            height={714}
            sizes="(min-width: 1280px) 448px, (min-width: 768px) 45vw, min(92vw, 448px)"
            className="h-auto w-full bg-[#e8e0cc]"
          />
          <figcaption className={`mt-3 border-l-2 border-[#bd8b17] pl-3 text-xs ${copy}`}>
            Don Mariano F. Jhocson, founder of National University
          </figcaption>
        </figure>
      </section>

      <section aria-labelledby="milestones">
        <h2 id="milestones" className={heading}>Milestones</h2>
        <ol className="ml-1 border-l border-[#b9c1d3]">
          {milestones.map(({ year, title, text, href, link }) => (
            <li
              key={year}
              className="relative pb-6 pl-5 last:pb-0 before:absolute before:top-2 before:-left-[5px] before:size-[9px] before:border before:border-[#101f55] before:bg-gold before:content-['']"
            >
              <time dateTime={year} className="block font-serif text-2xl leading-7 tabular-nums text-[#101f55]">
                {year}
              </time>
              <h3 className="mt-1.5 font-semibold text-[#101f55]">{title}</h3>
              <p className={`mt-1 ${copy}`}>{text}</p>
              {href && (
                <div className="mt-2">
                  <SourceLink href={href}>{link}</SourceLink>
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export function Leadership() {
  return (
    <>
      <section aria-labelledby="organization">
        <h2 id="organization" className={heading}>Campus organizational chart</h2>
        <div className={`border-y bg-[#f1eee4] px-4 py-6 sm:px-7 sm:py-8 ${rule}`}>
          <ul>
            <li className="grid items-stretch sm:grid-cols-[8.5rem_2.5rem_minmax(0,1fr)] lg:grid-cols-[10.5rem_3.5rem_minmax(0,1fr)]">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="inline-flex min-h-13 items-center gap-2.5 border-l-[3px] border-[#bd8b17] bg-[#101f55] px-4 py-2 text-sm font-semibold text-white sm:w-full">
                  <AboutIcon name="building" className="size-5 shrink-0 text-gold" />
                  NU Clark
                </div>
              </div>
              <div aria-hidden="true" className="relative grid h-5 justify-items-center sm:h-auto sm:block">
                <div className="h-full w-px bg-[#8a816b] sm:absolute sm:top-1/2 sm:left-0 sm:h-px sm:w-1/2" />
                <div className="absolute inset-y-1/4 left-1/2 hidden w-px bg-[#8a816b] sm:block" />
                <div className="absolute top-1/4 right-0 left-1/2 hidden h-px bg-[#8a816b] sm:block" />
                <div className="absolute right-0 bottom-1/4 left-1/2 hidden h-px bg-[#8a816b] sm:block" />
              </div>
              <ul className="grid gap-2.5 sm:grid-rows-2 sm:gap-3">
                {campusDirectors.map(({ role, name, description }) => (
                  <li key={role} className={`grid content-center gap-1 border bg-[#fffdf8] px-4 py-3.5 sm:px-5 ${rule}`}>
                    <h3 className="text-xs font-semibold text-[#24477b]">{role}</h3>
                    <p className="font-serif text-xl leading-tight tracking-tight text-[#101f55]">{name}</p>
                    <p className={`text-sm ${copy}`}>{description}</p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <SourceLink href="https://www.linkedin.com/posts/nationaluph_congratulations-to-our-executive-director-activity-7378744285229150208-2Igv">
            NU leadership announcement
          </SourceLink>
          <SourceLink href={campusContact}>Request the full organizational chart</SourceLink>
        </div>
      </section>

      <section aria-labelledby="campus-offices">
        <h2 id="campus-offices" className={heading}>Campus offices</h2>
        <dl className={ruledList}>
          {[
            { name:"Admissions", description:"Applications, enrollment, and visits." },
            { name:"Registrar", description:"Student records and academic documents." },
            { name:"Accounting", description:"Tuition payments and student accounts." },
            { name:"Guidance Services", description:"Counseling and student well-being." },
          ].map(({ name, description }) => (
            <div key={name} className="grid gap-1 py-3.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] sm:gap-5">
              <dt className="font-semibold text-[#101f55]">{name}</dt>
              <dd className={copy}>{description}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4">
          <SourceLink href={campusContact}>Open the campus contact directory</SourceLink>
        </div>
      </section>
      <UniversityBoard />
    </>
  );
}

export function Vmgo() {
  return (
    <>
      <div>
        <div className={`grid gap-6 border-b pb-6 sm:grid-cols-2 sm:gap-0 sm:pb-7 ${rule}`}>
          <section className="sm:pr-7">
            <h2 className="mb-3 font-serif text-[1.85rem] leading-none text-[#101f55]">Vision</h2>
            <p className={copy}>
              National University aims to lead in Asia and earn international recognition for teaching, research, and sustainable community development that contribute to nation-building.
            </p>
          </section>
          <section className={`border-t pt-6 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-7 ${rule}`}>
            <h2 className="mb-3 font-serif text-[1.85rem] leading-none text-[#101f55]">Mission</h2>
            <p className={copy}>
              Guided by its core values and the Filipino heritage it calls Dynamic Filipinism, NU commits to quality education that is accessible, affordable, and transformative.
            </p>
          </section>
        </div>
        <div className="mt-4">
          <SourceLink href={universityOverview}>Read the official mission, vision, and values</SourceLink>
        </div>
      </div>

      <section aria-labelledby="goals">
        <h2 id="goals" className={heading}>Goals and objectives</h2>
        <p className={`mb-4 ${copy}`}>A summary of National University’s 2026–2031 strategic directions.</p>
        <dl className={ruledList}>
          {strategicDirections.map(({ goal, objective }) => (
            <div
              key={goal}
              className="grid gap-1.5 py-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-6"
            >
              <dt className="font-semibold text-[#101f55]">{goal}</dt>
              <dd className={copy}>{objective}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-4">
          <SourceLink href={qualityManagement}>Read the university’s strategic directions</SourceLink>
        </div>
      </section>

      <UniversityValues />
      <GraduateAttributes />
    </>
  );
}

const publicRecords = [
  {
    category:"CHED Region III",
    title:"Regional program registry",
    description:"Look up National University Clark, Incorporated under Pampanga to see its listed programs.",
    href:"https://region3.ched.gov.ph/resources/program-registry",
    link:"Open the CHED program registry",
  },
  {
    category:"Government recognition",
    title:"AB Political Science",
    description:"NU Clark’s program page lists CHED Government Recognition for AB Political Science.",
    href:"https://www.nu.edu.ph/nu-clark/programs/ab-political-science",
    link:"See the published program record",
  },
  {
    category:"PACUCOA orientation visit",
    title:"Senior High School",
    description:"National University reported a PACUCOA orientation visit for NU Clark’s Senior High School programs.",
    href:"https://www.linkedin.com/posts/nationaluph_%F0%9D%90%8D%F0%9D%90%94-%F0%9D%90%82%F0%9D%90%A5%F0%9D%90%9A%F0%9D%90%AB%F0%9D%90%A4-%F0%9D%90%96%F0%9D%90%9E%F0%9D%90%A5%F0%9D%90%9C%F0%9D%90%A8%F0%9D%90%A6%F0%9D%90%9E%F0%9D%90%AC-%F0%9D%90%8F%F0%9D%90%80%F0%9D%90%82%F0%9D%90%94-activity-7455139026103296000-UErS",
    link:"Read NU’s announcement",
  },
];

export function Accreditation() {
  return (
    <>
      <section aria-labelledby="clark-records">
        <h2 id="clark-records" className={`${heading} scroll-mt-6`}>Public records for NU Clark</h2>
        <ul className={ruledList}>
          {publicRecords.map(({ category, title, description, href, link }) => (
            <li key={title} className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 py-5 sm:gap-4 sm:py-6">
              <AboutIcon name="file" className="mt-1 size-5 text-[#24477b]" />
              <div>
                <p className="mb-1 text-xs font-semibold text-[#24477b]">{category}</p>
                <h3 className="font-serif text-2xl leading-tight text-[#101f55]">{title}</h3>
                <p className={`mt-2 ${copy}`}>{description}</p>
                <div className="mt-2">
                  <SourceLink href={href}>{link}</SourceLink>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="verify-program">
        <h2 id="verify-program" className={heading}>What to verify before enrolling</h2>
        <dl className="grid gap-5 sm:grid-cols-2 sm:gap-7">
          <div>
            <dt className="font-semibold text-[#101f55]">Government recognition</dt>
            <dd className={`mt-1 ${copy}`}>Ask for the CHED recognition or authorization that applies to your specific program at NU Clark.</dd>
          </div>
          <div>
            <dt className="font-semibold text-[#101f55]">Program accreditation</dt>
            <dd className={`mt-1 ${copy}`}>Ask for the accrediting body, current accreditation level, and validity dates for the Clark offering.</dd>
          </div>
        </dl>
        <div className="mt-6 border-l-2 border-[#bd8b17] bg-[#f1eee4] px-4 py-4 sm:px-5">
          <p className={`mb-2 ${copy}`}>
            Contact NU Clark with the exact program name to request its current documentation.
          </p>
          <SourceLink href={campusContact}>Contact NU Clark</SourceLink>
        </div>
        <p className={`mt-5 ${copy}`}>
          National University also publishes its quality commitments and the PACUCOA program list for NU Manila.
        </p>
        <div className="mt-2">
          <SourceLink href={qualityManagement}>View NU’s quality assurance resources</SourceLink>
        </div>
      </section>
      <UniversityRecognitions />
    </>
  );
}

export function CampusTour() {
  return (
    <>
      <TourVideo />
      <CampusGallery />
      <section id="visit" aria-labelledby="plan-visit">
        <h2 id="plan-visit" className={heading}>Plan your visit</h2>
        <div className={`grid gap-5 border-y py-5 sm:grid-cols-2 sm:gap-7 sm:py-6 ${rule}`}>
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-[#101f55]">
              <AboutIcon name="pin" className="size-4 shrink-0" />
              Campus address
            </h3>
            <address className={`mt-2 not-italic ${copy}`}>
              Clark Tech Hub 8, SM City Clark Expansion<br />
              Barangay Dau, Mabalacat City, Pampanga 2010
            </address>
            <div className="mt-3">
              <SourceLink href={campusMap}>Get directions</SourceLink>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-[#101f55]">Admissions Office</h3>
            <p className={`mt-2 ${copy}`}>
              Monday to Friday, 8 am to 5 pm.<br />
              <a href="tel:+639190814634" className={sourceLink}>0919 081 4634</a><br />
              <a href={`mailto:${admissionsEmail}`} className={`break-all ${sourceLink}`}>{admissionsEmail}</a>
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
          <SourceLink href={campusContact}>Ask about a campus visit</SourceLink>
          <Link href="/academics" className={sourceLink}>
            Explore programs
            <AboutIcon name="arrow-right" className="size-3.5 shrink-0" />
          </Link>
        </div>
      </section>
    </>
  );
}

