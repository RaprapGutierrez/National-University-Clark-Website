"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function TopLoader() {
  const pathname = usePathname();
  const [width, setWidth] = useState(0);
  const [visible, setVisible] = useState(false);
  const trickle = useRef<ReturnType<typeof setInterval> | null>(null);
  const hide = useRef<ReturnType<typeof setTimeout> | null>(null);
  const first = useRef(true);

  const clear = () => {
    if (trickle.current) clearInterval(trickle.current);
    if (hide.current) clearTimeout(hide.current);
  };

  const start = () => {
    clear();
    setVisible(true);
    setWidth(12);
    trickle.current = setInterval(
      () => setWidth((w) => w + (90 - w) * 0.18),
      160,
    );
  };

  const done = () => {
    clear();
    setWidth(100);
    hide.current = setTimeout(() => {
      setVisible(false);
      setWidth(0);
    }, 280);
  };

  useEffect(() => {
    if (first.current) {
      first.current = false;
      start();
      hide.current = setTimeout(done, 420);
      return;
    }
    done();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash) return;
      if (url.pathname === window.location.pathname) return;
      start();
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      clear();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full"
    >
      <div
        className="h-full bg-gold shadow-[0_0_8px_rgba(245,197,24,0.65)] transition-[width,opacity] duration-150 ease-out"
        style={{ width: `${width}%`, opacity: visible ? 1 : 0 }}
      />
    </div>
  );
}
