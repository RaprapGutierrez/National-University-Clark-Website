import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import LogoDivider from "@/components/LogoDivider";
import SchoolCard from "@/components/SchoolCard";
import { sections, APPLY_URL } from "@/lib/site";

const CONTACT_URL = "/about"; // change to your contact page

// slug (from lib/site.ts) -> image in /public
const schoolImages: Record<string, string> = {
  "senior-high-school": "/senior-high.png",
  sabm: "/school-sabm.png",
  seas: "/school-seas.png",
  satc: "/school-satc.png",
  engineering: "/school-engineering.png",
  hospitality: "/school-dentistry.png", // School of Dentistry and Allied Health
};

export default function Home() {
  const academics = sections.find((s) => s.slug === "academics")!;
  const admissions = sections.find((s) => s.slug === "admissions")!;
  const schools = academics.pages.filter(
    (p) => p.slug !== "office-of-the-academic-director",
  );

  return (
    <>
      <header className="bg-navy bg-[url('/bg-enrollment.webp')] bg-cover bg-center bg-no-repeat pb-20 text-white sm:pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-5">
          <Navbar />
          <div className="grid items-center gap-8 pt-8 sm:pt-12 lg:grid-cols-2 lg:gap-10 lg:pt-14">
            <Reveal>
              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Education that works in the heart of Central Luzon.
              </h1>
              <p className="mt-4 max-w-xl text-base text-white/90 sm:mt-5 sm:text-lg">
                Study at NU Clark inside the Clark Freeport Zone. Explore our
                programs, apply online, and see life on campus.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                <Link
                  href="/academics"
                  className="rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Explore programs
                </Link>
                <Link
                  href="/about/campus-tour"
                  className="rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
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

      <main className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="-mt-10 grid gap-4 sm:-mt-12 sm:grid-cols-2 lg:grid-cols-4">
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

        <section className="pt-12 sm:pt-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Find your school
            </h2>
            <p className="mb-8 mt-1 max-w-xl text-slate">{academics.intro}</p>
          </Reveal>

          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {schools.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100} className="h-full">
                <SchoolCard
                  href={`/academics/${p.slug}`}
                  title={p.title}
                  summary={p.summary}
                  image={schoolImages[p.slug]}
                />
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal className="mt-12 sm:mt-16">
          <LogoDivider />
        </Reveal>

        <Reveal className="mt-8 sm:mt-10">
          <section className="grid items-center gap-8 rounded-3xl bg-navy p-6 text-white sm:p-10 md:grid-cols-[1fr_auto]">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Ready to become a Nationalian?
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-white/80 md:mx-0">
                Start your online application today, or scan the QR code with
                your phone.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href={APPLY_URL}
                  className="inline-block rounded-full bg-gold px-6 py-3 text-center font-bold text-navy transition hover:-translate-y-0.5"
                >
                  Apply now
                </a>
                <Link
                  href={CONTACT_URL}
                  className="inline-block rounded-full px-6 py-3 text-center font-bold text-white ring-2 ring-white/70 transition hover:bg-white/10"
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
                  className="h-36 w-36 sm:h-40 sm:w-40"
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
