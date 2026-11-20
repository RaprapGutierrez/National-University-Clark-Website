// Decorative shapes that match the home page. All are purely visual:
// hidden from screen readers and they never block clicks.
// Panels that use PanelShapes / GoldPanelShapes / CardCorner need: relative isolate overflow-hidden

// Small dotted pattern
export function Dots({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      width="140"
      height="140"
      viewBox="0 0 140 140"
    >
      <defs>
        <pattern
          id="shape-dots"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="3" r="2.5" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="140" height="140" fill="url(#shape-dots)" />
    </svg>
  );
}

// Big triangles in the top right and bottom left of a navy panel (like the home page call to action)
export function PanelShapes() {
  return (
    <>
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMaxYMin slice"
        className="pointer-events-none absolute right-0 top-0 -z-10 h-full w-2/3 select-none"
      >
        <polygon
          points="400,0 220,0 400,200"
          fill="#f5a000"
          fillOpacity="0.9"
        />
        <polygon points="400,0 330,0 400,70" className="fill-gold" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 300 300"
        preserveAspectRatio="xMinYMax slice"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-2/3 w-1/2 select-none"
      >
        <polygon
          points="0,300 0,120 180,300"
          className="fill-royal"
          fillOpacity="0.45"
        />
        <polygon points="0,300 0,220 80,300" className="fill-gold" />
      </svg>
    </>
  );
}

// For wide, short link cards (Senior High, Academic Office).
// Shapes stay on the right (and bottom right on phones), so they never sit under the text.
export function WidePanelShapes({ tone }: { tone: "navy" | "gold" }) {
  const navy = tone === "navy";
  return (
    <>
      {/* Phones: small corner at the bottom right, next to the button */}
      <svg
        aria-hidden="true"
        viewBox="0 0 80 80"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-16 w-16 select-none sm:hidden"
      >
        {navy ? (
          <>
            <polygon
              points="80,80 80,20 20,80"
              fill="#f5a000"
              fillOpacity="0.9"
            />
            <polygon points="80,80 80,55 55,80" className="fill-gold" />
          </>
        ) : (
          <>
            <polygon
              points="80,80 80,20 20,80"
              className="fill-navy"
              fillOpacity="0.12"
            />
            <polygon
              points="80,80 80,55 55,80"
              className="fill-navy"
              fillOpacity="0.85"
            />
          </>
        )}
      </svg>
      {/* Tablet and desktop: slim triangles on the right edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 300"
        preserveAspectRatio="xMaxYMin slice"
        className="pointer-events-none absolute right-0 top-0 -z-10 hidden h-full w-2/5 select-none sm:block lg:w-1/3"
      >
        {navy ? (
          <>
            <polygon
              points="400,0 220,0 400,200"
              fill="#f5a000"
              fillOpacity="0.9"
            />
            <polygon points="400,0 330,0 400,70" className="fill-gold" />
          </>
        ) : (
          <>
            <polygon
              points="400,0 220,0 400,200"
              className="fill-navy"
              fillOpacity="0.12"
            />
            <polygon
              points="400,0 330,0 400,70"
              className="fill-navy"
              fillOpacity="0.85"
            />
          </>
        )}
      </svg>
    </>
  );
}

// Small amber corner for navy cards
export function CardCorner() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 80 80"
      className="pointer-events-none absolute right-0 top-0 -z-10 h-20 w-20 select-none"
    >
      <polygon points="80,0 20,0 80,60" fill="#f5a000" fillOpacity="0.9" />
      <polygon points="80,0 55,0 80,25" className="fill-gold" />
    </svg>
  );
}

// Soft shapes for white intro cards. The card needs: relative overflow-hidden,
// and its content wrapper needs: relative
export function CardDecor() {
  return (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-gold/20"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rotate-45 bg-royal/10"
      />
      <Dots className="absolute right-6 top-4 hidden text-royal/20 md:block" />
    </>
  );
}
