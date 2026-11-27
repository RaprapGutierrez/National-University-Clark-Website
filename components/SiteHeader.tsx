"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ScrollHeader } from "@/components/about/ScrollHeader";
import { campusContact, qualityManagement } from "@/lib/about";

const utilityLinks = [
  { label: "Quality Management", href: qualityManagement },
  {
    label: "Linkages",
    href: "/linkages",
  },
  {
    label: "Community Development",
    href: "/community-development",
  },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: campusContact },
];

const linkClass =
  "inline-block py-1 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const frame = "mx-auto max-w-6xl px-4 sm:px-5";

export default function SiteHeader() {
  return (
    <ScrollHeader>
      {/* Utility links — desktop only */}
      <nav
        aria-label="University resources"
        className="hidden bg-[#191f46] text-white lg:block"
      >
        <ul
          className={`${frame} flex min-h-11 flex-wrap items-center justify-end gap-x-6 py-2 text-sm font-semibold`}
        >
          {utilityLinks.map(({ href, label }) => (
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

      {/* Mobile: flat white bar like nu.edu.ph. Desktop: navy band with pill nav. */}
      <div className="border-b border-line bg-white lg:border-0 lg:bg-navy lg:py-3 lg:pt-5 lg:text-white">
        <div className="lg:mx-auto lg:max-w-6xl lg:px-4 lg:px-5 lg:[&>nav]:mt-0">
          <Navbar />
        </div>
      </div>
    </ScrollHeader>
  );
}
