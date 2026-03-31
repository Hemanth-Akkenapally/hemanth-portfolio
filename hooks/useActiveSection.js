"use client";

import { useEffect } from "react";

export function useActiveSection() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-link");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            links.forEach((l) =>
              l.classList.toggle(
                "active",
                l.getAttribute("href") === `#${e.target.id}`
              )
            );
          }
        }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
}
