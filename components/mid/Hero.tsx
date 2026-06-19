import Link from "next/link";
import Rater from "./Rater";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-md-line bg-md-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-md-muted">
            opinions, pre-formed
          </span>

          <h1 className="mt-6 font-md-display text-6xl leading-[0.92] tracking-wide text-md-ink sm:text-7xl">
            HAVING TAKES IS EXHAUSTING. SO WE STOPPED.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-md-muted">
            mid rates everything 2.5 out of 5 so you never have to decide how you
            feel again. The restaurant? Mid. The album? Mid. Your situationship?
            Respectfully, mid. Conserve your energy for things that are also mid.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-lg bg-md-ink px-7 py-3.5 text-center font-semibold text-md-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
            >
              Outsource your opinions
            </Link>
            <Link
              href="#how"
              className="rounded-lg border border-md-line bg-md-surface px-7 py-3.5 text-center font-semibold text-md-ink transition-colors hover:border-md-accent focus-visible:rounded-lg"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-xs text-md-muted">
            try it → rate literally anything. spoiler: it&apos;s mid.
          </p>
        </div>

        <Rater />
      </div>
    </section>
  );
}
