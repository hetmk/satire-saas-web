import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dl-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-dl-display text-xl font-semibold text-dl-ink">
            <span
              aria-hidden
              className="grid h-7 w-7 place-items-center rounded-full text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--dl-pink), var(--dl-grape))",
              }}
            >
              ✦
            </span>
            delulu
          </span>
          <p className="mt-4 text-sm leading-relaxed text-dl-muted">
            manifestation that gaslights you into confidence. a wellness company
            that mostly sells the absence of a reality check.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block text-sm font-semibold text-dl-grape hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-dl-muted">
          <p className="font-semibold text-dl-ink">Vibe: immaculate</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} delulu inc. a parody. not medical,
            psychological, or financial advice. not advice of any kind. results
            exist exclusively in a timeline you cannot access.
          </p>
        </div>
      </div>
    </footer>
  );
}
