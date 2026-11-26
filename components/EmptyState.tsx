// Friendly placeholder for a section that has no content yet
export default function EmptyState({
  title,
  text,
}: {
  title: string;
  text?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-dashed border-gold/70 bg-white p-8 text-center sm:p-10">
      <span
        aria-hidden="true"
        className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-gold/20 text-navy"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </span>
      <h3 className="text-lg font-extrabold text-navy">{title}</h3>
      {text && <p className="mx-auto mt-2 max-w-md text-slate">{text}</p>}
    </div>
  );
}
