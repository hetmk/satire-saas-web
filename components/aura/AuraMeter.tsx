"use client";

import { useState } from "react";

const actions = [
  { label: "left them on read", delta: 200 },
  { label: "stayed unbothered", delta: 500 },
  { label: "tripped in public", delta: -1500 },
  { label: "used a hashtag unironically", delta: -3000 },
  { label: "won the argument silently", delta: 800 },
  { label: "texted 'wyd' at 2am", delta: -1200 },
  { label: "left the party early", delta: 1000 },
  { label: "explained the meme", delta: -900 },
];

function rank(a: number) {
  if (a >= 8000) return "unbothered deity";
  if (a >= 4000) return "main character";
  if (a >= 1500) return "certified that girl/guy";
  if (a >= 0) return "neutral, like a beige wall";
  if (a >= -3000) return "minor cringe arc";
  return "negative aura (seek shade)";
}

export default function AuraMeter() {
  const [aura, setAura] = useState(5000);
  const [last, setLast] = useState<number | null>(null);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-au-line bg-au-surface p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-au-accent/30 blur-[80px]"
      />
      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-au-muted">
          your aura balance
        </p>
        <p
          className="mt-2 font-au-display text-6xl font-bold tabular-nums"
          style={{
            color: aura < 0 ? "var(--au-neg)" : "var(--au-ink)",
            textShadow: "0 0 32px var(--au-accent)",
          }}
        >
          {aura.toLocaleString("en-US")}
        </p>
        <p className="mt-1 text-sm text-au-accent">rank: {rank(aura)}</p>
        {last !== null && (
          <p
            role="status"
            className="mt-1 text-sm font-semibold"
            style={{ color: last >= 0 ? "var(--au-pos)" : "var(--au-neg)" }}
          >
            {last >= 0 ? "+" : ""}
            {last.toLocaleString("en-US")} aura
          </p>
        )}

        <div className="mt-5 grid grid-cols-2 gap-2">
          {actions.map((a) => (
            <button
              key={a.label}
              type="button"
              onClick={() => {
                setAura((x) => x + a.delta);
                setLast(a.delta);
              }}
              className="rounded-xl border border-au-line bg-au-bg/60 px-3 py-3 text-left text-sm text-au-ink transition-colors hover:border-au-accent focus-visible:rounded-xl"
            >
              <span className="block">{a.label}</span>
              <span
                className="text-xs font-semibold"
                style={{ color: a.delta >= 0 ? "var(--au-pos)" : "var(--au-neg)" }}
              >
                {a.delta >= 0 ? "+" : ""}
                {a.delta.toLocaleString("en-US")}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            setAura(5000);
            setLast(null);
          }}
          className="mt-3 w-full rounded-xl border border-au-line px-4 py-2 text-xs text-au-muted transition-colors hover:text-au-ink focus-visible:rounded-xl"
        >
          reset aura (start the arc over)
        </button>
      </div>
    </div>
  );
}
