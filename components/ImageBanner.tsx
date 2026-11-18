import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

type Crumb = { label: string; href?: string };

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
      <div className="relative">
        {/* Space above the banner, so the navbar overlaps its top edge a little */}
        <div className="h-[100px] lg:h-[76px]" />

        <Image
          src={src}
          alt={alt}
          width={2400}
          height={600}
          priority
          className="h-auto w-full"
        />

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
