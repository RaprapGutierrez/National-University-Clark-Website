"use client";

import { useEffect, useState, type ReactNode } from "react";

const hideDistance = 72;
const showDistance = 48;
const topReveal = 24;

export function ScrollHeader({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let previousY = Math.max(window.scrollY, 0);
    let ticking = false;
    const desktopMq = window.matchMedia("(min-width: 1024px)");

    function updateVisibility() {
      // Mobile: keep the bar pinned — hide-on-scroll was causing jumpy layout.
      // Also keep visible while the portaled hamburger is open.
      if (
        !desktopMq.matches ||
        document.documentElement.dataset.mobileMenuOpen === "true"
      ) {
        setHidden(false);
        previousY = Math.max(window.scrollY, 0);
        ticking = false;
        return;
      }

      const currentY = Math.max(window.scrollY, 0);
      const distance = currentY - previousY;

      if (currentY <= topReveal) {
        previousY = currentY;
        setHidden(false);
      } else if (distance >= hideDistance) {
        previousY = currentY;
        setHidden(true);
      } else if (distance <= -showDistance) {
        previousY = currentY;
        setHidden(false);
      }
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateVisibility);
    }

    function onMqChange() {
      if (!desktopMq.matches) setHidden(false);
      previousY = Math.max(window.scrollY, 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    desktopMq.addEventListener("change", onMqChange);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktopMq.removeEventListener("change", onMqChange);
    };
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
      className={`sticky top-0 z-30 transition-transform duration-200 ease-out motion-reduce:transition-none ${
        hidden
          ? "pointer-events-none -translate-y-full has-[:focus-visible]:pointer-events-auto has-[:focus-visible]:translate-y-0"
          : "translate-y-0"
      }`}
    >
      {children}
    </header>
  );
}
