import Image from "next/image";
import type { Researcher } from "@/lib/research";

export default function ResearcherCard({ person }: { person: Researcher }) {
  // Skip titles like "Dr." or "Engr." so the initials use the first and last name
  const initials = person.name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .filter((c, i, all) => i === 0 || i === all.length - 1)
    .join("")
    .toUpperCase();

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
          {person.title && (
            <p className="text-sm font-semibold text-royal">{person.title}</p>
          )}
          {person.department && (
            <p className="text-xs text-slate">{person.department}</p>
          )}
        </div>
      </div>

      {person.areas && person.areas.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {person.areas.map((a) => (
            <li
              key={a}
              className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy"
            >
              {a}
            </li>
          ))}
        </ul>
      )}
      {person.bio && <p className="mt-3 text-sm text-slate">{person.bio}</p>}

      {person.links && person.links.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {person.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold leading-none text-white transition hover:bg-royal"
            >
              {l.label}
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
