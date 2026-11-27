import Image from "next/image";
import type { EventPost } from "@/lib/events";

export default function EventCard({
  event,
  featured = false,
  compact = false,
}: {
  event: EventPost;
  featured?: boolean;
  /** Shorter body for dense upcoming grids */
  compact?: boolean;
}) {
  const upcoming = event.tag.toLowerCase().startsWith("upcoming");
  const dark = featured || upcoming;
  const body = compact ? event.body.slice(0, 2) : event.body;

  return (
    <article
      id={event.slug}
      className={`scroll-mt-[var(--site-header-offset)] overflow-hidden ${
        featured
          ?"rounded-[1.75rem] border-2 border-gold bg-navy text-white shadow-xl"
          : dark
            ?"rounded-[1.35rem] border border-gold/70 bg-navy text-white"
            :"rounded-[1.35rem] border border-line bg-white text-slate shadow-[0_18px_44px_-32px_rgba(31,47,122,0.55)]"
      }`}
    >
      <div
        className={`grid gap-6 p-5 sm:p-7 ${
          event.images?.length
            ? featured
              ?"lg:grid-cols-[1.15fr_0.85fr]"
              :"lg:grid-cols-[1fr_0.9fr]"
            :""
        }`}
      >
        <div className="min-w-0">
          <span
            className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
              dark ?"bg-gold text-navy" :"bg-navy text-gold"
            }`}
          >
            {event.tag}
          </span>

          <h3
            className={`mt-3 font-extrabold leading-tight ${
              featured
                ?"text-2xl text-gold"
                : dark
                  ?"text-xl text-gold"
                  :"text-xl text-navy"
            }`}
          >
            {event.title}
          </h3>

          {(event.date || event.venue) && (
            <div
              className={`mt-3 space-y-1 border-l-4 border-gold pl-4 text-sm font-semibold ${
                dark ?"text-white/90" :"text-royal"
              }`}
            >
              {event.date && <p>{event.date}</p>}
              {event.venue && (
                <p className={dark ?"text-white/75" :"text-slate"}>
                  {event.venue}
                </p>
              )}
            </div>
          )}

          <div
            className={`mt-4 space-y-3 ${
              featured ?"text-base text-white/90" : dark ?"text-white/85" :"text-slate"
            }`}
          >
            {body.map((para, k) => (
              <p key={k}>{para}</p>
            ))}
            {compact && event.body.length > 2 && (
              <p className={dark ?"text-white/60" :"text-slate/80"}>…</p>
            )}
          </div>

          {event.credits && event.credits.length > 0 && !compact && (
            <div
              className={`mt-4 space-y-1 text-sm ${
                dark ?"text-white/65" :"text-slate"
              }`}
            >
              {event.credits.map((c) => (
                <p key={c}>{c}</p>
              ))}
            </div>
          )}

          {event.videoSrc && (
            <video
              controls
              playsInline
              preload="metadata"
              src={event.videoSrc}
              className="mt-5 w-full rounded-2xl border-2 border-gold bg-black"
            />
          )}

          {(event.links?.length || event.video) && (
            <div className="mt-5 flex flex-wrap gap-2.5">
              {event.video && (
                <a
                  href={event.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Watch on Facebook →
                </a>
              )}
              {event.links?.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded-full px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                    dark
                      ?"bg-white/15 text-white ring-1 ring-white/30 hover:bg-white/25"
                      :"bg-navy text-white hover:bg-royal"
                  }`}
                >
                  {l.label} →
                </a>
              ))}
            </div>
          )}

          {event.hashtags && event.hashtags.length > 0 && (
            <p
              className={`mt-4 text-xs font-semibold ${
                dark ?"text-gold" :"text-royal"
              }`}
            >
              {event.hashtags.join("")}
            </p>
          )}
        </div>

        {event.images && event.images.length > 0 && (
          <div
            className={`grid content-start gap-3 ${
              event.images.length > 1 ?"sm:grid-cols-2" :""
            }`}
          >
            {event.images.slice(0, featured ? 4 : 2).map((img) => (
              <div
                key={img.src}
                className={`relative overflow-hidden rounded-2xl border-2 border-gold bg-white ${
                  featured ?"aspect-[4/5]" :"aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {event.gallery && event.gallery.length > 0 && (
        <details className="group border-t border-white/15 open:bg-black/10">
          <summary
            className={`cursor-pointer list-none px-5 py-4 text-sm font-bold marker:content-none sm:px-7 [&::-webkit-details-marker]:hidden ${
              dark ?"text-gold" :"text-navy"
            }`}
          >
            <span className="flex items-center justify-between gap-3">
              View photo gallery
              <span className="transition group-open:rotate-45">+</span>
            </span>
          </summary>
          <div className="space-y-8 px-5 pb-7 sm:px-7">
            {event.gallery.map((group) => (
              <div key={group.title}>
                <h4
                  className={`text-base font-extrabold ${
                    dark ?"text-white" :"text-navy"
                  }`}
                >
                  {group.title}
                </h4>
                <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((img) => (
                    <figure key={img.src}>
                      <a
                        href={img.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block aspect-square overflow-hidden rounded-xl border-2 border-gold bg-navy transition hover:-translate-y-0.5"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 280px, 45vw"
                          className="object-cover"
                        />
                      </a>
                      <figcaption
                        className={`mt-1.5 text-xs font-semibold ${
                          dark ?"text-white/70" :"text-slate"
                        }`}
                      >
                        {img.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}
