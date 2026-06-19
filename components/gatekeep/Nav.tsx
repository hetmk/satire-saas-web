import Link from "next/link";

const links = [
  { href: "#how", label: "The method" },
  { href: "#proof", label: "Members" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gk-line/70 bg-gk-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="font-gk-display text-xl font-extrabold tracking-tight text-gk-ink"
        >
          gatekeep
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-gk-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-gk-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-lg bg-gk-ink px-4 py-2 text-sm font-gk-display font-bold text-gk-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
        >
          Keep it
        </Link>
      </nav>
    </header>
  );
}
