import { Phone, Mail, Clock3, MapPin, Navigation } from "lucide-react";
import { CONTENT } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";
import Payband from "./Payband.jsx";

export default function Contact() {
  const c = CONTENT.contact;
  const form = CONTENT.links.registration;

  return (
    <section className="section sec--navy" id="contact">
      <div className="container">
        <SectionHead
          tone="dark"
          num="06"
          eyebrow="Contact"
          title="Questions? Ask the organisers."
          accent=""
          sub="The RDS office is happy to help schools, parents and students with anything about the exam."
        />

        <div className="contact__grid">
          <article className="ccard" data-reveal>
            <Phone aria-hidden="true" />
            <h4>Phone</h4>
            <p>{c.phone}</p>
          </article>
          <article className="ccard" data-reveal style={{ transitionDelay: "70ms" }}>
            <Mail aria-hidden="true" />
            <h4>Email</h4>
            <p>{c.email}</p>
          </article>
          <article className="ccard" data-reveal style={{ transitionDelay: "140ms" }}>
            <Clock3 aria-hidden="true" />
            <h4>Office hours</h4>
            <p>{c.officeHours}</p>
          </article>
          <article className="ccard" data-reveal style={{ transitionDelay: "210ms" }}>
            <MapPin aria-hidden="true" />
            <h4>RDS Office</h4>
            <p>
              {c.office[0]}
              <small>
                {c.office[1]}, {c.office[2]}
              </small>
            </p>
          </article>
        </div>

        <SectionHead tone="dark" num="07" eyebrow="Registration" title="How to" accent="enter." />

        <div className="steps">
          {CONTENT.registerSteps.map((s, i) => (
            <div key={s.n} className="step" data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="step__n">{s.n}</span>
              <p className="step__t">{s.t}</p>
              <p className="step__d">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="cta" data-reveal>
          <div>
            <h3>
              Seats on event day are <em>limited.</em>
            </h3>
            <p className="cta__note">
              Register your child or your school batch through the official Google Form. One student, one registration —
              carry a school ID on exam day for verification.
            </p>
          </div>
          <div className="cta__actions">
            {form ? (
              <a className="btn btn--gold" href={form} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            ) : (
              <span className="btn btn--gold" style={{ opacity: 0.55, pointerEvents: "none" }}>
                Register Now
              </span>
            )}
            <a className="btn btn--line" href={CONTENT.links.map} target="_blank" rel="noopener noreferrer">
              <Navigation />
              Get Directions
            </a>
            {!form && <p className="cta__hint">Google Form link goes live shortly — [ADD]</p>}
          </div>

          <Payband tone="amber" />
        </div>
      </div>
    </section>
  );
}
