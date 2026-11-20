import Image from "next/image";
import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | NU Clark Student Life",
  description:
    "Keep up with what's happening at NU Clark, from workshops and assemblies to Dean's List announcements.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Student Life", href: "/student-life" },
  { label: "Events" },
];

export default function EventsPage() {
  return (
    <>
      <AcademicsBanner
        title="Events"
        subtitle="Keep up with what's happening, from school programs to activities that bring students together."
        label="Student Life"
        crumbs={crumbs}
      />

      <main className="mx-auto max-w-6xl px-5 py-8">
        <div className="space-y-8 sm:space-y-10">
          {events.map((e, i) => {
            const upcoming = e.tag.toLowerCase().startsWith("upcoming");
            return (
              <Reveal key={e.slug} delay={(i % 2) * 100}>
                <article
                  id={e.slug}
                  className={`scroll-mt-24 overflow-hidden rounded-3xl border-2 shadow-lg ${
                    upcoming
                      ? "border-gold bg-navy text-white"
                      : "border-line bg-white text-slate"
                  }`}
                >
                  <div
                    className={`grid gap-6 p-6 sm:p-8 ${
                      e.images?.length ? "lg:grid-cols-[1fr_1fr]" : ""
                    }`}
                  >
                    {/* Text */}
                    <div className="min-w-0">
                      <span
                        className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                          upcoming ? "bg-gold text-navy" : "bg-navy text-gold"
                        }`}
                      >
                        {e.tag}
                      </span>

                      <h2
                        className={`mt-3 text-2xl font-extrabold sm:text-3xl ${
                          upcoming ? "text-gold" : "text-navy"
                        }`}
                      >
                        {e.title}
                      </h2>

                      {(e.date || e.venue) && (
                        <div
                          className={`mt-3 space-y-1 border-l-4 border-gold pl-4 text-sm font-semibold ${
                            upcoming ? "text-white/90" : "text-royal"
                          }`}
                        >
                          {e.date && <p>{e.date}</p>}
                          {e.venue && (
                            <p
                              className={
                                upcoming ? "text-white/80" : "text-slate"
                              }
                            >
                              {e.venue}
                            </p>
                          )}
                        </div>
                      )}

                      <div
                        className={`mt-4 space-y-3 ${
                          upcoming ? "text-white/90" : "text-slate"
                        }`}
                      >
                        {e.body.map((para, k) => (
                          <p key={k}>{para}</p>
                        ))}
                      </div>

                      {e.credits && e.credits.length > 0 && (
                        <div
                          className={`mt-4 space-y-1 text-sm ${
                            upcoming ? "text-white/70" : "text-slate"
                          }`}
                        >
                          {e.credits.map((c) => (
                            <p key={c}>{c}</p>
                          ))}
                        </div>
                      )}

                      {(e.links?.length || e.video) && (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {e.video && (
                            <a
                              href={e.video}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block rounded-full bg-gold px-5 py-2 text-sm font-bold text-navy transition hover:-translate-y-0.5"
                            >
                              Watch on Facebook →
                            </a>
                          )}
                          {e.links?.map((l) => (
                            <a
                              key={l.href}
                              href={l.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-block rounded-full px-5 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
                                upcoming
                                  ? "bg-gold text-navy"
                                  : "bg-navy text-white hover:bg-royal"
                              }`}
                            >
                              {l.label} →
                            </a>
                          ))}
                        </div>
                      )}

                      {e.hashtags && e.hashtags.length > 0 && (
                        <p
                          className={`mt-5 text-xs font-semibold ${
                            upcoming ? "text-gold" : "text-royal"
                          }`}
                        >
                          {e.hashtags.join("  ")}
                        </p>
                      )}
                    </div>

                    {/* Pictures */}
                    {e.images && e.images.length > 0 && (
                      <div className="grid content-start gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        {e.images.map((img) => (
                          <div
                            key={img.src}
                            className="relative aspect-square overflow-hidden rounded-2xl border-2 border-gold bg-white"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              fill
                              sizes="(min-width: 1024px) 280px, 100vw"
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {e.gallery && e.gallery.length > 0 && (
                    <div className="border-t border-line px-6 pb-8 pt-6 sm:px-8">
                      <p className="mb-6 text-sm text-slate">
                        Tap a picture to see the full list of names.
                      </p>
                      <div className="space-y-8">
                        {e.gallery.map((group) => (
                          <div key={group.title}>
                            <h3 className="text-lg font-extrabold text-navy sm:text-xl">
                              {group.title}
                            </h3>
                            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                              {group.items.map((img) => (
                                <figure key={img.src}>
                                  <a
                                    href={img.src}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative block aspect-square overflow-hidden rounded-2xl border-2 border-gold bg-navy transition hover:-translate-y-1 hover:shadow-lg"
                                  >
                                    <Image
                                      src={img.src}
                                      alt={img.alt}
                                      fill
                                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
                                      className="object-cover"
                                    />
                                  </a>
                                  <figcaption className="mt-2 text-sm font-semibold text-slate">
                                    {img.caption}
                                  </figcaption>
                                </figure>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>
      </main>
    </>
  );
}
