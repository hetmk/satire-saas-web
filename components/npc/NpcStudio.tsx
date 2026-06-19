"use client";

import { useState } from "react";

const gestures = [
  { label: "ice cream so good", emoji: "🍦", gift: 1 },
  { label: "gang gang", emoji: "🤙", gift: 2 },
  { label: "yes yes yes", emoji: "🙌", gift: 1 },
  { label: "money money", emoji: "💸", gift: 5 },
  { label: "ohhhh", emoji: "😮", gift: 1 },
  { label: "L + ratio", emoji: "📉", gift: 3 },
];

export default function NpcStudio() {
  const [gifts, setGifts] = useState(0);
  const [earn, setEarn] = useState(0);
  const [toast, setToast] = useState<string | null>(null);

  const perform = (g: (typeof gestures)[number]) => {
    setGifts((x) => x + g.gift);
    setEarn((x) => x + g.gift * 0.012); // $0.012 per gift, before our 70% cut
    setToast(`${g.emoji} ${g.label}! +${g.gift} gift${g.gift > 1 ? "s" : ""}`);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-np-line bg-np-surface shadow-[0_30px_80px_-50px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between border-b border-np-line px-5 py-3">
        <span className="flex items-center gap-2 font-np-display text-xs font-semibold">
          <span className="h-2.5 w-2.5 rounded-full bg-np-pink motion-safe:animate-pulse" />
          <span className="text-np-pink">LIVE</span>
          <span className="text-np-muted">· 2,418 watching</span>
        </span>
        <span className="font-np-display text-xs text-np-cyan">npc mode: ON</span>
      </div>

      <div className="px-5 py-6 text-center">
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-np-line bg-np-bg p-3">
            <p className="font-np-display text-3xl font-bold tabular-nums text-np-gold">
              {gifts.toLocaleString("en-US")}
            </p>
            <p className="text-xs text-np-muted">gifts received</p>
          </div>
          <div className="rounded-xl border border-np-line bg-np-bg p-3">
            <p className="font-np-display text-3xl font-bold tabular-nums text-np-cyan">
              ${earn.toFixed(2)}
            </p>
            <p className="text-xs text-np-muted">your cut (30%)</p>
          </div>
        </div>

        <div
          aria-live="polite"
          className="mt-3 h-6 font-np-display text-sm font-semibold text-np-pink"
        >
          {toast}
        </div>

        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {gestures.map((g) => (
            <button
              key={g.label}
              type="button"
              onClick={() => perform(g)}
              className="rounded-xl border border-np-line bg-np-bg px-2 py-3 text-sm font-medium text-np-ink transition-colors hover:border-np-pink focus-visible:rounded-xl"
            >
              <span aria-hidden className="block text-xl">
                {g.emoji}
              </span>
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <p className="border-t border-np-line px-5 py-3 text-center text-xs text-np-muted">
        perform on cue. the gifts are real-ish. the dignity is gone.
      </p>
    </div>
  );
}
