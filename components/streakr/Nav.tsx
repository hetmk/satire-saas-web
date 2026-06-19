import Link from "next/link";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#proof", label: "Streakers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-st-line/70 bg-st-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-st-display text-xl font-extrabold text-st-ink"
        >
          <span aria-hidden>🔥</span>
          Streakr
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-st-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-st-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-xl bg-st-flame px-4 py-2 text-sm font-st-display font-bold text-st-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
        >
          Start a streak
        </Link>
      </nav>
    </header>
  );
}
