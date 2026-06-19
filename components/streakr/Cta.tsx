"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-st-line bg-st-surface px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-st-flame/25 blur-[100px]"
        />
        <div className="relative mx-auto max-w-xl">
          <p aria-hidden className="text-4xl">🔥</p>
          <h2 className="mt-2 font-st-display text-4xl font-extrabold leading-tight tracking-tight text-st-ink sm:text-5xl">
            start a streak today. dread breaking it forever.
          </h2>
          <p className="mt-4 text-lg text-st-muted">
            join the waitlist. the moment you sign up, a streak begins. yes,
            already. you&apos;re on day 1. don&apos;t mess it up.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-xl border border-st-line bg-st-bg px-6 py-4 font-st-display font-extrabold text-st-flame"
            >
              🔥 day 1 streak started. come back tomorrow or it dies. no pressure.
              (extreme pressure.)
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="st-email" className="sr-only">
                Email address
              </label>
              <input
                id="st-email"
                type="email"
                required
                placeholder="you@cannot.stop.now"
                className="w-full rounded-xl border border-st-line bg-st-bg px-5 py-3.5 text-st-ink placeholder:text-st-muted/60 focus:border-st-flame"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-st-flame px-7 py-3.5 font-st-display font-extrabold text-st-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
              >
                Begin day 1
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-st-muted">
            no card. no rest. no mercy for the number.
          </p>
        </div>
      </div>
    </section>
  );
}
