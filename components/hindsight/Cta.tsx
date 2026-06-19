"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-h-line bg-h-surface px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-h-accent/20 blur-[100px]"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-h-display text-4xl font-semibold leading-tight tracking-tight text-h-ink sm:text-5xl">
            Skip to the part where it ends.
          </h2>
          <p className="mt-4 text-lg text-h-muted">
            Get your post-mortem today. Forward it to your future self. They&apos;ll
            recognize the handwriting.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-lg border border-h-line bg-h-bg px-6 py-4 font-h-mono text-sm text-h-accent"
            >
              Report queued. We&apos;ll deliver it the moment you feel hopeful.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="h-email" className="sr-only">
                Work email
              </label>
              <input
                id="h-email"
                type="email"
                required
                placeholder="founder@about-to-pivot.com"
                className="w-full rounded-lg border border-h-line bg-h-bg px-5 py-3.5 text-h-ink placeholder:text-h-muted/60 focus:border-h-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-h-accent px-7 py-3.5 font-semibold text-h-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
              >
                Pre-fail now
              </button>
            </form>
          )}
          <p className="mt-4 font-h-mono text-xs text-h-muted">
            No credit card. No runway. No survivors.
          </p>
        </div>
      </div>
    </section>
  );
}
