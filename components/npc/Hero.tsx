import Link from "next/link";
import NpcStudio from "./NpcStudio";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-np-pink/20 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-np-cyan/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-np-line bg-np-surface px-4 py-1.5 font-np-display text-xs font-bold uppercase tracking-[0.14em] text-np-muted">
            passive income, active humiliation
          </span>

          <h1 className="mt-6 font-np-display text-5xl font-bold leading-[1.02] tracking-tight text-np-ink sm:text-6xl">
            get paid to react.{" "}
            <span className="text-np-pink">no personality required.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-np-muted">
            NPC turns you into a livestream non-player character. We send the
            gifts; you do the gesture. Ice cream so good. Gang gang. You keep a
            generous 30% and whatever&apos;s left of your sense of self.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-full bg-np-pink px-7 py-3.5 text-center font-np-display font-bold text-np-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              Start performing
            </Link>
            <Link
              href="#how"
              className="rounded-full border border-np-line bg-np-surface px-7 py-3.5 text-center font-np-display font-bold text-np-ink transition-colors hover:border-np-cyan focus-visible:rounded-full"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 font-np-display text-xs text-np-muted">
            try it → hit a gesture. the gifts roll in. so does the void.
          </p>
        </div>

        <NpcStudio />
      </div>
    </section>
  );
}
