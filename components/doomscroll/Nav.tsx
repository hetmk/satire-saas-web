import Link from "next/link";

const links = [
  { href: "#how", label: "The feed" },
  { href: "#proof", label: "Users" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ds-line bg-ds-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-ds-display text-lg font-semibold text-ds-ink"
        >
          <span aria-hidden className="text-ds-accent">
            ↧
          </span>
          doomscroll+
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-ds-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-ds-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-full bg-ds-ink px-4 py-2 text-sm font-semibold text-ds-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
        >
          Start scrolling
        </Link>
      </nav>
    </header>
  );
}
