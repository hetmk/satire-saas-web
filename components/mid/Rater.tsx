"use client";

import { useState } from "react";

const takes = [
  "It's fine. It exists. You'll forget it by Thursday.",
  "Not bad, not good. A solid horizontal line.",
  "Does the job. The job was never that interesting.",
  "Some people love it. Those people are also mid.",
  "We've seen worse. We've seen better. We've seen this.",
  "Perfectly adequate. Crushingly so.",
  "It's giving... nothing in particular.",
];

function hash(s: string) {
  let h = 5;
  for (let i = 0; i < s.length; i++) h = (h * 29 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function Rater() {
  const [thing, setThing] = useState("the new season of that show");
  const [rated, setRated] = useState(false);

  const h = hash(thing.trim() || "it");
  // always mid: 2.3–2.7 / 5
  const score = (2.3 + (h % 5) / 10).toFixed(1);
  const take = takes[h % takes.length];

  return (
    <div className="rounded-2xl border border-md-line bg-md-surface p-6 sm:p-7">
      <label htmlFor="thing" className="text-xs font-semibold uppercase tracking-[0.18em] text-md-muted">
        rate anything
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="thing"
          value={thing}
          onChange={(e) => {
            setThing(e.target.value);
            setRated(false);
          }}
          placeholder="a movie, a person, a feeling…"
          className="w-full rounded-lg border border-md-line bg-md-bg px-4 py-3 text-md-ink placeholder:text-md-muted/60 focus:border-md-accent"
        />
        <button
          type="button"
          onClick={() => setRated(true)}
          className="shrink-0 rounded-lg bg-md-ink px-5 py-3 font-semibold text-md-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
        >
          rate it
        </button>
      </div>

      <div className="mt-6 rounded-xl border border-md-line bg-md-bg p-6 text-center">
        <p className="font-md-display text-7xl leading-none tracking-wide text-md-ink sm:text-8xl">
          MID
        </p>
        <p className="mt-2 font-md-display text-2xl tracking-wide text-md-accent">
          {rated ? `${score} / 5` : "— / 5"}
        </p>
        <p className="mt-3 min-h-[2.5rem] text-sm text-md-muted">
          {rated ? take : "tap “rate it.” we already know the answer."}
        </p>
      </div>
      <p className="mt-3 text-center text-xs text-md-muted">
        verdict is final. appeals are also mid.
      </p>
    </div>
  );
}
