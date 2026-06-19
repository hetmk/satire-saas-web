import Link from "next/link";

const tiers = [
  {
    name: "Whatever",
    price: "$0",
    cadence: "free",
    blurb: "Rate things mid. Read takes. Feel a flat, even nothing.",
    perks: ["Unlimited mid ratings", "Standard lukewarm takes", "One opinion/month (we discourage it)"],
    cta: "Eh, sure",
    featured: false,
  },
  {
    name: "Indifferent+",
    price: "$5",
    cadence: "/mo",
    blurb: "The whole shrug. Beige Shield included. Most chosen, allegedly.",
    perks: [
      "Group-chat take generator",
      "Beige Shield™ deniability",
      "Auto-reply 'it's mid' to anyone",
      "Mid history & analytics (mid)",
    ],
    cta: "I guess",
    featured: true,
  },
  {
    name: "Connoisseur",
    price: "$20",
    cadence: "/mo",
    blurb: "For people who want to be very, very sure it's all mid.",
    perks: [
      "Everything in Indifferent+",
      "Mid certification for your taste",
      "We rate your enemies (mid)",
      "Priority access to more mid",
    ],
    cta: "Commit to nothing",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-md-accent">
          pricing
        </p>
        <h2 className="mt-3 font-md-display text-5xl leading-none tracking-wide text-md-ink">
          THREE PLANS. ALL SORT OF FINE.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-md-accent bg-md-surface lg:-mt-4"
                : "border-md-line bg-md-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-md-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-md-surface">
                Most chosen (probably)
              </span>
            )}
            <h3 className="font-md-display text-2xl tracking-wide text-md-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-md-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-md-display text-5xl tracking-wide text-md-ink">
                {t.price}
              </span>
              <span className="text-sm text-md-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-md-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-md-accent">
                    —
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-lg px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg ${
                t.featured
                  ? "bg-md-ink text-md-surface"
                  : "border border-md-line bg-md-bg text-md-ink"
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
