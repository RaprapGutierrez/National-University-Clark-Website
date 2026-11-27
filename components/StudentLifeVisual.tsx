// Colorful illustrated panels for the Student Life "Four ways in" cards.
// Drawn with simple shapes and no text, so nothing here needs updating
// when the content changes. Keys are the page slugs.

const sheet =
  "relative w-full max-w-[17rem] -rotate-2 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-0 motion-reduce:transform-none";

// Organizations: people who belong to a group
function OrganizationsVisual() {
  const people = ["bg-gold", "bg-sky-400", "bg-rose-400"];
  return (
    <div className={sheet}>
      <div className="flex justify-center -space-x-3">
        {people.map((color, i) => (
          <span
            key={i}
            className={`relative h-14 w-14 overflow-hidden rounded-full ring-4 ring-white ${color}`}
          >
            <span className="absolute left-1/2 top-2.5 h-5 w-5 -translate-x-1/2 rounded-full bg-white/90" />
            <span className="absolute -bottom-3 left-1/2 h-8 w-10 -translate-x-1/2 rounded-full bg-white/90" />
          </span>
        ))}
      </div>
      <div className="mt-5 space-y-2.5">
        <span className="mx-auto block h-3 w-2/3 rounded-full bg-navy/30" />
        <span className="mx-auto block h-2.5 w-1/2 rounded-full bg-navy/15" />
      </div>
      <span className="mt-5 grid h-10 place-items-center rounded-lg bg-gold">
        <span className="block h-2.5 w-14 rounded-full bg-navy/70" />
      </span>
    </div>
  );
}

// Sports: a ball and a podium
function SportsVisual() {
  return (
    <div className={`${sheet} text-center`}>
      <svg viewBox="0 0 64 64" className="mx-auto h-16 w-16" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="#f97316" />
        <g stroke="#1f2f7a" strokeWidth="3" fill="none" strokeLinecap="round">
          <path d="M32 3v58M3 32h58" />
          <path d="M11 11c14 10 14 32 0 42M53 11c-14 10-14 32 0 42" />
        </g>
      </svg>
      <div className="mt-5 flex items-end justify-center gap-2">
        <span className="h-10 w-12 rounded-t-lg bg-[#c7ced9]" />
        <span className="h-16 w-12 rounded-t-lg bg-gold" />
        <span className="h-7 w-12 rounded-t-lg bg-[#cd7f32]" />
      </div>
    </div>
  );
}

// Events: a calendar with a day picked, and confetti
function EventsVisual() {
  const days = Array.from({ length: 14 }, (_, i) => i);
  return (
    <div className={sheet}>
      <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-gold" />
      <span className="absolute -left-3 top-1/3 h-4 w-4 rotate-45 bg-sky-400" />
      <span className="absolute -bottom-2 right-6 h-3 w-3 rounded-full bg-rose-400" />
      <div className="overflow-hidden rounded-xl border border-line">
        <div className="relative h-9 bg-fuchsia-500">
          <span className="absolute left-4 top-1.5 h-4 w-1.5 rounded-full bg-white" />
          <span className="absolute right-4 top-1.5 h-4 w-1.5 rounded-full bg-white" />
        </div>
        <div className="grid grid-cols-7 gap-1.5 p-3">
          {days.map((i) => (
            <span
              key={i}
              className={`h-4 rounded ${
                i === 9
                  ? "bg-gold ring-2 ring-gold/40"
                  : i === 4
                    ? "bg-fuchsia-200"
                    : "bg-navy/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Services: a conversation with help on the way
function ServicesVisual() {
  return (
    <div className={sheet}>
      <div className="w-4/5 rounded-2xl rounded-bl-sm bg-emerald-500 p-3">
        <span className="block h-2.5 w-4/5 rounded-full bg-white/80" />
        <span className="mt-2 block h-2.5 w-3/5 rounded-full bg-white/60" />
      </div>
      <div className="ml-auto mt-3 w-4/5 rounded-2xl rounded-br-sm bg-mist p-3 ring-1 ring-line">
        <span className="block h-2.5 w-3/4 rounded-full bg-navy/20" />
        <span className="mt-2 block h-2.5 w-1/2 rounded-full bg-navy/15" />
      </div>
      <span className="mt-4 grid h-10 place-items-center rounded-lg bg-gold text-navy">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
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
    </div>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  organizations: OrganizationsVisual,
  sports: SportsVisual,
  events: EventsVisual,
  services: ServicesVisual,
};

// Each panel has its own color
const backgrounds: Record<string, string> = {
  organizations: "bg-sky-500",
  sports: "bg-orange-500",
  events: "bg-fuchsia-600",
  services: "bg-emerald-500",
};

export function LifePanel({ slug, index }: { slug: string; index: number }) {
  const Visual = visuals[slug];
  const bg = backgrounds[slug] ?? "bg-royal";
  const num = String(index + 1).padStart(2, "0");
  return (
    <div
      className={`group relative isolate flex min-h-[240px] items-center justify-center overflow-hidden rounded-3xl border-2 border-gold p-8 shadow-lg ${bg}`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/15"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -right-10 h-44 w-44 rotate-45 bg-black/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-8 h-3 w-3 rounded-full bg-gold"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-10 h-2.5 w-2.5 rotate-45 bg-white/70"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-3 select-none text-7xl font-extrabold text-white/20"
      >
        {num}
      </span>
      {Visual && (
        <div aria-hidden="true" className="relative flex w-full justify-center">
          <Visual />
        </div>
      )}
    </div>
  );
}
