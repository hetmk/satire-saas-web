"use client";

import { useMemo, useState } from "react";

// Affirmations get more unhinged as the delulu level climbs.
const tiers = [
  (g: string) => `I am open to receiving ${g}.`,
  (g: string) => `${g} is already on its way to me.`,
  (g: string) => `The universe is literally embarrassed by how much it owes me ${g}.`,
  (g: string) => `I don't chase ${g}. ${g} chases me, barefoot, in the rain.`,
  (g: string) => `${g}? Handled. I manifested it in a past life and I'm just here for the rollout.`,
  (g: string) => `I am not delulu about ${g}. Reality is simply running behind my vision.`,
];

export default function Manifestor() {
  const [goal, setGoal] = useState("a soft launch and a hard relaunch");
  const [level, setLevel] = useState(1);

  const g = goal.trim() || "everything I deserve";
  const idx = Math.min(level - 1, tiers.length - 1);
  const affirmation = useMemo(() => tiers[idx](g), [idx, g]);
  const pct = Math.round((level / 10) * 100);

  return (
    <div className="rounded-[2rem] border border-dl-line bg-dl-surface p-6 shadow-[0_30px_80px_-50px_rgba(155,77,255,0.6)]">
      <label htmlFor="goal" className="text-xs font-semibold uppercase tracking-[0.18em] text-dl-muted">
        what do you want? (be unreasonable)
      </label>
      <input
        id="goal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="a corner office, a himbo, world peace…"
        className="mt-2 w-full rounded-2xl border border-dl-line bg-dl-bg px-4 py-3 text-dl-ink placeholder:text-dl-muted/60 focus:border-dl-grape"
      />

      <div
        className="mt-5 rounded-2xl p-5 text-center"
        style={{
          background:
            "linear-gradient(135deg, var(--dl-pink) 0%, var(--dl-grape) 50%, var(--dl-blue) 100%)",
        }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-white/80">
          today&apos;s affirmation
        </p>
        <p className="mt-2 font-dl-display text-2xl font-semibold leading-snug text-white">
          {affirmation}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs font-semibold text-dl-muted">
          <span>delulu level</span>
          <span className="text-dl-grape">{level}/10</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full border border-dl-line bg-dl-bg">
          <div
            className="h-full rounded-full transition-[width] duration-500"
            style={{
              width: `${pct}%`,
              background:
                "linear-gradient(90deg, var(--dl-blue), var(--dl-pink))",
            }}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setLevel((l) => Math.min(10, l + 1))}
          className="flex-1 rounded-2xl bg-dl-grape px-5 py-3 font-dl-display font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-2xl"
        >
          manifest harder ✨
        </button>
        <button
          type="button"
          onClick={() => setLevel(1)}
          className="rounded-2xl border border-dl-line bg-dl-bg px-5 py-3 font-semibold text-dl-muted transition-colors hover:text-dl-ink focus-visible:rounded-2xl"
        >
          be so real
        </button>
      </div>
    </div>
  );
}
