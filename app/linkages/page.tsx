import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AcademicsBanner from "@/components/AcademicsBanner";
import { Icon } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import {
  linkagesCover,
  linkagesFeatured,
  linkagesFocus,
  linkagesIntro,
  linkagesNetwork,
  linkagesOpportunities,
} from "@/lib/linkages";

export const metadata: Metadata = {
  title: "Linkages | NU Clark",
  description:
    "NU Clark Academe-Industry Linkages and Placement Office: internships, placement, industry partnerships, and career pathways.",
};

const crumbs = [{ label: "Home", href: "/" }, { label: "Linkages" }];

const networkKinds = [
  "Industry",
  "Government",
  "Academic",
  "International",
  "Community",
] as const;

/** Square AILPO posts — never crop; show full graphic. */
function PostFigure({
  src,
  alt = "",
  priority = false,
  className = "",
}: {
  src: string;
  alt?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`relative aspect-square overflow-hidden bg-[#eef1f8] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 28vw, 50vw"
        className="object-contain object-center"
        priority={priority}
      />
    </figure>
  );
}

export default function LinkagesPage() {
  const [leadPartnership, ...morePartnerships] = linkagesFeatured;

  return (
    <>
      <AcademicsBanner
        title="Linkages"
        subtitle="Internships, industry partners, and careers through AILPO."
        label="AILPO"
        crumbs={crumbs}
        showRule={false}
      />

      <main className="overflow-x-clip pb-20">
        {/* Cover as designed artwork — not a photo crop with overlay text */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <figure className="relative aspect-[27/10] overflow-hidden bg-[#001c48]">
                <Image
                  src={linkagesCover}
                  alt="Forging Paths to Possibilities — NU Clark AILPO"
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                  priority
                />
              </figure>
            </Reveal>

            <div className="grid gap-10 px-4 py-12 sm:px-5 sm:py-14 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
              <Reveal>
                <p className="text-sm font-semibold text-royal">
                  {linkagesIntro.kicker}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl">
                  {linkagesIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-snug text-navy/90">
                  {linkagesIntro.tagline}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                  {linkagesIntro.about}
                </p>
              </Reveal>

              <Reveal delay={60} className="self-start lg:pt-8">
                <div className="space-y-5 text-sm">
                  <div>
                    <p className="font-semibold text-navy">Email</p>
                    <a
                      href={`mailto:${linkagesIntro.email}`}
                      className="mt-0.5 inline-block text-royal underline-offset-2 hover:underline"
                    >
                      {linkagesIntro.email}
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Facebook</p>
                    <a
                      href={linkagesIntro.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 inline-flex items-center gap-1 text-royal underline-offset-2 hover:underline"
                    >
                      NU Clark – AILPO
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">Campus</p>
                    <p className="mt-0.5 leading-relaxed text-slate">
                      {linkagesIntro.address}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Focus — plain list, not a navy template band */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                What AILPO does
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                Five ways we connect classroom learning to industry and careers.
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {linkagesFocus.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 40}>
                  <h3 className="font-extrabold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Partnerships — square posts intact */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Recent partnerships
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                MOU signings and collaborations from the AILPO campus feed —
                shown as posted.
              </p>
            </Reveal>

            <article className="mt-10">
              <Reveal>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
                  {leadPartnership.images.slice(0, 4).map((src, i) => (
                    <PostFigure
                      key={src}
                      src={src}
                      alt={i === 0 ? leadPartnership.title : ""}
                      priority={i === 0}
                    />
                  ))}
                </div>
              </Reveal>
              <Reveal delay={50}>
                <div className="mt-6 max-w-3xl">
                  <p className="text-sm font-semibold text-royal">
                    {leadPartnership.category}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-navy sm:text-2xl">
                    {leadPartnership.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-navy/75">
                    {leadPartnership.partner}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-slate">
                    {leadPartnership.summary}
                  </p>
                </div>
              </Reveal>
            </article>

            {morePartnerships.map((item) => (
              <article
                key={item.title}
                className="mt-14 grid items-start gap-8 border-t border-line pt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-12"
              >
                <Reveal>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {item.images.slice(0, 4).map((src) => (
                      <PostFigure key={src} src={src} />
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={50} className="lg:pt-2">
                  <p className="text-sm font-semibold text-royal">
                    {item.category}
                  </p>
                  <h3 className="mt-1 text-xl font-extrabold text-navy sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-navy/75">
                    {item.partner}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-slate">
                    {item.summary}
                  </p>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* Opportunities — posters contained, light ground */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Career pathways AILPO shares
              </h2>
            </Reveal>

            <ul className="mt-10 space-y-6">
              {linkagesOpportunities.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 40}>
                  <article className="grid overflow-hidden bg-white sm:grid-cols-[minmax(12rem,18rem)_1fr]">
                    <PostFigure
                      src={item.image}
                      alt={item.title}
                      className="sm:rounded-none"
                    />
                    <div className="flex flex-col justify-center px-5 py-6 sm:px-8">
                      <h3 className="text-lg font-extrabold text-navy sm:text-xl">
                        {item.title}
                      </h3>
                      {item.date && (
                        <p className="mt-3 text-sm font-semibold text-navy">
                          {item.date}
                        </p>
                      )}
                      {item.venue && (
                        <p className="mt-0.5 text-sm text-slate">{item.venue}</p>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
                        {item.summary}
                      </p>
                      <a
                        href={`mailto:${linkagesIntro.email}`}
                        className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-royal underline-offset-2 hover:underline"
                      >
                        Ask AILPO
                        <Icon name="arrow-right" className="size-3.5" />
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Network */}
        <section className="border-t border-line bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-14">
            <Reveal>
              <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Partner network
              </h2>
              <p className="mt-2 max-w-2xl text-base text-slate">
                Industry, government, academic, and international partners
                working with NU Clark.
              </p>
            </Reveal>

            <div className="mt-10 space-y-12">
              {networkKinds.map((kind) => {
                const partners = linkagesNetwork.filter((p) => p.kind === kind);
                if (!partners.length) return null;
                return (
                  <Reveal key={kind}>
                    <h3 className="text-sm font-bold text-royal">{kind}</h3>
                    <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {partners.map((partner) => (
                        <li key={partner.name} className="flex gap-4">
                          <div className="relative h-14 w-14 shrink-0 overflow-hidden bg-[#eef1f8]">
                            {partner.logo || partner.image ? (
                              <Image
                                src={partner.logo || partner.image!}
                                alt=""
                                fill
                                sizes="56px"
                                className="object-contain object-center p-1.5"
                              />
                            ) : (
                              <span className="flex h-full items-center justify-center text-[10px] font-extrabold text-navy">
                                {partner.name
                                  .split(/\s+/)
                                  .slice(0, 2)
                                  .map((w) => w[0])
                                  .join("")
                                  .toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div className="min-w-0 pt-0.5">
                            <p className="font-extrabold leading-snug text-navy">
                              {partner.name}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-slate">
                              {partner.note}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              })}
            </div>

            <p className="mt-12 text-sm text-slate">
              Want to partner?{" "}
              <a
                href={`mailto:${linkagesIntro.email}`}
                className="font-bold text-royal underline-offset-2 hover:underline"
              >
                {linkagesIntro.email}
              </a>
              {" · "}
              <Link
                href="/careers"
                className="font-bold text-royal underline-offset-2 hover:underline"
              >
                Careers
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
