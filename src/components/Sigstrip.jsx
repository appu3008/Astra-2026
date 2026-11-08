import { ShieldCheck } from "lucide-react";

const TAGS = ["Ethical Hacking", "Bug Hunting", "Web Security", "Network Security"];

export default function Sigstrip() {
  return (
    <aside className="sigstrip" data-reveal aria-label="Site creator signature">
      <div className="container sigstrip__row">
        <span className="sigstrip__shield" aria-hidden="true">
          <ShieldCheck />
        </span>
        <p className="sigstrip__name">Mallikarjun Sattigeri</p>
        <p className="sigstrip__role">Cybersecurity Researcher in Progress</p>
        <p className="sigstrip__tags">
          {TAGS.map((t) => (
            <i key={t}>{t}</i>
          ))}
        </p>
      </div>
    </aside>
  );
}
