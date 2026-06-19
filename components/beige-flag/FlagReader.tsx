"use client";

import { useMemo, useState } from "react";

const verdicts = {
  red: [
    "Red flag. 'Haha' and then nothing for 9 hours. That's not busy, that's a preview.",
    "Red flag. They said 'I'm just bad at texting' — a sentence sent, somehow, via text.",
    "Red flag. Used 'we'll see' about a plan you proposed three weeks ago.",
  ],
  green: [
    "Green flag, genuinely. They made a plan with a date AND a time. Frame this conversation.",
    "Green flag. Texted first, asked a follow-up question, AND remembered your dog's name. Suspiciously functional.",
    "Green flag. Said exactly what they meant. We had to double-check it wasn't a bot.",
  ],
  beige: [
    "Beige flag. Replied 'lol that's crazy' to your childhood trauma. Not malicious. Just… beige.",
    "Beige flag. Their entire personality is 'down for whatever,' which is its own kind of nothing.",
    "Beige flag. Sent a meme instead of answering your question. The meme was, at best, fine.",
    "Beige flag. 'Haha for sure.' That's it. That's the whole emotional offering.",
  ],
} as const;

type Flag = keyof typeof verdicts;

function hash(s: string) {
  let h = 3;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

const meta: Record<Flag, { label: string; color: string }> = {
  red: { label: "🚩 red flag", color: "var(--bf-red)" },
  green: { label: "🟢 green flag", color: "var(--bf-green)" },
  beige: { label: "🏳️ beige flag", color: "var(--bf-beige)" },
};

export default function FlagReader() {
  const [text, setText] = useState("haha for sure, we should def hang sometime");

  const result = useMemo(() => {
    const h = hash(text.trim() || "...");
    // weighted toward beige, because of course
    const roll = h % 10;
    const flag: Flag = roll < 2 ? "green" : roll < 5 ? "red" : "beige";
    return { flag, line: verdicts[flag][h % verdicts[flag].length] };
  }, [text]);

  const m = meta[result.flag];

  return (
    <div className="rounded-[2rem] border border-bf-line bg-bf-surface p-6 shadow-[0_30px_80px_-50px_rgba(61,43,43,0.35)] sm:p-7">
      <label htmlFor="txt" className="text-xs font-semibold uppercase tracking-[0.16em] text-bf-muted">
        paste what they said
      </label>
      <textarea
        id="txt"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="“my bad just saw this”"
        className="mt-2 w-full resize-none rounded-2xl border border-bf-line bg-bf-bg px-4 py-3 text-bf-ink placeholder:text-bf-muted/60 focus:border-bf-beige"
      />

      <div
        className="mt-5 rounded-2xl border p-5 text-center"
        style={{ borderColor: m.color, backgroundColor: `${m.color}14` }}
      >
        <p className="font-bf-display text-2xl font-bold" style={{ color: m.color }}>
          {m.label}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-bf-ink">{result.line}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-bf-muted">
        {["“haha”", "“we’ll see”", "“you’re so funny”", "“my bad”"].map((ex) => (
          <button
            key={ex}
            type="button"
            onClick={() => setText(ex.replace(/[“”]/g, ""))}
            className="rounded-full border border-bf-line bg-bf-bg px-3 py-1 transition-colors hover:border-bf-beige focus-visible:rounded-full"
          >
            {ex}
          </button>
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-bf-muted">
        diagnosis is binding. closure is not included but strongly implied.
      </p>
    </div>
  );
}
