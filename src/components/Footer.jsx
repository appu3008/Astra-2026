import { GraduationCap, Phone, Mail, MapPin, School } from "lucide-react";
import { CONTENT } from "../data/content.js";
import Marquee from "./Marquee.jsx";
import Sigstrip from "./Sigstrip.jsx";

export default function Footer() {
  const c = CONTENT.contact;
  return (
    <footer>
      <div className="preband">
        <Marquee items={CONTENT.preMarquee} small />
      </div>

      <div className="footer">
        <div className="container footer__grid">
          <div>
            <p className="footer__brand">
              <span className="footer__crest" aria-hidden="true">
                <GraduationCap />
              </span>
              <span className="arcade">
                ASTRA<b className="gold">-2026</b>
              </span>
            </p>
            <p className="footer__tag">{CONTENT.event.taglineWords.join(" · ")}</p>
            <p className="footer__about">
              {CONTENT.event.occasion} Celebrating Children's Day with the students of Mudalgi taluk on{" "}
              {CONTENT.event.dateLabel}.
            </p>
          </div>

          <div>
            <p className="footer__h">Quick links</p>
            <div className="footer__links">
              {CONTENT.nav.map((l) => (
                <a key={l.id} href={`#${l.id}`}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="footer__h">Organised with</p>
            <div className="footer__org">
              {CONTENT.about.association.map((s) => (
                <span key={s}>
                  <School aria-hidden="true" />
                  {s}
                </span>
              ))}
            </div>
            <span className="footer__affil">
              {CONTENT.about.affiliationNote} {CONTENT.about.affiliation}
            </span>
          </div>

          <div>
            <p className="footer__h">Reach us</p>
            <div className="footer__org">
              <span>
                <Phone aria-hidden="true" />
                {c.phone}
              </span>
              <span>
                <Mail aria-hidden="true" />
                {c.email}
              </span>
              <span>
                <MapPin aria-hidden="true" />
                {c.office[1]}, {c.office[2]}
              </span>
            </div>
          </div>
        </div>

        <Sigstrip variant="footer" />

        <div className="container footer__bar">
          <span>© 2026 {CONTENT.event.organiser}</span>
          <span>
            <a href={CONTENT.links.map} target="_blank" rel="noopener noreferrer">
              RDS Campus, Mudalgi
            </a>{" "}
            · children's day · 15 november 2026
          </span>
        </div>
      </div>
    </footer>
  );
}
