"use client";

import { useState } from "react";

export default function StreakMeter() {
  const [days, setDays] = useState(247);
  const [broken, setBroken] = useState(false);
  const [freezes, setFreezes] = useState(2);
  const [note, setNote] = useState<string | null>(null);

  const log = () => {
    setBroken(false);
    setDays((d) => d + 1);
    setNote("logged. the flame grows. you are safe — for ~24 hours.");
  };

  const rest = () => {
    if (freezes > 0) {
      setFreezes((f) => f - 1);
      setNote("streak freeze used. we judged you silently. " + (freezes - 1) + " left.");
      return;
    }
    setBroken(true);
    setNote(`streak ended at ${days}. ${days} days, gone. was the rest worth it?`);
    setDays(0);
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-st-line bg-st-surface">
      <div
        className="px-6 py-10 text-center"
        style={{
          background: broken
            ? "linear-gradient(180deg, rgba(90,166,255,0.18), transparent)"
            : "linear-gradient(180deg, rgba(255,106,43,0.20), transparent)",
        }}
      >
        <p aria-hidden className="text-5xl">
          {broken ? "🧊" : "🔥"}
        </p>
        <p
          className="mt-2 font-st-display text-7xl font-extrabold tabular-nums"
          style={{ color: broken ? "var(--st-cold)" : "var(--st-flame)" }}
        >
          {days}
        </p>
        <p className="text-sm uppercase tracking-[0.2em] text-st-muted">
          {broken ? "day streak (ended)" : "day streak"}
        </p>
        {!broken && (
          <p className="mt-3 inline-block rounded-full bg-st-bg/60 px-3 py-1 text-xs text-st-ember">
            ⏳ 3h 41m left to keep it alive
          </p>
        )}
      </div>

      <div className="px-6 pb-6">
        <div aria-live="polite" className="min-h-[2.5rem] text-center text-sm text-st-muted">
          {note}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={log}
            className="flex-1 rounded-xl bg-st-flame px-5 py-3 font-st-display font-bold text-st-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
          >
            log today 🔥
          </button>
          <button
            type="button"
            onClick={rest}
            className="rounded-xl border border-st-line bg-st-bg px-5 py-3 font-st-display font-bold text-st-muted transition-colors hover:text-st-cold focus-visible:rounded-xl"
          >
            take a rest day
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-st-muted">
          streak freezes left: <span className="text-st-ember">{freezes}</span> ·
          rest is a choice you&apos;ll answer for
        </p>
      </div>
    </div>
  );
}
