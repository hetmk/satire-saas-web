"use client";

import { useEffect, useRef, useState } from "react";

const chatter = [
  "lock in.",
  "bro opened a new tab 👀",
  "we're watching",
  "respectfully, focus",
  "that's not your IDE that's twitter 💀",
  "GET OFF REDDIT",
  "30 strangers believe in you",
  "he's locked in fr fr",
  "stop checking your phone",
  "W session",
  "the deadline is real",
  "blink twice if you need help",
];

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${String(m).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}

export default function FocusSession() {
  const [running, setRunning] = useState(false);
  const [left, setLeft] = useState(25 * 60);
  const [viewers, setViewers] = useState(0);
  const [feed, setFeed] = useState<string[]>([]);
  const tick = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    tick.current = setInterval(() => {
      setLeft((l) => (l <= 1 ? (setRunning(false), 25 * 60) : l - 1));
      setViewers((v) => Math.max(12, v + Math.round((Math.random() - 0.45) * 6)));
      if (Math.random() < 0.55) {
        setFeed((f) =>
          [chatter[Math.floor(Math.random() * chatter.length)], ...f].slice(0, 5)
        );
      }
    }, 1000);
    return () => {
      if (tick.current) clearInterval(tick.current);
    };
  }, [running]);

  const start = () => {
    setRunning(true);
    setViewers(34);
    setFeed(["session started — 34 strangers tuned in"]);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-li-line bg-li-surface shadow-[0_30px_80px_-50px_rgba(22,24,29,0.5)]">
      <div className="flex items-center justify-between border-b border-li-line px-5 py-3">
        <span className="flex items-center gap-2 font-li-mono text-xs">
          <span
            className={`h-2.5 w-2.5 rounded-full ${running ? "bg-li-live motion-safe:animate-pulse" : "bg-li-muted"}`}
          />
          {running ? "LIVE" : "OFFLINE"}
        </span>
        <span className="font-li-mono text-xs text-li-muted">
          {running ? `${viewers} watching` : "0 watching"}
        </span>
      </div>

      <div className="px-5 py-8 text-center">
        <p className="font-li-mono text-6xl font-medium tabular-nums text-li-ink">
          {fmt(left)}
        </p>
        <p className="mt-1 text-sm text-li-muted">
          {running ? "eyes on you. don't switch tabs." : "deep work session"}
        </p>
        <button
          type="button"
          onClick={() => (running ? setRunning(false) : start())}
          className={`mt-5 w-full rounded-xl px-5 py-3 font-li-display font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl ${
            running
              ? "border border-li-line bg-li-bg text-li-ink"
              : "bg-li-focus text-white"
          }`}
        >
          {running ? "end session (they'll know)" : "go live & lock in"}
        </button>
      </div>

      <div className="h-32 space-y-1.5 overflow-hidden border-t border-li-line bg-li-bg px-5 py-3">
        {feed.length === 0 ? (
          <p className="font-li-mono text-xs text-li-muted">
            chat is quiet. it gets loud when you slack.
          </p>
        ) : (
          feed.map((c, i) => (
            <p key={`${c}-${i}`} className="font-li-mono text-xs text-li-ink">
              <span className="text-li-muted">stranger_{(i + 7) * 3}:</span> {c}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
