export default function SectionHead({ num, eyebrow, title, accent, sub, tone = "", center = false }) {
  return (
    <div
      className={`shead ${tone ? `shead--${tone}` : ""} ${center ? "shead--center" : ""}`}
      data-reveal
    >
      {eyebrow && (
        <p className="shead__eyebrow">
          {num && <b className="num">{num} /</b>}
          {eyebrow}
        </p>
      )}
      <h2 className="shead__title">
        {title} {accent && <span className="shead__accent">{accent}</span>}
      </h2>
      {sub && <p className="shead__sub">{sub}</p>}
    </div>
  );
}
