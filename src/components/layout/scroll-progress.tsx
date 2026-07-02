"use client";

import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct =
        (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setWidth(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="scroll-indicator"
      style={{ width: `${width}%` }}
      aria-hidden
    />
  );
}
