import { Info } from "lucide-react";
import { CONTENT } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

export default function Eligibility() {
  return (
    <section className="section sec--navy" id="eligibility">
      <div className="container">
        <SectionHead
          tone="dark"
          num="02"
          eyebrow="Eligibility"
          title="Who can take the stage."
          sub="ASTRA-2026 is open to selected grades across all major boards — nothing more, nothing less."
        />

        <div className="elig__grid">
          {CONTENT.eligibility.map((c, i) => (
            <article key={c.tag} className="ecard" data-reveal style={{ transitionDelay: `${i * 110}ms` }}>
              <span className="ecard__ghost num" aria-hidden="true">
                {c.ghost}
              </span>
              <p className="ecard__tag">{c.tag}</p>
              <h3 className="ecard__grades">{c.grades}</h3>
              <p className="ecard__line">{c.line}</p>
              <div className="ecard__boards">
                {c.boards.map((b) => (
                  <div key={b} className="brow">
                    <i aria-hidden="true" />
                    {b}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="elig__note" data-reveal role="note">
          <Info aria-hidden="true" />
          <span>{CONTENT.eligibilityNote}</span>
        </div>
      </div>
    </section>
  );
}
