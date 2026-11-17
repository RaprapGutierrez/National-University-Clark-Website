import Image from "next/image";
import Link from "next/link";
import { sections } from "@/lib/site";

const FOOTER_SLUGS = ["academics", "admissions", "student-life", "about"];

const footerSections = FOOTER_SLUGS.map((slug) =>
  sections.find((s) => s.slug === slug),
).filter((s): s is (typeof sections)[number] => Boolean(s));

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/NationalUniversityClark/",
    path: "M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/nationaluniversity_clark/?hl=en",
    path: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCNvTW78sivAR80TIr-VTvrg",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.2 22 12 22 12s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-navy py-10 text-white sm:mt-20 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[200px_1fr] lg:gap-14">
        {/* Logo + socials */}
        <div className="flex flex-col items-center gap-5 text-center lg:items-start lg:text-left">
          <Image
            src="/nu-logo.png"
            alt="National University 1900"
            width={150}
            height={182}
            className="h-28 w-auto sm:h-36 lg:h-44"
          />
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-navy transition hover:bg-gold"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {footerSections.map((s) => (
            <div key={s.slug} className="min-w-0">
              <h3 className="mb-4 text-lg font-bold sm:text-xl">
                <Link href={`/${s.slug}`} className="hover:underline">
                  {s.title}
                </Link>
              </h3>
              <ul className="space-y-2.5 text-sm">
                {s.pages.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${s.slug}/${p.slug}`}
                      className="break-words text-white/90 hover:underline"
                    >
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-2 border-t border-dashed border-white/30 px-5 pt-6 text-center text-sm text-white/80 sm:flex-row sm:justify-between sm:text-left">
        <p>Jose Abad Santos Avenue, Clark Freeport Zone, Pampanga</p>
        <p>© 2026 National University. All rights reserved.</p>
      </div>
    </footer>
  );
}
