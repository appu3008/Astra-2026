import { CONTENT } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

export default function About() {
  const a = CONTENT.about;
  return (
    <section className="section sec--paper" id="about">
      <div className="container">
        <div className="band" data-reveal>
          <p className="shead__eyebrow">
            <b className="num">01 /</b>
            ABOUT ASTRA-2026
          </p>
          <h2 className="band__line">
            {a.bandLine1} <span className="band__outline">{a.bandLine2}</span>
          </h2>
          <p className="band__sub">{a.bandSub}</p>
        </div>

        <div className="about__grid">
          <div data-reveal>
            <span className="rcard" style={{ display: "block" }}>
              <p className="rcard__label">Organised by</p>
              <h3>{CONTENT.event.organiser}</h3>
              <p>{a.organiserDesc}</p>
              <span className="stamp">
                {a.affiliationNote} {a.affiliation}
              </span>
            </span>
          </div>

          <div>
            <SectionHead title="In association" accent="with." sub={null} />
            <p className="about__lead" data-reveal>
              {a.lead}
            </p>

            <div className="assoc">
              {a.association.map((name, i) => (
                <div key={name} className="assoc__row" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <h4>{name}</h4>
                  <small>IN ASSOCIATION</small>
                </div>
              ))}
            </div>

            <div className="about__stats" data-reveal>
              {a.stats.map((s) => (
                <div key={s.label} className="stat">
                  <b className="num">{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
