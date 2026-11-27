import type { Metadata } from "next";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import { Icon } from "@/components/Icon";
import FacebookFeed from "@/components/news/FacebookFeed";
import FeaturedLead from "@/components/news/FeaturedLead";
import PhotoBoard from "@/components/news/PhotoBoard";
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

  return (
    <>
      <AcademicsBanner
        title="News"
        subtitle="Campus rankings, awards, partnerships, and moments."
        label="Campus desk"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        {featured ? (
          <>
            <FeaturedLead story={toTeaser(featured)} />

            {rest.length > 0 && (
              <section className="bg-white">
                <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
                  <PhotoBoard
                    posts={rest}
                    heading="More from campus"
                    kicker="Index"
                  />
                </div>
              </section>
            )}
          </>
        ) : (
          <section className="mx-auto max-w-3xl px-4 py-16 sm:px-5">
            <EmptyState
              title="The desk is quiet"
              text="Stories from NU Clark will land here soon."
            />
          </section>
        )}

        <section className="relative isolate overflow-hidden bg-navy text-white">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 top-0 h-48 w-48 rotate-45 bg-gold"
          />
          <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-5 sm:py-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                Keep going
              </p>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                {hasFeed ? "Follow the page" : "Student life & apply"}
              </h2>
              <p className="mt-2 max-w-md text-white/75">
                {hasFeed
                  ? "Live posts from the official campus Facebook."
                  : "Organizations, sports, events — or start your application."}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {hasFeed ? (
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-navy"
                >
                  Facebook
                  <Icon name="external" className="size-3.5" />
                </a>
              ) : (
                <>
                  <Link
                    href="/student-life"
                    className="bg-gold px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-navy"
                  >
                    Student life
                  </Link>
                  <a
                    href={APPLY_URL}
                    className="border border-white/40 px-6 py-3 text-center text-[11px] font-bold uppercase tracking-[0.14em] text-white"
                  >
                    Apply
                  </a>
                </>
              )}
            </div>
          </div>
          {hasFeed && (
            <div className="relative mx-auto max-w-6xl px-4 pb-12 sm:px-5">
              <FacebookFeed pageUrl={FACEBOOK_PAGE_URL} />
            </div>
          )}
        </section>
      </main>
    </>
  );
}
