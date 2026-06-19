"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gh-line bg-gh-ink px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-gh-accent/30 blur-[100px]"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-gh-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            stop replying. start fading. feel nothing.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            join the waitlist. or don&apos;t reply to this either — honestly, at
            that point you may not even need us.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-gh-display font-extrabold text-white"
            >
              you&apos;re on the list. we&apos;ll reply when we reply. (we
              won&apos;t. that&apos;s the demo.)
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="gh-email" className="sr-only">
                Email address
              </label>
              <input
                id="gh-email"
                type="email"
                required
                placeholder="you@left.on.read"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-gh-accent px-7 py-3.5 font-gh-display font-extrabold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
              >
                Reserve my silence
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-white/50">
            no card. no reply. no hard feelings (none at all, ideally).
          </p>
        </div>
      </div>
    </section>
  );
}
