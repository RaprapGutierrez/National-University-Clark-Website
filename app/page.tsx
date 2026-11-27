import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import LogoDivider from "@/components/LogoDivider";
import SchoolCard from "@/components/SchoolCard";
import AdmissionsPortalCards from "@/components/AdmissionsPortalCards";
import { sections, APPLY_URL } from "@/lib/site";

const CONTACT_URL = "/about"; // change to your contact page

// slug (from lib/site.ts) -> image in /public
const schoolImages: Record<string, string> = {
  "senior-high-school": "/senior-high.png",
  sabm: "/school-sabm.png",
  seas: "/school-seas.png",
  satc: "/school-satc.png",
  engineering: "/school-engineering.png",
  hospitality: "/school-dentistry.png", // School of Dentistry and Allied Health
};

// Small dotted pattern used as decoration
function Dots({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      width="140"
      height="140"
      viewBox="0 0 140 140"
    >
      <defs>
        <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="2.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="140" height="140" fill="url(#dots)" />
    </svg>
  );
}

function SectionTitle({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-royal">
        {kicker}
      </p>
      <h2 className="mt-1 text-2xl font-extrabold text-navy">
        {title}
      </h2>
      <div className="mt-3 flex items-center gap-2">
        <span className="h-1.5 w-16 rounded-full bg-gold" />
        <span className="h-1.5 w-3 rounded-full bg-gold/50" />
        <span className="h-1.5 w-1.5 rounded-full bg-gold/30" />
      </div>
      {text && <p className="mt-3 max-w-xl text-slate">{text}</p>}
    </div>
  );
}

const steps = [
  {
    n: "1",
    title: "Choose your school",
    text: "Browse the schools and programs.",
    href: "/academics",
  },
  {
    n: "2",
    title: "Prepare requirements",
    text: "See what to bring before you enroll.",
    href: "/admissions/requirements",
  },
  {
    n: "3",
    title: "Apply online",
    text: "Submit your application in minutes.",
    href: APPLY_URL,
    external: true,
  },
];

export default function Home() {
  const academics = sections.find((s) => s.slug === "academics")!;
  const schools = academics.pages.filter(
    (p) => p.slug !== "office-of-the-academic-director",
  );

  return (
    <>
      {/* Hero: gold band shows under the slanted navy edge */}
      <div
        className="relative -mb-6 bg-gold sm:-mb-8"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)",
        }}
      >
        <header
          className="relative isolate overflow-hidden bg-navy pb-14 text-white sm:pb-24 lg:pb-32"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% calc(100% - 52px), 0 calc(100% - 12px))",
          }}
        >
          {/* Big shapes on the right (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 2400 600"
            preserveAspectRatio="xMaxYMid slice"
            className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full select-none lg:block"
          >
            <polygon
              points="1900,0 2400,0 2400,600 1640,600"
              className="fill-royal"
              fillOpacity="0.33"
            />
            <polygon
              points="2400,0 1990,0 2400,360"
              fill="#f5a000"
              fillOpacity="0.94"
            />
            <polygon
              points="2230,0 2310,0 2090,600 2010,600"
              className="fill-gold"
            />
            <polygon
              points="2340,0 2368,0 2148,600 2120,600"
              className="fill-gold"
              fillOpacity="0.6"
            />
            <polygon
              points="2400,600 2180,600 2400,400"
              className="fill-gold"
            />
          </svg>

          {/* Extra decoration on the left, all screens */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-48 -z-10 h-72 w-72 rounded-full border-[28px] border-gold/10"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 left-1/3 -z-10 h-40 w-40 rounded-full bg-royal/30"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[46%] top-28 -z-10 hidden h-4 w-4 rounded-full bg-gold lg:block"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-8 top-40 -z-10 hidden h-3 w-3 rotate-45 bg-gold/80 md:block"
          />
          <Dots className="absolute bottom-24 left-6 -z-10 hidden text-white/15 md:block" />

          <div className="mx-auto max-w-6xl px-4 sm:px-5">
            <div className="grid items-center gap-8 pt-8 sm:pt-12 lg:grid-cols-2 lg:gap-10 lg:pt-14">
              <Reveal>
                <p className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-gold">
                  National University Clark
                </p>
                <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight">
                  Education that works in the heart of{" "}
                  <span className="relative inline-block text-gold">
                    Central Luzon.
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gold/40"
                    />
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-base text-white/90 sm:mt-5">
                  Study at NU Clark inside the Clark Freeport Zone. Explore our
                  programs, apply online, and see life on campus.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                  <Link
                    href="/academics"
                    className="rounded-full bg-gold px-6 py-3 text-center font-bold text-navy shadow-lg shadow-black/20 transition hover:-translate-y-0.5"
                  >
                    Explore programs
                  </Link>
                  <Link
                    href="/about/campus-tour"
                    className="rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                  >
                    Take the campus tour
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <HeroSlider />
              </Reveal>
            </div>
          </div>
        </header>
      </div>

      <main className="relative mx-auto max-w-6xl overflow-x-clip px-4 sm:px-5">
        <AdmissionsPortalCards />

        {/* Find your school */}
        <section className="relative pt-12 sm:pt-20">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 top-10 h-36 w-36 rounded-full bg-gold/20 sm:-right-10 sm:h-44 sm:w-44"
          />
          <Dots className="absolute right-4 top-24 hidden text-royal/20 md:block" />

          <div className="relative">
            <Reveal>
              <SectionTitle
                kicker="Academics"
                title="Find your school"
                text={academics.intro}
              />
            </Reveal>

            <div className="grid gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
              {schools.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                  <SchoolCard
                    href={`/academics/${p.slug}`}
                    title={p.title}
                    summary={p.summary}
                    image={schoolImages[p.slug]}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How to apply */}
        <section className="relative mt-12 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-sm sm:mt-20 sm:p-10">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gold/20 sm:-left-10 sm:-top-10 sm:h-32 sm:w-32"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rotate-45 bg-royal/10 sm:-bottom-12 sm:-right-12 sm:h-40 sm:w-40"
          />
          <div className="relative">
            <Reveal>
              <SectionTitle
                kicker="Admissions"
                title="How to apply"
                text="Three simple steps from choosing a school to your first day."
              />
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map((s, i) => {
                const inner = (
                  <>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-extrabold text-navy shadow-md">
                      {s.n}
                    </span>
                    <b className="mt-4 block text-lg text-navy">{s.title}</b>
                    <span className="mt-1 block text-sm text-slate">
                      {s.text}
                    </span>
                  </>
                );
                const cls =
                  "group block h-full rounded-2xl border-l-4 border-gold bg-mist p-6 ring-1 ring-line transition hover:-translate-y-1 hover:shadow-md";
                return (
                  <Reveal key={s.n} delay={i * 100} className="h-full">
                    {s.external ? (
                      <a href={s.href} className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={s.href} className={cls}>
                        {inner}
                      </Link>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Reveal className="mt-12 sm:mt-16">
          <LogoDivider />
        </Reveal>

        {/* Final call to action */}
        <Reveal className="mb-12 mt-8 sm:mt-10">
          <section className="relative isolate grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
            {/* Decoration */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMaxYMin slice"
              className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-2/3 select-none"
            >
              <polygon
                points="400,0 220,0 400,200"
                fill="#f5a000"
                fillOpacity="0.9"
              />
              <polygon points="400,0 330,0 400,70" className="fill-gold" />
            </svg>
            <svg
              aria-hidden="true"
              viewBox="0 0 300 300"
              preserveAspectRatio="xMinYMax slice"
              className="pointer-events-none absolute bottom-0 left-0 -z-10 h-2/3 w-1/2 select-none"
            >
              <polygon
                points="0,300 0,120 180,300"
                className="fill-royal"
                fillOpacity="0.45"
              />
              <polygon points="0,300 0,220 80,300" className="fill-gold" />
            </svg>

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
