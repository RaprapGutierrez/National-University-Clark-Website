import Image from "next/image";
import { universityOverview } from "@/lib/about";
import { AboutIcon } from "./AboutIcon";

const organizations = {
  qs:"QS Stars",
  tuv:"TÜV Rheinland",
  microsoft:"Microsoft",
  ched:"CHED",
  faap:"FAAP",
} as const;

const recognitions = [
  { organization:"qs", title:"Three-star rating" },
  { organization:"tuv", title:"ISO 9001:2015 Certificate" },
  { organization:"microsoft", title:"Showcase School 2025–2026" },
  { organization:"ched", title:"Autonomous Award" },
  { organization:"ched", title:"Center of Excellence in IT Education" },
  { organization:"faap", title:"Candidate Status, MS Sanitary Engineering" },
  { organization:"faap", title:"Level 3, AB English" },
  { organization:"faap", title:"Level 3, Computer Engineering" },
  { organization:"faap", title:"Level 3, Bachelor of Secondary Education" },
  { organization:"faap", title:"Level 3, Business Administration" },
] as const;

export function UniversityRecognitions() {
  return (
    <section aria-labelledby="university-recognitions">
      <h2
        id="university-recognitions"
        className="border-b-2 border-gold pb-3 font-serif text-[1.85rem] leading-tight tracking-tight text-navy"
      >
        Accreditation, recognitions, and certifications
      </h2>
      <p className="mt-4 max-w-prose leading-relaxed text-slate">
        National University lists these awards, certifications, and program
        statuses in its institutional overview. For current campus-specific
        information, see the{" "}
        <a
          href="#clark-records"
          className="font-semibold text-royal underline underline-offset-4"
        >
          NU Clark public records
        </a>
        .
      </p>

      <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {recognitions.map(({ organization, title }) => (
          <li
            key={title}
            className="flex min-w-0 flex-col items-start rounded-lg border border-line bg-white p-3 sm:p-4"
          >
            <p className="text-xs leading-snug font-bold tracking-wide text-royal">
              {organizations[organization]}
            </p>
            <div className="relative my-4 h-17 w-full sm:h-20">
              <Image
                src={`/about/recognition-${organization}.webp`}
                alt=""
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-snug font-semibold text-navy">
              {title}
            </p>
          </li>
        ))}
      </ul>

      <a
        href={universityOverview}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-royal underline underline-offset-4"
      >
        View National University’s published overview
        <AboutIcon name="external" className="size-3.5 shrink-0" />
      </a>
    </section>
  );
}
