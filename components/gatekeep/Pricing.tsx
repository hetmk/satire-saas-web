import Link from "next/link";

const tiers = [
  {
    name: "Hobbyist",
    price: "$0",
    cadence: "free",
    blurb: "A small vault. You'll overshare anyway. We'll watch you learn.",
    perks: ["Vault up to 10 items", "Basic exclusivity score", "1 leak alert/month"],
    cta: "Start hoarding",
    featured: false,
  },
  {
    name: "Curator",
    price: "$13",
    cadence: "/mo",
    blurb: "Unlimited vault, full leak detection. Most gatekept.",
    perks: [
      "Unlimited sealed items",
      "Real-time leak alerts",
      "Exclusivity analytics",
      "'A little place' auto-responses",
    ],
    cta: "Curate ruthlessly",
    featured: true,
  },
  {
    name: "Tastemaker",
    price: "$50",
    cadence: "/mo",
    blurb: "For people whose entire identity is knowing first.",
    perks: [
      "Everything in Curator",
      "Pre-viral artist radar",
      "Friend-feed surveillance suite",
      "A vault that judges your friends too",
    ],
    cta: "Ascend to insufferable",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-gk-display font-bold uppercase tracking-[0.18em] text-gk-accent">
          pricing
        </p>
        <h2 className="mt-3 font-gk-display text-4xl font-extrabold tracking-tight text-gk-ink sm:text-5xl">
          Pay to keep it to yourself.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-gk-accent bg-gk-surface shadow-[0_30px_80px_-50px_rgba(15,107,79,0.4)] lg:-mt-4"
                : "border-gk-line bg-gk-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-gk-accent px-3 py-1 text-xs font-gk-display font-bold uppercase tracking-wide text-gk-surface">
                Most gatekept
              </span>
            )}
            <h3 className="font-gk-display text-2xl font-extrabold text-gk-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-gk-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-gk-display text-4xl font-extrabold text-gk-ink">
                {t.price}
              </span>
              <span className="text-sm text-gk-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gk-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-gk-gold">
                    ◆
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-lg px-6 py-3 text-center font-gk-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg ${
                t.featured
                  ? "bg-gk-ink text-gk-surface"
                  : "border border-gk-line bg-gk-bg text-gk-ink"
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
