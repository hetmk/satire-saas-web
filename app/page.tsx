import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Department of Unmet Needs — a venture studio",
  description:
    "A venture studio shipping convincingly-designed solutions to problems we invented. A portfolio of fake startups that are technically jokes and emotionally real.",
};

const portfolio = [
  {
    name: "Tithe",
    href: "/tithe",
    category: "wellness · fintech",
    line: "Charges you $0.50 every time you open Instagram. Mindful spending for your attention.",
    accent: "var(--lilac-deep)",
    chip: "var(--lilac)",
  },
  {
    name: "Hindsight",
    href: "/hindsight",
    category: "analytics",
    line: "Writes your startup's failure post-mortem before you start, so you can skip the 18 months.",
    accent: "var(--h-accent)",
    chip: "var(--h-accent)",
  },
  {
    name: "side quest",
    href: "/side-quest",
    category: "productivity",
    line: "Turns your boring chores into a ranked video game with XP and loot. The dishes are the final boss.",
    accent: "var(--sq-xp)",
    chip: "var(--sq-xp)",
  },
  {
    name: "delulu",
    href: "/delulu",
    category: "wellness",
    line: "Manifestation that gaslights you into confidence. Goals so unrealistic your brain has no choice but to believe them.",
    accent: "var(--dl-grape)",
    chip: "var(--dl-grape)",
  },
];

export default function StudioIndex() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="mx-auto max-w-5xl px-5 pb-12 pt-20 sm:pt-28">
        <p className="font-display text-sm uppercase tracking-[0.22em] text-ink-soft">
          Department of Unmet Needs
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl">
          A venture studio for products that shouldn&apos;t exist. We shipped
          them anyway.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          Convincingly-designed solutions to problems we invented. Each one is
          technically a joke and emotionally a documentary. Pick a portfolio
          company and see how long it takes you to notice.
        </p>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-24">
        <p className="mb-5 font-display text-xs uppercase tracking-[0.2em] text-ink-soft">
          The portfolio
        </p>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((p) => (
            <li key={p.name}>
              <Link
                href={p.href}
                className="group flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-transform hover:-translate-y-1 focus-visible:rounded-3xl"
                style={{ borderTop: `3px solid ${p.accent}` }}
              >
                <span
                  className="w-fit rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ backgroundColor: `${p.chip}22`, color: p.accent }}
                >
                  {p.category}
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold">
                  {p.name}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {p.line}
                </p>
                <span
                  className="mt-6 text-sm font-semibold transition-transform group-hover:translate-x-1"
                  style={{ color: p.accent }}
                >
                  Visit {p.name} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer className="border-t border-line">
        <p className="mx-auto max-w-5xl px-5 py-8 text-xs leading-relaxed text-ink-soft">
          © {new Date().getFullYear()} Department of Unmet Needs. A parody
          studio. None of these products are real. All of them are, spiritually.
          No vulnerable group was the punchline — only startups.
        </p>
      </footer>
    </div>
  );
}
