import { useEffect } from "react";
import { Trophy, ArrowLeft, CalendarDays, MapPin, Sparkles } from "lucide-react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import SectionDivider from "./SectionDivider.jsx";
import { CONTENT } from "../data/content.js";
import useReveal from "../hooks/useReveal.js";

export default function Winners() {
  useReveal(400);

  useEffect(() => {
    document.title = "Winners | ASTRA-2026";
    return () => {
      document.title = "ASTRA-2026 | Academic Competition by RDS Mudalgi — 15 November 2026";
    };
  }, []);

  const published = CONTENT.winners.published;

  return (
    <>
      <Navbar winners />

      <main>
        <section className="section sec--navy win-hero" id="home">
          <div className="container">
            <span className="win__emblem" data-reveal>
              <Trophy />
            </span>

            <p className="hero__tagline" data-reveal style={{ transitionDelay: "90ms" }}>
              <span className="dia" aria-hidden="true" /> RESULTS <span className="dia" aria-hidden="true" />
            </p>

            <h1 className="win__title" data-reveal style={{ transitionDelay: "150ms" }}>
              Winners
            </h1>

            <p className="win__sub" data-reveal style={{ transitionDelay: "210ms" }}>
              The winning students of the Children's Day academic competition will be announced on
              this page shortly after the exam concludes at RDS Campus.
            </p>

            <div className="hero__meta" data-reveal style={{ transitionDelay: "270ms" }}>
              <span className="hero__pill">
                <CalendarDays aria-hidden="true" />
                <span>
                  <small>EXAM DAY</small>
                  <b>15 November 2026</b>
                </span>
              </span>
              <span className="hero__pill">
                <MapPin aria-hidden="true" />
                <span>
                  <small>VENUE</small>
                  <b>RDS Campus, Mudalgi</b>
                </span>
              </span>
            </div>
          </div>
        </section>

        <SectionDivider from="navy" to="paper" />

        <section className="section sec--paper" id="results">
          <div className="container win__grid">
            <article className="win__ticket" data-reveal>
              {!published ? (
                <>
                  <span className="win__ticket-ico">
                    <Sparkles />
                  </span>
                  <p className="win__arcade">To be announced</p>
                  <p className="win__note">
                    Winners of both categories will be published right here soon after the exam on{" "}
                    <strong>15 November 2026</strong>. Keep this page bookmarked.
                  </p>
                  <span className="win__stamp">Results pending</span>
                </>
              ) : (
                <div className="win__list">
                  {CONTENT.winners.rows.map((r, i) => (
                    <div key={r.name + r.rank} className="win__row" style={{ transitionDelay: `${i * 70}ms` }}>
                      <span className="win__rank">{r.rank}</span>
                      <span className="win__name">{r.name}</span>
                      <span className="win__school">{r.school}</span>
                      <span className="win__amt">{r.amount}</span>
                    </div>
                  ))}
                </div>
              )}
            </article>

            <aside className="win__side">
              <p className="win__side-h">What teams are playing for</p>
              {CONTENT.prizes.map((p, i) => (
                <article key={p.id} className="win-pcard" data-reveal style={{ transitionDelay: `${120 + i * 90}ms` }}>
                  <span className="win-pcard__tag">{p.tag}</span>
                  <h3 className="win-pcard__grades">{p.grades}</h3>
                  <ul className="win-pcard__list">
                    {p.items.map((it) => (
                      <li key={it.rank}>
                        <span>{it.rank}</span>
                        <b>₹{it.amount.toLocaleString("en-IN")}</b>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}

              <div className="win__actions" data-reveal style={{ transitionDelay: "320ms" }}>
                {CONTENT.links.registration ? (
                  <a className="btn btn--gold" href={CONTENT.links.registration} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                ) : (
                  <span className="btn btn--gold" style={{ opacity: 0.55, pointerEvents: "none" }} aria-disabled="true">
                    Registration Closed
                  </span>
                )}
                <a className="btn btn--line-dark" href="/">
                  <ArrowLeft />
                  Back to Home
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer winners />
    </>
  );
}
