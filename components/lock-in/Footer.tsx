import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-li-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-li-display text-lg font-bold text-li-ink">
            <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-li-live" />
            lock in
          </span>
          <p className="mt-4 text-sm leading-relaxed text-li-muted">
            focus, witnessed by strangers. a productivity company that mostly
            sells the dread of being perceived.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-li-mono text-xs text-li-focus hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="font-li-mono text-xs text-li-muted">
          <p className="text-li-focus">STATUS: 1,204 strangers online</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} lock in. a parody. no real screens are
            shared and no real strangers are watching — the guilt, as ever, you
            supply yourself.
          </p>
        </div>
      </div>
    </footer>
  );
}
