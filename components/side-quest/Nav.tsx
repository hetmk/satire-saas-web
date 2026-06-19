import Link from "next/link";

const links = [
  { href: "#how", label: "Quests" },
  { href: "#proof", label: "Party" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-sq-line/70 bg-sq-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-sq-display text-xl font-extrabold text-sq-ink"
        >
          <span aria-hidden className="font-sq-pixel text-sm text-sq-xp">
            ⚔
          </span>
          side quest
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-sq-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-sq-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-xl bg-sq-accent px-4 py-2 text-sm font-sq-display font-bold text-sq-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl"
        >
          Start the grind
        </Link>
      </nav>
    </header>
  );
}
