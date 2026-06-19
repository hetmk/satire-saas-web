"use client";

import { useState } from "react";

type Contact = {
  name: string;
  ctx: string;
  ghosted: boolean;
};

const initial: Contact[] = [
  { name: "Recruiter (3rd follow-up)", ctx: "“just circling back!”", ghosted: false },
  { name: "Group project — Brett", ctx: "added you to 'Quick Sync'", ghosted: false },
  { name: "Situationship", ctx: "“wyd this weekend”", ghosted: false },
  { name: "Networking guy from 2019", ctx: "“we should grab coffee”", ghosted: false },
  { name: "Family group chat", ctx: "47 unread", ghosted: false },
];

export default function GhostList() {
  const [contacts, setContacts] = useState(initial);
  const ended = contacts.filter((c) => c.ghosted).length;

  const toggle = (i: number) =>
    setContacts((cs) =>
      cs.map((c, j) => (j === i ? { ...c, ghosted: !c.ghosted } : c))
    );

  return (
    <div className="rounded-2xl border border-gh-line bg-gh-surface p-5 shadow-[0_30px_80px_-50px_rgba(35,40,56,0.4)] sm:p-6">
      <div className="flex items-center justify-between">
        <p className="font-gh-display text-sm font-bold text-gh-ink">
          your relationships
        </p>
        <span className="rounded-full bg-gh-accent/10 px-3 py-1 text-xs font-semibold text-gh-accent">
          {ended} gently ended
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {contacts.map((c, i) => (
          <li
            key={c.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-gh-line px-4 py-3 transition-opacity"
            style={{ opacity: c.ghosted ? 0.4 : 1 }}
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gh-ink">
                {c.name}
              </p>
              <p className="truncate text-xs text-gh-muted">
                {c.ghosted ? "auto-reply: none · they'll figure it out" : c.ctx}
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggle(i)}
              className="shrink-0 rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:rounded-lg"
              style={{
                borderColor: c.ghosted ? "var(--gh-line)" : "var(--gh-accent)",
                color: c.ghosted ? "var(--gh-muted)" : "var(--gh-accent)",
              }}
            >
              {c.ghosted ? "un-ghost" : "ghost 👻"}
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-center text-xs text-gh-muted">
        no confrontation. no closure. just a slow, dignified fade.
      </p>
    </div>
  );
}
