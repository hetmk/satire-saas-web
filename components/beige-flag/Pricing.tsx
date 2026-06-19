import Link from "next/link";

const tiers = [
  {
    name: "Curious",
    price: "$0",
    cadence: "free",
    blurb: "One diagnosis a day. Enough to ruin your morning responsibly.",
    perks: ["1 text analysis/day", "Red / green / beige verdict", "No case files (live in denial)"],
    cta: "Diagnose one text",
    featured: false,
  },
  {
    name: "Spiraling",
    price: "$9",
    cadence: "/mo",
    blurb: "Unlimited analysis and saved case files. Most diagnosed.",
    perks: [
      "Unlimited diagnoses",
      "Case files & pattern timeline",
      "Group-chat export (evidence)",
      "Subtext deep-scan (the period after 'fine')",
    ],
    cta: "Begin the spiral",
    featured: true,
  },
  {
    name: "Closure",
    price: "$29",
    cadence: "/mo",
    blurb: "We draft the 'we need to talk' text you'll never send.",
    perks: [
      "Everything in Spiraling",
      "AI-drafted exit messages",
      "Beige-flag intervention alerts",
      "A certificate stating it wasn't you",
    ],
    cta: "Get closure (sort of)",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bf-beige">
          pricing
        </p>
        <h2 className="mt-3 font-bf-display text-4xl font-bold tracking-tight text-bf-ink sm:text-5xl">
          Pay for the answer they kept dodging.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-[2rem] border p-7 ${
              t.featured
                ? "border-bf-beige bg-bf-surface shadow-[0_30px_80px_-50px_rgba(201,168,124,0.6)] lg:-mt-4"
                : "border-bf-line bg-bf-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-bf-beige px-3 py-1 text-xs font-semibold uppercase tracking-wide text-bf-ink">
                Most diagnosed
              </span>
            )}
            <h3 className="font-bf-display text-2xl font-bold text-bf-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-bf-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-bf-display text-4xl font-bold text-bf-ink">
                {t.price}
              </span>
              <span className="text-sm text-bf-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-bf-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-bf-beige">
                    ⚐
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-full px-6 py-3 text-center font-bf-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-full ${
                t.featured
                  ? "bg-bf-ink text-bf-surface"
                  : "border border-bf-line bg-bf-bg text-bf-ink"
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
