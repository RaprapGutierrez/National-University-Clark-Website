const paths = {
  "arrow-left": "M19 12H5m7-7-7 7 7 7",
  "arrow-right": "M5 12h14m-7-7 7 7-7 7",
  "chevron-right": "m9 6 6 6-6 6",
  external: "M13 5h6v6m0-6-8 8m6 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h5",
  book: "M12 6c-3-2-6-2.5-9-2v14c3-.5 6 0 9 2 3-2 6-2.5 9-2V4c-3-.5-6 0-9 2Zm0 0v14",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.9M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm3-3.9a4 4 0 0 1 0 7.8",
  target: "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-4 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Zm-4 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
  file: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Zm0 0v6h6M8 13h8m-8 4h8",
  building: "M3 21h18M5 21V5l7-3 7 3v16M9 8h.01M15 8h.01M9 12h.01M15 12h.01M10 21v-5h4v5",
  pin: "M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-5 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  play: "m8 5 11 7-11 7V5Z",
  close: "m6 6 12 12M18 6 6 18",
  expand: "M14 4h6v6m0-6-6 6M4 14v6h6m-6 0 6-6",
  download: "M12 3v12m-4-4 4 4 4-4M5 16v4h14v-4",
} as const;

export function AboutIcon({
  name,
  className = "size-4 shrink-0",
}: {
  name: keyof typeof paths;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  );
}
