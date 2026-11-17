import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import LogoDivider from "@/components/LogoDivider";
import { sections, APPLY_URL } from "@/lib/site";

const CONTACT_URL = "/about"; // change to your contact page

export default function Home() {
  const academics = sections.find((s) => s.slug === "academics")!;
  const admissions = sections.find((s) => s.slug === "admissions")!;

  return (
    <>
      <header className="bg-navy bg-[url('/bg-enrollment.webp')] bg-cover bg-center bg-no-repeat pb-24 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <Navbar />
          <div className="grid items-center gap-10 pt-14 lg:grid-cols-2">
            <Reveal>
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
                  className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Explore programs
                </Link>
                <Link
                  href="/about/campus-tour"
                  className="rounded-full px-6 py-3 font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                >
                  Take the campus tour
                </Link>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <HeroSlider />
            </Reveal>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <div className="-mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {admissions.pages.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100} className="h-full">
              <Link
                href={`/admissions/${p.slug}`}
                className="block h-full rounded-2xl border border-line bg-white p-5 shadow-lg transition hover:-translate-y-1 hover:border-royal"
              >
                <b className="block text-lg">{p.title}</b>
                <span className="text-sm text-slate">{p.summary}</span>
              </Link>
            </Reveal>
          ))}
        </div>

        <section className="pt-16">
          <Reveal>
            <h2 className="text-3xl font-extrabold">Find your school</h2>
            <p className="mb-6 mt-1 max-w-xl text-slate">{academics.intro}</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academics.pages.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                <Link
                  href={`/academics/${p.slug}`}
                  className="block h-full rounded-xl border border-line bg-white p-5 font-semibold transition hover:-translate-y-1 hover:border-royal hover:text-royal"
                >
                  {p.title}
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-16">
          <LogoDivider />
        </Reveal>

        <Reveal className="mt-10">
          <section className="grid items-center gap-8 rounded-3xl bg-navy p-10 text-white md:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-extrabold">
                Ready to become a Nationalian?
              </h2>
              <p className="mt-2 max-w-xl text-white/80">
                Start your online application today, or scan the QR code with
                your phone.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={APPLY_URL}
                  className="inline-block rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply now
                </a>
                <Link
                  href={CONTACT_URL}
                  className="inline-block rounded-full px-6 py-3 font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>

            <div className="mx-auto text-center">
              <div className="rounded-2xl bg-white p-3 shadow-lg">
                <Image
                  src="/qr-nu-clark.webp"
                  alt="QR code for NU Clark"
                  width={160}
                  height={160}
                  className="h-40 w-40"
                />
              </div>
              <p className="mt-2 text-sm text-white/80">Scan to apply</p>
            </div>
          </section>
        </Reveal>
      </main>
    </>
  );
}
