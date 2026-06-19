"use client";

import { useEffect, useRef, useState } from "react";

// The signature element: a serene ledger that quietly tallies the money
// the collective is "mindfully investing" in its own attention, right now.
const START = 41280.5;

export default function LiveLedger() {
  const [total, setTotal] = useState(START);
  const [opens, setOpens] = useState(82561);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;

    const id = setInterval(() => {
      // a small, calm, irregular trickle of $0.50 opens
      const opensThisTick = 1 + Math.floor(Math.random() * 3);
      setOpens((o) => o + opensThisTick);
      setTotal((t) => t + opensThisTick * 0.5);
    }, 1400);

    return () => clearInterval(id);
  }, []);

  return (
    <section
      aria-label="Live mindfulness ledger"
      className="mx-auto -mt-6 max-w-5xl px-5"
    >
      <div className="rounded-3xl border border-line bg-paper/90 p-6 shadow-[0_24px_70px_-40px_rgba(58,49,72,0.5)] sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
            The mindfulness ledger
          </p>
          <span className="flex items-center gap-2 text-xs text-sage-deep">
            <span className="h-2 w-2 rounded-full bg-sage motion-safe:animate-pulse" />
            balancing in real time
          </span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-display text-4xl font-semibold tabular-nums text-ink sm:text-5xl">
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              mindfully invested in attention today
            </p>
          </div>
          <div className="sm:text-right">
            <p className="font-display text-4xl font-semibold tabular-nums text-lilac-deep sm:text-5xl">
              {opens.toLocaleString("en-US")}
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              conscious decisions to open Instagram
            </p>
          </div>
        </div>

        <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-ink-soft">
          Every tap is a transaction with yourself. We just made the receipt
          visible. No refunds — that would defeat the healing.
        </p>
      </div>
    </section>
  );
}
