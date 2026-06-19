"use client";

import { useState } from "react";

type Item = { name: string; id: number };

export default function Vault() {
  const [items, setItems] = useState<Item[]>([
    { name: "that natural wine bar with no sign", id: 1 },
    { name: "an artist with 412 monthly listeners", id: 2 },
  ]);
  const [draft, setDraft] = useState("");
  const exclusivity = Math.min(99, 40 + items.length * 9);

  const seal = () => {
    const name = draft.trim();
    if (!name) return;
    setItems((xs) => [{ name, id: Date.now() }, ...xs].slice(0, 8));
    setDraft("");
  };

  return (
    <div className="rounded-2xl border border-gk-line bg-gk-surface p-6 shadow-[0_30px_80px_-50px_rgba(26,28,26,0.4)] sm:p-7">
      <div className="flex items-center justify-between">
        <p className="font-gk-display text-sm font-bold uppercase tracking-[0.18em] text-gk-muted">
          the vault
        </p>
        <span className="font-gk-display text-xs text-gk-accent">
          exclusivity {exclusivity}%
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        <input
          aria-label="Something you love"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && seal()}
          placeholder="a thing you love (and won't share)…"
          className="w-full rounded-lg border border-gk-line bg-gk-bg px-4 py-3 text-gk-ink placeholder:text-gk-muted/60 focus:border-gk-accent"
        />
        <button
          type="button"
          onClick={seal}
          className="shrink-0 rounded-lg bg-gk-ink px-5 py-3 font-gk-display font-bold text-gk-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
        >
          seal it
        </button>
      </div>

      <ul className="mt-5 space-y-2">
        {items.map((it) => (
          <li
            key={it.id}
            className="flex items-center justify-between gap-3 rounded-xl border border-gk-line bg-gk-bg px-4 py-3"
          >
            <span className="text-sm text-gk-ink">{it.name}</span>
            <span className="flex items-center gap-2 font-gk-display text-[10px] uppercase tracking-wide text-gk-gold">
              🔒 sealed · shared with 0
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-gk-line pt-4">
        <div className="flex items-center justify-between font-gk-display text-xs text-gk-muted">
          <span>taste exclusivity</span>
          <span className="text-gk-accent">{exclusivity}%</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gk-line">
          <div
            className="h-full rounded-full bg-gk-accent transition-[width] duration-500"
            style={{ width: `${exclusivity}%` }}
          />
        </div>
      </div>
      <p className="mt-3 text-center text-xs text-gk-muted">
        the more you hoard, the rarer you become. share nothing. ascend.
      </p>
    </div>
  );
}
