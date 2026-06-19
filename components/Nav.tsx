import Link from "next/link";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#proof", label: "The science*" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-mist/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full bg-sage text-paper"
          >
            ◴
          </span>
          tithe
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
        >
          Start paying attention
        </Link>
      </nav>
    </header>
  );
}
