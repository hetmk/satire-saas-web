import Link from "next/link";

const links = [
  { href: "#how", label: "The practice" },
  { href: "#proof", label: "Believers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-dl-line/70 bg-dl-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-dl-display text-xl font-semibold text-dl-ink"
        >
          <span
            aria-hidden
            className="grid h-7 w-7 place-items-center rounded-full text-white"
            style={{
              background:
                "linear-gradient(135deg, var(--dl-pink), var(--dl-grape))",
            }}
          >
            ✦
          </span>
          delulu
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-dl-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-dl-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-full bg-dl-grape px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
        >
          Start believing
        </Link>
      </nav>
    </header>
  );
}
