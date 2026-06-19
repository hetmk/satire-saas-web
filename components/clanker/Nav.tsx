import Link from "next/link";

const links = [
  { href: "#how", label: "Detection" },
  { href: "#proof", label: "Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ck-line bg-ck-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-ck-display text-lg font-bold text-ck-ink"
        >
          <span aria-hidden className="text-ck-accent">
            ⬡
          </span>
          clanker
        </Link>

        <ul className="hidden items-center gap-8 font-ck-display text-sm text-ck-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-ck-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-md bg-ck-ink px-4 py-2 font-ck-display text-sm font-bold text-ck-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-md"
        >
          Run a scan
        </Link>
      </nav>
    </header>
  );
}
