import { useState } from "react";
import { CONTENT } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

export default function Instructions() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section sec--paper" id="instructions">
      <div className="container">
        <SectionHead
          num="05"
          eyebrow="Instructions"
          center
          title="Eight rules for a"
          accent="smooth day."
          sub="Read these once — they keep the exam fair and the morning stress-free."
        />

        <div className="acc">
          {CONTENT.instructions.map((ins, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div key={ins.title} className={`acc__item ${isOpen ? "open" : ""}`} data-reveal style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <button
                  type="button"
                  className="acc__head"
                  aria-expanded={isOpen}
                  aria-controls={`ins-${num}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="acc__num">{num}</span>
                  <span className="acc__q">{ins.title}</span>
                  <span className="acc__x" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="acc__body" id={`ins-${num}`} style={{ maxHeight: isOpen ? "240px" : 0 }}>
                  <p>{ins.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="acc__hint" data-reveal>
          The full official rule sheet will ride along with the admit card.
        </p>
      </div>
    </section>
  );
}
