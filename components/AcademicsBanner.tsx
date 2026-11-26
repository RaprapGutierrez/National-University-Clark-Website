import Link from "next/link";
import { Dots } from "@/components/Shapes";

type Crumb = { label: string; href?: string };

export default function AcademicsBanner({
  title,
  subtitle,
  label,
  crumbs,
  decor = true,
  showRule = true,
}: {
  title: string;
  subtitle?: string;
  label?: string;
  crumbs?: Crumb[];
  /** Extra decorations like the home page hero. Pass decor={false} to turn them off. */
  decor?: boolean;
  /** Short gold underline under the title. Default true. */
  showRule?: boolean;
}) {
  const long = title.length > 28;

  return (
    <>
      <div className="relative">
        <section className="relative isolate overflow-hidden border-b-4 border-gold bg-navy text-white sm:border-b-[6px] lg:min-h-[280px]">
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
              <svg
                aria-hidden="true"
                viewBox="0 0 400 300"
                preserveAspectRatio="xMaxYMax slice"
                className="pointer-events-none absolute inset-y-0 right-0 -z-10 h-full w-1/2 select-none opacity-90 sm:w-2/3 lg:hidden"
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
              </svg>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 -z-10 hidden h-56 w-56 rounded-full border-[24px] border-gold/10 sm:block"
              />
              <Dots className="absolute bottom-4 left-4 -z-10 hidden text-white/15 md:block" />
            </>
          )}

          <div className="mx-auto max-w-6xl px-4 pb-8 pt-7 sm:px-5 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-14">
            <div className="lg:max-w-[55%] xl:max-w-3xl">
              {label && (
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold sm:text-sm sm:tracking-[0.2em]">
                  {label}
                </p>
              )}
              <h1
                className={`mt-2 text-[1.85rem] font-extrabold leading-[1.12] tracking-tight sm:mt-3 sm:text-5xl ${
                  long ? "lg:text-5xl" : "lg:text-6xl"
                }`}
              >
                {title}
              </h1>
              {showRule ? (
                <div className="mt-3 h-1 w-16 rounded-full bg-gold sm:mt-5 sm:h-1.5 sm:w-24" />
              ) : null}
              {subtitle && (
                <p
                  className={`max-w-xl text-sm font-medium text-white/90 sm:text-lg ${
                    showRule ? "mt-3 sm:mt-5" : "mt-3 sm:mt-4"
                  }`}
                >
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </section>
      </div>

      {crumbs && crumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          className="border-b border-line bg-white/80"
        >
          <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-1.5 gap-y-1 px-4 py-3 text-[13px] text-slate sm:px-5 sm:py-3.5 sm:text-sm">
            {crumbs.map((c, i) => {
              const last = i === crumbs.length - 1;
              return (
                <li key={i} className="flex min-w-0 items-center gap-1.5">
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="truncate font-semibold text-royal transition-colors hover:underline"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span
                      aria-current="page"
                      className="truncate font-bold text-navy"
                    >
                      {c.label}
                    </span>
                  )}
                  {!last && (
                    <span aria-hidden="true" className="text-gold">
                      /
                    </span>
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
