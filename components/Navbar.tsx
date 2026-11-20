"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { APPLY_URL } from "@/lib/site";
import {
  columnsBySlug,
  extraNavLinks,
  navSections,
} from "@/lib/nav-menu";

const menu = navSections;
const extraLinks = extraNavLinks;

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

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function ArrowLeft({ className = "" }: { className?: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function BrandMark({
  onClick,
  compact = false,
}: {
  onClick?: () => void;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="flex min-w-0 shrink items-center gap-2 text-navy sm:gap-2.5"
    >
      <Image
        src="/nu-logo.png"
        alt="National University logo"
        width={38}
        height={46}
        priority
        className={compact ? "h-9 w-auto" : "h-10 w-auto sm:h-[46px]"}
      />
      <span
        className={`font-extrabold uppercase leading-[1.05] tracking-tight ${
          compact ? "text-[12px]" : "text-[13px] sm:text-[17px]"
        }`}
      >
        National
        <br />
        University
      </span>
      <span
        className={`rounded-full bg-gold ${compact ? "h-8 w-0.5" : "h-9 w-0.5 sm:h-11"}`}
        aria-hidden="true"
      />
      <span
        className={`font-extrabold uppercase leading-none tracking-wide text-royal ${
          compact ? "text-lg" : "text-xl sm:text-2xl"
        }`}
      >
        CLARK
      </span>
    </Link>
  );
}

export default function Navbar({
  currentPath: currentPathProp,
}: {
  currentPath?: string;
}) {
  const pathname = usePathname();
  const currentPath = currentPathProp ?? pathname;
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [panel, setPanel] = useState<string | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const setNavHeight = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--mobile-nav-h",
        `${Math.round(h)}px`,
      );
    };

    setNavHeight();
    const ro = new ResizeObserver(setNavHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  useEffect(() => {
    setVisible(false);
    setMounted(false);
    setPanel(null);
    setActive(null);
  }, [pathname]);

  const showDropdown = (slug: string) => {
    if (timer.current) clearTimeout(timer.current);
    setActive(slug);
  };

  const hideDropdown = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(null), 200);
  };

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  };

  const closeMenu = () => {
    setVisible(false);
    setPanel(null);
    setActive(null);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMounted(false), 460);
  };

  const activeSection = menu.find((s) => s.slug === panel);
  const applyClass =
    "inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy transition active:scale-[0.98] hover:bg-[#ffd84a]";

  return (
    <>
      <nav
        ref={navRef}
        className={[
          "relative z-40 bg-white",
          // Mobile: flat full-width bar like nu.edu.ph
          "w-full rounded-none px-4 py-3 shadow-none",
          // Desktop: floating pill on the navy band
          "lg:left-1/2 lg:w-[min(calc(100vw-2.5rem),1700px)] lg:-translate-x-1/2 lg:rounded-2xl lg:px-8 lg:py-3 lg:shadow-sm",
        ].join(" ")}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <BrandMark onClick={closeMenu} />

          {/* Desktop menu */}
          <ul className="hidden flex-1 items-center justify-evenly lg:flex">
            {menu.map((s) => {
              const isActive = active === s.slug;
              const href = `/${s.slug}`;
              const isCurrent =
                currentPath === href || currentPath?.startsWith(`${href}/`);
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
                    href={href}
                    onClick={() => setActive(null)}
                    aria-current={
                      currentPath === href
                        ? "page"
                        : isCurrent
                          ? "location"
                          : undefined
                    }
                    className={`flex items-center gap-1.5 rounded-lg px-2 py-2 text-navy transition-colors duration-150 hover:text-royal ${isCurrent ? "bg-mist font-bold underline decoration-gold decoration-2 underline-offset-[7px]" : "font-medium"}`}
                  >
                    {s.title}
                    <Chevron className={isActive ? "rotate-180" : ""} />
                  </Link>

                  <div
                    className={`absolute left-0 right-0 top-full z-30 pt-3 transition-opacity duration-150 ${
                      isActive
                        ? "visible opacity-100"
                        : "invisible pointer-events-none opacity-0"
                    }`}
                  >
                    {isActive && (
                      <div className="max-h-[calc(100vh-140px)] overflow-y-auto rounded-2xl border border-line bg-[#f4f5fc] p-6 shadow-xl">
                        <div
                          className="grid"
                          style={{
                            gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`,
                          }}
                        >
                          {cols.map((col, ci) => (
                            <div
                              key={ci}
                              className={`space-y-6 ${
                                ci > 0 ? "border-l border-line pl-6" : ""
                              } ${ci < cols.length - 1 ? "pr-6" : ""}`}
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
                                          aria-current={
                                            it.href === currentPath
                                              ? "page"
                                              : undefined
                                          }
                                          className="block text-[15px] font-medium text-royal transition-colors hover:text-navy aria-[current=page]:font-bold aria-[current=page]:underline"
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
                    )}
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
            className="ml-auto hidden rounded-full bg-navy px-7 py-3 font-semibold text-white transition-colors duration-150 hover:bg-royal lg:block"
          >
            Apply Now
          </a>

          {/* Mobile: Apply + menu toggle (X when open, like nu.edu.ph) */}
          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <a href={APPLY_URL} className={applyClass}>
              Apply
            </a>
            <button
              type="button"
              onClick={() => (mounted && visible ? closeMenu() : openMenu())}
              aria-expanded={visible}
              aria-label={visible ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors active:bg-mist hover:bg-mist"
            >
              {visible ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — NU.edu.ph timing: opacity 0.28s + panel 0.46s cubic-bezier */}
      {mounted && (
        <div
          className={[
            "fixed inset-x-0 bottom-0 top-[var(--mobile-nav-h,3.75rem)] z-[55] lg:hidden",
            "transition-[opacity,visibility] duration-[280ms] ease-out motion-reduce:transition-none",
            visible
              ? "visible opacity-100"
              : "invisible opacity-0",
          ].join(" ")}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className={[
              "flex h-full flex-col bg-white",
              "transition-[transform,opacity] duration-[460ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none",
              visible
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0",
            ].join(" ")}
          >
            <div className="relative min-h-0 flex-1 overflow-hidden">
              {/* Root panel */}
              <div
                className={[
                  "absolute inset-0 overflow-y-auto px-5",
                  "transition-[transform,opacity] duration-[460ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none",
                  panel
                    ? "-translate-x-6 opacity-0"
                    : "translate-x-0 opacity-100",
                ].join(" ")}
              >
                <ul className="py-1">
                  {menu.map((s) => (
                    <li key={s.slug} className="border-b border-line">
                      <button
                        type="button"
                        onClick={() => setPanel(s.slug)}
                        className="flex w-full items-center justify-between py-4 text-left text-[1.05rem] font-semibold text-navy transition-colors active:bg-mist"
                      >
                        {s.title}
                        <ArrowRight className="text-royal" />
                      </button>
                    </li>
                  ))}
                  {extraLinks.map((l) => (
                    <li key={l.href} className="border-b border-line">
                      <Link
                        href={l.href}
                        onClick={closeMenu}
                        className="block py-4 text-[1.05rem] font-semibold text-navy transition-colors active:bg-mist"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Drill-down panel */}
              <div
                className={[
                  "absolute inset-0 overflow-y-auto bg-white px-5",
                  "transition-[transform,opacity] duration-[460ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none",
                  panel
                    ? "translate-x-0 opacity-100"
                    : "pointer-events-none translate-x-6 opacity-0",
                ].join(" ")}
              >
                {activeSection && (
                  <>
                    <button
                      type="button"
                      onClick={() => setPanel(null)}
                      className="flex items-center gap-2 py-4 text-sm font-bold text-royal transition-colors active:opacity-70"
                    >
                      <ArrowLeft />
                      Back
                    </button>
                    <Link
                      href={`/${activeSection.slug}`}
                      onClick={closeMenu}
                      className="mb-2 block border-b border-line pb-4 text-xl font-extrabold text-navy"
                    >
                      {activeSection.title}
                    </Link>
                    {activeSection.slug === "about" && (
                      <Link
                        href="/about"
                        onClick={closeMenu}
                        className="block border-b border-line py-3.5 font-semibold text-navy transition-colors active:bg-mist"
                      >
                        About NU Clark
                      </Link>
                    )}
                    {columnsBySlug[activeSection.slug].flat().map((g, gi) => (
                      <div key={gi} className="border-b border-line py-3">
                        {g.title && (
                          <Link
                            href={g.href!}
                            onClick={closeMenu}
                            className="block py-1.5 font-bold text-navy transition-colors active:text-royal"
                          >
                            {g.title}
                          </Link>
                        )}
                        <ul
                          className={
                            g.title ? "mt-1 space-y-1 pl-3" : "space-y-1"
                          }
                        >
                          {g.items.map((it) => (
                            <li key={it.label}>
                              <Link
                                href={it.href}
                                onClick={closeMenu}
                                aria-current={
                                  it.href === currentPath ? "page" : undefined
                                }
                                className="block rounded-md py-2 text-[15px] text-slate transition-colors active:bg-mist aria-[current=page]:font-bold aria-[current=page]:text-navy"
                              >
                                {it.label}
                                {it.sub && (
                                  <span className="mt-0.5 block text-xs text-slate/80">
                                    {it.sub}
                                  </span>
                                )}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="border-t border-line px-5 py-4">
              <div className="flex flex-wrap items-center gap-3 opacity-80">
                <Image
                  src="/pacucoa.png"
                  alt="PACUCOA"
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/ched.png"
                  alt="CHED"
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
                <Image
                  src="/faap.png"
                  alt="FAAP"
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="mt-3 text-[11px] leading-snug text-slate">
                Copyright © 2026 National University Clark. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
