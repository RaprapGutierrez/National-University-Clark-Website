import Reveal from "@/components/Reveal";

export type OutcomeItem = {
  label: string;
  text: string;
};

function normalizeOutcomes(
  outcomes: Array<string | OutcomeItem>,
): OutcomeItem[] {
  return outcomes.map((o, i) =>
    typeof o === "string"
      ? { label: `Outcome ${String(i + 1).padStart(2, "0")}`, text: o }
      : o,
  );
}

export default function ProgramOutcomes({
  outcomes,
  kicker = "What you will be able to do",
  title = "Program outcomes",
  text = "The skills and abilities students gain by the time they finish the program.",
}: {
  outcomes: Array<string | OutcomeItem>;
  kicker?: string;
  title?: string;
  text?: string;
}) {
  const items = normalizeOutcomes(outcomes);

  return (
    <section id="outcomes" className="scroll-mt-[var(--site-header-offset)]">
      <Reveal>
        <div className="mb-4 sm:mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-royal sm:text-sm sm:tracking-[0.2em]">
            {kicker}
          </p>
          <h2 className="mt-1 text-xl font-extrabold text-navy sm:text-3xl">
            {title}
          </h2>
          <div className="mt-2 flex items-center gap-2 sm:mt-3">
            <span className="h-1 w-12 rounded-full bg-gold sm:h-1.5 sm:w-16" />
            <span className="h-1 w-2.5 rounded-full bg-gold/50 sm:h-1.5 sm:w-3" />
          </div>
          {text && (
            <p className="mt-2 max-w-2xl text-sm text-slate sm:mt-3 sm:text-base">
              {text}
            </p>
          )}
          <p className="mt-1.5 text-xs font-semibold text-navy/70 sm:mt-2 sm:text-sm">
            {items.length} graduate capabilities
          </p>
        </div>
      </Reveal>

      {/* Mobile: snap carousel — single Reveal wrapper avoids N observers */}
      <Reveal className="sm:hidden">
        <div className="-mx-5">
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-5 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item, i) => (
              <article
                key={item.label}
                className="flex h-full w-[min(85vw,20rem)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl bg-navy text-white shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <span className="text-3xl font-extrabold tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="max-w-[9.5rem] text-right text-[11px] font-bold uppercase tracking-[0.14em] text-gold/90">
                    {item.label}
                  </span>
                </div>
                <p className="flex-1 px-5 py-4 text-sm leading-relaxed text-white/85">
                  {item.text}
                </p>
                <div className="h-1.5 bg-gradient-to-r from-gold via-gold/70 to-transparent" />
              </article>
            ))}
          </div>
          <p className="px-5 text-xs font-medium text-slate">
            Swipe to browse all {items.length} outcomes
          </p>
        </div>
      </Reveal>

      {/* Tablet / desktop: compact two-column grid */}
      <ol className="hidden gap-3 sm:grid sm:grid-cols-2 lg:gap-4">
        {items.map((item, i) => (
          <Reveal
            key={item.label}
            as="li"
            delay={(i % 4) * 50}
            className="group flex h-full gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-royal/40 hover:shadow-md motion-reduce:transform-none sm:gap-4 sm:p-4 lg:p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-navy text-sm font-extrabold tabular-nums text-gold transition duration-300 group-hover:scale-105 motion-reduce:transform-none">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-royal">
                {item.label}
              </p>
              <p className="mt-1 text-sm leading-snug text-slate lg:leading-relaxed">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
