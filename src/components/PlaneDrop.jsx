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

function NameBoard() {
  return (
    <svg viewBox="0 0 84 30" shape-rendering="crispEdges">
      {/* board */}
      <rect x="0" y="0" width="84" height="30" fill="#ff9900" />
      <rect x="2" y="2" width="80" height="26" fill="#0b1020" />
      {/* corner screws */}
      <rect x="4" y="4" width="2" height="2" fill="#ffca73" />
      <rect x="78" y="4" width="2" height="2" fill="#ffca73" />
      <rect x="4" y="24" width="2" height="2" fill="#ffca73" />
      <rect x="78" y="24" width="2" height="2" fill="#ffca73" />
      {/* the name, force-fitted to the board */}
      <text
        x="42"
        y="19.4"
        textAnchor="middle"
        textLength="72"
        lengthAdjust="spacingAndGlyphs"
        fontFamily="Silkscreen, monospace"
        fontSize="8.4"
        fill="#f4f6f6"
      >
        ASTRA-2026
      </text>
      {/* accent bar */}
      <rect x="6" y="23" width="72" height="2" fill="#ff9900" />
    </svg>
  );
}

function TowedBoard() {
  return (
    <div className="planefly__towed">
      <div className="planefly__towed-board">
        <NameBoard />
      </div>
    </div>
  );
}

export default function PlaneDrop() {
  return (
    <div className="planefly" aria-hidden="true">
      {/* intro pass (one-shot) — plane tows the ASTRA-2026 sign and releases it mid-screen */}
      <div className="planefly__track planefly__track--intro">
        <PlaneSvg />
        <TowedBoard />
      </div>

      {/* ambient loop — keeps dropping small name boards */}
      <div className="planefly__track">
        <PlaneSvg />
      </div>

      {/* intro board — falls, opens, lands and holds, then fades */}
      <div className="planefly__fall">
        <div className="planefly__sway">
          <div className="planefly__un">
            <NameBoard />
          </div>
        </div>
      </div>

      {/* ambient board */}
      <div className="planefly__poster">
        <div className="planefly__sway">
          <div className="planefly__un">
            <NameBoard />
          </div>
        </div>
      </div>
    </div>
  );
}
