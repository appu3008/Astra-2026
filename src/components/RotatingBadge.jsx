import { CONTENT } from "../data/content.js";

export default function RotatingBadge() {
  return (
    <div className="ring" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path
            id="ringPath"
            d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"
            fill="none"
          />
        </defs>
        <text>
          <textPath href="#ringPath">{CONTENT.ringText}</textPath>
        </text>
        <path
          className="ring__star"
          d="M60 45l4.2 8.8 9.6 1.3-7 6.9 1.7 9.7-8.5-4.6-8.5 4.6 1.7-9.7-7-6.9 9.6-1.3z"
        />
      </svg>
    </div>
  );
}
