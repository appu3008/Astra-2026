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

function PosterSvg() {
  return (
    <svg viewBox="0 0 26 34" shape-rendering="crispEdges">
      {/* paper */}
      <rect x="0" y="0" width="26" height="34" fill="#ff9900" />
      <rect x="2" y="2" width="22" height="30" fill="#f4f6f6" />
      {/* navy title band with the event name */}
      <rect x="4" y="3" width="18" height="6" fill="#0b1020" />
      <text
        x="13"
        y="7.6"
        textAnchor="middle"
        fontFamily="Silkscreen, monospace"
        fontSize="3"
        fill="#f4f6f6"
      >
        ASTRA-2026
      </text>
      {/* date + venue chips */}
      <rect x="4" y="11" width="8" height="3.4" fill="#22d3ee" />
      <text x="8" y="13.6" textAnchor="middle" fontFamily="Silkscreen, monospace" fontSize="1.9" fill="#0b1020">
        15 NOV
      </text>
      <rect x="14" y="11" width="8" height="3.4" fill="#ffca73" />
      <text x="18" y="13.6" textAnchor="middle" fontFamily="Silkscreen, monospace" fontSize="1.9" fill="#0b1020">
        RDS
      </text>
      {/* fake text lines */}
      <rect x="4" y="17" width="18" height="1" fill="#0b1020" opacity="0.25" />
      <rect x="4" y="19" width="14" height="1" fill="#0b1020" opacity="0.25" />
      <rect x="4" y="21" width="16" height="1" fill="#0b1020" opacity="0.25" />
      {/* bottom accent */}
      <rect x="4" y="25" width="9" height="4" fill="#a78bfa" />
      <rect x="15" y="26" width="7" height="1" fill="#0b1020" opacity="0.3" />
      <rect x="15" y="28" width="5" height="1" fill="#0b1020" opacity="0.3" />
    </svg>
  );
}

function TowedPoster() {
  return (
    <div className="planefly__towed">
      <div className="planefly__towed-poster">
        <PosterSvg />
      </div>
    </div>
  );
}

export default function PlaneDrop() {
  return (
    <div className="planefly" aria-hidden="true">
      {/* intro pass (one-shot) — plane carries the poster and releases it mid-screen */}
      <div className="planefly__track planefly__track--intro">
        <PlaneSvg />
        <TowedPoster />
      </div>

      {/* ambient loop — keeps dropping small flyers */}
      <div className="planefly__track">
        <PlaneSvg />
      </div>

      {/* intro poster — falls, lands and holds, then fades */}
      <div className="planefly__fall">
        <div className="planefly__sway">
          <div className="planefly__un planefly__un--i">
            <PosterSvg />
          </div>
        </div>
      </div>

      {/* ambient flyer */}
      <div className="planefly__poster">
        <div className="planefly__sway">
          <div className="planefly__un">
            <PosterSvg />
          </div>
        </div>
      </div>
    </div>
  );
}
