export default function PlaneDrop() {
  return (
    <div className="planefly" aria-hidden="true">
      <div className="planefly__track">
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
      </div>

      <div className="planefly__parcel">
        <div className="planefly__sway">
          <svg viewBox="0 0 22 30" shape-rendering="crispEdges">
            {/* canopy */}
            <rect x="4" y="0" width="14" height="2" fill="#a78bfa" />
            <rect x="2" y="2" width="18" height="2" fill="#a78bfa" />
            <rect x="3" y="4" width="16" height="2" fill="#7c3aed" />
            {/* strings */}
            <rect x="5" y="6" width="1" height="10" fill="#f4f6f6" />
            <rect x="10" y="6" width="1" height="10" fill="#f4f6f6" />
            <rect x="16" y="6" width="1" height="10" fill="#f4f6f6" />
            {/* gift box */}
            <rect x="5" y="16" width="12" height="10" fill="#ff9900" />
            <rect x="5" y="16" width="12" height="2" fill="#ffca73" />
            <rect x="10" y="18" width="2" height="8" fill="#22d3ee" />
            <rect x="5" y="21" width="12" height="2" fill="#22d3ee" />
          </svg>
        </div>
      </div>
    </div>
  );
}
