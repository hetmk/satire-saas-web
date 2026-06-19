import Link from "next/link";
import AuraMeter from "./AuraMeter";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 -top-40 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-au-accent/20 blur-[140px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-au-line bg-au-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-au-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-au-accent"
              style={{ boxShadow: "0 0 8px var(--au-accent)" }}
            />
            quantified vibes
          </span>

          <h1 className="mt-6 font-au-display text-5xl font-bold leading-[1.02] tracking-tight text-au-ink sm:text-6xl">
            finally, a credit score for your{" "}
            <span className="text-au-accent">whole personality.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-au-muted">
            aura tracks your aura points in real time. Gain aura for being
            unbothered. Lose it, instantly and publicly, for cringe. You just
            lost 5,000 for reading this far. Worth it, though.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-full bg-au-accent px-7 py-3.5 text-center font-au-display font-bold text-au-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              Start farming aura
            </Link>
            <Link
              href="#how"
              className="rounded-full border border-au-line bg-au-surface px-7 py-3.5 text-center font-semibold text-au-ink transition-colors hover:border-au-accent focus-visible:rounded-full"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-au-muted">
            try the meter → every tap is canon.
          </p>
        </div>

        <AuraMeter />
      </div>
    </section>
  );
}
