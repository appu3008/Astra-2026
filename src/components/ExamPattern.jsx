import { CONTENT } from "../data/content.js";
import SectionHead from "./SectionHead.jsx";

function Ledger({ data, variant }) {
  const hasRows = data.rows.length > 0;
  const totalQ = hasRows ? data.rows.reduce((s, r) => s + (r.questions || 0), 0) : null;
  const marksKnown = hasRows && data.rows.every((r) => typeof r.marks === "number");

  return (
    <article className={`led led--${variant}`} data-reveal>
      <div className="led__head">
        <h3 className="led__grades">{data.grades}</h3>
        {data.basedOn ? (
          <p className="led__based">◆ Based on: {data.basedOn}</p>
        ) : (
          <p className="led__based led__based--none">Pattern will be announced soon</p>
        )}
      </div>

      {hasRows ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Questions</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((r) => (
                <tr key={r.subject}>
                  <td>{r.subject}</td>
                  <td className="num">{r.questions ?? "—"}</td>
                  {typeof r.marks === "number" ? <td className="num">{r.marks}</td> : <td className="me">pending</td>}
                </tr>
              ))}
              <tr>
                <td>Total</td>
                <td className="num">{totalQ}</td>
                <td className="num">{marksKnown ? data.rows.reduce((s, r) => s + r.marks, 0) : "—"}</td>
              </tr>
            </tbody>
          </table>
          {data.note && <p className="led__note">{data.note}</p>}
        </>
      ) : (
        <p className="led__empty">{data.note}</p>
      )}
    </article>
  );
}

export default function ExamPattern() {
  return (
    <section className="section sec--navy" id="pattern">
      <div className="container">
        <SectionHead
          tone="dark"
          num="04"
          eyebrow="Examination Pattern"
          title="Know the paper,"
          accent="win the day."
          sub="Objective, OMR-based papers. Two papers run in parallel for the two age categories."
        />

        <div className="pattern__grid">
          <Ledger data={CONTENT.pattern.cat1} variant={1} />
          <Ledger data={CONTENT.pattern.cat2} variant={2} />
        </div>
      </div>
    </section>
  );
}
