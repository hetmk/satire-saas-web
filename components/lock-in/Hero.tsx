import Link from "next/link";
import FocusSession from "./FocusSession";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-li-line bg-li-surface px-4 py-1.5 font-li-mono text-xs uppercase tracking-[0.14em] text-li-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-li-live" />
            accountability, weaponized
          </span>

          <h1 className="mt-6 font-li-display text-5xl font-bold leading-[1.02] tracking-tight text-li-ink sm:text-6xl">
            you won&apos;t focus for yourself.{" "}
            <span className="text-li-focus">focus for the strangers.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-li-muted">
            lock in livestreams your screen to a room of strangers whose entire
            job is to judge you the instant you open a new tab. willpower is
            unreliable. public shame is forever.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-lg bg-li-ink px-7 py-3.5 text-center font-li-display font-semibold text-li-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
            >
              Start a session
            </Link>
            <Link
              href="#how"
              className="rounded-lg border border-li-line bg-li-surface px-7 py-3.5 text-center font-semibold text-li-ink transition-colors hover:border-li-focus focus-visible:rounded-lg"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 font-li-mono text-xs text-li-muted">
            try it → go live. the strangers are already typing.
          </p>
        </div>

        <FocusSession />
      </div>
    </section>
  );
}
