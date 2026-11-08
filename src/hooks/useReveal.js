import { useEffect } from "react";

/** Adds .revealed to every [data-reveal] element when it enters the viewport.
 *  `delay` postpones observation (ms) so the splash loader doesn't hide the intro. */
export default function useReveal(delay = 0) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("revealed");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    let timer;
    const start = () => els.forEach((el) => io.observe(el));
    timer = delay ? setTimeout(start, delay) : start();

    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, [delay]);
}
