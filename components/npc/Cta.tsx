"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl px-6 py-16 text-center sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--np-pink) 0%, var(--np-cyan) 130%)",
        }}
      >
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-np-display text-4xl font-bold leading-tight tracking-tight text-np-bg sm:text-5xl">
            the stream is waiting. so are the gifts.
          </h2>
          <p className="mt-4 text-lg text-np-bg/80">
            join the waitlist. we&apos;ll assign your first gesture and a
            stranger&apos;s rose within minutes. you were born to react to this.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-full bg-np-bg/20 px-6 py-4 font-np-display font-bold text-np-bg backdrop-blur"
            >
              you&apos;re cast. 🍦 ice cream so good. (that&apos;s your line now.
              forever.)
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="np-email" className="sr-only">
                Email address
              </label>
              <input
                id="np-email"
                type="email"
                required
                placeholder="you@gang.gang"
                className="w-full rounded-full border border-black/20 bg-white/25 px-5 py-3.5 text-np-bg placeholder:text-np-bg/60 focus:bg-white/40"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-np-bg px-7 py-3.5 font-np-display font-bold text-np-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
              >
                Cast me
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-np-bg/70">
            no card. no script. no self. just gestures and gifts.
          </p>
        </div>
      </div>
    </section>
  );
}
