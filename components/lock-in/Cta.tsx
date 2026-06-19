"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-li-line bg-li-ink px-6 py-16 text-center sm:py-20">
        <div className="relative mx-auto max-w-xl">
          <span className="inline-flex items-center gap-2 font-li-mono text-xs text-li-surface/70">
            <span className="h-2 w-2 rounded-full bg-li-live motion-safe:animate-pulse" />
            LIVE — 1,204 strangers idle, waiting
          </span>
          <h2 className="mt-4 font-li-display text-4xl font-bold leading-tight tracking-tight text-li-surface sm:text-5xl">
            they&apos;re ready to watch you work.
          </h2>
          <p className="mt-4 text-lg text-li-surface/70">
            join the waitlist. the strangers have been notified. they will be
            disappointed if you don&apos;t show.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-li-display font-bold text-li-surface"
            >
              you&apos;re on the list. 34 strangers just said &ldquo;W.&rdquo; don&apos;t
              let them down.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="li-email" className="sr-only">
                Email address
              </label>
              <input
                id="li-email"
                type="email"
                required
                placeholder="you@about-to-be-watched.com"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-li-surface placeholder:text-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-li-focus px-7 py-3.5 font-li-display font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
              >
                Put me on cam
              </button>
            </form>
          )}
          <p className="mt-4 font-li-mono text-xs text-li-surface/50">
            no card. no privacy. no excuses.
          </p>
        </div>
      </div>
    </section>
  );
}
