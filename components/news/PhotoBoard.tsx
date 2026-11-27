"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import type { EventPost } from "@/lib/events";
import { toTeaser } from "@/lib/story";

/** Clean story list — one cover each, expand for full copy. */
export default function PhotoBoard({
  posts,
  heading,
  kicker = "Updates",
}: {
  posts: EventPost[];
  heading: string;
  kicker?: string;
}) {
  const tags = useMemo(() => {
    const set = new Set(posts.map((p) => p.tag).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [active, setActive] = useState("All");
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.tag === active);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
            {kicker}
          </p>
          <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            {heading}
          </h2>
        </div>
        {tags.length > 2 && (
          <div
            role="tablist"
            aria-label="Filter"
            className="flex gap-x-4 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tags.map((tag) => {
              const on = tag === active;
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => setActive(tag)}
                  className={`shrink-0 pb-1 text-xs font-bold uppercase tracking-[0.14em] transition ${
                    on
                      ? "border-b-2 border-gold text-navy"
                      : "text-slate hover:text-navy"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <ul className="divide-y divide-line">
        {filtered.map((post) => {
          const story = toTeaser(post);
          const open = openSlug === story.slug;

          return (
            <li
              key={story.slug}
              id={story.slug}
              className="scroll-mt-[var(--site-header-offset)] py-6 sm:py-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8">
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenSlug(open ? null : story.slug)}
                  className="relative aspect-square w-full shrink-0 overflow-hidden bg-[#0f1a4a] text-left sm:w-44 lg:w-52"
                >
                  {story.image ? (
                    <Image
                      src={story.image.src}
                      alt={story.image.alt}
                      fill
                      sizes="(min-width: 1024px) 16rem, (min-width: 640px) 12rem, 100vw"
                      className="object-contain object-center"
                    />
                  ) : (
                    <span className="absolute inset-0 bg-royal/40" />
                  )}
                </button>

                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-royal">
                    {story.tag}
                    {story.date ? ` · ${story.date}` : ""}
                  </p>
                  <h3 className="mt-1.5 text-lg font-extrabold leading-snug text-navy sm:text-xl lg:text-2xl">
                    {story.title}
                  </h3>
                  {!open && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate sm:text-base">
                      {story.summary}
                    </p>
                  )}
                  {open && (
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate sm:text-base">
                      {story.body.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                  )}
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    <button
                      type="button"
                      onClick={() => setOpenSlug(open ? null : story.slug)}
                      className="text-[11px] font-bold uppercase tracking-[0.16em] text-royal underline-offset-4 hover:underline"
                    >
                      {open ? "Close" : "Full story"}
                    </button>
                    {story.href && (
                      <a
                        href={story.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-navy/60 underline-offset-4 hover:text-navy hover:underline"
                      >
                        Source
                        <Icon name="external" className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <p className="py-10 text-slate">Nothing in this topic yet.</p>
      )}
    </div>
  );
}
