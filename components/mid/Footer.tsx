import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-md-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="font-md-display text-2xl tracking-wide text-md-ink">
            mid
          </span>
          <p className="mt-4 text-sm leading-relaxed text-md-muted">
            the review app that already decided. a media company whose entire
            editorial position is a shrug.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-md-accent hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-md-muted">
          <p className="font-md-display text-lg tracking-wide text-md-ink">
            RATING: 2.5 / 5
          </p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} mid. a parody. no opinions were formed
            in the making of this product. that was the entire roadmap.
          </p>
        </div>
      </div>
    </footer>
  );
}
