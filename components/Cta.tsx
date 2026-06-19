"use client";

import { useState } from "react";

export default function Cta() {
  const [joined, setJoined] = useState(false);

  return (
    <section id="cta" className="px-5 pb-24">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] border border-line bg-ink px-6 py-16 text-center sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-lilac/40 blur-[90px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-sage/40 blur-[90px]"
        />

        <div className="relative mx-auto max-w-xl">
          <h2 className="font-display text-4xl font-semibold leading-tight tracking-tight text-paper sm:text-5xl">
            Join the waitlist. Everyone you follow already did.
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            We&apos;ll charge you the moment you forget you signed up. That&apos;s
            the first lesson. It&apos;s free. The rest are not.
          </p>

          {joined ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-full border border-paper/20 bg-paper/10 px-6 py-4 font-semibold text-paper"
            >
              You&apos;re on the list. We felt you flinch. Welcome to stillness.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setJoined(true);
              }}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@about-to-pay.com"
                className="w-full rounded-full border border-paper/20 bg-paper/10 px-5 py-3.5 text-paper placeholder:text-paper/40 focus:bg-paper/15"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-paper px-7 py-3.5 font-semibold text-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
              >
                Start the cleanse
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-paper/50">
            No card required yet. Soon. Very soon.
          </p>
        </div>
      </div>
    </section>
  );
}
