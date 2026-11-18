import Link from "next/link";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
});

type Crumb = { label: string; href?: string };

export default function AcademicsBanner({
  title,
  subtitle,
  label,
  crumbs,
}: {
  title: string;
  subtitle?: string;
  label?: string;
  crumbs?: Crumb[];
}) {
  // Long school names get a smaller title so they still fit
  const long = title.length > 28;

  return (
    <>
      <div className="relative">
        {/* Space above the banner so the navbar overlaps its top edge a little */}
        <div className="h-[100px] lg:h-[76px]" />

        <section
          className={`${montserrat.className} relative isolate overflow-hidden border-b-[6px] border-gold bg-navy text-white lg:min-h-[320px]`}
        >
          {/* Shapes on the right (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 2400 600"
            preserveAspectRatio="xMaxYMid slice"
            className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full select-none lg:block"
          >
            <polygon
              points="1900,0 2400,0 2400,600 1640,600"
              className="fill-royal"
              fillOpacity="0.33"
            />
            <polygon
              points="2400,0 1990,0 2400,360"
              fill="#f5a000"
              fillOpacity="0.94"
            />
            <polygon
              points="2230,0 2310,0 2090,600 2010,600"
              className="fill-gold"
            />
            <polygon
              points="2340,0 2368,0 2148,600 2120,600"
              className="fill-gold"
              fillOpacity="0.6"
            />
            <polygon
              points="2400,600 2180,600 2400,400"
              className="fill-gold"
            />
          </svg>

          <div className="mx-auto max-w-6xl px-5 pb-12 pt-10 lg:pb-14 lg:pt-16">
            <div className="lg:max-w-[55%] xl:max-w-3xl">
              {label && (
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold sm:text-base">
                  {label}
                </p>
              )}
              <h1
                className={`mt-3 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl ${
                  long ? "lg:text-5xl" : "lg:text-7xl"
                }`}
              >
                {title}
              </h1>
              <div className="mt-5 h-1.5 w-24 rounded-full bg-gold" />
              {subtitle && (
                <p className="mt-5 text-base font-medium text-white/90 sm:text-lg">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Navbar floats over the top of the banner */}
        <div className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-5">
            <Navbar />
          </div>
        </div>
      </div>

      {crumbs && crumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-6xl px-5 pt-5 text-sm text-slate"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="font-bold text-royal hover:underline"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
                {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}
    </>
  );
}
