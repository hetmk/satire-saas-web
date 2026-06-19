import Link from "next/link";

const links = [
  { href: "#how", label: "The system" },
  { href: "#proof", label: "Leaderboard" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-au-line/70 bg-au-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-au-display text-xl font-bold text-au-ink"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full bg-au-accent/25 text-au-accent"
            style={{ boxShadow: "0 0 16px var(--au-accent)" }}
          >
            ◉
          </span>
          aura
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-au-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-au-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-full bg-au-accent px-4 py-2 text-sm font-semibold text-au-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
        >
          Check your aura
        </Link>
      </nav>
    </header>
  );
}
