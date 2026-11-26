export default function SectionTitle({
  kicker,
  title,
  text,
  light = false,
  showAccent = true,
}: {
  kicker: string;
  title: string;
  text?: string;
  /** Use on navy backgrounds */
  light?: boolean;
  /** Gold dash/dot row under the title. Default true for site-wide use. */
  showAccent?: boolean;
}) {
  return (
    <div className="mb-8">
      <p
        className={`text-sm font-bold uppercase tracking-[0.2em] ${
          light ? "text-gold" : "text-royal"
        }`}
      >
        {kicker}
      </p>
      <h2
        className={`mt-1 text-2xl font-extrabold sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {showAccent ? (
        <div className="mt-3 flex items-center gap-2">
          <span className="h-1.5 w-16 rounded-full bg-gold" />
          <span className="h-1.5 w-3 rounded-full bg-gold/50" />
          <span className="h-1.5 w-1.5 rounded-full bg-gold/30" />
        </div>
      ) : null}
      {text && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed ${
            light ? "text-white" : "text-slate"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
