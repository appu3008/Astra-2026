import { useEffect, useState } from "react";
import { X, Megaphone } from "lucide-react";
import { CONTENT } from "../data/content.js";

const FLAG = "astra-notice-x";

export default function RegNotice() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // dismissed already in this tab session — stay quiet
    if (sessionStorage.getItem(FLAG) === "1") return;
    const t1 = setTimeout(() => setOpen(true), 2400);
    const t2 = setTimeout(() => setOpen(false), 14000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(FLAG, "1");
    setOpen(false);
  };

  return (
    <aside
      className={`regnotice${open ? " regnotice--open" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={!open}
    >
      <span className="regnotice__ico" aria-hidden="true">
        <Megaphone />
      </span>

      <div className="regnotice__body">
        <p className="regnotice__tag">Closing soon</p>
        <p className="regnotice__text">Registrations for ASTRA-2026 close soon — limited seats.</p>
      </div>

      <a className="btn btn--gold btn--sm" href={CONTENT.links.registration} target="_blank" rel="noopener noreferrer">
        Register Now
      </a>

      <button type="button" className="regnotice__x" aria-label="Dismiss notification" onClick={dismiss}>
        <X size={16} />
      </button>
    </aside>
  );
}
