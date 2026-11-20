import Link from "next/link";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Dots } from "@/components/Shapes";

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
  decor = true,
}: {
  title: string;
  subtitle?: string;
  label?: string;
  crumbs?: Crumb[];
  /** Extra decorations like the home page hero. Pass decor={false} to turn them off. */
  decor?: boolean;
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

          {decor && (
            <>
              {/* Corner shapes for phones and tablets, where the big shapes are hidden */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 300"
                preserveAspectRatio="xMaxYMax slice"
                className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-2/3 select-none lg:hidden"
              >
                <polygon
                  points="400,300 400,150 250,300"
                  fill="#f5a000"
                  fillOpacity="0.9"
                />
                <polygon
                  points="400,300 400,230 330,300"
                  className="fill-gold"
                />
                <polygon
                  points="400,0 300,0 400,100"
                  className="fill-royal"
                  fillOpacity="0.45"
                />
              </svg>

              {/* Extra decoration on the left, like the home page hero */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-24 -z-10 h-72 w-72 rounded-full border-[28px] border-gold/10"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 left-1/3 -z-10 h-40 w-40 rounded-full bg-royal/30"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[46%] top-12 -z-10 hidden h-4 w-4 rounded-full bg-gold lg:block"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-8 top-10 -z-10 hidden h-3 w-3 rotate-45 bg-gold/80 md:block"
              />
              <Dots className="absolute bottom-6 left-6 -z-10 hidden text-white/15 md:block" />
            </>
          )}

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
        <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-5 pt-6">
          <ol className="inline-flex flex-wrap items-center gap-1 rounded-full border border-line bg-white px-2 py-1.5 text-sm text-slate shadow-sm">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={i} className="flex items-center gap-1">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="flex items-center gap-1.5 rounded-full px-3 py-1 font-bold text-royal transition hover:bg-royal/10"
                    >
                      {i === 0 && (
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 11l9-8 9 8" />
                          <path d="M5 10v10h14V10" />
                        </svg>
                      )}
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="rounded-full bg-navy px-3 py-1 font-bold text-white"
                    >
                      {c.label}
                    </span>
                  )}
                  {!last && (
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 6l6 6-6 6" />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      )}
    </>
  );
}
