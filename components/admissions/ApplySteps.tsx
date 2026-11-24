import Link from "next/link";
import Reveal from "@/components/Reveal";
import { steps } from "@/lib/admissions";

export default function ApplySteps() {
  return (
    <ol className="mx-auto max-w-3xl space-y-0">
      {steps.map((s, i) => {
        const last = i === steps.length - 1;
        return (
          <Reveal key={s.title} delay={i * 60} as="li">
            <div className="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
              <div className="flex flex-col items-center">
                <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-navy text-lg font-extrabold text-gold sm:h-14 sm:w-14 sm:text-xl">
                  {i + 1}
                </span>
                {!last && (
                  <span
                    aria-hidden
                    className="mt-1 w-0.5 flex-1 min-h-10 bg-gradient-to-b from-gold via-royal/35 to-line"
                  />
                )}
              </div>

              <div className={`min-w-0 ${last ? "pb-2" : "pb-10 sm:pb-12"}`}>
                <div className="rounded-2xl border border-line bg-white px-5 py-4 shadow-[0_14px_36px_-28px_rgba(31,47,122,0.55)] sm:px-6 sm:py-5">
                  <h3 className="text-lg font-extrabold text-navy sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-slate">{s.text}</p>
                  {i === 2 && (
                    <Link
                      href="/admissions/requirements"
                      className="mt-3 inline-flex text-sm font-bold text-royal underline-offset-4 hover:underline"
                    >
                      See full requirements →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
