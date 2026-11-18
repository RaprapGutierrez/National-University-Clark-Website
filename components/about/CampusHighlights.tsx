"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { campusExterior, campusMap } from "@/lib/about";
import { AboutIcon } from "./AboutIcon";

const views = [
  {
    name: "Campus",
    icon: "building",
    src: campusExterior.src,
    alt: campusExterior.alt,
    caption: "Clark Tech Hub 8, SM City Clark Expansion",
  },
  {
    name: "Classrooms",
    icon: "book",
    src: "/about/campus-1.webp",
    alt: "NU Clark students attending a classroom session",
    caption: "A classroom session at NU Clark",
  },
  {
    name: "Events",
    icon: "users",
    src: "/about/campus-2.webp",
    alt: "Students gathered in a hall for a campus event",
    caption: "Students gathered for a campus event",
  },
] as const;

export function CampusHighlights() {
  const group = useId();
  const [selected, setSelected] = useState(0);
  const view = views[selected];

  return (
    <div className="min-w-0 text-white">
      <fieldset className="min-w-0">
        <legend className="sr-only">Choose a campus photo</legend>
        <div className="grid grid-cols-3 divide-x divide-white/20 bg-[#14286a]">
          {views.map(({ name, icon }, index) => (
            <label key={name} className="relative block cursor-pointer">
              <input
                type="radio"
                name={group}
                value={name}
                checked={selected === index}
                onChange={() => setSelected(index)}
                className="peer sr-only"
              />
              <span className="flex min-h-11 items-center justify-center gap-2 border-t-2 border-transparent px-1 py-2 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 peer-checked:border-gold peer-checked:bg-white/15 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:-outline-offset-2 peer-focus-visible:outline-gold">
                <AboutIcon name={icon} className="hidden size-4 shrink-0 min-[380px]:block" />
                {name}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <figure>
        <div className="relative aspect-[16/9] overflow-hidden bg-[#101f44]">
          <Image
            key={view.src}
            src={view.src}
            alt={view.alt}
            fill
            preload={selected === 0}
            sizes="(min-width: 1232px) 660px, (min-width: 768px) 57vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-0.5 text-sm text-white/90">
          <span aria-live="polite">{view.caption}</span>
          <a
            href={campusMap}
            className="inline-flex min-h-8 items-center gap-2 font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            Get directions <AboutIcon name="external" />
          </a>
        </figcaption>
      </figure>
    </div>
  );
}
