import type { Metadata } from "next";
import AcademicsBanner from "@/components/AcademicsBanner";
import EventCard from "@/components/events/EventCard";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { events, isUpcoming } from "@/lib/events";

export const metadata: Metadata = {
  title: "Events | NU Clark Student Life",
  description:
    "Keep up with what's happening at NU Clark, from workshops and assemblies to Christmas celebrations and Paskung KabaleNU.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Student Life", href: "/student-life" },
  { label: "Events" },
];

export default function EventsPage() {
  const upcoming = events.filter(isUpcoming);
  const past = events.filter((e) => !isUpcoming(e));
  const featured = upcoming[0];
  const moreUpcoming = upcoming.slice(1);

  return (
    <>
      <AcademicsBanner
        title="Events"
        subtitle="Workshops, assemblies, Christmas on campus, and moments that bring Nationalians together."
        label="Student Life"
        crumbs={crumbs}
      />

      <main className="pb-16">
        {featured && (
          <section className="border-b border-line bg-gradient-to-b from-navy/[0.06] to-transparent">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
              <SectionTitle
                kicker="Coming up"
                title="Featured event"
                text="Register early — slots and deadlines move fast."
              />
              <Reveal>
                <EventCard event={featured} featured />
              </Reveal>
            </div>
          </section>
        )}

        {moreUpcoming.length > 0 && (
          <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
            <SectionTitle
              kicker="Calendar"
              title="More upcoming"
              text="Paskung KabaleNU and other programs still ahead."
            />
            <div className="grid gap-5 lg:grid-cols-2">
              {moreUpcoming.map((e, i) => (
                <Reveal key={e.slug} delay={(i % 2) * 80}>
                  <EventCard event={e} compact />
                </Reveal>
              ))}
            </div>
          </section>
        )}

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
          <SectionTitle
            kicker="Campus life"
            title="Highlights & look-backs"
            text="Recent ceremonies, assemblies, and celebrations at NU Clark."
          />
          <div className="space-y-6">
            {past.map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 60}>
                <EventCard event={e} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
