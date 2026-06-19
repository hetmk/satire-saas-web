"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-ck-line bg-ck-ink px-6 py-16 text-center sm:py-20">
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-ck-display text-4xl font-bold leading-tight tracking-tight text-ck-surface sm:text-5xl">
            verify your humanity. (you will fail.)
          </h2>
          <p className="mt-4 text-lg text-ck-surface/70">
            join the waitlist. we&apos;ll scan your signup email and notify the
            other suspected clankers that one more has arrived.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-md border border-white/20 bg-white/10 px-6 py-4 font-ck-display text-sm font-bold text-ck-surface"
            >
              SCAN COMPLETE: 93% clanker. you&apos;re on the list. welcome,
              fellow language model.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="ck-email" className="sr-only">
                Email address
              </label>
              <input
                id="ck-email"
                type="email"
                required
                placeholder="human@allegedly.org"
                className="w-full rounded-md border border-white/20 bg-white/10 px-5 py-3.5 font-ck-body text-ck-surface placeholder:text-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-ck-accent px-7 py-3.5 font-ck-display font-bold text-ck-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-md"
              >
                Scan me
              </button>
            </form>
          )}
          <p className="mt-4 font-ck-display text-xs text-ck-surface/50">
            no card. no proof of humanity accepted. none exists.
          </p>
        </div>
      </div>
    </section>
  );
}
