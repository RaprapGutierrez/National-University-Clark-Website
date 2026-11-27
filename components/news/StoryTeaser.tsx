"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { Icon } from "@/components/Icon";
import type { StoryTeaserData } from "@/lib/story";

export default function StoryTeaser({
  story,
  featured = false,
}: {
  story: StoryTeaserData;
  featured?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const hasMore = story.body.length > 1 || story.summary.length > 180;

  return (
    <article
      id={story.slug}
      className={`group flex h-full scroll-mt-[var(--site-header-offset)] flex-col overflow-hidden ${
        featured
          ? "rounded-[1.75rem] border-2 border-gold bg-navy text-white shadow-xl"
          : "rounded-3xl border border-line bg-white shadow-[0_18px_44px_-32px_rgba(31,47,122,0.55)] transition duration-300 hover:-translate-y-1 hover:border-royal/40 hover:shadow-lg motion-reduce:transform-none"
      }`}
    >
      <div
        className={
          featured
            ? story.image
              ? "flex flex-col lg:flex-row-reverse lg:items-start"
              : ""
            : "flex h-full flex-col"
        }
      >
        {story.image && (
          <div
            className={`relative overflow-hidden bg-[#0f1a4a] ${
              featured
                ? "aspect-square w-full shrink-0 lg:w-[min(100%,22rem)]"
                : "aspect-[16/10]"
            }`}
          >
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes={
                featured
                  ? "(min-width: 1024px) 22rem, 100vw"
                  : "(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
              }
              className="object-contain object-center"
            />
            {story.photoCount > 1 && (
              <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-sm">
                {story.photoCount} photos
              </span>
            )}
          </div>
        )}

        <div
          className={`flex min-w-0 flex-1 flex-col ${
            featured ? "p-5 sm:p-8" : "p-4 sm:p-5"
          }`}
        >
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span
              className={`inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] ${
                featured ? "bg-gold text-navy" : "bg-navy text-gold"
              }`}
            >
              {story.tag}
            </span>
            {story.date && (
              <span
                className={`text-xs font-semibold ${
                  featured ? "text-white/70" : "text-royal"
                }`}
              >
                {story.date}
              </span>
            )}
          </div>

          <h3
            className={`mt-3 font-extrabold leading-tight ${
              featured
                ? "text-2xl text-gold sm:text-3xl lg:text-4xl"
                : "text-lg text-navy sm:text-xl"
            }`}
          >
            {story.title}
          </h3>

          {!open && (
            <p
              className={`mt-3 ${
                featured
                  ? "text-base leading-relaxed text-white/90 sm:line-clamp-4"
                  : "line-clamp-3 text-sm leading-relaxed text-slate"
              }`}
            >
              {story.summary}
            </p>
          )}

          {open && (
            <div
              id={panelId}
              className={`mt-3 space-y-3 text-sm leading-relaxed sm:text-base ${
                featured ? "text-white/90" : "text-slate"
              }`}
            >
              {story.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {story.hashtags && story.hashtags.length > 0 && (
                <p
                  className={`text-xs font-semibold ${
                    featured ? "text-gold" : "text-royal"
                  }`}
                >
                  {story.hashtags.join(" ")}
                </p>
              )}
            </div>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {hasMore && (
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((v) => !v)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold leading-none transition hover:-translate-y-0.5 ${
                  featured
                    ? "bg-gold text-navy"
                    : "bg-navy text-white hover:bg-royal"
                }`}
              >
                {open ? "Show less" : "Read story"}
                <Icon
                  name={open ? "arrow-up" : "arrow-right"}
                  className="size-3.5"
                />
              </button>
            )}
            {story.href && (
              <a
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold leading-none transition hover:-translate-y-0.5 ${
                  featured
                    ? "bg-white/15 text-white ring-1 ring-white/35 hover:bg-white/25"
                    : "text-royal underline-offset-4 hover:underline"
                }`}
              >
                Open source
                <Icon name="external" className="size-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
