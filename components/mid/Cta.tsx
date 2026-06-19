"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-md-line bg-md-ink px-6 py-16 text-center sm:py-20">
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-md-display text-5xl leading-none tracking-wide text-md-surface sm:text-6xl">
            STOP DECIDING. START SHRUGGING.
          </h2>
          <p className="mt-4 text-lg text-md-surface/70">
            join the waitlist. we&apos;d say we&apos;re excited, but we rated our
            own excitement and it came back mid.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-md-display text-xl tracking-wide text-md-surface"
            >
              YOU&apos;RE ON THE LIST. IT&apos;S FINE. IT&apos;S ALL FINE.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="md-email" className="sr-only">
                Email address
              </label>
              <input
                id="md-email"
                type="email"
                required
                placeholder="you@no.opinion"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-md-surface placeholder:text-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-md-accent px-7 py-3.5 font-semibold text-md-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
              >
                Join, whatever
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-md-surface/50">
            no card. no stance. no strong feelings, by design.
          </p>
        </div>
      </div>
    </section>
  );
}
