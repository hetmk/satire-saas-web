import Link from "next/link";

const links = [
  { href: "#how", label: "Method" },
  { href: "#proof", label: "Failures" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-h-line/70 bg-h-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-h-display text-lg font-semibold text-h-ink"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-md bg-h-accent/15 font-h-mono text-h-accent"
          >
            ↺
          </span>
          Hindsight
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-h-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-h-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-lg bg-h-accent px-4 py-2 text-sm font-semibold text-h-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
        >
          Pre-fail now
        </Link>
      </nav>
    </header>
  );
}
