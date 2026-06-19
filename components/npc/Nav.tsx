import Link from "next/link";

const links = [
  { href: "#how", label: "How it works" },
  { href: "#proof", label: "Performers" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-np-line/70 bg-np-bg/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-np-display text-xl font-bold text-np-ink"
        >
          <span aria-hidden className="text-np-pink">
            ◢◤
          </span>
          NPC
        </Link>

        <ul className="hidden items-center gap-8 text-sm text-np-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition-colors hover:text-np-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#pricing"
          className="rounded-full bg-np-pink px-4 py-2 text-sm font-np-display font-bold text-np-bg transition-transform hover:-translate-y-0.5 focus-visible:rounded-full"
        >
          Go NPC
        </Link>
      </nav>
    </header>
  );
}
