import Link from "next/link";

const tiers = [
  {
    name: "Mortal",
    price: "$0",
    cadence: "free",
    blurb: "Track your own aura. Watch it drop. No one to blame but yourself.",
    perks: ["Personal aura balance", "Basic cringe detection", "Daily aura summary (brutal)"],
    cta: "Face the number",
    featured: false,
  },
  {
    name: "Farmer",
    price: "$11",
    cadence: "/mo",
    blurb: "Leaderboards, rivals, and recovery questlines. Most farmed.",
    perks: [
      "Friend + rival leaderboards",
      "Aura recovery arcs",
      "Real-time loss notifications",
      "Cringe replay (relive it)",
    ],
    cta: "Farm aggressively",
    featured: true,
  },
  {
    name: "Deity",
    price: "$55",
    cadence: "/mo",
    blurb: "For people who are simply unbothered, professionally.",
    perks: [
      "Everything, glowing",
      "Add anyone to your leaderboard",
      "Aura insurance (1 cringe forgiven/mo)",
      "A halo on your profile (cosmetic)",
    ],
    cta: "Ascend the leaderboard",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-au-accent">
          pricing
        </p>
        <h2 className="mt-3 font-au-display text-4xl font-bold tracking-tight text-au-ink sm:text-5xl">
          Pay to find out exactly how unbothered you aren&apos;t.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-[2rem] border p-7 ${
              t.featured
                ? "border-au-accent bg-au-surface shadow-[0_30px_80px_-50px_rgba(176,107,255,0.7)] lg:-mt-4"
                : "border-au-line bg-au-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-au-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-au-bg">
                Most farmed
              </span>
            )}
            <h3 className="font-au-display text-2xl font-bold text-au-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-au-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-au-display text-4xl font-bold text-au-ink">
                {t.price}
              </span>
              <span className="text-sm text-au-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-au-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-au-accent">
                    ◉
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-full px-6 py-3 text-center font-au-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-full ${
                t.featured
                  ? "bg-au-accent text-au-bg"
                  : "border border-au-line bg-au-bg text-au-ink"
              }`}
            >
              {t.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
