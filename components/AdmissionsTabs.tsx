import Link from "next/link";

const tabs = [
  { key: "apply-now", label: "Apply Now", href: "/admissions/apply-now" },
  {
    key: "requirements",
    label: "Requirements",
    href: "/admissions/requirements",
  },
  {
    key: "scholarships",
    label: "Scholarships",
    href: "/admissions/scholarships",
  },
];

export default function AdmissionsTabs({ active }: { active?: string }) {
  return (
    <div className="sticky top-[var(--site-header-offset)] z-30 border-b border-line bg-mist/95 backdrop-blur-md">
      <nav
        aria-label="Admissions"
        className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-5 sm:gap-2"
      >
        {tabs.map((t) => {
          const on = active === t.key;
          return (
            <Link
              key={t.key}
              href={t.href}
              aria-current={on ? "page" : undefined}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-bold transition ${
                on
                  ? "bg-navy text-gold shadow-sm"
                  : "bg-white text-navy ring-1 ring-line hover:ring-gold"
              }`}
            >
              {t.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
