import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-ds-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-ds-display text-lg font-semibold text-ds-ink">
            <span aria-hidden className="text-ds-accent">
              ↧
            </span>
            doomscroll+
          </span>
          <p className="mt-4 text-sm leading-relaxed text-ds-muted">
            the feed, perfected by removing the feed. a media company that
            proudly produces nothing.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-ds-accent hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-ds-muted">
          <p className="font-semibold text-ds-ink">Now serving: nothing</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} doomscroll+. a parody. contains no
            content, no news, and no nutritional value. any meaning you find here
            you brought with you.
          </p>
        </div>
      </div>
    </footer>
  );
}
