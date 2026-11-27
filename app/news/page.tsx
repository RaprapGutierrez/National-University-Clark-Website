import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import FacebookFeed from "@/components/news/FacebookFeed";
import NewsGrid from "@/components/news/NewsGrid";
import StoryTeaser from "@/components/news/StoryTeaser";
import Reveal from "@/components/Reveal";
import { PanelShapes } from "@/components/Shapes";
import { APPLY_URL } from "@/lib/site";
import { FACEBOOK_PAGE_URL, news } from "@/lib/news";
import { toTeaser } from "@/lib/story";

export const metadata: Metadata = {
  title: "News | NU Clark",
  description:
    "The latest news and announcements from National University Clark: global rankings, awards, international partnerships, and campus events.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "News" }];

export default function NewsPage() {
  const [featured, ...rest] = news;
  const hasFeed = Boolean(FACEBOOK_PAGE_URL);
  const tags = Array.from(new Set(news.map((n) => n.tag)));

  return (
    <>
      <AcademicsBanner
        title="News"
        subtitle="Rankings, awards, partnerships, and campus stories — scannable, not endless."
        label="Campus desk"
        crumbs={crumbs}
      />

      <main className="overflow-x-clip pb-16">
        {featured ? (
          <>
            {/* Lead story — one screen, not a wall of text */}
            <section className="relative border-b border-line bg-navy text-white">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full border-[28px] border-gold/10"
              />
              <div className="relative mx-auto max-w-6xl px-4 py-8 sm:px-5 sm:py-12">
                <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                      Lead story
                    </p>
                    <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">
                      On the desk
                    </h2>
                  </div>
                  <p className="max-w-xs text-sm text-white/70">
                    {news.length} stories · {tags.length} topics
                  </p>
                </div>
                <Reveal>
                  <StoryTeaser story={toTeaser(featured)} featured />
                </Reveal>
              </div>
            </section>

            {rest.length > 0 && (
              <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
                <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                      Browse
                    </p>
                    <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl lg:text-4xl">
                      Recent stories
                    </h2>
                    <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                  </div>
                  <p className="text-sm text-slate">
                    Tap a topic, open only what you want to read.
                  </p>
                </div>
                <NewsGrid posts={rest} />
              </section>
            )}
          </>
        ) : (
          <section className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-12">
            <EmptyState
              title="News is on its way"
              text="Stories and announcements from NU Clark will appear here soon."
            />
          </section>
        )}

        {hasFeed ? (
          <section className="border-t border-line bg-white/70">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
              <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
                <Reveal>
                  <div className="border-l-4 border-gold pl-5">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                      Facebook
                    </p>
                    <h2 className="mt-1 text-2xl font-extrabold text-navy sm:text-3xl">
                      Follow NU Clark
                    </h2>
                    <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                    <p className="mt-4 max-w-xl text-base text-slate">
                      Live posts from the campus page.
                    </p>
                    <a
                      href={FACEBOOK_PAGE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-royal"
                    >
                      Open Facebook
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <FacebookFeed pageUrl={FACEBOOK_PAGE_URL} />
                </Reveal>
              </div>
            </div>
          </section>
        ) : (
          <section className="mx-auto max-w-6xl px-4 sm:px-5">
            <Reveal>
              <div className="relative isolate grid items-center gap-6 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
                <PanelShapes />
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                    Next stop
                  </p>
                  <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                    Campus life & admissions
                  </h2>
                  <p className="mt-2 max-w-xl text-white/80">
                    Keep exploring, or start your application.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <Link
                    href="/student-life"
                    className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                  >
                    Student life
                  </Link>
                  <a
                    href={APPLY_URL}
                    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                  >
                    Apply now
                  </a>
                </div>
              </div>
            </Reveal>
          </section>
        )}
      </main>
    </>
  );
}
