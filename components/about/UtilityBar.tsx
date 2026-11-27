"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { utilityNavLinks } from "@/lib/nav-menu";

const linkClass =
  "inline-block py-1 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export default function UtilityBar() {
  const pathname = usePathname() ?? "";

  // The About pages already show this bar in their own header
  if (pathname === "/about" || pathname.startsWith("/about/")) return null;

  return (
    <nav aria-label="University resources" className="bg-[#191f46] text-white">
      <ul className="mx-auto flex min-h-11 max-w-6xl flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2 text-xs font-semibold sm:justify-end sm:gap-x-6 sm:px-5">
        {utilityNavLinks.map(({ href, label }) => (
          <li key={label}>
            {href.startsWith("/") ? (
              <Link href={href} className={linkClass}>
                {label}
              </Link>
            ) : (
              <a href={href} className={linkClass}>
                {label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
