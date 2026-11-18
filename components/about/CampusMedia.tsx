"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { AboutIcon } from "@/components/about/AboutIcon";
import { campusPhotos } from "@/lib/about";

const mediaHeading = "font-serif text-[1.85rem] leading-tight font-normal tracking-tight text-[#101f55] sm:text-[2.25rem]";
const galleryButton = "inline-grid size-11 shrink-0 place-items-center border border-[#d8d7cf] text-[#101f55] transition-colors hover:border-[#101f55] hover:bg-[#101f55] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101f55]";

export function TourVideo() {
  return (
    <AboutVideo
      id="virtual-tour"
      heading="Virtual tour"
      title="NU Clark campus tour"
      videoId="d7SNxrYSodI"
      poster="/about/tour.jpg"
      playLabel="Play campus tour"
    />
  );
}

export function UniversityHymn() {
  return (
    <AboutVideo
      id="university-hymn"
      heading="National University Hymn"
      title="National University Hymn"
      videoId="mtnyFP46MMM"
      poster="/about/hymn.jpg"
      playLabel="Play the university hymn"
    />
  );
}

function AboutVideo({ id, heading, title, videoId, poster, playLabel }: {
  id: string;
  heading: string;
  title: string;
  videoId: string;
  poster: string;
  playLabel: string;
}) {
  const [playing, setPlaying] = useState(false);
  const player = useRef<HTMLDivElement>(null);
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <section aria-labelledby={id}>
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-5 gap-y-2">
        <h2 id={id} className={`${mediaHeading} scroll-mt-6`}>
          {heading}
        </h2>
        <a
          href={videoUrl}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#101f55] underline decoration-[#101f55]/35 underline-offset-4 hover:decoration-[#101f55]"
        >
          Watch on YouTube
          <AboutIcon name="external" className="size-3.5" />
        </a>
      </div>
      <div
        ref={player}
        tabIndex={-1}
        aria-label={`${title} video player`}
        className="relative aspect-video overflow-hidden border border-[#101f55] bg-[#101f55]"
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="size-full border-0"
          />
        ) : (
          <a
            href={videoUrl}
            onClick={(event) => {
              if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              setPlaying(true);
              player.current?.focus();
            }}
            className="group absolute inset-0 flex items-end p-3 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-gold sm:p-5"
            aria-label={`Play the ${title}`}
          >
            <Image
              src={poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 850px, 100vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="relative inline-flex items-center gap-3 border-l-4 border-gold bg-[#101f55] px-4 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#213475] sm:px-5"
            >
              <AboutIcon name="play" className="size-4 text-gold" />
              {playLabel}
            </span>
          </a>
        )}
      </div>
    </section>
  );
}

export function CampusGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const [selected, setSelected] = useState(0);
  const photo = campusPhotos[selected];

  function move(amount: number) {
    setSelected((current) => (current + amount + campusPhotos.length) % campusPhotos.length);
  }

  return (
    <section aria-labelledby="campus-gallery">
      <h2 id="campus-gallery" className={`mb-4 ${mediaHeading}`}>
        Campus gallery
      </h2>
      <ul className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-4 lg:grid-cols-4">
        {campusPhotos.map(({ src, caption }, index) => (
          <li key={src} className={index < 2 ? "lg:col-span-2" : undefined}>
            <figure>
              <a
                href={src}
                aria-label={`Enlarge photo: ${caption}`}
                onClick={(event) => {
                  if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
                  const modal = dialog.current;
                  if (!modal || typeof modal.showModal !== "function") return;
                  event.preventDefault();
                  trigger.current = event.currentTarget;
                  setSelected(index);
                  modal.showModal();
                }}
                className={`group relative block aspect-[4/3] overflow-hidden bg-[#e6e2d7] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101f55] ${index < 2 ? "lg:aspect-video" : ""}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes={index < 2 ? "(min-width: 1024px) 460px, 50vw" : "(min-width: 1024px) 230px, 50vw"}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.035] motion-reduce:transform-none"
                />
                <span className="absolute right-1.5 bottom-1.5 grid size-8 place-items-center bg-[#101f55]/90 text-white group-hover:bg-[#101f55] sm:right-2 sm:bottom-2">
                  <AboutIcon name="expand" className="size-4" />
                </span>
              </a>
              <figcaption className="mt-2 text-xs leading-snug text-[#494e5b] sm:text-sm">{caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-labelledby="photo-dialog-title"
        onClose={() => trigger.current?.focus()}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%_-_1.5rem)] max-w-4xl overflow-auto border border-[#d8d7cf] bg-[#faf8f2] text-[#101f55] backdrop:bg-[#060d27]/85"
      >
        <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-5">
          <h3 id="photo-dialog-title" className="font-serif text-xl">Campus gallery</h3>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-[#101f55]"
          >
            <AboutIcon name="close" className="size-4" />
            Close
          </button>
        </div>
        <div className="relative h-[min(58dvh,36rem)] bg-[#091330]">
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            sizes="(min-width: 1024px) 856px, 100vw"
            className="object-contain"
          />
        </div>
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-3 text-center sm:gap-4 sm:px-5">
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => move(-1)}
            className={galleryButton}
          >
            <AboutIcon name="arrow-left" className="size-5" />
          </button>
          <p aria-live="polite" className="text-sm">
            {photo.caption}
            <span className="mt-1 block text-xs text-[#494e5b]">{selected + 1} of {campusPhotos.length}</span>
          </p>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => move(1)}
            className={galleryButton}
          >
            <AboutIcon name="arrow-right" className="size-5" />
          </button>
        </div>
      </dialog>
    </section>
  );
}
