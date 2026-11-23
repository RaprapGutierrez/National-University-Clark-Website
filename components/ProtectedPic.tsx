"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// Picture that opens in a preview window (modal) when tapped.
// Right-click, dragging, and long-press "save image" are blocked.
export default function ProtectedPic({
  src,
  alt,
  sizes = "(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw",
}: {
  src: string;
  alt: string;
  sizes?: string;
}) {
  const [open, setOpen] = useState(false);

  // Close with Esc, and stop the page behind from scrolling while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open]);

  const block = (e: React.SyntheticEvent) => e.preventDefault();
  const noSave = { WebkitTouchCallout: "none" } as const;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onContextMenu={block}
        aria-label={`Preview picture: ${alt}`}
        style={noSave}
        className="relative block aspect-square w-full cursor-zoom-in select-none overflow-hidden rounded-2xl border-2 border-gold bg-navy transition hover:-translate-y-1 hover:shadow-lg"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          draggable={false}
          className="pointer-events-none select-none object-cover"
        />
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
            onContextMenu={block}
            style={noSave}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close preview"
              className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-lg transition hover:bg-gold"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative h-[85vh] w-full max-w-4xl select-none"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(min-width: 1024px) 896px, 100vw"
                draggable={false}
                className="pointer-events-none select-none object-contain"
              />
              {/* Invisible shield over the picture */}
              <div className="absolute inset-0" aria-hidden="true" />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
