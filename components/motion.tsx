"use client";

import { useEffect } from "react";

function supports(prop: string, value: string) {
  return typeof CSS !== "undefined" && typeof CSS.supports === "function" && CSS.supports(prop, value);
}

/** Scroll timelines where the browser has them; a small observer and scroll bar where it does not. */
export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    if (reduce) return;

    root.classList.add("motion-ready");
    cleanups.push(() => root.classList.remove("motion-ready"));

    const supportsView = supports("animation-timeline", "view()");
    const supportsScroll = supports("animation-timeline", "scroll()");

    if (!supportsView && "IntersectionObserver" in window) {
      root.classList.add("motion-fallback");
      const nodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal, .shot"));
      const viewHeight = window.innerHeight || 800;
      const pending: HTMLElement[] = [];
      for (const node of nodes) {
        const rect = node.getBoundingClientRect();
        if (rect.top < viewHeight * 0.9 && rect.bottom > 32) node.classList.add("is-in", "was-visible");
        else pending.push(node);
      }
      if (pending.length) {
        const observer = new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              entry.target.classList.add("is-in");
              observer.unobserve(entry.target);
            }
          },
          { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
        );
        pending.forEach((node) => observer.observe(node));
        cleanups.push(() => observer.disconnect());
      }
    }

    if (!supportsScroll) {
      const bar = document.querySelector<HTMLElement>(".scroll-progress");
      if (bar) {
        const onScroll = () => {
          const max = root.scrollHeight - window.innerHeight;
          const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
          bar.style.transform = `scaleX(${progress})`;
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        cleanups.push(() => {
          window.removeEventListener("scroll", onScroll);
          bar.style.transform = "";
        });
      }
    }

    if (window.matchMedia("(pointer: fine)").matches) {
      const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
      for (const el of magnets) {
        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          const dx = Math.max(-12, Math.min(12, (event.clientX - (rect.left + rect.width / 2)) * 0.18));
          const dy = Math.max(-10, Math.min(10, (event.clientY - (rect.top + rect.height / 2)) * 0.28));
          el.style.translate = `${dx}px ${dy}px`;
        };
        const leave = () => {
          el.style.translate = "";
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        el.addEventListener("blur", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
          el.removeEventListener("blur", leave);
          el.style.translate = "";
        });
      }
    }

    return () => {
      root.classList.remove("motion-fallback");
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
