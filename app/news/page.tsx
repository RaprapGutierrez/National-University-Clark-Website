import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import EmptyState from "@/components/EmptyState";
import EventCard from "@/components/events/EventCard";
import FacebookFeed from "@/components/news/FacebookFeed";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { FACEBOOK_PAGE_URL, news } from "@/lib/news";

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
        subtitle="Stories and announcements from NU Clark, straight from our Facebook page."
        label="Latest"
        crumbs={crumbs}
      />

      <main className="pb-16">
        {featured && (
          <section className="border-b border-line bg-gradient-to-b from-navy/[0.06] to-transparent">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
              <SectionTitle
                kicker="Top story"
                title="Featured news"
                text="The latest from around the NU Clark campus."
              />
              <Reveal>
                <EventCard event={featured} featured />
              </Reveal>
            </div>
          </section>
        )}

        {rest.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
            <SectionTitle
              kicker="More stories"
              title="Recent news"
              text="Rankings, awards, partnerships, and campus events."
            />
            <div className="space-y-6">
              {rest.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 60}>
                  <EventCard event={post} />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        {hasFeed && (
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
            <div className="grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
              <Reveal>
                <div className="border-l-4 border-gold pl-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                    Facebook
                  </p>
                  <h2 className="mt-1 text-3xl font-extrabold text-navy sm:text-4xl">
                    Follow NU Clark on Facebook
                  </h2>
                  <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                  <p className="mt-4 max-w-xl text-lg text-slate">
                    Our newest posts appear here. For photos, videos, and
                    comments, open the page on Facebook.
                  </p>
                  <a
                    href={FACEBOOK_PAGE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-royal"
                  >
                    Open our Facebook page
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <FacebookFeed pageUrl={FACEBOOK_PAGE_URL} />
              </Reveal>
            </div>
          </section>
        )}

        {!featured && !hasFeed && (
          <section className="mx-auto max-w-3xl px-4 py-10 sm:px-5 sm:py-12">
            <EmptyState
              title="News is on its way"
              text="Stories and announcements from NU Clark will appear here soon."
            />
          </section>
        )}
      </main>
    </>
  );
}
