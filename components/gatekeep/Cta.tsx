"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gk-line bg-gk-ink px-6 py-16 text-center sm:py-20">
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-gk-display text-4xl font-extrabold leading-tight tracking-tight text-gk-surface sm:text-5xl">
            keep the good things. especially from your friends.
          </h2>
          <p className="mt-4 text-lg text-gk-surface/70">
            join the waitlist. we&apos;d tell you how exclusive it is, but
            telling you would make it less so.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-lg border border-white/20 bg-white/10 px-6 py-4 font-gk-display font-extrabold text-gk-surface"
            >
              you&apos;re in. don&apos;t tell anyone. that was the only rule.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="gk-email" className="sr-only">
                Email address
              </label>
              <input
                id="gk-email"
                type="email"
                required
                placeholder="you@knew.it.first"
                className="w-full rounded-lg border border-white/20 bg-white/10 px-5 py-3.5 text-gk-surface placeholder:text-white/50 focus:bg-white/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-gk-gold px-7 py-3.5 font-gk-display font-extrabold text-gk-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
              >
                Request access
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-gk-surface/50">
            no card. no referrals (defeats the purpose). no telling.
          </p>
        </div>
      </div>
    </section>
  );
}
