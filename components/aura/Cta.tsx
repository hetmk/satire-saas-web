"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-au-line bg-au-surface px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-au-accent/30 blur-[100px]"
        />
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-au-display text-4xl font-bold leading-tight tracking-tight text-au-ink sm:text-5xl">
            your aura is being tracked whether you join or not.
          </h2>
          <p className="mt-4 text-lg text-au-muted">
            might as well see the number. join the waitlist — we&apos;ll deduct
            200 aura for signing up, and another 200 for hesitating.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-full border border-au-line bg-au-bg px-6 py-4 font-au-display font-bold text-au-accent"
            >
              you&apos;re on the list. −400 aura processed. the arc begins.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="au-email" className="sr-only">
                Email address
              </label>
              <input
                id="au-email"
                type="email"
                required
                placeholder="unbothered@for.real"
                className="w-full rounded-full border border-au-line bg-au-bg px-5 py-3.5 text-au-ink placeholder:text-au-muted/60 focus:border-au-accent"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-au-accent px-7 py-3.5 font-au-display font-bold text-au-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
              >
                Join (−400 aura)
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-au-muted">
            no card. no refunds on aura. no take-backs on cringe.
          </p>
        </div>
      </div>
    </section>
  );
}
