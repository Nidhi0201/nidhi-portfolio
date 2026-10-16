"use client";
import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    // skip the first section (hero) so above-the-fold content is never animated in
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section"),
    ).slice(1);
    sections.forEach((s) => s.classList.add("reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
