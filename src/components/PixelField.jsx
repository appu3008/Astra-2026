import { useEffect, useRef } from "react";

/* Dithered pixel-blob field, canvas 2D — a lightweight homage to the
   SCD-style pixel art. Static single frame under reduced motion. */
export default function PixelField({ className }) {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const BAYER = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ];
    const centers = [
      { x: 0.62, y: 0.4, rx: 0.5, ry: 0.75, sp: 0.00020, ph: 0 },
      { x: 0.82, y: 0.3, rx: 0.38, ry: 0.55, sp: 0.00015, ph: 2.1 },
      { x: 0.85, y: 0.72, rx: 0.34, ry: 0.5, sp: 0.00012, ph: 4.4 },
    ];

    let w = 0, h = 0, cols = 0, rows = 0, cell = 0;
    let raf = 0;
    let t = Math.random() * 4000;

    function resize() {
      const r = cv.getBoundingClientRect();
      w = cv.width = Math.max(2, Math.round(r.width * DPR));
      h = cv.height = Math.max(2, Math.round(r.height * DPR));
      cell = Math.max(12, Math.round(r.width / 42)) * DPR;
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);
    }

    function field(u, v, time) {
      let s = 0;
      for (const c of centers) {
        const cx = c.x + Math.cos(time * c.sp + c.ph) * 0.16;
        const cy = c.y + Math.sin(time * c.sp * 1.35 + c.ph) * 0.14;
        const dx = (u - cx) / c.rx;
        const dy = (v - cy) / c.ry;
        const d = Math.sqrt(dx * dx + dy * dy);
        s += Math.max(0, 1 - d);
      }
      return s;
    }

    function draw(time) {
      ctx.clearRect(0, 0, w, h);
      const cw = cell, ch = cell;
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const n = field(i / cols, j / rows, time);
          if (n <= 0) continue;
          const b = BAYER[(i % 4) * 4 + (j % 4)] !== undefined ? BAYER[j % 4][i % 4] : 8;
          if (n < (b / 16) * 0.62) continue;
          const a = Math.min(0.85, n * 0.8);
          ctx.fillStyle =
            (i + j) % 8 === 3
              ? `rgba(255, 153, 0, ${a * 0.85})`
              : `rgba(167, 139, 250, ${a * 0.55})`;
          ctx.fillRect(
            Math.round((i * w) / cols),
            Math.round((j * h) / rows),
            Math.round(cw * 0.62),
            Math.round(ch * 0.62)
          );
        }
      }
      // sparkles
      ctx.fillStyle = "rgba(34, 211, 238, 0.55)";
      for (let k = 0; k < 26; k++) {
        const seed = (k * 977 + Math.floor(time / 50)) % (cols * rows);
        const si = seed % cols;
        const sj = Math.floor(seed / cols) % rows;
        ctx.fillRect(si * (w / cols), sj * (h / rows), 2, 2);
      }
    }

    function loop() {
      t += 1;
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    function start() {
      resize();
      if (reduce) {
        draw(t);
      } else {
        loop();
      }
    }

    start();
    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(t);
    });
    ro.observe(cv);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
