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

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/30">
      {slides.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={s.alt}
          fill
          priority={i === 0}
          sizes="(min-width: 1024px) 540px, 100vw"
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            onClick={() => setIndex(i)}
            aria-label={`Show photo ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-gold" : "w-2.5 bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
