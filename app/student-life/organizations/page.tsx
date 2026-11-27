import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import {
  featuredOrgs,
  orgCategories,
  organizations,
  organizationsIntro,
  orgsByCategory,
} from "@/lib/organizations";

export const metadata: Metadata = {
  title: "Organizations | NU Clark Student Life",
  description:
    "Student councils, academic societies, campus media, and interest groups at National University Clark.",
};

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Student Life", href: "/student-life" },
  { label: "Organizations" },
];

function OrgLogo({
  src,
  name,
  size = "md",
}: {
  src: string;
  name: string;
  size?: "sm" | "md" | "lg";
}) {
  const box =
    size === "lg"
      ? "h-24 w-24 sm:h-28 sm:w-28"
      : size === "sm"
        ? "h-14 w-14"
        : "h-16 w-16 sm:h-[4.5rem] sm:w-[4.5rem]";

  return (
    <div
      className={`relative shrink-0 overflow-hidden border border-line bg-white ${box}`}
    >
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes={size === "lg" ? "7rem" : size === "sm" ? "3.5rem" : "4.5rem"}
        className="object-contain object-center p-2"
      />
    </div>
  );
}

export default function OrganizationsPage() {
  return (
    <>
      <AcademicsBanner
        title="Organizations"
        subtitle="Lead. Serve. Create. Belong — find your org at NU Clark."
        label="Student Life"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
            <Reveal
              className="flex flex-col justify-center px-4 py-12 sm:px-5 sm:py-14 lg:pr-10"
            >
              <p className="text-sm font-semibold text-royal">
                {organizationsIntro.kicker}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                {organizationsIntro.heading}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate">
                {organizationsIntro.lead}
              </p>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-navy/80">
                {organizationsIntro.howToJoin}
              </p>
              <p className="mt-8 text-3xl font-extrabold tabular-nums text-navy">
                {organizations.length}
                <span className="ml-2 text-base font-semibold text-slate">
                  recognized organizations
                </span>
              </p>
            </Reveal>

            <Reveal delay={60}>
              <figure className="relative aspect-[3/2] overflow-hidden bg-navy lg:aspect-auto lg:h-full lg:min-h-[22rem]">
                <Image
                  src="/student-2.jpg"
                  alt="NU Clark students"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_28%]"
                  priority
                />
              </figure>
            </Reveal>
          </div>
        </section>

        {/* Jump links */}
        <section className="border-b border-line bg-mist">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-5 gap-y-2 px-4 py-5 sm:px-5">
            {orgCategories.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="text-sm font-semibold text-navy underline-offset-2 hover:text-royal hover:underline"
              >
                {c.title}
              </a>
            ))}
          </div>
        </section>

        {/* Featured governance */}
        <section
          id="governance"
          className="scroll-mt-[var(--site-header-offset)] bg-white"
        >
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Student governance
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                The council and commission that represent you and keep student
                life running.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {featuredOrgs.map((org, i) => (
                <Reveal key={org.abbr} as="li" delay={i * 50}>
                  <article className="flex gap-4 border border-line bg-mist/60 p-5 sm:gap-5 sm:p-6">
                    <OrgLogo src={org.logo} name={org.name} size="lg" />
                    <div className="min-w-0 self-center">
                      <p className="text-xs font-bold uppercase tracking-wide text-royal">
                        {org.abbr}
                      </p>
                      <h3 className="mt-1 text-lg font-extrabold text-navy">
                        {org.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {org.blurb}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Directory — skip governance; already shown as featured above */}
        {orgCategories
          .filter((cat) => cat.id !== "governance")
          .map((cat, ci) => {
          const list = orgsByCategory(cat.id);
          if (!list.length) return null;
          return (
            <section
              key={cat.id}
              id={cat.id}
              className={`scroll-mt-[var(--site-header-offset)] border-t border-line ${
                ci % 2 === 0 ? "bg-mist" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-6xl px-4 py-10 sm:px-5 sm:py-12">
                <Reveal>
                  <h2 className="text-xl font-extrabold text-navy sm:text-2xl">
                    {cat.title}
                  </h2>
                  <p className="mt-1 max-w-2xl text-sm text-slate">{cat.text}</p>
                </Reveal>

                <ul className="mt-6 divide-y divide-line border-y border-line">
                  {list.map((org, i) => (
                    <Reveal
                      key={org.abbr}
                      as="li"
                      delay={Math.min(i * 25, 150)}
                    >
                      <div className="flex items-start gap-4 py-4 sm:items-center sm:gap-5">
                        <OrgLogo src={org.logo} name={org.name} size="sm" />
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-baseline gap-x-2">
                            <h3 className="font-extrabold text-navy">
                              {org.name}
                            </h3>
                            <span className="text-xs font-bold uppercase tracking-wide text-royal">
                              {org.abbr}
                            </span>
                          </div>
                          <p className="mt-0.5 text-sm leading-relaxed text-slate">
                            {org.blurb}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <section className="border-t border-line bg-navy text-white">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Ready to join?
              </h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">
                Watch for recruitment weeks, org fairs on the events calendar,
                or ask Student Development and the USC about getting involved.
              </p>
            </Reveal>
            <Reveal delay={50} className="flex flex-wrap gap-3">
              <Link
                href="/student-life/events"
                className="inline-flex items-center gap-2 bg-gold px-5 py-2.5 text-sm font-bold text-navy transition hover:bg-white"
              >
                Campus events
                <Icon name="arrow-right" className="size-3.5" />
              </Link>
              <Link
                href="/student-life/services"
                className="inline-flex items-center gap-2 border border-white/30 px-5 py-2.5 text-sm font-bold text-white transition hover:border-gold hover:text-gold"
              >
                Student services
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
