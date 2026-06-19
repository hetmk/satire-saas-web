"use client";

import { useState } from "react";

export default function Cta() {
  const [joined, setJoined] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-sq-line bg-sq-surface px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sq-xp/20 blur-[100px]"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-sq-display text-4xl font-extrabold leading-tight tracking-tight text-sq-ink sm:text-5xl">
            your main quest can wait. these can&apos;t.
          </h2>
          <p className="mt-4 text-lg text-sq-muted">
            join the waitlist and we&apos;ll send your first quest the second you
            start procrastinating. timing is kind of our whole thing.
          </p>

          {joined ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-xl border border-sq-line bg-sq-bg px-6 py-4 font-sq-display font-bold text-sq-quest"
            >
              quest accepted. +50 XP for signing up. (it&apos;s not real. you felt
              it anyway.)
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
            >
              <label htmlFor="sq-email" className="sr-only">
                Email address
              </label>
              <input
                id="sq-email"
                type="email"
                required
                placeholder="you@about-to-procrastinate.com"
                className="w-full rounded-xl border border-sq-line bg-sq-bg px-5 py-3.5 text-sq-ink placeholder:text-sq-muted/60 focus:border-sq-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-sq-xp px-7 py-3.5 font-sq-display font-bold text-sq-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
              >
                Join (+50 XP)
              </button>
            </form>
          )}
          <p className="mt-4 font-sq-pixel text-[10px] text-sq-muted">
            no credit card. no real loot. no main character required.
          </p>
        </div>
      </div>
    </section>
  );
}
