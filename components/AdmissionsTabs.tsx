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
] as const;

export default function AdmissionsTabs({ active }: { active?: string }) {
  return (
    <nav aria-label="Admissions pages" className="mx-auto max-w-6xl px-4 sm:px-5">
      <ul className="flex gap-1.5 overflow-x-auto py-3 sm:gap-2 sm:py-3.5">
        {tabs.map((t) => {
          const on = active === t.key;
          return (
            <li key={t.key} className="shrink-0">
              <Link
                href={t.href}
                aria-current={on ? "page" : undefined}
                className={`inline-flex items-center rounded-full px-5 py-2 text-sm font-bold transition ${
                  on
                    ? "bg-navy text-white shadow-sm"
                    : "bg-mist text-navy ring-1 ring-line hover:bg-white hover:ring-royal/40"
                }`}
              >
                {t.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
