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
      {/* Same navy as the banner image, so the two blend together */}
      <header className="pb-5">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
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
