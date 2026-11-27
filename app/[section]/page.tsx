import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AboutOverview } from "@/components/about/AboutPages";
import { JourneyPanel } from "@/components/admissions/JourneyVisuals";
import AcademicsBanner from "@/components/AcademicsBanner";
import Reveal from "@/components/Reveal";
import {
  CardCorner,
  CardDecor,
  Dots,
  PanelShapes,
  WidePanelShapes,
} from "@/components/Shapes";
import { sections, APPLY_URL } from "@/lib/site";

const CONTACT_URL ="/about"; // change to your contact page

// Heading text for the intro card of the non-Academics sections
const introCopy: Record<string, { kicker: string; heading: string }> = {
  admissions: { kicker:"Admissions", heading:"Start your journey" },
"student-life": { kicker:"Campus life", heading:"More than the classroom" },
};

// Text for each Admissions section (key = page slug in lib/site.ts)
const admissionsCopy: Record<
  string,
  { kicker: string; text: string; button: string; highlights?: string[] }
> = {
"apply-now": {
    kicker:"Apply online",
    text:"Start your online application today. You can also scan the QR code at the bottom of this page with your phone.",
    button:"Start applying",
  },
  requirements: {
    kicker:"Be prepared",
    text:"See what to prepare before you enroll, so everything is ready when you apply.",
    button:"View requirements",
  },
  scholarships: {
    kicker:"Financial support",
    text:"Find financial support options for Nationalians and see how to apply.",
    button:"Explore scholarships",
  },
};

// Text for each Student Life section (key = page slug in lib/site.ts)
const studentLifeCopy: Record<
  string,
  { kicker: string; text: string; button: string }
> = {
  organizations: {
    kicker:"Clubs and groups",
    text:"Find a club that matches your interests, meet new people, and build leadership skills outside the classroom.",
    button:"Explore organizations",
  },
  sports: {
    kicker:"Teams and athletics",
    text:"Represent the campus, stay active, and cheer on your fellow Nationalians at athletic events.",
    button:"See sports",
  },
  events: {
    kicker:"On campus",
    text:"Keep up with what's happening, from school programs to activities that bring students together.",
    button:"See events",
  },
  services: {
    kicker:"Student support",
    text:"Find the offices and services that support you while you study at NU Clark.",
    button:"View services",
  },
};

type SectionProps = { params: Promise<{ section: string }> };

export function generateStaticParams() {
  // Dedicated app/student-life/page.tsx owns /student-life.
  return sections
    .filter((s) => s.slug !== "student-life")
    .map((s) => ({ section: s.slug }));
}

export async function generateMetadata({
  params,
}: SectionProps): Promise<Metadata> {
  const { section } = await params;
  const about = sections.find((entry) => entry.slug === "about");
  return section === "about"
    ? {
        title:"About NU Clark | National University",
        description: about?.intro,
      }
    : {};
}

function GroupHeading({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
        {kicker}
      </p>
      <h2 className="mt-1 text-2xl font-extrabold text-navy">
        {title}
      </h2>
      <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
      <p className="mt-3 max-w-2xl text-slate">{text}</p>
    </div>
  );
}

export default async function SectionPage({ params }: SectionProps) {
  const { section } = await params;
  const data = sections.find((s) => s.slug === section);
  if (!data) notFound();
  if (section === "about") return <AboutOverview section={data} />;

  const isAcademics = data.slug === "academics";
  const crumbs = [{ label:"Home", href:"/" }, { label: data.title }];
  const copy = introCopy[data.slug] ?? {
    kicker:"National University Clark",
    heading: data.title,
  };

  const shs = data.pages.find((p) => p.slug === "senior-high-school");
  const office = data.pages.find(
    (p) => p.slug === "office-of-the-academic-director",
  );
  const colleges = data.pages.filter(
    (p) =>
      p.slug !== "senior-high-school" &&
      p.slug !== "office-of-the-academic-director",
  );

  return (
    <>
      <AcademicsBanner
        title={data.title}
        subtitle={
          isAcademics
            ?"Choose a school to see the programs it offers."
            : data.intro
        }
        label="National University Clark"
        crumbs={crumbs}
      />
      <main className="mx-auto max-w-6xl px-5 py-8">
        {isAcademics ? (
          <Reveal>
            <div className="relative mb-12 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <CardDecor />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="border-l-4 border-gold pl-4">
                  <h2 className="text-2xl font-extrabold text-navy">
                    Find where you belong
                  </h2>
                  <p className="mt-2 max-w-xl text-lg text-slate">
                    {data.intro}
                  </p>
                </div>
                <nav
                  aria-label="Jump to a section"
                  className="flex flex-wrap gap-2"
                >
                  {[
                    ["#senior-high","Senior High"],
                    ["#colleges","Colleges"],
                    ["#office","Academic Office"],
                  ].map(([href, label]) => (
                    <a
                      key={href}
                      href={href}
                      className="rounded-full bg-navy px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-royal"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="relative mb-12 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <CardDecor />
              <div className="relative border-l-4 border-gold pl-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                  {copy.kicker}
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-navy">
                  {copy.heading}
                </h2>
                <p className="mt-2 max-w-xl text-lg text-slate">{data.intro}</p>
              </div>
            </div>
          </Reveal>
        )}

        {isAcademics ? (
          <div className="space-y-14 sm:space-y-16">
            {/* 1. Senior High School */}
            {shs && (
              <section
                id="senior-high"
                className="scroll-mt-[var(--site-header-offset)]"
              >
                <Reveal>
                  <GroupHeading
                    kicker="Grades 11 and 12"
                    title="Senior High School"
                    text="Begin your path here. Choose a track and strand that fits your goals and get ready for college and career."
                  />
                </Reveal>
                <Reveal>
                  <Link
                    href={`/${data.slug}/${shs.slug}`}
                    className="group relative isolate grid items-center gap-6 overflow-hidden rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none sm:p-10 md:grid-cols-[1fr_auto]"
                  >
                    <WidePanelShapes tone="navy" />
                    <div>
                      <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold">
                        Start here
                      </span>
                      <h3 className="mt-3 text-2xl font-extrabold text-gold">
                        {shs.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-white/85">
                        {shs.summary}
                      </p>
                    </div>
                    <span className="inline-flex items-center justify-center gap-2 justify-self-start rounded-full bg-gold px-6 py-3 font-bold leading-none text-navy transition-transform duration-300 group-hover:translate-x-1 md:justify-self-end">
                      Learn more
                      <span aria-hidden="true" className="translate-y-px">
                        →
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </section>
            )}

            {/* 2. Colleges and schools */}
            <section
              id="colleges"
              className="relative scroll-mt-[var(--site-header-offset)] overflow-x-clip"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 top-0 h-44 w-44 rounded-full bg-gold/20"
              />
              <Dots className="absolute right-4 top-24 hidden text-royal/20 md:block" />
              <div className="relative">
                <Reveal>
                  <GroupHeading
                    kicker="College"
                    title="Colleges and Schools"
                    text="Pick the school that matches the course you want to take. Each page lists its programs, mission, and vision."
                  />
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {colleges.map((p, i) => (
                    <Reveal
                      key={p.slug}
                      delay={(i % 3) * 100}
                      className="h-full"
                    >
                      <Link
                        href={`/${data.slug}/${p.slug}`}
                        className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none"
                      >
                        <CardCorner />
                        <h3 className="pr-8 text-xl font-extrabold text-gold">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-white/85">
                          {p.summary}
                        </p>
                        <span className="mt-auto inline-block self-start pt-5">
                          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold leading-none text-navy transition-transform duration-300 group-hover:translate-x-1">
                            Learn more
                            <span aria-hidden="true" className="translate-y-px">
                              →
                            </span>
                          </span>
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>

            {/* 3. Office of the Academic Director */}
            {office && (
              <section
                id="office"
                className="scroll-mt-[var(--site-header-offset)]"
              >
                <Reveal>
                  <GroupHeading
                    kicker="Academic support"
                    title="Office of the Academic Director"
                    text="Questions about academic policies or support? This office is where to start."
                  />
                </Reveal>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Reveal className="h-full">
                    <Link
                      href={`/${data.slug}/${office.slug}`}
                      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border-2 border-navy bg-gold p-6 text-navy shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/30 motion-reduce:transform-none"
                    >
                      {/* Half-width card, so the small corner (not the wide shapes) */}
                      <CardCorner tone="gold" />
                      <h3 className="pr-8 text-xl font-extrabold">
                        {office.title}
                      </h3>
                      <p className="mt-2 text-sm font-medium text-navy/85">
                        {office.summary}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 self-start pt-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold leading-none text-white transition-transform duration-300 group-hover:translate-x-1">
                          Learn more
                          <span aria-hidden="true" className="translate-y-px">
                            →
                          </span>
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                  <Reveal delay={100} className="h-full">
                    <Link
                      href="/academics/office-of-the-academic-director/language-center"
                      className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none"
                    >
                      <CardCorner />
                      <h3 className="pr-8 text-xl font-extrabold text-gold">
                        Language Center
                      </h3>
                      <p className="mt-2 text-sm text-white/85">
                        Programs and support from the NU Clark Language Center.
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 self-start pt-5">
                        <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold leading-none text-navy transition-transform duration-300 group-hover:translate-x-1">
                          Learn more
                          <span aria-hidden="true" className="translate-y-px">
                            →
                          </span>
                        </span>
                      </span>
                    </Link>
                  </Reveal>
                </div>
              </section>
            )}
          </div>
        ) : data.slug === "student-life" ? (
          <div className="space-y-14 sm:space-y-20">
            {data.pages.map((p, i) => {
              const c = studentLifeCopy[p.slug];
              const flip = i % 2 === 1;
              return (
                <section
                  key={p.slug}
                  id={p.slug}
                  className="scroll-mt-[var(--site-header-offset)]"
                >
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                    <Reveal className={flip ?"md:order-2" :""}>
                      <div className="border-l-4 border-gold pl-5">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                          {c?.kicker ??"Student life"}
                        </p>
                        <h2 className="mt-1 text-3xl font-extrabold text-navy">
                          {p.title}
                        </h2>
                        <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                        <p className="mt-4 max-w-xl text-lg text-slate">
                          {c?.text ?? p.summary}
                        </p>
                        <Link
                          href={`/${data.slug}/${p.slug}`}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-royal"
                        >
                          {c?.button ??"Learn more"}
                          <span aria-hidden="true" className="translate-y-px">
                            →
                          </span>
                        </Link>
                      </div>
                    </Reveal>

                    <Reveal delay={100} className={flip ?"md:order-1" :""}>
                      <div className="relative isolate flex min-h-[220px] items-center justify-center overflow-hidden rounded-3xl border-2 border-gold bg-navy p-8 shadow-lg">
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 400 300"
                          preserveAspectRatio="xMaxYMin slice"
                          className="pointer-events-none absolute inset-0 -z-10 h-full w-full select-none"
                        >
                          <polygon
                            points="400,0 220,0 400,200"
                            fill="#f5a000"
                            fillOpacity="0.9"
                          />
                          <polygon
                            points="400,0 330,0 400,70"
                            className="fill-gold"
                          />
                          <polygon
                            points="0,300 0,120 180,300"
                            className="fill-royal"
                            fillOpacity="0.45"
                          />
                          <polygon
                            points="0,300 0,220 80,300"
                            className="fill-gold"
                          />
                        </svg>
                        <span className="text-8xl font-extrabold text-white/90">
                          {String(i + 1).padStart(2,"0")}
                        </span>
                      </div>
                    </Reveal>
                  </div>
                </section>
              );
            })}
          </div>
        ) : data.slug === "admissions" ? (
          <div className="space-y-14 sm:space-y-20">
            {/* Journey strip: the steps at a glance, each one jumps to its section */}
            <Reveal>
              <ol
                aria-label="Admissions steps"
                className="grid gap-3 sm:grid-cols-3"
              >
                {data.pages.map((p, i) => (
                  <li key={p.slug}>
                    <a
                      href={`#${p.slug}`}
                      className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-royal"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold text-sm font-extrabold text-navy shadow-md transition-transform duration-300 group-hover:scale-110">
                        {String(i + 1).padStart(2,"0")}
                      </span>
                      <span className="min-w-0">
                        <b className="block text-navy">{p.title}</b>
                        <span className="block text-sm text-slate">
                          {p.summary}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </Reveal>

            {data.pages.map((p, i) => {
              const c = admissionsCopy[p.slug];
              const flip = i % 2 === 1;
              return (
                <section
                  key={p.slug}
                  id={p.slug}
                  className="scroll-mt-[var(--site-header-offset)]"
                >
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                    <Reveal className={flip ?"md:order-2" :""}>
                      <div className="border-l-4 border-gold pl-5">
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
                          {c?.kicker ??"Admissions"}
                        </p>
                        <h2 className="mt-1 text-3xl font-extrabold text-navy">
                          {p.title}
                        </h2>
                        <div className="mt-3 h-1.5 w-16 rounded-full bg-gold" />
                        <p className="mt-4 max-w-xl text-lg text-slate">
                          {c?.text ?? p.summary}
                        </p>
                        {c?.highlights && c.highlights.length > 0 && (
                          <ul className="mt-5 grid max-w-xl gap-2 text-slate sm:grid-cols-2">
                            {c.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2">
                                <span
                                  aria-hidden="true"
                                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                                />
                                {h}
                              </li>
                            ))}
                          </ul>
                        )}
                        <Link
                          href={`/${data.slug}/${p.slug}`}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-bold leading-none text-white transition hover:-translate-y-0.5 hover:bg-royal"
                        >
                          {c?.button ??"Learn more"}
                          <span aria-hidden="true" className="translate-y-px">
                            →
                          </span>
                        </Link>
                      </div>
                    </Reveal>

                    <Reveal delay={100} className={flip ?"md:order-1" :""}>
                      <JourneyPanel slug={p.slug} index={i} />
                    </Reveal>
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.pages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  href={`/${data.slug}/${p.slug}`}
                  className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border-2 border-gold bg-navy p-6 text-white shadow-lg transition duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-navy/40 motion-reduce:transform-none"
                >
                  <CardCorner />
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-navy">
                    {String(i + 1).padStart(2,"0")}
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-gold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/85">{p.summary}</p>
                  <span className="mt-auto inline-block self-start pt-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold leading-none text-navy transition-transform duration-300 group-hover:translate-x-1">
                      Learn more
                      <span aria-hidden="true" className="translate-y-px">
                        →
                      </span>
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        {/* Enrollment block (all sections) */}
        <Reveal className="mt-14 sm:mt-20">
          <section className="relative isolate grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
            <PanelShapes />
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-extrabold">
                Ready to become a Nationalian?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-white/80 md:mx-0">
                Start your online application today, or scan the QR code with
                your phone.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={APPLY_URL}
                  className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply now
                </a>
                <Link
                  href={CONTACT_URL}
                  className="inline-block rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="mx-auto text-center">
              <div className="rounded-2xl bg-white p-3 shadow-lg">
                <Image
                  src="/qr-nu-clark.webp"
                  alt="QR code for NU Clark"
                  width={160}
                  height={160}
                  className="h-36 w-36 sm:h-40 sm:w-40"
                />
              </div>
              <p className="mt-2 text-sm text-white/80">Scan to apply</p>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
