import { useEffect, useState } from "react";
import { CONTENT } from "../data/content.js";

/* 5x5 diamond pixel mark assembling cell by cell (SCD-style loader). */
const PATTERN = [
  "00100",
  "01110",
  "11111",
  "01110",
  "00100",
];

export default function Splash() {
  const [fade, setFade] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setGone(true);
      return;
    }
    const t1 = setTimeout(() => setFade(true), 1500);
    const t2 = setTimeout(() => setGone(true), 2100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  let idx = 0;
  return (
    <div className={`splash ${fade ? "splash--fade" : ""}`} aria-hidden="true">
      <div className="splash__wrap">
        <div className="splash__grid">
          {PATTERN.flatMap((row, r) =>
            row.split("").map((c, col) => {
              const on = c === "1";
              const d = on ? idx++ * 45 : 0;
              return (
                <span
                  key={`${r}-${col}`}
                  className={`splash__cell ${on ? "on" : ""}`}
                  style={on ? { "--d": `${d}ms` } : undefined}
                />
              );
            })
          )}
        </div>
        <p className="splash__name">
          ASTRA<span>-2026</span>
        </p>
        <p className="splash__sub">{CONTENT.event.taglineWords.join("  ·  ")}</p>
      </div>
    </div>
  );
}
