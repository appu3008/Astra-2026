import { Trophy, Medal, Award } from "lucide-react";
import { CONTENT } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Marquee from "./Marquee.jsx";

const icons = [Trophy, Medal, Award];
const inr = (n) => "₹" + n.toLocaleString("en-IN");

export default function Prizes() {
  return (
    <section className="section sec--paper" id="prizes">
      <div className="container">
        <SectionHead
          num="03"
          eyebrow="Prizes"
          center
          title="Rewards worth the"
          accent="revision."
          sub="Six cash prizes across two categories — announced on the event day itself."
        />

        <div className="prizes__grid">
          {CONTENT.prizes.map((p, i) => (
            <article key={p.id} className={`pcard ${p.flagship ? "pcard--maroon" : "pcard--navy"}`} data-reveal style={{ transitionDelay: `${i * 120}ms` }}>
              {p.flagship && <span className="pcard__flag">Highest Purse</span>}
              <span className="pcard__squares" aria-hidden="true" />

              <div className="pcard__top">
                <p className="pcard__tag">{p.tag}</p>
                <h3 className="pcard__grades">{p.grades}</h3>
              </div>

              <div className="pcard__rows">
                {p.items.map((it, idx) => {
                  const M = icons[idx];
                  return (
                    <div key={it.rank} className="prow">
                      <span className={`prow__medal prow__medal--${idx + 1}`} aria-hidden="true">
                        <M />
                      </span>
                      <span className="prow__rank">{it.rank}</span>
                      <span className="prow__amt num">{inr(it.amount)}</span>
                    </div>
                  );
                })}
              </div>

              <div className="pcard__fee">
                <span>
                  EXAMINATION FEE — <b>{p.fee}</b>
                </span>
                <span className="pcard__bar" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        <div className="truthband" data-reveal>
          <p className="big">
            DREAM · <span>DISCOVER</span> · DEVELOP
          </p>
          <p className="tiny">On 15 November 2026, one campus decides six winners.</p>
        </div>
      </div>

      <Marquee items={CONTENT.marquee} small reverse />
    </section>
  );
}
