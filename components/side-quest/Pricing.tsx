import Link from "next/link";

const tiers = [
  {
    name: "F2P",
    price: "$0",
    cadence: "free-to-play",
    blurb: "The base game. Quests and XP. You will hit a paywall mid-chore.",
    perks: ["Unlimited quests", "Basic loot table", "1 party member", "Ads between dishes"],
    cta: "Play free",
    featured: false,
  },
  {
    name: "Battle Pass",
    price: "$8",
    cadence: "/mo",
    blurb: "Seasonal cosmetics for tasks no one sees you do. Most equipped.",
    perks: [
      "Rare + cursed loot tables",
      "Co-op party of 6",
      "Seasonal chore skins",
      "Streak protection (1 lazy day/wk)",
    ],
    cta: "Buy the pass",
    featured: true,
  },
  {
    name: "Whale",
    price: "$60",
    cadence: "/mo",
    blurb: "For people who pay to win at their own life. We respect it.",
    perks: [
      "Everything, gold-plated",
      "Legendary loot (still fake)",
      "A title you can't use anywhere",
      "We narrate your chores aloud",
    ],
    cta: "Ascend",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-sq-pixel text-[10px] uppercase text-sq-accent">
          pricing
        </p>
        <h2 className="mt-3 font-sq-display text-4xl font-extrabold tracking-tight text-sq-ink sm:text-5xl">
          Free to play. Pay to feel things.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-3xl border p-7 ${
              t.featured
                ? "border-sq-xp bg-sq-surface shadow-[0_30px_80px_-50px_rgba(245,196,81,0.5)] lg:-mt-4"
                : "border-sq-line bg-sq-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-sq-xp px-3 py-1 font-sq-pixel text-[10px] uppercase text-sq-bg">
                Most equipped
              </span>
            )}
            <h3 className="font-sq-display text-2xl font-extrabold text-sq-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-sq-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-sq-display text-4xl font-extrabold text-sq-ink">
                {t.price}
              </span>
              <span className="text-sm text-sq-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-sq-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-sq-xp">
                    ◆
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-xl px-6 py-3 text-center font-sq-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl ${
                t.featured
                  ? "bg-sq-xp text-sq-bg"
                  : "border border-sq-line bg-sq-bg text-sq-ink"
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
