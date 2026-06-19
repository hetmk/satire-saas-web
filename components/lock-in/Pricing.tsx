import Link from "next/link";

const tiers = [
  {
    name: "Solo",
    price: "$0",
    cadence: "free",
    blurb: "Just you and a timer. No witnesses. We both know how this ends.",
    perks: ["Pomodoro timer", "Personal distraction log", "Nobody watching (the problem)"],
    cta: "Try willpower",
    featured: false,
  },
  {
    name: "Witnessed",
    price: "$12",
    cadence: "/mo",
    blurb: "Live to a room of strangers. Maximum accountability. Most streamed.",
    perks: [
      "Live screen-share sessions",
      "Stranger judgment chat",
      "Shame streak + leaderboard",
      "Tab-switch alarms (public)",
    ],
    cta: "Go live",
    featured: true,
  },
  {
    name: "Intervention",
    price: "$49",
    cadence: "/mo",
    blurb: "A dedicated room of strangers assigned only to you. They have your schedule.",
    perks: [
      "Everything in Witnessed",
      "Private accountability mob",
      "Wake-up calls from strangers",
      "They text your group chat on relapse",
    ],
    cta: "Summon the mob",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-li-mono text-xs uppercase tracking-[0.16em] text-li-focus">
          pricing
        </p>
        <h2 className="mt-3 font-li-display text-4xl font-bold tracking-tight text-li-ink sm:text-5xl">
          Pay strangers to believe in you, loudly.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-li-focus bg-li-surface shadow-[0_30px_80px_-50px_rgba(22,163,74,0.4)] lg:-mt-4"
                : "border-li-line bg-li-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-li-focus px-3 py-1 font-li-mono text-xs uppercase tracking-wide text-white">
                Most streamed
              </span>
            )}
            <h3 className="font-li-display text-2xl font-bold text-li-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-li-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-li-display text-4xl font-bold text-li-ink">
                {t.price}
              </span>
              <span className="font-li-mono text-sm text-li-muted">
                {t.cadence}
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-li-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-li-focus">
                    ▸
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-lg px-6 py-3 text-center font-li-display font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg ${
                t.featured
                  ? "bg-li-ink text-li-surface"
                  : "border border-li-line bg-li-bg text-li-ink"
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
