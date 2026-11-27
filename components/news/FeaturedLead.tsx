"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { StoryTeaserData } from "@/lib/story";

/** One lead story: single cover + copy. */
export default function FeaturedLead({ story }: { story: StoryTeaserData }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      id={story.slug}
      className="scroll-mt-[var(--site-header-offset)] border-b border-line"
    >
      <div className="mx-auto grid max-w-6xl gap-0 lg:grid-cols-2">
        <div className="relative min-h-[16rem] bg-navy sm:min-h-[20rem] lg:min-h-[26rem]">
          {story.image && (
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-center px-4 py-8 sm:px-5 sm:py-10 lg:px-10 lg:py-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-royal">
            {story.tag}
            {story.date ? ` · ${story.date}` : ""}
            {story.venue ? ` · ${story.venue}` : ""}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:text-4xl">
            {story.title}
          </h2>
          {!open && (
            <p className="mt-4 text-base leading-relaxed text-slate">
              {story.summary}
            </p>
          )}
          {open && (
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate sm:text-base">
              {story.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-royal underline-offset-4 hover:underline"
            >
              {open ? "Collapse" : "Continue reading"}
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
    </article>
  );
}
