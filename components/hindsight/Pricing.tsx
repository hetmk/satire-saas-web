import Link from "next/link";

const tiers = [
  {
    name: "Denial",
    price: "$0",
    cadence: "forever",
    blurb: "One post-mortem. You won't read it. That's fine.",
    perks: ["1 failure report", "Cause of death only", "No charts (you'd ignore them)"],
    cta: "Stay optimistic",
    featured: false,
  },
  {
    name: "Acceptance",
    price: "$49",
    cadence: "/mo",
    blurb: "For founders ready to grieve on schedule. Most realistic.",
    perks: [
      "Unlimited post-mortems",
      "The full Regret Dashboard",
      "Burn-rate doom projections",
      "Auto-drafted wind-down post",
    ],
    cta: "Begin acceptance",
    featured: true,
  },
  {
    name: "Legacy",
    price: "$2,400",
    cadence: "/mo",
    blurb: "Enterprise. We post-mortem your post-mortem.",
    perks: [
      "Everything in Acceptance",
      "Dedicated grief analyst (a chatbot)",
      "SOC 2 report for a company that won't exist",
      "We notify your investors first",
    ],
    cta: "Contact the void",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-h-mono text-xs uppercase tracking-[0.18em] text-h-accent">
          pricing
        </p>
        <h2 className="mt-3 font-h-display text-4xl font-semibold tracking-tight text-h-ink sm:text-5xl">
          Pay now, or pay in 18 months. Your call.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-h-accent bg-h-surface shadow-[0_30px_80px_-50px_rgba(91,157,255,0.6)] lg:-mt-4"
                : "border-h-line bg-h-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-h-accent px-3 py-1 font-h-mono text-xs uppercase tracking-wide text-h-bg">
                Most realistic
              </span>
            )}
            <h3 className="font-h-display text-2xl font-semibold text-h-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-h-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-h-display text-4xl font-semibold text-h-ink">
                {t.price}
              </span>
              <span className="font-h-mono text-sm text-h-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-h-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-h-accent">
                    →
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-lg px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg ${
                t.featured
                  ? "bg-h-accent text-h-bg"
                  : "border border-h-line bg-h-bg text-h-ink"
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
