import Link from "next/link";
import { sections } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy py-10 text-sm text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
        <div>
          <h3 className="mb-2 font-bold text-white">
            National University Clark
          </h3>
          <p>Jose Abad Santos Avenue, Clark Freeport Zone, Pampanga</p>
        </div>
        <div>
          <h3 className="mb-2 font-bold text-white">Explore</h3>
          {sections.map((s) => (
            <Link
              key={s.slug}
              href={`/${s.slug}`}
              className="block py-0.5 hover:underline"
            >
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="mb-2 font-bold text-white">Connect</h3>
          <a
            href="https://www.nu.edu.ph/"
            className="block py-0.5 hover:underline"
          >
            NU main site
          </a>
        </div>
        <p className="border-t border-white/20 pt-4 md:col-span-3">
          © 2026 National University. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
