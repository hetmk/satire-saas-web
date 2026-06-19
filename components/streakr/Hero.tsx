import Link from "next/link";
import StreakMeter from "./StreakMeter";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-st-flame/20 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-st-line bg-st-surface px-4 py-1.5 text-xs font-st-display font-bold uppercase tracking-[0.14em] text-st-muted">
            loss aversion as a service
          </span>

          <h1 className="mt-6 font-st-display text-5xl font-extrabold leading-[1.0] tracking-tight text-st-ink sm:text-6xl">
            you won&apos;t do it for your health.{" "}
            <span className="text-st-flame">you&apos;ll do it for the streak.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-st-muted">
            Streakr puts a fragile little number on everything — water, steps,
            journaling, flossing, breathing — then makes losing it feel like
            grief. You won&apos;t build habits. You&apos;ll build a hostage
            situation, and you&apos;re both parties.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-xl bg-st-flame px-7 py-3.5 text-center font-st-display font-bold text-st-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
            >
              Light the flame
            </Link>
            <Link
              href="#how"
              className="rounded-xl border border-st-line bg-st-surface px-7 py-3.5 text-center font-st-display font-bold text-st-ink transition-colors hover:border-st-flame focus-visible:rounded-xl"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-xs text-st-muted">
            try it → log a day. then try the rest button. we dare you.
          </p>
        </div>

        <StreakMeter />
      </div>
    </section>
  );
}
