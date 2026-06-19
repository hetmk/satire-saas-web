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
            "linear-gradient(135deg, var(--bf-beige) 0%, var(--bf-red) 120%)",
        }}
      >
        <div className="relative mx-auto max-w-xl">
          <h2 className="font-bf-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            you already know. let us confirm it.
          </h2>
          <p className="mt-4 text-lg text-white/85">
            join the waitlist. we&apos;ll text you the moment your situationship
            does something diagnosable. it won&apos;t be long.
          </p>

          {done ? (
            <p
              role="status"
              className="mx-auto mt-9 max-w-md rounded-full bg-white/25 px-6 py-4 font-bf-display font-bold text-white backdrop-blur"
            >
              you&apos;re on the list. preliminary diagnosis of this decision:
              green flag, actually.
            </p>
          ) : (
            <form
              className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
              }}
            >
              <label htmlFor="bf-email" className="sr-only">
                Email address
              </label>
              <input
                id="bf-email"
                type="email"
                required
                placeholder="you@still.up.at.2am"
                className="w-full rounded-full border border-white/30 bg-white/15 px-5 py-3.5 text-white placeholder:text-white/60 focus:bg-white/25"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-white px-7 py-3.5 font-bf-display font-bold text-bf-ink transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
              >
                Diagnose my love life
              </button>
            </form>
          )}
          <p className="mt-4 text-sm text-white/70">
            no card. no judgment (that&apos;s the app&apos;s job). no closure,
            technically.
          </p>
        </div>
      </div>
    </section>
  );
}
