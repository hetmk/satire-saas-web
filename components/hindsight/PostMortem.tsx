"use client";

import { useMemo, useState } from "react";

const causes = [
  "Ran out of runway in month {m}. Nobody was surprised except the founders.",
  "Built quietly for 19 months. Launched to 6 users, 4 of whom were co-founders.",
  "The market turned out to be a vibe, not a market.",
  "Pivoted directly into the sun.",
  "Solved a problem that only existed inside the founding team.",
  "Acquired by no one. Acqui-hired by entropy.",
];

const wasFor = [
  "dogs",
  "spreadsheets",
  "feelings",
  "other Ubers",
  "B2B loneliness",
  "people who already had a solution",
];

const factors = [
  "Raised on a deck, not a product.",
  "Confused 'going viral' with 'having revenue'.",
  "Hired 11 people to support 0 customers.",
  "The TAM slide said \"everyone\".",
  "Spent the seed round on a rebrand.",
  "Mistook investor enthusiasm for demand.",
  "Shipped the conference talk before the feature.",
  "Called it a movement. It was a Slack.",
];

function hash(s: string) {
  let h = 7;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function PostMortem() {
  const [idea, setIdea] = useState("an AI that reads your group chat");
  const r = useMemo(() => {
    const h = hash(idea.trim() || "untitled");
    const m = 4 + (h % 20);
    const burn = (0.4 + ((h >> 3) % 58) / 10).toFixed(1);
    const f = [factors[h % 8], factors[(h >> 2) % 8], factors[(h >> 5) % 8]];
    return {
      cause: causes[h % causes.length].replace("{m}", String(m)),
      burn,
      month: m,
      epitaph: wasFor[(h >> 4) % wasFor.length],
      factors: [...new Set(f)],
      score: 2 + (h % 3), // out of 100, generously
    };
  }, [idea]);

  return (
    <div className="rounded-2xl border border-h-line bg-h-surface p-5 font-h-mono text-sm shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)] sm:p-6">
      <label htmlFor="idea" className="text-xs uppercase tracking-[0.18em] text-h-muted">
        Describe your startup
      </label>
      <input
        id="idea"
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        placeholder="We're building…"
        className="mt-2 w-full rounded-lg border border-h-line bg-h-bg px-4 py-3 font-h-body text-h-ink placeholder:text-h-muted/60 focus:border-h-accent"
      />

      <div className="mt-5 rounded-xl border border-h-line bg-h-bg/60 p-4">
        <div className="flex items-center justify-between border-b border-h-line pb-3">
          <span className="text-xs uppercase tracking-widest text-h-muted">
            post-mortem.pdf
          </span>
          <span className="rounded-full bg-h-warn/15 px-2.5 py-1 text-xs text-h-warn">
            cause of death
          </span>
        </div>

        <p className="mt-3 text-h-ink">{r.cause}</p>

        <dl className="mt-4 grid grid-cols-3 gap-3 text-center">
          <Stat label="time of death" value={`Mo. ${r.month}`} />
          <Stat label="total burned" value={`$${r.burn}M`} tone="warn" />
          <Stat label="viability" value={`${r.score}/100`} />
        </dl>

        <p className="mt-4 text-xs leading-relaxed text-h-muted">
          It was Uber for {r.epitaph}. It is survived by a Notion workspace and
          one very tired Slack.
        </p>

        <ul className="mt-4 space-y-1.5 text-xs text-h-muted">
          {r.factors.map((f) => (
            <li key={f} className="flex gap-2">
              <span className="text-h-warn">↳</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3 text-center text-xs text-h-muted">
        Generated in 0.2s. Saved you ~18 months.
      </p>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "warn";
}) {
  return (
    <div className="rounded-lg border border-h-line bg-h-surface py-2">
      <p className={tone === "warn" ? "text-h-warn" : "text-h-accent"}>{value}</p>
      <p className="mt-0.5 text-[10px] uppercase tracking-wide text-h-muted">
        {label}
      </p>
    </div>
  );
}
