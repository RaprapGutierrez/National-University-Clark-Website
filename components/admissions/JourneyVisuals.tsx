import { PanelShapes } from "@/components/Shapes";

// Illustrated panels for the Admissions page sections.
// They are drawn with simple shapes and contain no text, so nothing here needs updating
// when the real content changes. Keys are the page slugs from lib/site.ts.

const sheet =
  "relative w-full max-w-[17rem] -rotate-2 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-0 motion-reduce:transform-none";

function Check({ filled }: { filled: boolean }) {
  return (
    <span
      className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${
        filled ? "bg-gold text-navy" : "border-2 border-navy/20 text-transparent"
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </span>
  );
}

// A browser window with a form: the online application
function ApplyVisual() {
  return (
    <div className={sheet}>
      <div className="flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-gold" />
        <span className="h-2.5 w-2.5 rounded-full bg-royal/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-navy/25" />
        <span className="ml-2 h-2.5 flex-1 rounded-full bg-navy/10" />
      </div>
      <div className="mt-5 space-y-3">
        <span className="block h-2.5 w-1/3 rounded-full bg-navy/20" />
        <span className="block h-9 rounded-lg border border-line bg-mist" />
        <span className="block h-2.5 w-1/4 rounded-full bg-navy/20" />
        <span className="block h-9 rounded-lg border border-line bg-mist" />
        <span className="grid h-10 place-items-center rounded-lg bg-gold">
          <span className="block h-2.5 w-16 rounded-full bg-navy/70" />
        </span>
      </div>
    </div>
  );
}

// A checklist: what to prepare
function RequirementsVisual() {
  const rows = [
    { done: true, w: "w-3/4" },
    { done: true, w: "w-2/3" },
    { done: true, w: "w-4/5" },
    { done: false, w: "w-1/2" },
  ];
  return (
    <div className={sheet}>
      <span className="block h-3 w-1/2 rounded-full bg-navy/30" />
      <ul className="mt-5 space-y-4">
        {rows.map((r, i) => (
          <li key={i} className="flex items-center gap-3">
            <Check filled={r.done} />
            <span className={`block h-2.5 rounded-full bg-navy/15 ${r.w}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// A medal and a certificate: scholarships
function ScholarshipVisual() {
  return (
    <div className={`${sheet} text-center`}>
      <div className="relative mx-auto h-20 w-16">
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1 h-9 w-5 -rotate-12 bg-royal"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
        />
        <span
          aria-hidden="true"
          className="absolute bottom-0 right-1 h-9 w-5 rotate-12 bg-navy"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 75%, 0 100%)" }}
        />
        <span className="absolute left-0 top-0 grid h-16 w-16 place-items-center rounded-full bg-gold ring-4 ring-gold/30">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="currentColor"
            className="text-navy"
            aria-hidden="true"
          >
            <path d="m12 2 3 6.5 7 .9-5.1 4.8 1.3 7-6.2-3.4L5.8 21.2l1.3-7L2 9.4l7-.9z" />
          </svg>
        </span>
      </div>
      <div className="mt-5 space-y-2.5">
        <span className="mx-auto block h-3 w-2/3 rounded-full bg-navy/30" />
        <span className="mx-auto block h-2.5 w-1/2 rounded-full bg-navy/15" />
        <span className="mx-auto block h-2.5 w-3/5 rounded-full bg-navy/15" />
      </div>
    </div>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  "apply-now": ApplyVisual,
  requirements: RequirementsVisual,
  scholarships: ScholarshipVisual,
};

// The navy panel on the side of each admissions section
export function JourneyPanel({ slug, index }: { slug: string; index: number }) {
  const Visual = visuals[slug];
  const num = String(index + 1).padStart(2, "0");
  return (
    <div className="group relative isolate flex min-h-[280px] items-center justify-center overflow-hidden rounded-3xl border-2 border-gold bg-navy p-8 shadow-lg">
      <PanelShapes />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-3 select-none text-7xl font-extrabold text-white/10"
      >
        {num}
      </span>
      {Visual ? (
        <div aria-hidden="true" className="relative flex w-full justify-center">
          <Visual />
        </div>
      ) : (
        <span className="text-8xl font-extrabold text-white/90 sm:text-9xl">
          {num}
        </span>
      )}
    </div>
  );
}
