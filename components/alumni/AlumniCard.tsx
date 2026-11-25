import Image from "next/image";
import type { Alumnus } from "@/lib/alumni";

export default function AlumniCard({ person }: { person: Alumnus }) {
  const initials = person.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
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
          <h4 className="break-words font-extrabold text-navy">{person.name}</h4>
          {person.batch && (
            <p className="text-xs font-bold uppercase tracking-wider text-royal">
              Batch {person.batch}
            </p>
          )}
        </div>
      </div>

      {person.headline && (
        <p className="mt-4 text-sm font-semibold text-navy">{person.headline}</p>
      )}
      {person.story && (
        <p className="mt-2 text-sm text-slate">{person.story}</p>
      )}

      {person.linkedin && (
        <div className="mt-auto pt-4">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-bold leading-none text-white transition hover:bg-royal"
          >
            LinkedIn
            <span aria-hidden="true">→</span>
          </a>
        </div>
      )}
    </article>
  );
}
