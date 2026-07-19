"use client";

import { useEffect, useRef, useState } from "react";

// Ticks a number up from 0 to a target value once, on mount — the hero's
// one deliberate motion moment. Respects prefers-reduced-motion by
// jumping straight to the final value instead of animating.
export default function ReclaimCounter({
  targetGb,
  label,
}: {
  targetGb: number;
  label: string;
}) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setValue(targetGb);
      return;
    }

    const durationMs = 1400;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // Ease-out — fast start, gentle settle, feels like a real count-up
      // rather than a linear meter.
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(targetGb * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [targetGb]);

  return (
    <div className="reclaimCounter">
      <span className="reclaimCounter__value">{value.toFixed(1)} GB</span>
      <span className="reclaimCounter__label">{label}</span>
    </div>
  );
}
