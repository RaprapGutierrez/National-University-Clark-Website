import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import HeroSlider from "@/components/HeroSlider";
import LogoDivider from "@/components/LogoDivider";
import { sections, APPLY_URL } from "@/lib/site";

const CONTACT_URL = "/about"; // change to your contact page

// Yellow outline that follows the shape of the cutout, like a sticker
const STICKER =
  "drop-shadow(4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(-4px 0 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 -4px 0 var(--color-gold, #f7c600)) " +
  "drop-shadow(0 10px 14px rgba(0, 0, 0, 0.25))";

export default function Home() {
  const academics = sections.find((s) => s.slug === "academics")!;
  const admissions = sections.find((s) => s.slug === "admissions")!;
  const schools = academics.pages.filter(
    (p) => p.slug !== "office-of-the-academic-director",
  );
  const seniorHigh = schools.find((p) => p.slug === "senior-high-school");
  const otherSchools = schools.filter((p) => p.slug !== "senior-high-school");

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

          <div className="grid items-start gap-8 lg:grid-cols-[360px_1fr] lg:gap-10">
            {/* Featured: Senior High School */}
            {seniorHigh && (
              <Reveal>
                <Link
                  href={`/academics/${seniorHigh.slug}`}
                  className="group mx-auto block max-w-sm lg:max-w-none"
                >
                  <div
                    className="relative z-10 mx-auto -mb-12 w-4/5 transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ filter: STICKER }}
                  >
                    <Image
                      src="/senior-high.png"
                      alt="Senior High School students"
                      width={578}
                      height={432}
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="rounded-3xl border-2 border-gold bg-navy px-6 pb-6 pt-16 text-center text-white shadow-lg transition group-hover:shadow-2xl">
                    <h3 className="text-2xl font-extrabold text-gold">
                      {seniorHigh.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/85">
                      {seniorHigh.summary}
                    </p>
                    <span className="mt-5 inline-block rounded-full bg-gold px-5 py-2 text-sm font-bold text-navy transition group-hover:-translate-y-0.5">
                      Learn more
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}

            {/* Other schools */}
            <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {otherSchools.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 100} className="h-full">
                  <Link
                    href={`/academics/${p.slug}`}
                    className="block h-full rounded-xl border border-line bg-white p-5 font-semibold transition hover:-translate-y-1 hover:border-royal hover:text-royal"
                  >
                    {p.title}
                  </Link>
                </Reveal>
              ))}
            </div>
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
