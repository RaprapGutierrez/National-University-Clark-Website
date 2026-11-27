import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import AdmissionsPortalCards from "@/components/AdmissionsPortalCards";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionTitle from "@/components/SectionTitle";
import { admissionsEmail } from "@/lib/about";
import { APPLY_URL, ENROLLMENT_NOTE, steps } from "@/lib/admissions";
import { sections } from "@/lib/site";

export const metadata: Metadata = {
  title: "Admissions | NU Clark",
  description:
    "Apply to National University Clark, prepare your requirements, and explore scholarships for Nationalians.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Admissions" }];

const destinations = [
  {
    href: "/admissions/apply-now",
    title: "Apply now",
    text: "Six steps from the online form to your Certificate of Registration.",
    image: "/student-1.jpg",
    alt: "Incoming students at an NU Clark orientation",
  },
  {
    href: "/admissions/requirements",
    title: "Requirements",
    text: "Documents for Senior High, freshman, transfer, and second degree.",
    image: "/student-4.jpg",
    alt: "NU Clark students in uniform",
  },
  {
    href: "/admissions/scholarships",
    title: "Scholarships",
    text: "Gold, Blue, White, and Nationalian tracks plus tuition discounts.",
    image: "/carousel-img-3.jpg",
    alt: "NU Clark students in campus colors",
  },
] as const;

export default function AdmissionsPage() {
  const section = sections.find((s) => s.slug === "admissions");

  return (
    <>
      <AcademicsBanner
        title="Admissions"
        subtitle={
          section?.intro ??
          "Everything you need to start your journey as a Nationalian."
        }
        label="Enroll"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="relative overflow-x-clip bg-mist pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          {/* Opening — NU-style photo + pill CTAs */}
          <section className="pt-8 sm:pt-10">
            <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-sm sm:p-6 lg:grid-cols-2 lg:gap-10 lg:p-8">
              <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-mist sm:aspect-[5/4]">
                <Image
                  src="/student-2.jpg"
                  alt="NU Clark students on campus"
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-[center_28%]"
                />
              </figure>

              <div className="px-1 pb-2 sm:px-2 lg:pb-0">
                <p className="inline-block rounded-full bg-gold/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-royal">
                  National University Clark
                </p>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                  Welcome to NU Clark
                </h2>
                <p className="mt-2 text-lg font-bold text-royal">
                  Home of the Bulldogs in Clark
                </p>
                {ENROLLMENT_NOTE ? (
                  <p className="mt-4 text-sm font-bold text-navy">
                    {ENROLLMENT_NOTE}
                  </p>
                ) : null}
                <p className="mt-3 max-w-md text-base leading-relaxed text-slate">
                  Apply online, prepare your requirements, and explore
                  scholarships — Education that works at Clark.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-gold px-6 py-3 text-center text-sm font-bold text-navy shadow-md shadow-black/10 transition hover:-translate-y-0.5"
                  >
                    Apply now
                  </a>
                  <a
                    href="#path"
                    className="rounded-full px-6 py-3 text-center text-sm font-bold text-navy ring-2 ring-navy/15 transition hover:bg-mist"
                  >
                    How to enroll
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Portals — same language as the NU / Clark home */}
          <section className="mt-8 sm:mt-10">
            <Reveal>
              <SectionTitle
                kicker="Portals"
                title="Start your NU journey"
                text="Apply through NU Quest, then manage services and payments as a Nationalian."
              />
            </Reveal>
            <AdmissionsPortalCards />
          </section>

          {/* Destinations */}
          <section className="mt-14 sm:mt-20">
            <Reveal>
              <SectionTitle
                kicker="Admissions"
                title="What you need"
                text="Application steps, document checklists, and scholarship tracks for NU Clark."
              />
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {destinations.map((item, i) => (
                <Reveal key={item.href} delay={i * 80} className="h-full">
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <figure className="relative aspect-[16/11] overflow-hidden bg-mist">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                        className="object-cover object-[center_25%] transition duration-500 group-hover:scale-[1.03]"
                      />
                    </figure>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="text-xl font-extrabold text-navy group-hover:text-royal">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
                        {item.text}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-royal">
                        Learn more
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

          {/* How to enroll — NU home “How to apply” DNA */}
          <section
            id="path"
            className="relative mt-14 overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-sm sm:mt-20 sm:p-10"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gold/20 sm:h-32 sm:w-32"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rotate-45 bg-royal/10"
            />

            <div className="relative">
              <Reveal>
                <SectionTitle
                  kicker="Enrollment"
                  title="How to enroll"
                  text="Six clear steps from your application form to your Certificate of Registration."
                />
              </Reveal>

              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {steps.map((step, i) => (
                  <Reveal key={step.title} as="li" delay={i * 60} className="h-full">
                    <div className="h-full rounded-2xl border-l-4 border-gold bg-mist p-5 ring-1 ring-line sm:p-6">
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-navy shadow-md">
                        {i + 1}
                      </span>
                      <h3 className="mt-4 text-base font-extrabold text-navy sm:text-lg">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {step.text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition hover:bg-royal"
                >
                  Begin step one
                </a>
                <Link
                  href="/admissions/apply-now"
                  className="inline-flex items-center justify-center gap-2 text-sm font-bold text-royal underline-offset-4 hover:underline"
                >
                  Full walkthrough
                  <Icon name="arrow-right" className="size-3.5" />
                </Link>
              </Reveal>
            </div>
          </section>

          {/* Campus moment */}
          <Reveal className="mt-14 sm:mt-16">
            <figure className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-navy sm:aspect-[2.4/1]">
              <Image
                src="/about/campus-exterior.webp"
                alt="National University Clark campus"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </figure>
          </Reveal>

          {/* Ready to become a Nationalian — matches Clark home CTA */}
          <Reveal className="mt-10 sm:mt-12">
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
                  Enrollment
                </p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Ready to become a Nationalian?
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-white/80 md:mx-0">
                  Start your online application today, or scan the QR code with
                  your phone. Questions?{" "}
                  <a
                    href={`mailto:${admissionsEmail}`}
                    className="font-semibold text-gold underline-offset-2 hover:underline"
                  >
                    {admissionsEmail}
                  </a>
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                  >
                    Apply now
                  </a>
                  <Link
                    href="/admissions/requirements"
                    className="inline-block rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                  >
                    Requirements
                  </Link>
                </div>
              </div>

              <div className="mx-auto text-center">
                <div className="rounded-2xl bg-white p-3 shadow-lg">
                  <Image
                    src="/qr-nu-clark.webp"
                    alt="QR code to apply to NU Clark"
                    width={160}
                    height={160}
                    className="h-36 w-36 sm:h-40 sm:w-40"
                  />
                </div>
                <p className="mt-2 text-sm text-white/80">Scan to apply</p>
              </div>
            </section>
          </Reveal>
        </div>
      </main>
    </>
  );
}
