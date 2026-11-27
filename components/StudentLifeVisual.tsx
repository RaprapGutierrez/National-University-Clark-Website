// Colorful illustrated panels for the Student Life "Four ways in" cards.
// Drawn with simple shapes and no text, so nothing here needs updating
// when the content changes. Keys are the page slugs.

const sheet =
  "relative w-full max-w-[17rem] -rotate-2 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:rotate-0 motion-reduce:transform-none";

const navy = "#1f2f7a";

// Small rounded square that holds one icon
function Tile({ tint, children }: { tint: string; children: React.ReactNode }) {
  return (
    <span
      className={`grid aspect-square place-items-center rounded-xl p-2 ${tint}`}
    >
      <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden="true">
        {children}
      </svg>
    </span>
  );
}

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

// Sports: all the sports together (basketball, soccer, volleyball, tennis, trophy, medal)
function SportsVisual() {
  return (
    <div className={sheet}>
      <div className="grid grid-cols-3 gap-2.5">
        {/* Basketball */}
        <Tile tint="bg-orange-50">
          <circle cx="32" cy="32" r="28" fill="#f97316" />
          <g stroke={navy} strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M32 4v56M4 32h56" />
            <path d="M12 12c14 10 14 30 0 40M52 12c-14 10-14 30 0 40" />
          </g>
        </Tile>

        {/* Soccer ball */}
        <Tile tint="bg-orange-50">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="#fff"
            stroke={navy}
            strokeWidth="3"
          />
          <path d="M32 23l8.6 6.2-3.3 10.1H26.7l-3.3-10.1z" fill={navy} />
          <g stroke={navy} strokeWidth="3" strokeLinecap="round">
            <path d="M32 23V5M40.6 29.2 57 23M37.3 39.3 48 54M26.7 39.3 16 54M23.4 29.2 7 23" />
          </g>
        </Tile>

        {/* Volleyball */}
        <Tile tint="bg-orange-50">
          <circle cx="32" cy="32" r="28" fill="#fde047" />
          <g stroke={navy} strokeWidth="3" fill="none" strokeLinecap="round">
            <path d="M32 4c-3 14 3 22 22 28" />
            <path d="M5 24c16-2 24 4 27 8" />
            <path d="M14 53c4-14 10-18 18-21" />
          </g>
        </Tile>

        {/* Tennis ball */}
        <Tile tint="bg-orange-50">
          <circle cx="32" cy="32" r="28" fill="#a3e635" />
          <g stroke="#fff" strokeWidth="3.5" fill="none" strokeLinecap="round">
            <path d="M10 11c14 12 14 30 0 42M54 11c-14 12-14 30 0 42" />
          </g>
        </Tile>

        {/* Trophy */}
        <Tile tint="bg-orange-50">
          <g fill="none" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round">
            <path d="M18 14h-7v4a9 9 0 0 0 9 9M46 14h7v4a9 9 0 0 1-9 9" />
          </g>
          <path d="M18 8h28v16a14 14 0 0 1-28 0z" fill="#fbbf24" />
          <rect x="29" y="38" width="6" height="9" fill="#f59e0b" />
          <rect x="21" y="47" width="22" height="7" rx="2" fill={navy} />
        </Tile>

        {/* Medal */}
        <Tile tint="bg-orange-50">
          <path d="M20 4l12 22 12-22z" fill="#ef4444" />
          <circle cx="32" cy="42" r="16" fill="#fbbf24" />
          <circle
            cx="32"
            cy="42"
            r="9"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
          />
        </Tile>
      </div>
    </div>
  );
}

// Events: camera, party popper, balloon and ticket
function EventsVisual() {
  return (
    <div className={sheet}>
      <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-gold" />
      <span className="absolute -left-3 top-1/3 h-4 w-4 rotate-45 bg-sky-400" />
      <span className="absolute -bottom-2 right-6 h-3 w-3 rounded-full bg-rose-400" />
      <div className="grid grid-cols-2 gap-3">
        {/* Camera */}
        <Tile tint="bg-fuchsia-50">
          <path d="M22 18l4-7h12l4 7z" fill={navy} />
          <rect x="6" y="18" width="52" height="34" rx="7" fill={navy} />
          <circle cx="32" cy="35" r="12" fill="#38bdf8" />
          <circle cx="32" cy="35" r="6.5" fill="#fff" fillOpacity="0.85" />
          <circle cx="49" cy="25" r="2.5" fill="#fbbf24" />
        </Tile>

        {/* Party popper */}
        <Tile tint="bg-fuchsia-50">
          <path d="M7 57 17 25l22 22z" fill="#fbbf24" />
          <path d="M12 41l15 15M17 29l18 18" stroke="#f97316" strokeWidth="3" />
          <path
            d="M28 30c2-10 9-13 17-12"
            stroke="#d946ef"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M38 38c10 0 14-6 14-13"
            stroke="#38bdf8"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="34" cy="10" r="3.5" fill="#fb7185" />
          <circle cx="54" cy="12" r="3" fill="#fbbf24" />
          <circle cx="56" cy="40" r="3.5" fill="#d946ef" />
          <rect
            x="46"
            y="29"
            width="6"
            height="6"
            rx="1"
            transform="rotate(30 49 32)"
            fill="#38bdf8"
          />
        </Tile>

        {/* Balloon */}
        <Tile tint="bg-fuchsia-50">
          <ellipse cx="32" cy="24" rx="15" ry="18" fill="#fb7185" />
          <ellipse
            cx="26"
            cy="17"
            rx="3.5"
            ry="6"
            fill="#fff"
            fillOpacity="0.5"
          />
          <path d="M32 42l-4 5h8z" fill="#e11d48" />
          <path
            d="M32 47c-6 5 6 8 0 14"
            stroke={navy}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
        </Tile>

        {/* Ticket */}
        <Tile tint="bg-fuchsia-50">
          <rect x="5" y="16" width="54" height="32" rx="5" fill="#fbbf24" />
          <circle cx="5" cy="32" r="5.5" fill="#fdf4ff" />
          <circle cx="59" cy="32" r="5.5" fill="#fdf4ff" />
          <path
            d="M42 20v24"
            stroke="#fff"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <path
            d="M23 24l2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.2 6-.9z"
            fill={navy}
          />
        </Tile>
      </div>
    </div>
  );
}

// Services: one icon per office (clinic, ITSO laptop, ITSO desktop, registrar)
function ServicesVisual() {
  return (
    <div className={sheet}>
      <div className="grid grid-cols-2 gap-3">
        {/* Clinic */}
        <Tile tint="bg-emerald-50">
          <rect
            x="10"
            y="12"
            width="44"
            height="44"
            rx="5"
            fill="#fff"
            stroke={navy}
            strokeWidth="3"
          />
          <rect x="29" y="19" width="6" height="16" fill="#ef4444" />
          <rect x="24" y="24" width="16" height="6" fill="#ef4444" />
          <rect x="26" y="42" width="12" height="14" rx="2" fill={navy} />
        </Tile>

        {/* ITSO: laptop */}
        <Tile tint="bg-emerald-50">
          <rect x="12" y="12" width="40" height="30" rx="3" fill={navy} />
          <rect x="16" y="16" width="32" height="22" rx="1.5" fill="#38bdf8" />
          <path d="M5 46h54l-4 7H9z" fill="#c7ced9" />
          <rect x="26" y="46" width="12" height="2.5" rx="1" fill="#94a3b8" />
        </Tile>

        {/* ITSO: desktop computer */}
        <Tile tint="bg-emerald-50">
          <rect x="8" y="8" width="48" height="34" rx="3" fill={navy} />
          <rect x="12" y="12" width="40" height="26" rx="1.5" fill="#38bdf8" />
          <rect x="28" y="42" width="8" height="9" fill="#94a3b8" />
          <rect x="19" y="51" width="26" height="5" rx="2" fill="#c7ced9" />
        </Tile>

        {/* Registrar: document with seal */}
        <Tile tint="bg-emerald-50">
          <rect
            x="12"
            y="6"
            width="38"
            height="50"
            rx="4"
            fill="#fff"
            stroke={navy}
            strokeWidth="3"
          />
          <rect
            x="19"
            y="15"
            width="24"
            height="4"
            rx="2"
            fill={navy}
            fillOpacity="0.3"
          />
          <rect
            x="19"
            y="25"
            width="24"
            height="4"
            rx="2"
            fill={navy}
            fillOpacity="0.3"
          />
          <rect
            x="19"
            y="35"
            width="13"
            height="4"
            rx="2"
            fill={navy}
            fillOpacity="0.3"
          />
          <circle cx="44" cy="46" r="9" fill="#fbbf24" />
          <path
            d="M40 46l3 3 5-6"
            stroke={navy}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Tile>
      </div>
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
