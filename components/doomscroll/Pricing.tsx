import Link from "next/link";

const tiers = [
  {
    name: "Idle",
    price: "$0",
    cadence: "free",
    blurb: "The feed, with the lights on. Some friction. You'll feel it.",
    perks: ["The infinite empty feed", "Meters-scrolled counter", "One ad for our other tiers"],
    cta: "Scroll for free",
    featured: false,
  },
  {
    name: "Void",
    price: "$6",
    cadence: "/mo",
    blurb: "Frictionless, silent, content-free. Most descended-into.",
    perks: [
      "Buttery infinite scroll",
      "Total content blackout",
      "Haptic 'nothing happened' feedback",
      "Distance leaderboard (vs. nobody)",
    ],
    cta: "Enter the void",
    featured: true,
  },
  {
    name: "Concierge",
    price: "$39",
    cadence: "/mo",
    blurb: "We scroll on your behalf while you do literally anything else.",
    perks: [
      "Everything in Void",
      "Auto-scroll (we hold the thumb)",
      "A weekly report confirming nothing happened",
      "Priority access to more nothing",
    ],
    cta: "Outsource the scroll",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ds-accent">
          pricing
        </p>
        <h2 className="mt-3 font-ds-display text-4xl font-semibold tracking-tight text-ds-ink sm:text-5xl">
          Pay for less. Receive nothing. Feel oddly complete.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-ds-accent bg-ds-surface shadow-[0_30px_80px_-55px_rgba(47,107,255,0.5)] lg:-mt-4"
                : "border-ds-line bg-ds-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-ds-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ds-surface">
                Most descended-into
              </span>
            )}
            <h3 className="font-ds-display text-2xl font-semibold text-ds-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-ds-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-ds-display text-4xl font-semibold text-ds-ink">
                {t.price}
              </span>
              <span className="text-sm text-ds-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ds-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-ds-accent">
                    ↧
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-full ${
                t.featured
                  ? "bg-ds-ink text-ds-surface"
                  : "border border-ds-line bg-ds-bg text-ds-ink"
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
