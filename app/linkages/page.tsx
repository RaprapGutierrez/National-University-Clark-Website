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

export default function LinkagesPage() {
  const [leadPartnership, ...morePartnerships] = linkagesFeatured;
  const [leadOpportunity, ...moreOpportunities] = linkagesOpportunities;

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
        {/* Intro — cover as the visual plane */}
        <section className="border-b border-line bg-white">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <figure className="relative aspect-[21/9] overflow-hidden bg-navy sm:aspect-[2.7/1]">
                <Image
                  src={linkagesCover}
                  alt="NU Clark Academe-Industry Linkages and Placement Office — Forging Paths to Possibilities"
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority
                />
              </figure>
            </Reveal>

            <div className="grid gap-8 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
              <Reveal>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                  {linkagesIntro.kicker}
                </p>
                <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
                  {linkagesIntro.heading}
                </h2>
                <p className="mt-4 max-w-xl text-lg font-semibold leading-snug text-navy">
                  {linkagesIntro.tagline}
                </p>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate">
                  {linkagesIntro.about}
                </p>
              </Reveal>

              <Reveal delay={80} className="self-center">
                <ul className="divide-y divide-line border-y border-line">
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Email
                    </p>
                    <a
                      href={`mailto:${linkagesIntro.email}`}
                      className="mt-1 inline-block text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      {linkagesIntro.email}
                    </a>
                  </li>
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Facebook
                    </p>
                    <a
                      href={linkagesIntro.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-sm font-extrabold text-navy underline-offset-4 hover:underline"
                    >
                      NU Clark – AILPO
                      <Icon name="arrow-right" className="size-3.5" />
                    </a>
                  </li>
                  <li className="py-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                      Campus
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-slate">
                      {linkagesIntro.address}
                    </p>
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Focus areas — numbered band, not cards */}
        <section className="bg-navy text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
                What we do
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Paths from classroom to career
              </h2>
            </Reveal>

            <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
              {linkagesFocus.map((item, i) => (
                <Reveal key={item.title} as="li" delay={i * 50}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-base font-extrabold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Featured partnership — GBES */}
        <section className="bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Forging connections
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Recent partnerships
              </h2>
            </Reveal>

            <article className="mt-10">
              <Reveal>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-3">
                  <figure className="relative aspect-[4/5] overflow-hidden bg-navy sm:aspect-auto sm:min-h-[22rem] lg:col-span-7 lg:row-span-2 lg:min-h-[28rem]">
                    <Image
                      src={leadPartnership.images[0]}
                      alt={leadPartnership.title}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="object-cover object-center"
                    />
                  </figure>
                  {leadPartnership.images.slice(1, 3).map((src) => (
                    <figure
                      key={src}
                      className="relative aspect-square overflow-hidden bg-navy lg:col-span-5 lg:aspect-auto lg:min-h-[13.5rem]"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 40vw, 50vw"
                        className="object-cover object-center"
                      />
                    </figure>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={80}>
                <div className="mt-8 grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal lg:pt-1">
                    {leadPartnership.category}
                  </p>
                  <div>
                    <h3 className="text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
                      {leadPartnership.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-navy/80">
                      {leadPartnership.partner}
                    </p>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate">
                      {leadPartnership.summary}
                    </p>
                  </div>
                </div>
              </Reveal>
            </article>

            {morePartnerships.map((item, i) => (
              <article
                key={item.title}
                className="mt-14 border-t border-line pt-14"
              >
                <Reveal delay={i * 40}>
                  <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className={i % 2 === 1 ? "lg:order-2" : undefined}>
                      <div className="grid grid-cols-2 gap-2">
                        {item.images.slice(0, 4).map((src) => (
                          <figure
                            key={src}
                            className="relative aspect-square overflow-hidden bg-navy"
                          >
                            <Image
                              src={src}
                              alt=""
                              fill
                              sizes="(min-width: 1024px) 20vw, 45vw"
                              className="object-cover object-center"
                            />
                          </figure>
                        ))}
                      </div>
                    </div>
                    <div className={i % 2 === 1 ? "lg:order-1" : undefined}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-royal">
                        {item.category}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm font-semibold text-navy/80">
                        {item.partner}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-slate">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </article>
            ))}
          </div>
        </section>

        {/* Career pathways */}
        <section className="bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Career pathways
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Opportunities AILPO shares
              </h2>
            </Reveal>

            {leadOpportunity && (
              <div className="mt-10 grid items-stretch overflow-hidden bg-mist lg:grid-cols-2">
                <Reveal>
                  <figure className="relative aspect-[4/5] overflow-hidden bg-navy sm:aspect-square lg:aspect-auto lg:min-h-[26rem]">
                    <Image
                      src={leadOpportunity.image}
                      alt={leadOpportunity.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain object-center p-4 sm:p-6"
                    />
                  </figure>
                </Reveal>
                <Reveal
                  delay={70}
                  className="flex flex-col justify-center px-5 py-8 sm:px-8 lg:px-10"
                >
                  <h3 className="text-xl font-extrabold leading-snug tracking-tight text-navy sm:text-2xl">
                    {leadOpportunity.title}
                  </h3>
                  {leadOpportunity.date && (
                    <p className="mt-4 text-sm font-semibold text-navy">
                      {leadOpportunity.date}
                    </p>
                  )}
                  {leadOpportunity.venue && (
                    <p className="mt-1 text-sm text-slate">
                      {leadOpportunity.venue}
                    </p>
                  )}
                  <p className="mt-5 max-w-md text-base leading-relaxed text-slate">
                    {leadOpportunity.summary}
                  </p>
                  <a
                    href={`mailto:${linkagesIntro.email}`}
                    className="mt-8 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-royal underline-offset-4 hover:underline"
                  >
                    Ask AILPO about this event
                    <Icon name="arrow-right" className="size-3.5" />
                  </a>
                </Reveal>
              </div>
            )}

            {moreOpportunities.length > 0 && (
              <ul className="mt-3 grid gap-3 lg:grid-cols-2">
                {moreOpportunities.map((item, i) => (
                  <Reveal key={item.title} as="li" delay={(i + 1) * 60}>
                    <article className="grid h-full overflow-hidden bg-mist sm:grid-cols-[10rem_1fr] lg:grid-cols-[12rem_1fr]">
                      <div className="relative aspect-square bg-navy sm:aspect-auto sm:min-h-[11rem]">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          sizes="12rem"
                          className="object-contain object-center p-2"
                        />
                      </div>
                      <div className="flex flex-col justify-center px-5 py-5 sm:px-6">
                        <h3 className="text-base font-extrabold leading-snug text-navy sm:text-lg">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate">
                          {item.summary}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Partner network */}
        <section className="border-t border-line bg-mist">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16">
            <Reveal>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
                Partner network
              </p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
                Industry, government, and global ties
              </h2>
            </Reveal>

            <ul className="mt-10 divide-y divide-line border-y border-line bg-white">
              {linkagesNetwork.map((partner, i) => (
                <Reveal key={partner.name} as="li" delay={Math.min(i * 25, 200)}>
                  <div className="grid gap-2 px-5 py-5 sm:grid-cols-[8rem_1fr] sm:gap-6 sm:px-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-royal sm:pt-1">
                      {partner.kind}
                    </p>
                    <div>
                      <p className="font-extrabold text-navy">{partner.name}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate">
                        {partner.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <p className="mt-8 text-sm text-slate">
              Looking to partner with NU Clark?{" "}
              <a
                href={`mailto:${linkagesIntro.email}`}
                className="font-bold text-royal underline-offset-4 hover:underline"
              >
                Email {linkagesIntro.email}
              </a>
              {" · "}
              <Link
                href="/news"
                className="font-bold text-royal underline-offset-4 hover:underline"
              >
                More partnership news
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
