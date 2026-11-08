import { useEffect, useMemo, useState } from "react";

export default function useCountdown(dateISO) {
  const target = useMemo(() => new Date(dateISO).getTime(), [dateISO]);

  function calc() {
    const diff = target - Date.now();
    if (diff <= 0) return null;
    const s = Math.floor(diff / 1000);
    return {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      minutes: Math.floor((s % 3600) / 60),
      seconds: s % 60,
    };
  }

  const [t, setT] = useState(calc);

  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return t;
}
