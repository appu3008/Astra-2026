function PlaneSvg() {
  return (
    <svg className="planefly__plane" viewBox="0 0 46 18" shape-rendering="crispEdges">
      {/* tail fin + stabiliser */}
      <rect x="2" y="6" width="10" height="2" fill="#7c3aed" />
      <rect x="4" y="0" width="4" height="7" fill="#a78bfa" />
      {/* fuselage */}
      <rect x="6" y="6" width="34" height="3" fill="#c4b5fd" />
      <rect x="6" y="9" width="32" height="3" fill="#a78bfa" />
      {/* windows */}
      <rect x="24" y="7" width="2" height="2" fill="#22d3ee" />
      <rect x="28" y="7" width="2" height="2" fill="#22d3ee" />
      <rect x="32" y="7" width="2" height="2" fill="#22d3ee" />
      <rect x="35" y="7" width="3" height="2" fill="#22d3ee" />
      {/* wings */}
      <rect x="16" y="3" width="10" height="2" fill="#7c3aed" />
      <rect x="14" y="12" width="12" height="2" fill="#7c3aed" />
      {/* nose + propeller */}
      <rect x="40" y="7" width="3" height="3" fill="#ffca73" />
      <rect className="planefly__prop" x="43" y="5" width="2" height="9" fill="#ff9900" />
    </svg>
  );
}

const WORD = "ASTRA-2026";

export default function PlaneDrop() {
  return (
    <div className="planefly" aria-hidden="true">
      <div className="planefly__track">
        <div className="planefly__unit">
          {/* towed name — letter chain waving like tow cloth */}
          <div className="planefly__chain">
            {WORD.split("").map((ch, i) => (
              <span
                key={i}
                className={`planefly__char${i >= 5 ? " planefly__char--gold" : ""}`}
                style={{ animationDelay: `-${((i * 0.13) % 1.3).toFixed(2)}s` }}
              >
                {ch}
              </span>
            ))}
          </div>
          {/* tow line from the plane's back */}
          <div className="planefly__line" />
          <PlaneSvg />
        </div>
      </div>
    </div>
  );
}
