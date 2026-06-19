import Link from "next/link";
import FlagReader from "./FlagReader";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-bf-beige/30 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-bf-line bg-bf-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-bf-muted">
            situationship diagnostics
          </span>

          <h1 className="mt-6 font-bf-display text-5xl font-bold leading-[1.04] tracking-tight text-bf-ink sm:text-6xl">
            stop overthinking the text.{" "}
            <span className="text-bf-beige">let us overthink it for you.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-bf-muted">
            Paste what they said. beige flag tells you whether it&apos;s a red
            flag, a green flag, or — let&apos;s be honest — a beige flag. The
            clarity you wanted from them, sourced instead from an algorithm with
            no stake in your happiness.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-full bg-bf-ink px-7 py-3.5 text-center font-bf-display font-bold text-bf-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
            >
              Get the diagnosis
            </Link>
            <Link
              href="#how"
              className="rounded-full border border-bf-line bg-bf-surface px-7 py-3.5 text-center font-semibold text-bf-ink transition-colors hover:border-bf-beige focus-visible:rounded-full"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-bf-muted">
            try it → paste a text. brace yourself for beige.
          </p>
        </div>

        <FlagReader />
      </div>
    </section>
  );
}
