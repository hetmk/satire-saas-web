import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ck-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-ck-display text-lg font-bold text-ck-ink">
            <span aria-hidden className="text-ck-accent">
              ⬡
            </span>
            clanker
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ck-muted">
            detect the bots — it&apos;s you. a security company selling certainty
            about a thing that cannot be measured.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-ck-display text-xs text-ck-accent hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="font-ck-display text-xs text-ck-muted">
          <p className="text-ck-flag">SYSTEM: 98.2% flag rate</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} clanker. a parody. detects nothing real;
            AI text cannot be reliably identified, which is the joke and also,
            unsettlingly, the actual state of the art.
          </p>
        </div>
      </div>
    </footer>
  );
}
