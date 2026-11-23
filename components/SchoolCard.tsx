import Image from "next/image";
import Link from "next/link";

export default function SchoolCard({
  href,
  title,
  summary,
  image,
}: {
  href: string;
  title: string;
  summary: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className="group mx-auto flex h-full w-full max-w-sm flex-col transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.03] active:scale-[0.99] motion-reduce:transform-none"
    >
      {image && (
        <div className="relative z-10 mx-auto -mb-12 aspect-[4/3] w-4/5 transition-transform duration-300 ease-out group-hover:-translate-y-3 group-hover:rotate-1 motion-reduce:transform-none">
          <div className="absolute inset-x-[8%] bottom-0 top-[18%] rounded-[28%] bg-gold/90 blur-[1px]" aria-hidden="true" />
          <div className="relative h-full w-full drop-shadow-[0_10px_14px_rgba(0,0,0,0.25)]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1024px) 280px, 70vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      )}

      <div
        className={`flex flex-1 flex-col items-center rounded-3xl border-2 border-gold bg-navy px-6 pb-6 text-center text-white shadow-lg transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-navy/40 ${
          image ? "pt-16" : "pt-6"
        }`}
      >
        <h3 className="text-xl font-extrabold text-gold">{title}</h3>
        <p className="mt-2 text-sm text-white/85">{summary}</p>
        <div className="mt-auto pt-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold leading-none text-navy transition-transform duration-300 group-hover:translate-x-1">
            Learn more
            <span aria-hidden="true" className="translate-y-px">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
