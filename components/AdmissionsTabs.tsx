import Link from "next/link";

const tabs = [
  { key: "how-to-apply", label: "How to Apply", href: "/admissions/how-to-apply" },
  { key: "requirements", label: "Requirements", href: "/admissions/requirements" },
  { key: "scholarships", label: "Scholarships", href: "/admissions/scholarships" },
];

export default function AdmissionsTabs({ active }: { active?: string }) {
  return (
    <nav
      aria-label="Admissions"
      className="mx-auto flex max-w-6xl flex-wrap gap-3 px-5 pt-8"
    >
      {tabs.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          aria-current={active === t.key ? "page" : undefined}
          className={`rounded-full border-2 px-5 py-2 text-sm font-bold transition hover:-translate-y-0.5 ${
            active === t.key
              ? "border-gold bg-navy text-gold"
              : "border-line bg-white text-navy hover:border-gold"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
