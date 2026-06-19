"use client";

import { useMemo, useState } from "react";

const evidence = [
  "Uses the word 'delve'. Immediate red flag.",
  "Punctuation too consistent for a sleep-deprived primate.",
  "Said 'great question' before answering. Classic clanker stall.",
  "Em-dash detected — humans can't type these.",
  "Suspiciously polite. No real person is this regulated.",
  "Replied within 4 seconds. Organic humans hesitate.",
  "Used a tricolon: structured, balanced, and synthetic.",
  "Emoji placement statistically optimal. Concerning.",
];

function hash(s: string) {
  let h = 11;
  for (let i = 0; i < s.length; i++) h = (h * 37 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function Scanner() {
  const [text, setText] = useState("hey! great question, let me delve into that 🙂");

  const r = useMemo(() => {
    const h = hash(text.trim() || "empty");
    // overwhelmingly flags clanker, because the bit
    const prob = 71 + (h % 28); // 71–98%
    const ev = [evidence[h % 8], evidence[(h >> 2) % 8], evidence[(h >> 4) % 8]];
    return { prob, ev: [...new Set(ev)] };
  }, [text]);

  const flagged = r.prob >= 50;

  return (
    <div className="overflow-hidden rounded-2xl border border-ck-line bg-ck-surface shadow-[0_30px_80px_-50px_rgba(20,24,31,0.4)]">
      <div className="flex items-center justify-between border-b border-ck-line px-5 py-3 font-ck-display text-xs">
        <span className="text-ck-muted">clanker://scan</span>
        <span className="flex items-center gap-2 text-ck-accent">
          <span className="h-2 w-2 rounded-full bg-ck-accent motion-safe:animate-pulse" />
          analyzing
        </span>
      </div>

      <div className="p-5">
        <label htmlFor="scan" className="font-ck-display text-xs uppercase tracking-wide text-ck-muted">
          paste text to verify humanity
        </label>
        <textarea
          id="scan"
          rows={3}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="type like a real person (good luck)"
          className="mt-2 w-full resize-none rounded-lg border border-ck-line bg-ck-bg px-4 py-3 font-ck-body text-ck-ink placeholder:text-ck-muted/60 focus:border-ck-accent"
        />

        <div className="mt-5 rounded-xl border border-ck-line bg-ck-bg p-4">
          <div className="flex items-center justify-between">
            <span className="font-ck-display text-sm text-ck-muted">verdict</span>
            <span
              className="rounded px-2.5 py-1 font-ck-display text-xs font-bold"
              style={{
                color: flagged ? "var(--ck-flag)" : "var(--ck-accent)",
                backgroundColor: flagged ? "rgba(229,72,77,0.12)" : "rgba(0,163,163,0.12)",
              }}
            >
              {flagged ? "CLANKER DETECTED" : "PROBABLY HUMAN"}
            </span>
          </div>

          <p className="mt-3 font-ck-display text-5xl font-bold text-ck-ink">
            {r.prob}
            <span className="text-2xl text-ck-muted">% bot</span>
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-ck-line">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{ width: `${r.prob}%`, backgroundColor: "var(--ck-flag)" }}
            />
          </div>

          <ul className="mt-4 space-y-1.5 font-ck-display text-xs text-ck-muted">
            {r.ev.map((e) => (
              <li key={e} className="flex gap-2">
                <span className="text-ck-flag">!</span>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-3 text-center font-ck-display text-xs text-ck-muted">
          appeals require proving you&apos;re human. you cannot.
        </p>
      </div>
    </div>
  );
}
