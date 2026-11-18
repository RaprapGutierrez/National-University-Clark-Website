import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Crumb = { label: string; href?: string };

// How far (in banner-image pixels) the shapes reach up behind the navbar
const Z = 300;

export default function ImageBanner({
  src,
  alt,
  crumbs,
}: {
  src: string;
  alt: string;
  crumbs?: Crumb[];
}) {
  return (
    <>
      <header className="relative pb-5">
        {/* Shapes that continue up behind the navbar, top-right only (desktop) */}
        <svg
          aria-hidden="true"
          viewBox={`0 -${Z} 2400 ${Z}`}
          preserveAspectRatio="xMaxYMax slice"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        >
          <polygon points="2030,-300 2400,-300 2400,0 1900,0" fill="#223585" />
          <polygon points="1648,-300 2400,-300 2400,0 1990,0" fill="#e89907" />
          <polygon points="2340,-300 2420,-300 2310,0 2230,0" fill="#f7c600" />
          <polygon points="2450,-300 2478,-300 2368,0 2340,0" fill="#9c862e" />
        </svg>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-5">
          <Navbar />
        </div>
      </header>

      <Image
        src={src}
        alt={alt}
        width={2400}
        height={600}
        priority
        className="h-auto w-full"
      />

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
