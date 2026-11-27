import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageBanner({
  title,
  crumbs,
}: {
  title: string;
  crumbs: Crumb[];
}) {
  return (
    <>
      <header className="bg-linear-to-br from-navy via-royal to-sky pb-16 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <h1 className="pt-10 max-w-3xl text-4xl font-extrabold tracking-tight sm:pt-14">
            {title}
          </h1>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-4 text-sm text-slate">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => (
            <li key={c.label} className="flex items-center gap-2">
              {c.href ? (
                <Link
                  href={c.href}
                  className="font-semibold text-royal hover:underline"
                >
                  {c.label}
                </Link>
              ) : (
                <span>{c.label}</span>
              )}
              {i < crumbs.length - 1 && <span aria-hidden>/</span>}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
