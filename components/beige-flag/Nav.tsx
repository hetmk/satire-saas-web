import Link from "next/link";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#proof", label: "Diagnoses" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-bf-line/70 bg-bf-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-bf-display text-xl font-bold text-bf-ink"
        >
          <span aria-hidden>🏳️</span>
          beige flag
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-bf-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-bf-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-full bg-bf-ink px-4 py-2 text-sm font-semibold text-bf-surface transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
        >
          Diagnose them
        </Link>
      </nav>
    </header>
  );
}
