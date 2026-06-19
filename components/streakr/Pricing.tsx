import Link from "next/link";

const tiers = [
  {
    name: "Kindling",
    price: "$0",
    cadence: "free",
    blurb: "One streak. No freezes. When it dies, it dies in front of you.",
    perks: ["1 active streak", "Catastrophic reset (free)", "Zero streak freezes (live dangerously)"],
    cta: "Start one flame",
    featured: false,
  },
  {
    name: "Inferno",
    price: "$7",
    cadence: "/mo",
    blurb: "Unlimited streaks and a small mercy of freezes. Most lit.",
    perks: [
      "Unlimited streaks",
      "3 streak freezes/month",
      "Loss-aversion notifications",
      "Grief-stage reset animations",
    ],
    cta: "Feed the fire",
    featured: true,
  },
  {
    name: "Eternal Flame",
    price: "$25",
    cadence: "/mo",
    blurb: "Your streaks literally cannot die. Which raises questions. Don't ask them.",
    perks: [
      "Everything in Inferno",
      "Unlimited streak freezes",
      "Auto-log on your behalf (it's all fake now)",
      "A streak for maintaining streaks",
    ],
    cta: "Never break again",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-st-display font-bold uppercase tracking-[0.16em] text-st-flame">
          pricing
        </p>
        <h2 className="mt-3 font-st-display text-4xl font-extrabold tracking-tight text-st-ink sm:text-5xl">
          Pay monthly to be afraid of a number.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-st-flame bg-st-surface shadow-[0_30px_80px_-50px_rgba(255,106,43,0.5)] lg:-mt-4"
                : "border-st-line bg-st-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-st-flame px-3 py-1 text-xs font-st-display font-bold uppercase tracking-wide text-st-bg">
                Most lit
              </span>
            )}
            <h3 className="font-st-display text-2xl font-extrabold text-st-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-st-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-st-display text-4xl font-extrabold text-st-ink">
                {t.price}
              </span>
              <span className="text-sm text-st-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-st-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-st-ember">
                    ▲
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-xl px-6 py-3 text-center font-st-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-xl ${
                t.featured
                  ? "bg-st-flame text-st-bg"
                  : "border border-st-line bg-st-bg text-st-ink"
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
