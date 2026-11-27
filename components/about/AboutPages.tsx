import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { PageItem, Section } from "@/lib/site";
import { founderPortrait } from "@/lib/about";
import { AboutIcon } from "./AboutIcon";
import { Accreditation, CampusTour, Leadership, OurStory, Vmgo } from "./AboutSections";
import { CampusHighlights } from "./CampusHighlights";
import { UniversityHymn } from "./CampusMedia";

const frame ="mx-auto w-full max-w-[77rem] px-5 sm:px-8";
const heroFrame ="mx-auto max-w-6xl px-4 sm:px-5";
const focus ="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal";
const surface ="bg-[#faf9f5] text-[#101f55] [&+footer]:mt-0";

const details = {
"our-story": { View: OurStory, icon:"book" },
  leadership: { View: Leadership, icon:"users" },
  vmgo: { View: Vmgo, icon:"target" },
  accreditation: { View: Accreditation, icon:"file" },
"campus-tour": { View: CampusTour, icon:"building" },
} as const;

export function aboutPageTitle(page: PageItem) {
  return page.slug === "vmgo" ?"Vision, Mission, Goals & Objectives" : page.title;
}

function AboutHeader({ page, children }: { page?: PageItem; children?: ReactNode }) {
  return (
    <>
      {children && (
        <div className="bg-navy pb-16 text-white sm:pb-20">
          <div className={heroFrame}>{children}</div>
        </div>
      )}
      <nav aria-label="Breadcrumb" className="border-b border-[#d8d4c7] bg-white/65 text-sm text-[#535a70]">
        <ol className={`${frame} flex flex-wrap items-center gap-2.5 py-4`}>
          <li><Link href="/" className={`hover:underline ${focus}`}>Home</Link></li>
          <li aria-hidden="true"><AboutIcon name="chevron-right" className="size-3 text-[#6b6f7f]" /></li>
          <li>
            {page ? (
              <Link href="/about" className={`hover:underline ${focus}`}>About</Link>
            ) : (
              <span aria-current="page" className="font-semibold text-[#101f55]">About</span>
            )}
          </li>
          {page && (
            <>
              <li aria-hidden="true"><AboutIcon name="chevron-right" className="size-3 text-[#6b6f7f]" /></li>
              <li aria-current="page" className="font-semibold text-[#101f55]">{page.title}</li>
            </>
          )}
        </ol>
      </nav>
    </>
  );
}

export function AboutOverview({ section }: { section: Section }) {
  return (
    <div className={surface}>
      <AboutHeader>
        <div className="grid items-center gap-8 pt-8 sm:pt-12 lg:grid-cols-2 lg:gap-10 lg:pt-14">
          <div>
            <h1 className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About <span className="whitespace-nowrap">NU Clark</span>
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/90 sm:mt-5 sm:text-lg">
              {section.intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
              <Link href="/about/campus-tour" className="inline-flex min-h-11 items-center gap-2.5 rounded-full bg-gold px-6 py-3 font-bold text-navy transition-colors hover:bg-[#ffda51] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                <AboutIcon name="play" /> Take a campus tour
              </Link>
              <a href="#about-contents" className="inline-flex min-h-11 items-center rounded-full border-2 border-white/70 px-5 py-2.5 font-bold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                Explore About NU Clark
              </a>
            </div>
          </div>
          <CampusHighlights />
        </div>
      </AboutHeader>
      <main className={`${frame} space-y-12 pt-9 pb-14 sm:space-y-16 sm:pt-12 sm:pb-20`}>
        <section aria-labelledby="about-contents">
          <h2 id="about-contents" className="mb-5 scroll-mt-6 font-serif text-3xl leading-tight tracking-tight sm:mb-7 sm:text-4xl" tabIndex={-1}>
            Explore About NU Clark
          </h2>
          <ul className="grid md:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] md:gap-x-8 lg:gap-x-12">
            {section.pages.map((page) => (
              <li key={page.slug} className={page.slug === "our-story" ?"mb-5 md:row-span-4 md:mb-0" :"border-b border-[#d8d4c7] [&:nth-child(2)]:border-t"}>
                {page.slug === "our-story" ? (
                  <Link href="/about/our-story" className={`group flex h-full flex-col border border-[#d8d4c7] bg-[#f1ede2] transition-colors hover:border-[#97751a] hover:bg-[#ece5d5] ${focus}`}>
                    <div className="relative aspect-[2/1] overflow-hidden bg-[#ded7c7] md:min-h-37 md:flex-1">
                      <Image
                        {...founderPortrait}
                        fill
                        sizes="(min-width: 1232px) 460px, (min-width: 768px) 40vw, 100vw"
                        className="object-cover object-[center_12%] transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none"
                      />
                    </div>
                    <div className="flex items-start justify-between gap-4 border-t-2 border-[#bd8b17] p-5">
                      <div>
                        <h3 className="font-serif text-2xl leading-tight">{page.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#535a70]">{page.summary}</p>
                      </div>
                      <AboutIcon name="arrow-right" className="mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                    </div>
                  </Link>
                ) : (
                  <Link
                    href={`/about/${page.slug}`}
                    className={`group grid h-full grid-cols-[2.25rem_minmax(0,1fr)_1.25rem] items-center gap-3 px-2 py-4 transition-colors hover:bg-[#f1ede2] sm:gap-4 sm:px-3 ${focus}`}
                  >
                    <span className="grid size-9 place-items-center border border-[#cfccbf] bg-white text-[#243c77] transition-colors group-hover:border-[#243c77] group-hover:bg-[#243c77] group-hover:text-white">
                      <AboutIcon name={details[page.slug as keyof typeof details].icon} className="size-[1.125rem]" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl leading-tight">{page.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#535a70]">{page.summary}</p>
                    </div>
                    <AboutIcon name="arrow-right" className="size-5 shrink-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>
        <AboutResources />
        <div className="mx-auto max-w-4xl border-t border-[#d8d4c7] pt-8">
          <UniversityHymn />
        </div>
      </main>
    </div>
  );
}

const resources = [
  {
    title:"Brochure",
    description:"Get an overview of National University’s programs and campus life.",
    href:"https://drive.google.com/file/d/1t8Bn-_q9IBj8_IWvFtZhJgNT5rtAMiz9/view",
    action:"Open brochure",
    download: false,
  },
  {
    title:"Student Handbook",
    description:"Read National University’s student policies and guidelines for academic year 2023–2024.",
    href:"/about/NU-Student-Handbook-2023-2024.pdf",
    action:"Download handbook",
    download: true,
  },
];

function AboutResources() {
  return (
    <section aria-labelledby="about-resources">
      <h2 id="about-resources" className="mb-5 border-b-2 border-gold pb-3 font-serif text-3xl tracking-tight sm:text-4xl">
        Resources
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {resources.map(({ title, description, href, action, download }) => (
          <li key={title} className="flex flex-col items-start rounded-lg border border-[#d8d4c7] bg-white p-5 sm:p-6">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 mb-5 text-sm leading-relaxed text-[#535a70]">{description}</p>
            <a href={href} download={download || undefined} className={`mt-auto inline-flex min-h-11 items-center gap-2.5 rounded-md border border-line px-3 py-2 text-sm font-semibold hover:border-royal hover:bg-mist ${focus}`}>
              <AboutIcon name="file" className="size-5 shrink-0 text-[#a62c2c]" />
              {action}
              <AboutIcon name={download ?"download" :"external"} className="size-4 shrink-0 text-royal" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AboutDetail({ page, section }: { page: PageItem; section: Section }) {
  const { View } = details[page.slug as keyof typeof details];
  const nextPage = section.pages[section.pages.findIndex((entry) => entry.slug === page.slug) + 1];

  return (
    <div className={surface}>
      <AboutHeader page={page} />
      <div className={`${frame} grid items-start gap-5 pt-2 pb-14 sm:pb-20 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-10 lg:pt-7 xl:grid-cols-[200px_minmax(0,1fr)] xl:gap-14`}>
        <nav aria-label="About NU Clark" className="lg:sticky lg:top-[var(--about-rail-top)] lg:border-r lg:border-[#d8d4c7] lg:pr-5">
          <Link href="/about" className={`hidden pb-3 text-xs font-bold tracking-[.09em] uppercase hover:underline lg:inline-block ${focus}`}>
            About NU Clark
          </Link>
          <ul className="flex flex-wrap gap-x-4 border-b border-[#d8d4c7] lg:block lg:divide-y lg:divide-[#d8d4c7] lg:border-y">
            {section.pages.map((entry) => {
              const current = entry.slug === page.slug;
              return (
                <li key={entry.slug}>
                  <Link
                    href={`/about/${entry.slug}`}
                    aria-current={current ?"page" : undefined}
                    className={`group -mb-px flex min-h-10 items-center justify-between border-b-2 py-2 text-sm whitespace-nowrap lg:mb-0 lg:border-b-0 lg:border-l-2 lg:pl-3 ${focus} ${current ?"border-gold font-bold text-[#101f55]" :"border-transparent font-medium text-[#535a70] hover:text-[#101f55] hover:underline"}`}
                  >
                    {entry.title}
                    {current && <AboutIcon name="chevron-right" className="hidden size-3.5 lg:block" />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <main className="min-w-0">
          <header className="mb-7 border-b border-[#d8d4c7] pb-4 sm:mb-8 sm:pb-5">
            <h1 className="max-w-[23ch] font-serif text-[clamp(2.625rem,6vw,4.625rem)] leading-[1.02] tracking-[-.04em] text-balance">
              {aboutPageTitle(page)}
            </h1>
          </header>
          <div className="space-y-10 sm:space-y-14">
            <View />
            <nav aria-label="Continue exploring About" className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-[#d8d4c7] pt-4 text-sm font-semibold">
              <Link href="/about" className={`inline-flex min-h-10 items-center gap-2 hover:underline ${focus}`}>
                <AboutIcon name="arrow-left" /> About NU Clark
              </Link>
              {nextPage && (
                <Link href={`/about/${nextPage.slug}`} className={`inline-flex min-h-10 items-center gap-2 hover:underline ${focus}`}>
                  {nextPage.title} <AboutIcon name="arrow-right" />
                </Link>
              )}
            </nav>
          </div>
        </main>
      </div>
    </div>
  );
}

