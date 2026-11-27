"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { APPLY_URL } from "@/lib/site";
import {
  columnsBySlug,
  extraNavLinks,
  navSections,
  utilityNavLinks,
  type NavGroup,
} from "@/lib/nav-menu";

const menu = navSections;
const extraLinks = extraNavLinks;
const utilityLinks = utilityNavLinks;

const APPLY_PILL =
  "inline-flex items-center justify-center rounded-full bg-gold px-4 py-2 text-sm font-bold text-navy transition active:scale-[0.98] hover:bg-[#ffd84a]";

const DRAWER_EASE =
  "transition-[transform,opacity] duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] motion-reduce:transition-none";

function pathMatches(current: string | undefined, href: string) {
  return current === href || Boolean(current?.startsWith(`${href}/`));
}

function desktopLinkClass(isCurrent: boolean) {
  return `flex items-center gap-1.5 rounded-lg px-2 py-2 text-navy transition-colors duration-150 hover:text-royal ${
    isCurrent
      ? "bg-mist font-bold underline decoration-gold decoration-2 underline-offset-[7px]"
      : "font-medium"
  }`;
}

function Chevron({ open }: { open?: boolean }) {
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
      className={`transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Icon({
  d,
  size = 18,
  className = "",
}: {
  d: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={d} />
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
      className="flex min-w-0 shrink items-center text-navy"
      aria-label="National University Clark home"
    >
      <Image
        src="/nu-clark-logo.png"
        alt="NU Clark"
        width={1122}
        height={260}
        priority
        className={compact ? "h-8 w-auto" : "h-9 w-auto sm:h-11"}
      />
    </Link>
  );
}

function DrawerPanel({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={[
        "absolute inset-0 overflow-y-auto overscroll-contain px-5",
        DRAWER_EASE,
        open
          ? "translate-x-0 opacity-100"
          : "pointer-events-none translate-x-6 opacity-0",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function MobileMenu({
  open,
  panel,
  currentPath,
  onClose,
  onSelectPanel,
}: {
  open: boolean;
  panel: string | null;
  currentPath?: string;
  onClose: () => void;
  onSelectPanel: (slug: string | null) => void;
}) {
  const titleId = useId();
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const activeSection = menu.find((s) => s.slug === panel);
  const groups: NavGroup[] = activeSection
    ? columnsBySlug[activeSection.slug]
        .flat()
        .filter((g) => g.title || g.items.length > 0)
    : [];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={[
        "fixed inset-0 z-[70] flex flex-col bg-white lg:hidden",
        "transition-[opacity,visibility] duration-[280ms] ease-out motion-reduce:transition-none",
        open ? "visible opacity-100" : "invisible opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div className="flex shrink-0 items-center gap-2 border-b border-line px-4 py-3">
        <BrandMark onClick={onClose} compact />
        <span id={titleId} className="sr-only">
          Site menu
        </span>
        <div className="ml-auto flex items-center gap-2">
          <a href={APPLY_URL} className={APPLY_PILL} onClick={onClose}>
            Apply
          </a>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors active:bg-mist hover:bg-mist"
          >
            <Icon d="M6 6l12 12M18 6L6 18" size={22} />
          </button>
        </div>
      </div>

      <div className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className={[
            "absolute inset-0 overflow-y-auto overscroll-contain px-5",
            DRAWER_EASE,
            panel ? "-translate-x-6 opacity-0" : "translate-x-0 opacity-100",
          ].join(" ")}
        >
          <ul className="py-1">
            {menu.map((s) => (
              <li key={s.slug} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => onSelectPanel(s.slug)}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left text-[1.05rem] font-semibold text-navy transition-colors active:bg-mist"
                >
                  <span className="min-w-0">{s.title}</span>
                  <Icon d="M5 12h14M13 6l6 6-6 6" className="shrink-0 text-royal" />
                </button>
              </li>
            ))}
            {extraLinks.map((l) => (
              <li key={l.href} className="border-b border-line">
                <Link
                  href={l.href}
                  onClick={onClose}
                  aria-current={currentPath === l.href ? "page" : undefined}
                  className="block py-4 text-[1.05rem] font-semibold text-navy transition-colors active:bg-mist"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="pb-1 pt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-royal">
            University
          </p>
          <ul className="pb-6">
            {utilityLinks.map((l) => {
              const className =
                "block border-b border-line py-3.5 text-[1.05rem] font-semibold text-navy transition-colors active:bg-mist";
              return (
                <li key={l.label}>
                  {l.href.startsWith("/") ? (
                    <Link
                      href={l.href}
                      onClick={onClose}
                      aria-current={
                        currentPath === l.href ? "page" : undefined
                      }
                      className={className}
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} onClick={onClose} className={className}>
                      {l.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <DrawerPanel open={Boolean(panel)}>
          {activeSection && (
            <>
              <button
                type="button"
                onClick={() => onSelectPanel(null)}
                className="flex items-center gap-2 py-4 text-sm font-bold text-royal transition-colors active:opacity-70"
              >
                <Icon d="M19 12H5M11 6l-6 6 6 6" />
                Back
              </button>
              <Link
                href={`/${activeSection.slug}`}
                onClick={onClose}
                className="mb-2 block border-b border-line pb-4 text-xl font-extrabold text-navy"
              >
                {activeSection.title}
              </Link>
              {activeSection.slug === "about" && (
                <Link
                  href="/about"
                  onClick={onClose}
                  className="block border-b border-line py-3.5 font-semibold text-navy transition-colors active:bg-mist"
                >
                  About NU Clark
                </Link>
              )}
              {groups.map((g, gi) => (
                <div
                  key={`${g.title ?? "group"}-${gi}`}
                  className="border-b border-line py-3"
                >
                  {g.title && (
                    <Link
                      href={g.href!}
                      onClick={onClose}
                      className="block py-1.5 font-bold text-navy transition-colors active:text-royal"
                    >
                      {g.title}
                    </Link>
                  )}
                  {g.items.length > 0 && (
                    <ul
                      className={
                        g.title ? "mt-1 space-y-1 pl-3" : "space-y-1"
                      }
                    >
                      {g.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            href={it.href}
                            onClick={onClose}
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
                  )}
                </div>
              ))}
            </>
          )}
        </DrawerPanel>
      </div>

      <div className="shrink-0 border-t border-line px-5 py-4">
        <div className="flex flex-wrap items-center gap-3 opacity-80">
          {(
            [
              ["/pacucoa.png", "PACUCOA"],
              ["/ched.png", "CHED"],
              ["/faap.png", "FAAP"],
            ] as const
          ).map(([src, alt]) => (
            <Image
              key={alt}
              src={src}
              alt={alt}
              width={48}
              height={48}
              className="h-10 w-auto object-contain"
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-snug text-slate">
          Copyright © 2026 National University Clark. All Rights Reserved.
        </p>
      </div>
    </div>
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
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      if (unmountTimer.current) clearTimeout(unmountTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const { overflow, touchAction } = document.body.style;
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.touchAction = touchAction;
    };
  }, [mounted]);

  useEffect(() => {
    setVisible(false);
    setMounted(false);
    setPanel(null);
    setActive(null);
  }, [pathname]);

  const showDropdown = (slug: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setActive(slug);
  };

  const hideDropdown = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActive(null), 200);
  };

  const openMenu = () => {
    if (unmountTimer.current) clearTimeout(unmountTimer.current);
    setPanel(null);
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  };

  const closeMenu = () => {
    setVisible(false);
    setPanel(null);
    setActive(null);
    if (unmountTimer.current) clearTimeout(unmountTimer.current);
    unmountTimer.current = setTimeout(() => setMounted(false), 460);
  };

  const menuOpen = mounted && visible;

  return (
    <>
      <nav
        className={[
          "relative z-40 bg-white",
          "w-full rounded-none px-4 py-3 shadow-none",
          "lg:left-1/2 lg:w-[min(calc(100vw-2.5rem),1700px)] lg:-translate-x-1/2 lg:rounded-2xl lg:px-8 lg:py-3 lg:shadow-sm",
        ].join(" ")}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <BrandMark onClick={closeMenu} />

          <ul className="hidden flex-1 items-center justify-evenly lg:flex">
            {menu.map((s) => {
              const isOpen = active === s.slug;
              const href = `/${s.slug}`;
              const isCurrent = pathMatches(currentPath, href);
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
                    className={desktopLinkClass(isCurrent)}
                  >
                    {s.title}
                    <Chevron open={isOpen} />
                  </Link>

                  <div
                    className={`absolute left-0 right-0 top-full z-30 pt-3 transition-opacity duration-150 ${
                      isOpen
                        ? "visible opacity-100"
                        : "invisible pointer-events-none opacity-0"
                    }`}
                  >
                    {isOpen && (
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

            {extraLinks.map((l) => {
              const isCurrent = pathMatches(currentPath, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={
                      currentPath === l.href
                        ? "page"
                        : isCurrent
                          ? "location"
                          : undefined
                    }
                    className={desktopLinkClass(isCurrent)}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a
            href={APPLY_URL}
            className="ml-auto hidden rounded-full bg-navy px-7 py-3 font-semibold text-white transition-colors duration-150 hover:bg-royal lg:block"
          >
            Apply Now
          </a>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <a href={APPLY_URL} className={APPLY_PILL}>
              Apply
            </a>
            <button
              type="button"
              onClick={() => (menuOpen ? closeMenu() : openMenu())}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors active:bg-mist hover:bg-mist"
            >
              {menuOpen ? (
                <Icon d="M6 6l12 12M18 6L6 18" size={22} />
              ) : (
                <Icon d="M4 7h16M4 12h16M4 17h16" size={22} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {mounted &&
        createPortal(
          <MobileMenu
            open={visible}
            panel={panel}
            currentPath={currentPath}
            onClose={closeMenu}
            onSelectPanel={setPanel}
          />,
          document.body,
        )}
    </>
  );
}
