import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { sections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Student Life | NU Clark",
  description:
    "Organizations, sports, events, and student services — life beyond the classroom at National University Clark.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Student Life" }];

const pathways = [
  {
    slug: "organizations",
    title: "Organizations",
    text: "Councils, academic societies, campus media, and interest groups — find where you lead and belong.",
    cta: "Browse organizations",
    image: "/student-1.jpg",
    imageAlt: "NU Clark students on campus",
  },
  {
    slug: "sports",
    title: "Sports",
    text: "Friendship games, varsity pathways, and campus athletics with Bulldogs pride.",
    cta: "See sports",
    image: "/carousel-img-1.jpg",
    imageAlt: "NU Clark athletes at Nationalian Friendship Games",
  },
  {
    slug: "events",
    title: "Events",
    text: "Assemblies, workshops, Christmas on campus, and the calendar that brings Nationalians together.",
    cta: "View events",
    image: "/carousel-img-5.jpg",
    imageAlt: "Campus event at NU Clark",
  },
  {
    slug: "services",
    title: "Services",
    text: "Guidance, registrar, clinic, ITSO, SDAO, and the desks that support you through graduation.",
    cta: "Find services",
    image: "/student-5.jpg",
    imageAlt: "NU Clark student community",
  },
] as const;

const moments = [
  { src: "/student-3.jpg", alt: "Students collaborating at NU Clark" },
  { src: "/student-4.jpg", alt: "Campus life at NU Clark" },
  { src: "/carousel-img-3.jpg", alt: "Nationalians at a campus gathering" },
  { src: "/carousel-img-4.jpg", alt: "Students at NU Clark" },
] as const;

export default function StudentLifePage() {
  const section = sections.find((s) => s.slug === "student-life");

  return (
    <>
      <AcademicsBanner
        title="Student Life"
        subtitle={
          section?.intro ?? "Life at NU Clark goes beyond the classroom."
        }
        label="Campus"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="relative overflow-x-clip bg-mist pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          {/* Opening — NU-style rounded panel */}
          <section className="pt-8 sm:pt-10">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist sm:aspect-[5/4]">
                <Image
                  src="/student-2.jpg"
                  alt="NU Clark students in uniform on campus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[center_28%]"
                />
              </figure>

              <div className="px-1 pb-2 sm:px-2 lg:pb-0">
                <p className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-royal">
                  Beyond the classroom
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                  Where Nationalians lead, compete, and belong
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                  Organizations, athletics, campus events, and student services —
                  four ways into life at NU Clark.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#pathways"
                    className="rounded-full bg-gold px-6 py-3 text-center text-sm font-bold text-navy shadow-md shadow-black/10 transition hover:-translate-y-0.5"
                  >
                    Explore campus life
                  </a>
                  <Link
                    href="/student-life/organizations"
                    className="rounded-full px-6 py-3 text-center text-sm font-bold text-navy ring-2 ring-navy/15 transition hover:bg-mist"
                  >
                    Browse organizations
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Pathways — soft NU cards */}
          <section id="pathways" className="mt-14 scroll-mt-[var(--site-header-offset)] sm:mt-20">
            <Reveal>
              <SectionTitle
                kicker="Campus life"
                title="Four ways in"
                text="Pick a path — lead in an org, compete in sports, join events, or get support from campus services."
              />
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {pathways.map((item, i) => (
                <Reveal key={item.slug} delay={i * 70} className="h-full">
                  <Link
                    href={`/student-life/${item.slug}`}
                    id={item.slug}
                    className="group flex h-full scroll-mt-[var(--site-header-offset)] flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <figure className="relative aspect-[16/10] overflow-hidden bg-mist">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(min-width: 640px) 45vw, 100vw"
                        className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                      />
                    </figure>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-xl font-extrabold text-navy group-hover:text-royal sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate sm:text-base">
                        {item.text}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-royal">
                        {item.cta}
                        <Icon
                          name="arrow-right"
                          className="size-3.5 transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Moments gallery */}
          <section className="mt-14 sm:mt-20">
            <Reveal>
              <SectionTitle
                kicker="Gallery"
                title="Campus moments"
                text="Everyday Nationalian life at Clark."
              />
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {moments.map((m, i) => (
                <Reveal key={m.src} delay={i * 50}>
                  <figure className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-navy shadow-sm">
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover object-center"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          {/* CTA — matches Clark / NU home language */}
          <Reveal className="mt-14 sm:mt-16">
            <section className="relative isolate grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
              <svg
                aria-hidden
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
                aria-hidden
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
                  New to campus?
                </p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Find your place at NU Clark
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-white/80 md:mx-0">
                  Start with organizations and services, then check the events
                  calendar.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <Link
                    href="/student-life/organizations"
                    className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                  >
                    Explore orgs
                  </Link>
                  <Link
                    href="/student-life/events"
                    className="inline-block rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                  >
                    Events
                  </Link>
                </div>
              </div>

              <div className="relative mx-auto hidden h-40 w-56 overflow-hidden rounded-2xl md:block">
                <Image
                  src="/carousel-img-3.jpg"
                  alt=""
                  fill
                  sizes="224px"
                  className="object-cover object-center"
                />
              </div>
            </section>
          </Reveal>
        </div>
      </main>
    </>
  );
}
