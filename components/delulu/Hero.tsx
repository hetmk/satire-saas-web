import Link from "next/link";
import Manifestor from "./Manifestor";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-dl-pink/30 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-dl-blue/30 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-dl-line bg-dl-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-dl-muted">
            delulu is the solulu
          </span>

          <h1 className="mt-6 font-dl-display text-5xl font-semibold leading-[1.02] tracking-tight text-dl-ink sm:text-6xl">
            confidence, but you didn&apos;t earn{" "}
            <span className="text-dl-grape">any of it.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-dl-muted">
            delulu sets goals so unrealistic your brain has no choice but to
            believe them. We don&apos;t do affirmations grounded in reality.
            Reality is the thing that&apos;s been holding you back.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-full bg-dl-grape px-7 py-3.5 text-center font-dl-display font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              Begin the delusion
            </Link>
            <Link
              href="#how"
              className="rounded-full border border-dl-line bg-dl-surface px-7 py-3.5 text-center font-semibold text-dl-ink transition-colors hover:border-dl-grape focus-visible:rounded-full"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-dl-muted">
            backed by zero studies and one really good feeling.
          </p>
        </div>

        <Manifestor />
      </div>
    </section>
  );
}
