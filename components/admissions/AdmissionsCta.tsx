import Link from "next/link";
import { PanelShapes } from "@/components/Shapes";
import { APPLY_URL, CONTACT_URL } from "@/lib/admissions";

export default function AdmissionsCta({
  kicker = "Ready when you are",
  title = "Start your NU Clark application",
  text = "Open NU Quest to begin. Looking for aid? Check scholarships before you enroll.",
}: {
  kicker?: string;
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border-2 border-gold bg-navy px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
      <PanelShapes />
      <div className="relative z-10 max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          {kicker}
        </p>
        <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-white/85">{text}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold px-6 py-3 font-bold text-navy transition hover:-translate-y-0.5"
          >
            Start your application →
          </a>
          <Link
            href="/admissions/scholarships"
            className="rounded-full border border-white/40 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white/20"
          >
            View scholarships
          </Link>
          <a
            href={CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 font-bold text-gold underline-offset-4 hover:underline"
          >
            Contact Admissions
          </a>
        </div>
      </div>
    </section>
  );
}
