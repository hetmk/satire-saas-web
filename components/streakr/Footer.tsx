import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-st-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-st-display text-xl font-extrabold text-st-ink">
            <span aria-hidden>🔥</span>
            Streakr
          </span>
          <p className="mt-4 text-sm leading-relaxed text-st-muted">
            don&apos;t break the streak. a wellness company that mostly sells the
            fear of a number returning to zero.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-st-display font-bold text-st-flame hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-st-muted">
          <p className="font-st-display font-extrabold text-st-ember">
            Current streak: 1 day (don&apos;t blow it)
          </p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} Streakr. a parody. the streaks are not
            real and measure nothing. the dread, as our research team keeps
            noting with concern, is fully real.
          </p>
        </div>
      </div>
    </footer>
  );
}
