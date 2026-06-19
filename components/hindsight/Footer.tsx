import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-h-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-h-display text-lg font-semibold text-h-ink">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-md bg-h-accent/15 font-h-mono text-h-accent"
            >
              ↺
            </span>
            Hindsight
          </span>
          <p className="mt-4 text-sm leading-relaxed text-h-muted">
            Failure analytics, prepaid. A data company that mostly delivers bad
            news on time.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-h-mono text-xs text-h-accent hover:underline"
          >
            ← see our other startup (Tithe)
          </Link>
        </div>

        <div className="font-h-mono text-xs text-h-muted">
          <p className="text-h-ink">Status: failing as expected</p>
          <p className="mt-2 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} Hindsight Analytics, Inc. (already
            post-mortemed). A parody. No founders were harmed — they were going
            to do that themselves.
          </p>
        </div>
      </div>
    </footer>
  );
}
