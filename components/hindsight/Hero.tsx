import Link from "next/link";
import PostMortem from "./PostMortem";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* faint grid, cold and competent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(var(--h-ink)_1px,transparent_1px),linear-gradient(90deg,var(--h-ink)_1px,transparent_1px)] [background-size:48px_48px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-h-accent/15 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-h-line bg-h-surface px-4 py-1.5 font-h-mono text-xs uppercase tracking-[0.16em] text-h-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-h-warn" />
            failure analytics, prepaid
          </span>

          <h1 className="mt-6 font-h-display text-5xl font-semibold leading-[1.03] tracking-tight text-h-ink sm:text-6xl">
            Your startup&apos;s post-mortem.{" "}
            <span className="text-h-accent">Before the mortem.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-h-muted">
            Hindsight runs the failure analysis up front, so you can skip the 18
            months, the seed round, and the all-hands where you announce the
            wind-down. Fail fast. Fail first. Fail now.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-lg bg-h-accent px-7 py-3.5 text-center font-semibold text-h-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
            >
              Get your post-mortem
            </Link>
            <Link
              href="#how"
              className="rounded-lg border border-h-line bg-h-surface px-7 py-3.5 text-center font-semibold text-h-ink transition-colors hover:border-h-accent focus-visible:rounded-lg"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 font-h-mono text-xs text-h-muted">
            Trusted by 0 unicorns. That&apos;s the point.
          </p>
        </div>

        <PostMortem />
      </div>
    </section>
  );
}
