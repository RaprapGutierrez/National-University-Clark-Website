"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type Photo = { src: string; alt: string };

const navButton =
  "inline-grid size-11 shrink-0 place-items-center rounded-full border border-gold/60 text-white transition-colors hover:bg-gold hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

export default function ImageGallery({ items }: { items: Photo[] }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const [selected, setSelected] = useState(0);
  const photo = items[selected];

  function move(amount: number) {
    setSelected((c) => (c + amount + items.length) % items.length);
  }

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((p, i) => (
          <li key={p.src}>
            <button
              type="button"
              aria-label={`Enlarge: ${p.alt}`}
              onClick={(e) => {
                trigger.current = e.currentTarget;
                setSelected(i);
                dialog.current?.showModal();
              }}
              className="group relative block aspect-square w-full overflow-hidden rounded-2xl border-2 border-gold bg-navy shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal motion-reduce:transform-none"
            >
              <Image
                src={p.src}
                alt=""
                fill
                sizes="(min-width: 1024px) 400px, 50vw"
                className="object-cover"
              />
              <span className="absolute bottom-2 right-2 rounded-full bg-navy/90 px-3 py-1 text-xs font-bold text-gold">
                Enlarge
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Enlarged photo"
        onClose={() => trigger.current?.focus()}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
            e.preventDefault();
            move(e.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%_-_1.5rem)] max-w-4xl overflow-auto rounded-2xl border-2 border-gold bg-navy p-0 text-white backdrop:bg-black/80"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-5">
          <p className="text-sm font-bold text-gold">
            {selected + 1} of {items.length}
          </p>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="inline-flex min-h-11 items-center px-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-gold"
          >
            Close
          </button>
        </div>

        <div className="relative h-[min(72dvh,52rem)] bg-[#0a1240]">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            fill
            quality={90}
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-contain"
          />
        </div>

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-3 sm:gap-4 sm:px-5">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => move(-1)}
            className={navButton}
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
          <p aria-live="polite" className="text-center text-sm text-white/90">
            {photo.alt}
            <a
              href={photo.src}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-xs font-semibold text-gold underline underline-offset-4"
            >
              Open full size
            </a>
          </p>
          <button
            type="button"
            aria-label="Next"
            onClick={() => move(1)}
            className={navButton}
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
      </dialog>
    </>
  );
}
