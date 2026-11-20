"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Slide = { src: string; alt: string };

const arrow =
  "absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-navy/85 text-white shadow transition hover:bg-gold hover:text-navy focus-visible:outline-2 focus-visible:outline-gold";

export default function ImageCarousel({
  items,
  label = "Photo carousel",
}: {
  items: Slide[];
  label?: string;
}) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);
  const strip = useRef<HTMLDivElement>(null);
  const count = items.length;
  const go = (i: number) => setIndex((i + count) % count);

  // Keep the active thumbnail centered inside the strip (the page itself never scrolls).
  useEffect(() => {
    const box = strip.current;
    const el = box?.children[index] as HTMLElement | undefined;
    if (!box || !el) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    box.scrollTo({
      left: el.offsetLeft - (box.clientWidth - el.clientWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [index]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
      className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal"
    >
      <div className="relative overflow-hidden rounded-2xl border-2 border-gold bg-navy shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
          style={{ transform: `translateX(-${index * 100}%)` }}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
            touchX.current = null;
          }}
        >
          {items.map((s, i) => {
            const near =
              i === index ||
              i === (index + 1) % count ||
              i === (index - 1 + count) % count;
            return (
              <div
                key={s.src}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${count}`}
                aria-hidden={i !== index}
                className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-navy"
              >
                {/* Soft blurred copy fills the empty sides, so no flat navy bars */}
                <Image
                  src={s.src}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="96px"
                  quality={20}
                  className="scale-125 object-cover opacity-50 blur-2xl"
                />
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 1024px) 820px, 100vw"
                  className="object-contain"
                  {...(i === 0
                    ? { priority: true }
                    : {
                        loading: near ? ("eager" as const) : ("lazy" as const),
                      })}
                />
              </div>
            );
          })}
        </div>

        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-bold text-gold">
          {index + 1} / {count}
        </span>

        <button
          type="button"
          aria-label="Previous photo"
          onClick={() => go(index - 1)}
          className={`${arrow} left-3`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next photo"
          onClick={() => go(index + 1)}
          className={`${arrow} right-3`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Thumbnail strip */}
      <div
        ref={strip}
        className="relative mt-3 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]"
      >
        {items.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 transition ${
              i === index
                ? "border-gold opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={s.src}
              alt=""
              fill
              sizes="96px"
              quality={60}
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
