import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-16 pb-20 sm:pt-24"
    >
      {/* soft, suspiciously calm aura */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-[480px] max-w-3xl rounded-full bg-lilac/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-sage/30 blur-[110px]"
      />

      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
          mindful spending for your attention
        </span>

        <h1 className="mt-7 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl">
          Every time you open Instagram, we charge you{" "}
          <span className="text-sage-deep">$0.50.</span>
          <br className="hidden sm:block" /> That&apos;s the whole feature.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          Tithe turns your worst habit into a conscious financial decision. You
          will still scroll. You&apos;ll just finally feel it &mdash; gently, in
          your checking account.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#pricing"
            className="w-full rounded-full bg-ink px-7 py-3.5 text-center font-semibold text-paper transition-transform hover:-translate-y-0.5 focus-visible:rounded-full sm:w-auto"
          >
            Begin your tithe
          </Link>
          <Link
            href="#how"
            className="w-full rounded-full border border-line bg-paper/60 px-7 py-3.5 text-center font-semibold text-ink transition-colors hover:bg-paper focus-visible:rounded-full sm:w-auto"
          >
            How the charging works
          </Link>
        </div>

        <p className="mt-5 text-sm text-ink-soft">
          Loved by people who have tried everything else. Especially Screen Time.
        </p>
      </div>
    </section>
  );
}
