import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
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
    image: "/campus.jpg",
    imageAlt: "NU Clark campus",
  },
] as const;

const moments = [
  { src: "/student-3.jpg", alt: "Students collaborating at NU Clark" },
  { src: "/student-4.jpg", alt: "Campus life at NU Clark" },
  { src: "/carousel-img-3.jpg", alt: "Nationalians at a campus gathering" },
  { src: "/student-5.jpg", alt: "NU Clark student community" },
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

      <main className="overflow-x-clip pb-20">
        {/* Photo + copy — landscape photo treated as photo, not a branded overlay stack */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
            <Reveal>
              <figure className="relative aspect-[3/2] overflow-hidden bg-navy lg:aspect-auto lg:min-h-[22rem]">
                <Image
                  src="/student-2.jpg"
                  alt="NU Clark students in uniform on campus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_30%]"
                />
              </figure>
            </Reveal>
            <Reveal
              delay={60}
              className="flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-14 lg:px-12"
            >
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                Where Nationalians lead, compete, and belong
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate">
                Orgs, athletics, campus events, and student services — four
                ways into life beyond the classroom at NU Clark.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pathways */}
        <div className="bg-white">
          {pathways.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <section
                key={item.slug}
                id={item.slug}
                className={`scroll-mt-[var(--site-header-offset)] border-b border-line ${
                  flip ? "bg-mist" : "bg-white"
                }`}
              >
                <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
                  <Reveal
                    className={`relative aspect-[3/2] overflow-hidden bg-navy lg:aspect-auto lg:min-h-[20rem] ${
                      flip ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </Reveal>

                  <Reveal
                    delay={60}
                    className={`flex flex-col justify-center px-4 py-10 sm:px-8 sm:py-12 lg:px-12 ${
                      flip ? "lg:order-1" : ""
                    }`}
                  >
                    <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
                      {item.text}
                    </p>
                    <Link
                      href={`/student-life/${item.slug}`}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-royal underline-offset-4 hover:underline"
                    >
                      {item.cta}
                      <Icon name="arrow-right" className="size-3.5" />
                    </Link>
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>

        {/* Moments — keep landscape ratio; no forced portrait crop */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Campus moments
              </h2>
              <p className="mt-2 text-base text-slate">
                Everyday Nationalian life at Clark.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-2 sm:grid-cols-2 sm:gap-3">
              {moments.map((m, i) => (
                <Reveal key={m.src} delay={i * 40}>
                  <figure className="relative aspect-[3/2] overflow-hidden bg-navy">
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line bg-mist">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:py-12">
            <Reveal>
              <h2 className="text-xl font-extrabold text-navy">New to campus?</h2>
              <p className="mt-1 max-w-lg text-sm leading-relaxed text-slate">
                Start with organizations and services, then check the events
                calendar.
              </p>
            </Reveal>
            <Reveal delay={50} className="flex flex-wrap gap-3">
              <Link
                href="/student-life/organizations"
                className="inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-sm font-bold text-white transition hover:bg-royal"
              >
                Explore orgs
                <Icon name="arrow-right" className="size-3.5" />
              </Link>
              <Link
                href="/student-life/events"
                className="inline-flex items-center gap-2 border border-line bg-white px-5 py-2.5 text-sm font-bold text-navy transition hover:border-royal hover:text-royal"
              >
                Events
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
