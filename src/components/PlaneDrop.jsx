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

      {/* the poster the plane drops */}
      <div className="planefly__poster">
        <div className="planefly__sway">
          <div className="planefly__un">
            <svg viewBox="0 0 26 34" shape-rendering="crispEdges">
              {/* paper */}
              <rect x="0" y="0" width="26" height="34" fill="#ff9900" />
              <rect x="2" y="2" width="22" height="30" fill="#f4f6f6" />
              {/* top band + title */}
              <rect x="4" y="4" width="18" height="4" fill="#0b1020" />
              <rect x="4" y="10" width="10" height="2" fill="#7c3aed" />
              <rect x="4" y="13" width="15" height="2" fill="#ff9900" />
              {/* fake text lines */}
              <rect x="4" y="18" width="18" height="1" fill="#0b1020" opacity="0.28" />
              <rect x="4" y="20" width="14" height="1" fill="#0b1020" opacity="0.28" />
              <rect x="4" y="22" width="16" height="1" fill="#0b1020" opacity="0.28" />
              {/* date block */}
              <rect x="4" y="26" width="9" height="4" fill="#22d3ee" />
              <rect x="15" y="27" width="7" height="1" fill="#0b1020" opacity="0.3" />
              <rect x="15" y="29" width="5" height="1" fill="#0b1020" opacity="0.3" />
              {/* fold line */}
              <rect x="2" y="16" width="22" height="1" fill="#0b1020" opacity="0.08" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
