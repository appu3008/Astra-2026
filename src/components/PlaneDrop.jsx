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

function NameBanner() {
  return (
    <svg viewBox="0 0 120 28" shape-rendering="crispEdges">
      {/* board */}
      <rect x="0" y="0" width="120" height="28" fill="#ff9900" />
      <rect x="2" y="2" width="116" height="24" fill="#0b1020" />
      {/* tie points */}
      <rect x="7" y="3" width="2" height="2" fill="#ffca73" />
      <rect x="59" y="3" width="2" height="2" fill="#ffca73" />
      <rect x="111" y="3" width="2" height="2" fill="#ffca73" />
      {/* the wordmark — matches the hero title colours */}
      <text
        x="8"
        y="17.8"
        textLength="56"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="Silkscreen, monospace"
        fontSize="11"
        fill="#f4f6f6"
      >
        ASTRA
      </text>
      <text
        x="64"
        y="17.8"
        textLength="48"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="Silkscreen, monospace"
        fontSize="11"
        fill="#c4b5fd"
      >
        -2026
      </text>
    </svg>
  );
}

export default function PlaneDrop() {
  return (
    <div className="planefly" aria-hidden="true">
      <div className="planefly__track">
        <div className="planefly__unit">
          <div className="planefly__line" />
          <div className="planefly__banner">
            <NameBanner />
          </div>
          <PlaneSvg />
        </div>
      </div>
    </div>
  );
}
