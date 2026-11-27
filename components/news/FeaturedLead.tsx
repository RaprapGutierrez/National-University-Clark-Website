"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/Icon";
import type { StoryTeaserData } from "@/lib/story";

/**
 * Lead story. Cover size is fixed — expanding copy must never stretch the
 * image column (that was the “zoom” when Continue reading was pressed).
 */
export default function FeaturedLead({ story }: { story: StoryTeaserData }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      id={story.slug}
      className="scroll-mt-[var(--site-header-offset)] border-b border-line bg-white"
    >
      <div className="mx-auto flex max-w-6xl flex-col lg:flex-row lg:items-start">
        {/* shrink-0 + fixed square — independent of text height */}
        <div className="relative aspect-square w-full shrink-0 bg-[#0f1a4a] lg:w-[min(100%,28rem)] xl:w-[32rem]">
          {story.image && (
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              priority
              sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 28rem, 100vw"
              className="object-contain object-center"
            />
          )}
        </div>

        <div className="min-w-0 flex-1 px-4 py-8 sm:px-5 sm:py-10 lg:px-10 lg:py-12">
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
              className="rounded-full bg-navy px-5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-royal"
            >
              {open ? "Collapse" : "Continue reading"}
            </button>
            {story.href && (
              <a
                href={story.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-center text-[11px] font-bold uppercase tracking-[0.16em] text-navy/60 underline-offset-4 hover:text-navy hover:underline"
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
