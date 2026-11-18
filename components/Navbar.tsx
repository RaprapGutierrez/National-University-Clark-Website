"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sections, APPLY_URL } from "@/lib/site";
import { programsBySchool } from "@/lib/programs";

type SectionT = (typeof sections)[number];
type Item = { label: string; sub?: string; href: string };
type Group = { title?: string; href?: string; items: Item[] };

const order = ["academics", "admissions", "student-life", "about"];
const menu = order
  .map((slug) => sections.find((s) => s.slug === slug))
  .filter((s): s is SectionT => Boolean(s));

const extraLinks = [
  { label: "Alumni", href: "/alumni" },
  { label: "News", href: "/news" },
];

// Programs listed under a school, each linking to its own page
function programsOf(sectionSlug: string, pageSlug: string) {
  return (programsBySchool[pageSlug] ?? []).map((p) => ({
    label: p.title,
    sub: p.text,
    href: `/${sectionSlug}/${pageSlug}/${p.slug}`,
  }));
}

// Splits a section into dropdown columns
function buildColumns(s: SectionT): Group[][] {
  if (s.slug === "academics") {
    const groups: Group[] = s.pages.map((p) => ({
      title: p.title,
      href: `/${s.slug}/${p.slug}`,
      items: programsOf(s.slug, p.slug),
    }));

    // Put each school in the shorter column so both stay balanced
    const cols: Group[][] = [[], []];
    const sizes = [0, 0];
    groups.forEach((g) => {
      const i = sizes[0] <= sizes[1] ? 0 : 1;
      cols[i].push(g);
      sizes[i] += g.items.length + 2;
    });
    return cols.filter((c) => c.length > 0);
  }

  const items: Item[] = s.pages.map((p) => ({
    label: p.title,
    href: `/${s.slug}/${p.slug}`,
  }));
  const half = Math.ceil(items.length / 2);
  return [
    [{ items: items.slice(0, half) }],
    [{ items: items.slice(half) }],
  ].filter((c) => c[0].items.length > 0);
}

const columnsBySlug: Record<string, Group[][]> = Object.fromEntries(
  menu.map((s) => [s.slug, buildColumns(s)]),
);

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
  const [active, setActive] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const showDropdown = (slug: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActive(slug);
  };

  // Short delay so the mouse can cross the gap without the menu closing
  const hideDropdown = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 200);
  };

  const closeMenu = () => {
    setOpen(false);
    setOpenSection(null);
    setActive(null);
  };

  return (
    <nav className="relative mt-5 rounded-2xl bg-white px-4 py-3 shadow-sm sm:px-5">
      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 text-navy sm:gap-3"
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
          <span
            className="h-9 w-0.5 rounded-full bg-gold sm:h-11"
            aria-hidden="true"
          />
          <span className="text-xl font-extrabold uppercase leading-none tracking-wide text-royal sm:text-2xl">
            CLARK
          </span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden flex-1 items-center justify-evenly lg:flex">
          {menu.map((s) => {
            const isActive = active === s.slug;
            const cols = columnsBySlug[s.slug];
            return (
              <li
                key={s.slug}
                onMouseEnter={() => showDropdown(s.slug)}
                onMouseLeave={hideDropdown}
                onFocus={() => showDropdown(s.slug)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    hideDropdown();
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setActive(null);
                }}
              >
                <Link
                  href={`/${s.slug}`}
                  onClick={() => setActive(null)}
                  className="flex items-center gap-1.5 rounded-lg px-2 py-2 font-medium text-navy hover:text-royal"
                >
                  {s.title}
                  <Chevron className={isActive ? "rotate-180" : ""} />
                </Link>

                <div
                  className={`absolute left-0 right-0 top-full z-30 pt-3 transition-opacity duration-150 ${
                    isActive ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                >
                  <div className="rounded-2xl border border-line bg-[#f4f5fc] p-8 shadow-xl">
                    <div
                      className="grid"
                      style={{
                        gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {cols.map((col, ci) => (
                        <div
                          key={ci}
                          className={`space-y-7 ${
                            ci > 0 ? "border-l border-line pl-10" : "pr-10"
                          }`}
                        >
                          {col.map((g, gi) => (
                            <div key={gi}>
                              {g.title && (
                                <h3
                                  className={`text-sm font-bold uppercase tracking-wide text-navy ${
                                    g.items.length ? "mb-3" : ""
                                  }`}
                                >
                                  <Link
                                    href={g.href!}
                                    onClick={() => setActive(null)}
                                    className="hover:text-royal"
                                  >
                                    {g.title}
                                  </Link>
                                </h3>
                              )}
                              <ul className="space-y-2.5">
                                {g.items.map((it) => (
                                  <li key={it.label}>
                                    <Link
                                      href={it.href}
                                      onClick={() => setActive(null)}
                                      className="block text-[15px] font-medium text-royal hover:text-navy"
                                    >
                                      {it.label}
                                      {it.sub && (
                                        <span className="block text-xs font-normal text-slate">
                                          {it.sub}
                                        </span>
                                      )}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}

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
                    <div className="pb-3 pl-3">
                      {columnsBySlug[s.slug].flat().map((g, gi) => (
                        <div key={gi} className="py-1.5">
                          {g.title && (
                            <Link
                              href={g.href!}
                              onClick={closeMenu}
                              className="block py-1 text-sm font-bold text-navy"
                            >
                              {g.title}
                            </Link>
                          )}
                          {g.items.map((it) => (
                            <Link
                              key={it.label}
                              href={it.href}
                              onClick={closeMenu}
                              className={`block py-1 text-sm text-slate ${
                                g.title ? "pl-3" : ""
                              }`}
                            >
                              {it.label}
                              {it.sub && (
                                <span className="block text-xs">{it.sub}</span>
                              )}
                            </Link>
                          ))}
                        </div>
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
