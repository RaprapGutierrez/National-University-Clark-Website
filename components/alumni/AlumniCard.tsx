import Image from "next/image";
import { Icon } from "@/components/Icon";
import type { Alumnus } from "@/lib/alumni";

export default function AlumniCard({ person }: { person: Alumnus }) {
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const meta = [person.batch ? `Batch ${person.batch}` : null, person.status]
    .filter(Boolean)
    .join(" · ");
  const workplace = [person.company, person.companyLocation]
    .filter(Boolean)
    .join(" · ");
  const hasSocial = person.facebook || person.instagram;

  return (
    <article
      id={person.slug}
      className="group flex h-full scroll-mt-[var(--site-header-offset)] flex-col rounded-3xl border border-line bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-royal hover:shadow-md motion-reduce:transform-none"
    >
      <div className="flex items-center gap-4">
        {person.photo ? (
          <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold">
            <Image
              src={person.photo}
              alt={person.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        ) : (
          <span
            aria-hidden="true"
            className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy text-lg font-extrabold text-gold"
          >
            {initials}
          </span>
        )}
        <div className="min-w-0">
          <h4 className="break-words font-extrabold text-navy">
            {person.name}
          </h4>
          {meta && (
            <p className="text-xs font-bold uppercase tracking-wider text-royal">
              {meta}
            </p>
          )}
        </div>
      </div>

      {(person.jobClassification || workplace) && (
        <div className="mt-4">
          {person.jobClassification && (
            <p className="text-sm font-semibold text-navy">
              {person.jobClassification}
            </p>
          )}
          {workplace && <p className="text-sm text-slate">{workplace}</p>}
        </div>
      )}

      {person.furtherStudies && (
        <p className="mt-3 text-sm text-slate">
          <span className="font-semibold text-navy">Further studies: </span>
          {person.furtherStudies}
        </p>
      )}

      {person.licensure && person.licensure.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-2">
          {person.licensure.map((l) => (
            <li
              key={l}
              className="rounded-full bg-gold/20 px-3 py-1 text-xs font-semibold text-navy"
            >
              {l}
            </li>
          ))}
        </ul>
      )}

      {person.story && (
        <p className="mt-3 text-sm text-slate">{person.story}</p>
      )}

      {(person.linkedin || hasSocial) && (
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold leading-none text-white transition hover:bg-royal"
            >
              LinkedIn
              <Icon name="external" className="size-3.5" />
            </a>
          )}
          {person.facebook && (
            <a
              href={person.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on Facebook (opens in a new tab)`}
              className="text-sm font-bold text-royal underline-offset-4 hover:underline"
            >
              Facebook
            </a>
          )}
          {person.instagram && (
            <a
              href={person.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} on Instagram (opens in a new tab)`}
              className="text-sm font-bold text-royal underline-offset-4 hover:underline"
            >
              Instagram
            </a>
          )}
        </div>
      )}
    </article>
  );
}
