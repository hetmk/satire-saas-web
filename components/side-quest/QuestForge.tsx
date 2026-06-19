"use client";

import { useMemo, useState } from "react";

const titles = [
  "The Trial of {x}",
  "{x}: A Reckoning",
  "Echoes of {x}",
  "The Long Road to {x}",
  "{x} & the Forgotten Deadline",
  "Saga of the {x}",
];

const loot = [
  "a fleeting sense of accomplishment",
  "+1 to Object Permanence",
  "the Cloak of Not Today",
  "Mild Dopamine (common)",
  "a screenshot for the group chat",
  "the right to lie down",
  "Inbox Zero (cursed, temporary)",
];

const ranks = ["E", "D", "C", "B", "A", "S"];

function hash(s: string) {
  let h = 9;
  for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) >>> 0;
  return h;
}

export default function QuestForge() {
  const [task, setTask] = useState("do the dishes");
  const [xp, setXp] = useState(0);

  const q = useMemo(() => {
    const t = task.trim() || "the unnamed task";
    const h = hash(t);
    const pretty = t.replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      title: titles[h % titles.length].replace("{x}", pretty),
      rank: ranks[h % ranks.length],
      xp: 20 + (h % 9) * 10,
      loot: loot[(h >> 3) % loot.length],
      flavor: [
        "Many have started this quest. Few have finished before lunch.",
        "The objective is simple. Your nervous system disagrees.",
        "Side quest. Main character energy not included.",
        "Reward scales with how long you've been avoiding it.",
      ][(h >> 5) % 4],
    };
  }, [task]);

  const level = Math.floor(xp / 100) + 1;
  const pct = xp % 100;

  return (
    <div className="rounded-3xl border border-sq-line bg-sq-surface p-5 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] sm:p-6">
      <label htmlFor="task" className="font-sq-pixel text-[10px] uppercase text-sq-muted">
        accept a quest
      </label>
      <input
        id="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="reply to that email…"
        className="mt-3 w-full rounded-xl border border-sq-line bg-sq-bg px-4 py-3 text-sq-ink placeholder:text-sq-muted/60 focus:border-sq-accent"
      />

      <div className="mt-5 rounded-2xl border border-sq-line bg-sq-bg/60 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-sq-display text-xl font-bold leading-tight text-sq-ink">
            {q.title}
          </h3>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-sq-accent/20 font-sq-pixel text-xs text-sq-accent">
            {q.rank}
          </span>
        </div>
        <p className="mt-2 text-sm text-sq-muted">{q.flavor}</p>

        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <span className="rounded-full bg-sq-xp/15 px-3 py-1 font-semibold text-sq-xp">
            +{q.xp} XP
          </span>
          <span className="rounded-full bg-sq-quest/15 px-3 py-1 text-sq-quest">
            loot: {q.loot}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setXp((x) => x + q.xp)}
          className="mt-5 w-full rounded-xl bg-sq-quest px-5 py-3 font-sq-display font-bold text-sq-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
        >
          ✓ Complete quest
        </button>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between font-sq-pixel text-[10px] text-sq-muted">
          <span className="text-sq-xp">LVL {level}</span>
          <span>{xp} XP total</span>
        </div>
        <div className="mt-2 h-3 overflow-hidden rounded-full border border-sq-line bg-sq-bg">
          <div
            className="h-full rounded-full bg-sq-xp transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}
