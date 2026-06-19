import Link from "next/link";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#proof", label: "Ghosters" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gh-line/70 bg-gh-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-gh-display text-xl font-extrabold text-gh-ink"
        >
          <span aria-hidden>👻</span>
          Ghosted
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-gh-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-gh-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-lg bg-gh-accent px-4 py-2 text-sm font-gh-display font-bold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg"
        >
          Stop replying
        </Link>
      </nav>
    </header>
  );
}
