"use client";

import { useEffect, useRef, useState } from "react";

// A feed you can scroll forever. There is nothing in it. That is the feature.
export default function InfiniteFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const last = useRef(0);
  const [meters, setMeters] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.scrollTop = 300;
    last.current = 300;
  }, []);

  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const top = el.scrollTop;
    const max = el.scrollHeight - el.clientHeight;
    const delta = Math.abs(top - last.current);

    // loop seamlessly so the scroll never actually ends
    if (top >= max - 4) {
      el.scrollTop = 6;
      last.current = 6;
      setMeters((m) => m + delta * 0.025);
      return;
    }
    if (top <= 2) {
      el.scrollTop = max - 6;
      last.current = max - 6;
      setMeters((m) => m + delta * 0.025);
      return;
    }
    last.current = top;
    setMeters((m) => m + delta * 0.025);
  };

  return (
    <div className="rounded-[1.75rem] border border-ds-line bg-ds-surface p-3 shadow-[0_30px_80px_-55px_rgba(17,19,23,0.4)]">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="font-ds-display text-sm font-semibold">the feed</span>
        <span className="text-xs text-ds-muted">premium · no content</span>
      </div>

      <div
        ref={ref}
        onScroll={onScroll}
        tabIndex={0}
        aria-label="Infinite feed. There is nothing to see. Scroll freely."
        className="h-72 overflow-y-scroll rounded-2xl border border-ds-line bg-ds-bg"
      >
        <div className="relative" style={{ height: "1600px" }}>
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="flex h-[100px] items-center justify-center border-b border-ds-line/70"
            >
              <span className="text-xs text-ds-muted/40" aria-hidden>
                ·
              </span>
            </div>
          ))}
        </div>
      </div>

      <dl className="mt-3 grid grid-cols-3 gap-2 px-1">
        <Stat label="scrolled" value={`${meters.toFixed(1)} m`} accent />
        <Stat label="things seen" value="0" />
        <Stat label="outrage" value="none" />
      </dl>
      <p className="mt-2 px-1 text-center text-xs text-ds-muted">
        keep going. there&apos;s nothing down there. that&apos;s the point.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-xl border border-ds-line bg-ds-surface py-2 text-center">
      <dd
        className="font-ds-display text-lg font-semibold tabular-nums"
        style={accent ? { color: "var(--ds-accent)" } : undefined}
      >
        {value}
      </dd>
      <dt className="text-[10px] uppercase tracking-wide text-ds-muted">{label}</dt>
    </div>
  );
}
