"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/campus.jpg", alt: "NU Clark campus building" },
  { src: "/student-1.jpg", alt: "NU Clark students at an orientation" },
  { src: "/student-2.jpg", alt: "NU Clark students smiling" },
  { src: "/student-3.jpg", alt: "NU Clark students in the cafeteria" },
  { src: "/student-4.jpg", alt: "NU Clark students in uniform" },
  { src: "/student-5.jpg", alt: "NU Clark students in the hallway" },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [reduceMotion]);

  const active = slides[index];
  const prev = slides[(index - 1 + slides.length) % slides.length];
  const next = slides[(index + 1) % slides.length];
  const visible = reduceMotion
    ? [active]
    : [prev, active, next].filter(
        (s, i, arr) => arr.findIndex((x) => x.src === s.src) === i,
      );

  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-3xl bg-navy/70 shadow-2xl ring-4 ring-white/30">
      {visible.map((s) => {
        const i = slides.findIndex((slide) => slide.src === s.src);
        const isActive = i === index;
        return (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            loading={i === 0 ? "eager" : "lazy"}
            sizes="(min-width: 1024px) 540px, 100vw"
            className={`object-contain transition-opacity duration-700 motion-reduce:transition-none ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 rounded-full transition-[width,background-color] duration-200 ${
              i === index ? "w-6 bg-gold" : "w-2.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
