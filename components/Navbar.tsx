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

function chunk<T>(items: T[], columns: number): T[][] {
  const size = Math.ceil(items.length / columns);
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}

function Chevron() {
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
      className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative mt-5 rounded-2xl bg-white px-5 py-3 shadow-sm">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3 text-navy">
          <Image
            src="/nu-logo.png"
            alt="National University logo"
            width={38}
            height={46}
            priority
          />
          <span className="text-[17px] font-extrabold uppercase leading-[1.05] tracking-tight">
            National
            <br />
            University
          </span>
          <span className="block text-sm font-bold tracking-[0.25em] text-royal">
            CLARK
          </span>
        </Link>

        <ul className="hidden flex-1 items-center justify-evenly lg:flex">
          {menu.map((s) => {
            const columns = chunk(s.pages, s.pages.length > 4 ? 2 : 1);
            return (
              <li key={s.slug} className="group">
                <Link
                  href={`/${s.slug}`}
                  className="flex items-center gap-1.5 rounded-lg px-2 py-2 font-medium text-navy hover:text-royal"
                >
                  {s.title}
                  <Chevron />
                </Link>

                <div className="invisible absolute left-0 right-0 top-full z-30 pt-3 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div
                    className="grid gap-8 rounded-2xl border border-line bg-[#f4f5fc] p-8 shadow-xl"
                    style={{
                      gridTemplateColumns: `1.2fr repeat(${columns.length}, 1fr)`,
                    }}
                  >
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wide text-navy">
                        {s.title}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm text-slate">
                        {s.intro}
                      </p>
                      <Link
                        href={`/${s.slug}`}
                        className="mt-4 inline-block text-sm font-semibold text-royal hover:underline"
                      >
                        View all
                      </Link>
                    </div>

                    {columns.map((col, i) => (
                      <div key={i} className="border-l border-line pl-8">
                        <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-navy">
                          {i === 0 ? "Pages" : "\u00A0"}
                        </h3>
                        <ul className="space-y-2.5">
                          {col.map((p) => (
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
                    ))}
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

        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="rounded-lg bg-mist px-3 py-2 font-bold text-navy lg:hidden"
        >
          Menu
        </button>
      </div>

      {open && (
        <ul className="mt-3 space-y-3 border-t border-line pt-3 lg:hidden">
          {menu.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/${s.slug}`}
                onClick={() => setOpen(false)}
                className="font-bold text-navy"
              >
                {s.title}
              </Link>
              <div className="mt-1 flex flex-col pl-3">
                {s.pages.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${s.slug}/${p.slug}`}
                    onClick={() => setOpen(false)}
                    className="py-1 text-sm text-slate"
                  >
                    {p.title}
                  </Link>
                ))}
              </div>
            </li>
          ))}
          {extraLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-bold text-navy"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={APPLY_URL}
              className="inline-block rounded-full bg-navy px-6 py-2.5 font-semibold text-white"
            >
              Apply Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
