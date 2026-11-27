"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Icon } from "@/components/Icon";
import type { EventPost } from "@/lib/events";
import { toTeaser } from "@/lib/story";

/** Dense editorial index — rows, not card tiles. */
export default function StoryIndex({
  posts,
  heading = "Index",
}: {
  posts: EventPost[];
  heading?: string;
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
      <div className="flex flex-col gap-4 border-b border-navy/15 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
          {heading}
        </h2>
        <div
          role="tablist"
          aria-label="Filter"
          className="flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                className={`shrink-0 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] transition ${
                  on
                    ? "bg-navy text-white"
                    : "text-slate hover:bg-mist hover:text-navy"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>

      <ul className="divide-y divide-line">
        {filtered.map((post, i) => {
          const story = toTeaser(post);
          const open = openSlug === story.slug;
          return (
            <li key={story.slug} id={story.slug} className="scroll-mt-[var(--site-header-offset)]">
              <div className="grid gap-4 py-5 sm:grid-cols-[5.5rem_minmax(0,1fr)_auto] sm:gap-6 sm:py-6">
                <div className="flex items-start gap-3 sm:block">
                  <span className="font-extrabold tabular-nums text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {story.image && (
                    <div className="relative h-14 w-20 shrink-0 overflow-hidden bg-navy sm:mt-3 sm:h-16 sm:w-full">
                      <Image
                        src={story.image.src}
                        alt=""
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-royal">
                    {story.tag}
                    {story.date ? ` · ${story.date}` : ""}
                  </p>
                  <h3 className="mt-1 text-lg font-extrabold leading-snug text-navy sm:text-xl">
                    {story.title}
                  </h3>
                  {!open && (
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
                      {story.summary}
                    </p>
                  )}
                  {open && (
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate sm:text-base">
                      {story.body.map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                      {story.href && (
                        <a
                          href={story.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-royal underline-offset-4 hover:underline"
                        >
                          Open source
                          <Icon name="external" className="size-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenSlug(open ? null : story.slug)
                  }
                  className="justify-self-start text-left text-xs font-bold uppercase tracking-[0.16em] text-navy underline-offset-4 hover:underline sm:justify-self-end sm:pt-1"
                >
                  {open ? "Close" : "Read"}
                </button>
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
