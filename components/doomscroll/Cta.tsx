"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-ds-ink px-6 py-16 text-center sm:py-20">
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-ds-display text-4xl font-semibold leading-tight tracking-tight text-ds-surface sm:text-5xl">
            nothing is waiting for you.
          </h2>
          <p className="mt-4 text-lg text-ds-surface/70">
            join the waitlist for the calmest feed ever made. we&apos;ll notify
            you about nothing, on schedule, forever.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-full border border-white/20 bg-white/10 px-6 py-4 font-ds-display font-semibold text-ds-surface"
            >
              you&apos;re in. expect zero updates. that was the promise.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="ds-email" className="sr-only">
                Email address
              </label>
              <input
                id="ds-email"
                type="email"
                required
                placeholder="you@finally.nothing"
                className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-ds-surface placeholder:text-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-ds-surface px-7 py-3.5 font-ds-display font-semibold text-ds-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
              >
                Reserve the void
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-ds-surface/50">
            no card. no content. no notifications, ever. that&apos;s the luxury.
          </p>
        </div>
      </div>
    </section>
  );
}
