import { useEffect, useState } from "react";
import { GraduationCap, Menu, X } from "lucide-react";
import { CONTENT } from "../data/content.js";
import useActiveSection from "../hooks/useActiveSection.js";

const IDS = CONTENT.nav.map((l) => l.id);

export default function Navbar({ winners = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const form = CONTENT.links.registration;
  const href = (id) => (winners ? `/#${id}` : `#${id}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const RegBtn = ({ cls = "btn btn--gold btn--sm" }) =>
    form ? (
      <a className={cls} href={form} target="_blank" rel="noopener noreferrer">
        Register Now
      </a>
    ) : (
      <span className={cls} style={{ opacity: 0.55, pointerEvents: "none" }} aria-disabled="true">
        Registration Closed
      </span>
    );

  return (
    <>
      <header className={`nav ${scrolled ? "nav--scrolled" : ""} ${open ? "nav--open" : ""}`}>
        <div className="container nav__inner">
          <a href={winners ? "/#home" : "#home"} className="nav__brand">
            <span className="nav__crest" aria-hidden="true">
              <GraduationCap />
            </span>
            <span className="nav__name">
              <span className="arcade">
                ASTRA<b className="gold">-2026</b>
              </span>
              <small>RDS · MUDALGI</small>
            </span>
          </a>

          <nav className="nav__links" aria-label="Primary">
            {CONTENT.nav.map((l) => (
              <a key={l.id} href={href(l.id)} className={`nav__link ${active === l.id ? "is-active" : ""}`}>
                {l.label}
              </a>
            ))}
            <a href="/winners" className={`nav__link ${winners ? "is-active" : ""}`}>
              Winners
            </a>
          </nav>

          <div className="nav__cta">
            <RegBtn />
          </div>

          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="full-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <div className={`ovl ${open ? "ovl--open" : ""}`} id="full-menu" aria-hidden={!open}>
        <div className="ovl__bar">
          <span className="nav__name arcade">
            ASTRA<b className="gold">-2026</b>
          </span>
          <button type="button" className="ovl__close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <nav className="ovl__links" aria-label="Menu">
          {CONTENT.nav.map((l, i) => (
            <a
              key={l.id}
              href={href(l.id)}
              className="olink"
              style={{ "--d": `${120 + i * 55}ms` }}
              onClick={() => setOpen(false)}
            >
              <em>{String(i + 1).padStart(2, "0")}</em>
              {l.label}
            </a>
          ))}
          <a
            href="/winners"
            className="olink"
            style={{ "--d": `${120 + CONTENT.nav.length * 55}ms` }}
            onClick={() => setOpen(false)}
          >
            <em>{String(CONTENT.nav.length + 1).padStart(2, "0")}</em>
            Winners
          </a>
        </nav>

        <div className="ovl__foot">
          <RegBtn cls="btn btn--gold" />
          <p className="ovl__hint">15 November 2026 · RDS Campus, Mudalgi</p>
        </div>
      </div>
    </>
  );
}
