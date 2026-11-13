import { CalendarDays, MapPin } from "lucide-react";
import { CONTENT } from "../data/content.js";
import useCountdown from "../hooks/useCountdown.js";
import PixelField from "./PixelField.jsx";
import PlaneDrop from "./PlaneDrop.jsx";
import RotatingBadge from "./RotatingBadge.jsx";
import Payband from "./Payband.jsx";

const fmt = (n) => (typeof n === "number" ? String(n).padStart(2, "0") : "--");

export default function Hero() {
  const t = useCountdown(CONTENT.event.dateISO);
  const form = CONTENT.links.registration;

  const regCta = form ? (
    <a className="btn btn--gold" href={form} target="_blank" rel="noopener noreferrer">
      Register Now
    </a>
  ) : (
    <a className="btn btn--gold" href="#contact">
      Register Now
    </a>
  );

  return (
    <section className="hero" id="home" aria-label="ASTRA-2026 introduction">
      <PixelField className="hero__canvas" />
      <PlaneDrop />

      <div className="container hero__grid">
        <div className="hero__main">
          <p className="hero__eyebrow" data-reveal>
            {CONTENT.event.eyebrow}
          </p>

          <p className="hero__tagline" data-reveal style={{ transitionDelay: "90ms" }}>
            {CONTENT.event.taglineWords.map((w, i) => (
              <span key={w} style={{ display: "contents" }}>
                {i > 0 && <i className="dia" aria-hidden="true" />}
                {w}
              </span>
            ))}
          </p>

          <h1 className="hero__title arcade" data-reveal style={{ transitionDelay: "150ms" }}>
            ASTRA<span>-2026</span>
          </h1>

          <p className="hero__occasion" data-reveal style={{ transitionDelay: "210ms" }}>
            {CONTENT.event.occasion}
          </p>

          <div className="hero__meta" data-reveal style={{ transitionDelay: "270ms" }}>
            <span className="hero__pill">
              <CalendarDays aria-hidden="true" />
              <span>
                <small>DATE</small>
                <b>{CONTENT.event.dateLabel}</b>
              </span>
            </span>
            <span className="hero__pill">
              <MapPin aria-hidden="true" />
              <span>
                <small>VENUE</small>
                <b>{CONTENT.event.venue[0]}</b>
              </span>
            </span>
          </div>

          <p className="hero__closing" data-reveal style={{ transitionDelay: "300ms" }}>
            <i className="hero__closing-dot" aria-hidden="true" />
            Registration closing soon
          </p>

          <div className="hero__ctas" data-reveal style={{ transitionDelay: "330ms" }}>
            {regCta}
            <a className="btn btn--line" href="#about">
              Explore Event
            </a>
          </div>

          <Payband tone="dark" />

          <div className="count" data-reveal style={{ transitionDelay: "390ms" }} role="timer" aria-label="Countdown to the event">
            {t ? (
              <>
                <p className="count__label">The competition begins in</p>
                <div className="count__cells">
                  <div className="count__cell">
                    <span className="count__num num">{t.days}</span>
                    <span className="count__cap">Days</span>
                  </div>
                  <div className="count__cell">
                    <span className="count__num num">{fmt(t.hours)}</span>
                    <span className="count__cap">Hours</span>
                  </div>
                  <div className="count__cell">
                    <span className="count__num num">{fmt(t.minutes)}</span>
                    <span className="count__cap">Minutes</span>
                  </div>
                  <div className="count__cell">
                    <span className="count__num num">{fmt(t.seconds)}</span>
                    <span className="count__cap">Seconds</span>
                  </div>
                </div>
              </>
            ) : (
              <p className="count__done">Children's Day 2026 — see you at RDS Campus, Mudalgi!</p>
            )}
          </div>
        </div>

        <aside className="hero__side" aria-hidden="true">
          <RotatingBadge />
        </aside>
      </div>

      <a className="hero__scroll" href="#about" aria-label="Scroll to explore">
        Scroll
        <span />
      </a>
    </section>
  );
}
