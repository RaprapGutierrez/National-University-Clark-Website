import Link from "next/link";
import Navbar from "@/components/Navbar";
import { sections, APPLY_URL } from "@/lib/site";

export default function Home() {
  const academics = sections.find((s) => s.slug === "academics")!;
  const admissions = sections.find((s) => s.slug === "admissions")!;

  return (
    <>
      <header className="bg-linear-to-br from-navy via-royal to-sky pb-24 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <Navbar />
          <div className="max-w-3xl pt-16">
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Education that works in the heart of Central Luzon.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/90">
              Study at NU Clark inside the Clark Freeport Zone. Explore our
              programs, apply online, and see life on campus.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/academics"
                className="rounded-full bg-gold px-6 py-3 font-bold text-navy"
              >
                Explore programs
              </Link>
              <Link
                href="/about/campus-tour"
                className="rounded-full px-6 py-3 font-bold text-white ring-2 ring-white/70"
              >
                Take the campus tour
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <div className="-mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {admissions.pages.map((p) => (
            <Link
              key={p.slug}
              href={`/admissions/${p.slug}`}
              className="rounded-2xl border border-line bg-white p-5 shadow-lg hover:border-royal"
            >
              <b className="block text-lg">{p.title}</b>
              <span className="text-sm text-slate">{p.summary}</span>
            </Link>
          ))}
        </div>

        <section className="pt-16">
          <h2 className="text-3xl font-extrabold">Find your school</h2>
          <p className="mb-6 mt-1 max-w-xl text-slate">{academics.intro}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academics.pages.map((p) => (
              <Link
                key={p.slug}
                href={`/academics/${p.slug}`}
                className="rounded-xl border border-line bg-white p-5 font-semibold hover:border-royal hover:text-royal"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-navy p-10 text-white">
          <h2 className="text-3xl font-extrabold">
            Ready to become a Nationalian?
          </h2>
          <p className="mt-2 max-w-xl text-white/80">
            Start your online application today.
          </p>
          <a
            href={APPLY_URL}
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-bold text-navy"
          >
            Apply now
          </a>
        </section>
      </main>
    </>
  );
}
