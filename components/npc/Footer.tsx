import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-np-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <span className="flex items-center gap-2 font-np-display text-xl font-bold text-np-ink">
            <span aria-hidden className="text-np-pink">
              ◢◤
            </span>
            NPC
          </span>
          <p className="mt-4 text-sm leading-relaxed text-np-muted">
            passive income, zero personality required. a creator platform whose
            top creators are, by design, interchangeable.
          </p>
          <Link
            href="/"
            className="mt-4 inline-block font-np-display text-xs font-bold text-np-cyan hover:underline"
          >
            ← Department of Unmet Needs
          </Link>
        </div>

        <div className="text-sm text-np-muted">
          <p className="font-np-display font-bold text-np-pink">ON AIR · 2,418 watching</p>
          <p className="mt-3 max-w-sm leading-relaxed">
            © {new Date().getFullYear()} NPC live. a parody. no real gifts, no
            real earnings, no real earpiece. the urge to say &ldquo;gang gang&rdquo;
            unprompted is, however, a known side effect.
          </p>
        </div>
      </div>
    </footer>
  );
}
