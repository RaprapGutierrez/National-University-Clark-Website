"use client";

import { useEffect, useState, type ReactNode } from "react";

const scrollThreshold = 10;

export function ScrollHeader({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = Math.max(window.scrollY, 0);
    let ticking = false;

    function updateVisibility() {
      const currentY = Math.max(window.scrollY, 0);
      const distance = currentY - previousY;

      if (currentY <= scrollThreshold) {
        previousY = currentY;
        setHidden(false);
      } else if (Math.abs(distance) >= scrollThreshold) {
        previousY = currentY;
        setHidden(distance > 0);
      }
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateVisibility);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.siteNavHidden = hidden ? "true" : "false";
    return () => {
      delete document.documentElement.dataset.siteNavHidden;
    };
  }, [hidden]);

  return (
    <header
      data-site-header=""
      data-about-nav-hidden={hidden}
      className={`sticky top-0 z-30 transition-transform duration-200 ease-out will-change-transform motion-reduce:transition-none motion-reduce:will-change-auto ${
        hidden
          ? "pointer-events-none -translate-y-full has-[:focus-visible]:pointer-events-auto has-[:focus-visible]:translate-y-0"
          : ""
      }`}
    >
      {children}
    </header>
  );
}
