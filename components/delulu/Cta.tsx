"use client";

import { useState } from "react";

export default function Cta() {
  const [done, setDone] = useState(false);

  return (
    <section id="cta" className="px-5 py-24">
      <div
        className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, var(--dl-pink) 0%, var(--dl-grape) 55%, var(--dl-blue) 100%)",
        }}
      >
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-dl-display text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
            your dream life is one delusion away.
          </h2>
          <p className="mt-4 text-lg text-white/80">
            join the waitlist. manifest that we let you in early. it won&apos;t
            work, but the wanting is the whole point.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-full bg-white/20 px-6 py-4 font-dl-display font-semibold text-white backdrop-blur"
            >
              you&apos;re in (in your heart). we&apos;ll email the version of you
              that checks email.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="dl-email" className="sr-only">
                Email address
              </label>
              <input
                id="dl-email"
                type="email"
                required
                placeholder="future.icon@manifesting.com"
                className="w-full rounded-full border border-white/30 bg-white/15 px-5 py-3.5 text-white placeholder:text-white/60 focus:bg-white/25"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 font-dl-display font-semibold text-dl-grape transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
              >
                manifest access
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-white/70">
            no card. no proof. no notes — just vibes and a roadmap.
          </p>
        </div>
      </div>
    </section>
  );
}
