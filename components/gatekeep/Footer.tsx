import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gk-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="font-gk-display text-xl font-extrabold tracking-tight text-gk-ink">
            gatekeep
          </span>
          <p className="mt-4 text-sm leading-relaxed text-gk-muted">
            taste, kept. a lifestyle company whose core feature is the things it
            refuses to let you tell people.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-gk-display font-bold text-gk-accent hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-gk-muted">
          <p className="font-gk-display font-bold text-gk-ink">Status: sealed</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} gatekeep. a parody. shares nothing,
            recommends nothing, and exists mainly to put a progress bar on a
            personality trait you should probably examine.
          </p>
        </div>
      </div>
    </footer>
  );
}
