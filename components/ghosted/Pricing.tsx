import Link from "next/link";

const tiers = [
  {
    name: "Slow Fade",
    price: "$0",
    cadence: "free",
    blurb: "Ghost up to 5 people. Manually. The old-fashioned way: by doing nothing.",
    perks: ["5 active ghostings", "Basic fade timers", "No auto-excuses (you're on your own)"],
    cta: "Start fading",
    featured: false,
  },
  {
    name: "Clean Break",
    price: "$11",
    cadence: "/mo",
    blurb: "Unlimited ghosting and the full pipeline. Most avoided.",
    perks: [
      "Unlimited ghostings",
      "Auto-excuse engine",
      "Relationship pipeline board",
      "Re-engagement alerts (so you can re-ghost)",
    ],
    cta: "Disappear cleanly",
    featured: true,
  },
  {
    name: "Witness Protection",
    price: "$40",
    cadence: "/mo",
    blurb: "We don't just ghost them. We help you become unfindable. Don't ask how.",
    perks: [
      "Everything in Clean Break",
      "Cross-platform fade sync",
      "Decoy 'so busy lately!' status",
      "A new persona (cosmetic, mostly)",
    ],
    cta: "Vanish entirely",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-gh-display font-bold uppercase tracking-[0.16em] text-gh-accent">
          pricing
        </p>
        <h2 className="mt-3 font-gh-display text-4xl font-extrabold tracking-tight text-gh-ink sm:text-5xl">
          Pay monthly to never have that conversation.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-gh-accent bg-gh-surface shadow-[0_30px_80px_-50px_rgba(108,99,255,0.5)] lg:-mt-4"
                : "border-gh-line bg-gh-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-gh-accent px-3 py-1 text-xs font-gh-display font-bold uppercase tracking-wide text-white">
                Most avoided
              </span>
            )}
            <h3 className="font-gh-display text-2xl font-extrabold text-gh-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-gh-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-gh-display text-4xl font-extrabold text-gh-ink">
                {t.price}
              </span>
              <span className="text-sm text-gh-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-gh-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-gh-accent">
                    ◦
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-lg px-6 py-3 text-center font-gh-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-lg ${
                t.featured
                  ? "bg-gh-accent text-white"
                  : "border border-gh-line bg-gh-bg text-gh-ink"
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
