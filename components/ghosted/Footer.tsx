import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gh-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-gh-display text-xl font-extrabold text-gh-ink">
            <span aria-hidden>👻</span>
            Ghosted
          </span>
          <p className="mt-4 text-sm leading-relaxed text-gh-muted">
            the CRM that stops replying for you. a productivity company whose
            core feature is your tasteful, automated absence.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-gh-display font-bold text-gh-accent hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-gh-muted">
          <p className="font-gh-display font-extrabold text-gh-ink">
            Reply status: pending (forever)
          </p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} Ghosted. a parody. sends no real
            messages and ends no real relationships. the urge to drag a loved
            one into &ldquo;Fading&rdquo; is, however, alarmingly intuitive.
          </p>
        </div>
      </div>
    </footer>
  );
}
