"use client";

import { useMemo, useState } from "react";
import EventCard from "@/components/events/EventCard";
import Reveal from "@/components/Reveal";
import type { NewsPost } from "@/lib/news";

export default function NewsGrid({ posts }: { posts: NewsPost[] }) {
  const tags = useMemo(() => {
    const set = new Set(posts.map((p) => p.tag).filter(Boolean));
    return ["All", ...Array.from(set)];
  }, [posts]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? posts : posts.filter((p) => p.tag === active);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by topic"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden"
      >
        {tags.map((tag) => {
          const selected = tag === active;
          return (
            <button
              key={tag}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tag)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                selected
                  ? "bg-navy text-white"
                  : "bg-white text-navy ring-1 ring-line hover:ring-royal"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-slate">No stories in this topic yet.</p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-5">
          {filtered.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 60} className="h-full">
              <EventCard event={post} compact />
            </Reveal>
          ))}
        </div>
      )}
    </div>
  );
}
