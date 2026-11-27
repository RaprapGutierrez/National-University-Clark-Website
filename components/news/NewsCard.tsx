import Image from "next/image";

export type CardPost = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  summary: string;
  image?: { src: string; alt: string };
  href?: string;
};

// Used for News stories and for Research updates
export default function NewsCard({
  post,
  featured = false,
  linkLabel ="Read on Facebook",
}: {
  post: CardPost;
  featured?: boolean;
  /** Text of the button that opens the original post */
  linkLabel?: string;
}) {
  const external = post.href?.startsWith("http");

  return (
    <article
      id={post.slug}
      className={`scroll-mt-[var(--site-header-offset)] overflow-hidden ${
        featured
          ?"rounded-[1.75rem] border-2 border-gold bg-navy text-white shadow-xl"
          :"flex h-full flex-col rounded-[1.35rem] border border-line bg-white text-slate shadow-[0_18px_44px_-32px_rgba(31,47,122,0.55)]"
      }`}
    >
      <div
        className={
          featured
            ? post.image
              ?"grid lg:grid-cols-[1.1fr_0.9fr]"
              :""
            :"flex h-full flex-col"
        }
      >
        {post.image && (
          <div
            className={`relative bg-navy ${
              featured
                ?"min-h-64 lg:order-2 lg:min-h-full"
                :"aspect-[16/9] border-b border-line"
            }`}
          >
            <Image
              src={post.image.src}
              alt={post.image.alt}
              fill
              sizes={
                featured
                  ?"(min-width: 1024px) 480px, 100vw"
                  :"(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              }
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5 sm:p-7">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span
              className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                featured ?"bg-gold text-navy" :"bg-navy text-gold"
              }`}
            >
              {post.tag}
            </span>
            <time
              className={`text-xs font-semibold ${
                featured ?"text-white/75" :"text-royal"
              }`}
            >
              {post.date}
            </time>
          </div>

          <h3
            className={`mt-3 font-extrabold leading-tight ${
              featured
                ? "text-2xl text-gold sm:text-3xl"
                : "text-xl text-navy sm:text-2xl"
            }`}
          >
            {post.title}
          </h3>
          <p
            className={`mt-3 ${
              featured ?"text-base text-white/90" :"text-sm text-slate"
            }`}
          >
            {post.summary}
          </p>

          {post.href && (
            <div className="mt-auto pt-5">
              <a
                href={post.href}
                {...(external
                  ? { target:"_blank", rel:"noopener noreferrer" }
                  : {})}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold leading-none transition hover:-translate-y-0.5 ${
                  featured
                    ?"bg-gold text-navy"
                    :"bg-navy text-white hover:bg-royal"
                }`}
              >
                {linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
