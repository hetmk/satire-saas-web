import Link from "next/link";

const tiers = [
  {
    name: "Extra",
    price: "$0",
    cadence: "free",
    blurb: "Background NPC. You're in frame. Barely. It's a start.",
    perks: ["10 gestures", "Keep 30% of gifts", "Standard catchphrases"],
    cta: "Stand in the back",
    featured: false,
  },
  {
    name: "Main NPC",
    price: "$10",
    cadence: "/mo",
    blurb: "Front and center. Full gesture library. Most performed.",
    perks: [
      "Unlimited gestures",
      "Premium catchphrases ('ice cream so good')",
      "Gift-cue earpiece",
      "Keep 30% (generous, we're told)",
    ],
    cta: "Take center frame",
    featured: true,
  },
  {
    name: "Franchise",
    price: "$80",
    cadence: "/mo",
    blurb: "Run a stable of NPCs. You don't perform. They do. You collect.",
    perks: [
      "Everything in Main NPC",
      "Manage up to 12 NPCs",
      "Auto-gesture AI fallback",
      "Their dignity, your dashboard",
    ],
    cta: "Become the studio",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-np-display text-xs font-bold uppercase tracking-[0.16em] text-np-cyan">
          pricing
        </p>
        <h2 className="mt-3 font-np-display text-4xl font-bold tracking-tight text-np-ink sm:text-5xl">
          Pay us. Perform for strangers. Keep almost a third.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-np-pink bg-np-surface shadow-[0_30px_80px_-50px_rgba(255,62,165,0.5)] lg:-mt-4"
                : "border-np-line bg-np-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-np-pink px-3 py-1 font-np-display text-xs font-bold uppercase tracking-wide text-np-bg">
                Most performed
              </span>
            )}
            <h3 className="font-np-display text-2xl font-bold text-np-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-np-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-np-display text-4xl font-bold text-np-ink">
                {t.price}
              </span>
              <span className="text-sm text-np-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-np-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-np-gold">
                    ★
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-full px-6 py-3 text-center font-np-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-full ${
                t.featured
                  ? "bg-np-pink text-np-bg"
                  : "border border-np-line bg-np-bg text-np-ink"
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
