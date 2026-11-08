export default function Marquee({ items, reverse = false, small = false }) {
  const half = [...items, ...items, ...items];
  return (
    <div
      className={`marquee ${reverse ? "marquee--rev" : ""} ${small ? "marquee--small" : ""}`}
      role="presentation"
    >
      <div className="marquee__track">
        {[0, 1].map((h) => (
          <span className="marquee__half" key={h} aria-hidden="true">
            {half.map((item, i) => (
              <span className="marquee__item" key={i}>
                {item}
                <i className="dia" />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
