"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!els.length) return;

    // Helper: force reveal all (fallback)
    const revealAll = () => {
      els.forEach((el) => el.classList.add("is-visible"));
    };

    // If IntersectionObserver is not available, reveal everything
    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));

    // Extra safety: if something never intersects on some mobile browsers, reveal after a short delay
    const safety = window.setTimeout(() => {
      revealAll();
      io.disconnect();
    }, 2000);

    return () => {
      window.clearTimeout(safety);
      io.disconnect();
    };
  }, []);

  return null;
}
