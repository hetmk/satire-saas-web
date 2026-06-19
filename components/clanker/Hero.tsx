import Link from "next/link";
import Scanner from "./Scanner";

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(var(--ck-line)_1px,transparent_1px)] [background-size:100%_28px]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-ck-line bg-ck-surface px-4 py-1.5 font-ck-display text-xs uppercase tracking-[0.14em] text-ck-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-ck-flag" />
            dead internet, verified
          </span>

          <h1 className="mt-6 font-ck-display text-5xl font-bold leading-[1.05] tracking-tight text-ck-ink sm:text-6xl">
            detect the bots. <span className="text-ck-flag">it&apos;s you.</span>
          </h1>

          <p className="mt-5 max-w-md text-lg leading-relaxed text-ck-muted">
            clanker scans any text for signs of artificial intelligence. In
            internal testing it flagged 98% of humans as clankers — including
            the engineers who built it, and this paragraph. The call is coming
            from inside the species.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#pricing"
              className="rounded-md bg-ck-ink px-7 py-3.5 text-center font-ck-display font-bold text-ck-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-md"
            >
              Prove you&apos;re human
            </Link>
            <Link
              href="#how"
              className="rounded-md border border-ck-line bg-ck-surface px-7 py-3.5 text-center font-ck-display font-bold text-ck-ink transition-colors hover:border-ck-accent focus-visible:rounded-md"
            >
              How it works
            </Link>
          </div>
          <p className="mt-4 font-ck-display text-xs text-ck-muted">
            try it → paste anything. you will be flagged.
          </p>
        </div>

        <Scanner />
      </div>
    </section>
  );
}
