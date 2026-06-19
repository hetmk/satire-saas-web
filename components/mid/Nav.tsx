import Link from "next/link";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#proof", label: "Reviews" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-md-line bg-md-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="font-md-display text-2xl tracking-wide text-md-ink"
        >
          mid
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-md-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-md-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-lg bg-md-ink px-4 py-2 text-sm font-semibold text-md-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
        >
          Stop deciding
        </Link>
      </nav>
    </header>
  );
}
