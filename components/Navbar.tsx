"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { sections, APPLY_URL } from "@/lib/site";

const order = ["academics", "admissions", "student-life", "about"];
const menu = order
  .map((slug) => sections.find((s) => s.slug === slug))
  .filter((s): s is (typeof sections)[number] => Boolean(s));

const extraLinks = [
  { label: "Alumni", href: "/alumni" },
  { label: "News", href: "/news" },
];

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform ${className}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Hamburger({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      {open ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  const closeMenu = () => {
    setOpen(false);
    setOpenSection(null);
  };

  return (
    <nav className="relative mt-5 rounded-2xl bg-white px-4 py-3 shadow-sm sm:px-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 text-navy sm:gap-3"
        >
          <Image
            src="/nu-logo.png"
            alt="National University logo"
            width={38}
            height={46}
            priority
            className="h-10 w-auto sm:h-[46px]"
          />
          <span className="text-[14px] font-extrabold uppercase leading-[1.05] tracking-tight sm:text-[17px]">
            National
            <br />
            University
          </span>
          <span className="block text-xs font-bold tracking-[0.15em] text-royal sm:text-sm sm:tracking-[0.25em]">
            CLARK
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden flex-1 items-center justify-evenly lg:flex">
          {menu.map((s) => (
            <li key={s.slug} className="group">
              <Link
                href={`/${s.slug}`}
                className="flex items-center gap-1.5 rounded-lg px-2 py-2 font-medium text-navy hover:text-royal"
              >
                {s.title}
                <Chevron className="group-hover:rotate-180 group-focus-within:rotate-180" />
              </Link>

              <div className="invisible absolute left-0 right-0 top-full z-30 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                <div className="rounded-2xl border border-line bg-[#f4f5fc] p-8 shadow-xl">
                  <h3 className="mb-4 border-b border-line pb-3 text-sm font-bold uppercase tracking-wide text-navy">
                    {s.title}
                  </h3>
                  <ul
                    className="grid gap-x-8 gap-y-3"
                    style={{
                      gridTemplateColumns: `repeat(${Math.min(
                        s.pages.length,
                        4,
                      )}, minmax(0, 1fr))`,
                    }}
                  >
                    {s.pages.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/${s.slug}/${p.slug}`}
                          className="text-[15px] font-medium text-slate hover:text-navy"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}

          {extraLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-lg px-2 py-2 font-medium text-navy hover:text-royal"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={APPLY_URL}
          className="ml-auto hidden rounded-full bg-navy px-7 py-3 font-semibold text-white hover:bg-royal sm:block lg:ml-0"
        >
          Apply Now
        </a>

        {/* Hamburger button */}
        <button
          onClick={() => (open ? closeMenu() : setOpen(true))}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-navy sm:ml-0 lg:hidden"
        >
          <Hamburger open={open} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-3 max-h-[75vh] overflow-y-auto border-t border-line pt-2 lg:hidden">
          <ul className="divide-y divide-line">
            {menu.map((s) => {
              const expanded = openSection === s.slug;
              return (
                <li key={s.slug}>
                  <button
                    onClick={() => setOpenSection(expanded ? null : s.slug)}
                    aria-expanded={expanded}
                    className="flex w-full items-center justify-between py-3 text-left font-bold text-navy"
                  >
                    {s.title}
                    <Chevron className={expanded ? "rotate-180" : ""} />
                  </button>
                  {expanded && (
                    <div className="flex flex-col pb-3 pl-3">
                      {s.pages.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/${s.slug}/${p.slug}`}
                          onClick={closeMenu}
                          className="py-1.5 text-sm text-slate"
                        >
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}

            {extraLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={closeMenu}
                  className="block py-3 font-bold text-navy"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={APPLY_URL}
            className="mt-3 block rounded-full bg-navy px-6 py-3 text-center font-semibold text-white sm:hidden"
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
