import Link from "next/link";

const tiers = [
  {
    name: "Suspect",
    price: "$0",
    cadence: "free",
    blurb: "Scan your own text. Get flagged. Sit with it.",
    perks: ["5 scans/day", "Bot probability score", "Three forensic 'tells'"],
    cta: "Get flagged free",
    featured: false,
  },
  {
    name: "Investigator",
    price: "$15",
    cadence: "/mo",
    blurb: "Scan everyone. Flag everyone. Most deployed.",
    perks: [
      "Unlimited scans",
      "Bulk paste (whole group chats)",
      "Full forensic evidence report",
      "Exportable 'clanker' verdicts",
    ],
    cta: "Investigate everyone",
    featured: true,
  },
  {
    name: "Tribunal",
    price: "$60",
    cadence: "/mo",
    blurb: "Enterprise. Flag your whole org. Trust nobody, including you.",
    perks: [
      "Everything in Investigator",
      "Real-time clanker monitoring",
      "Appeal review (always denied)",
      "A badge proving nothing",
    ],
    cta: "Convene the tribunal",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-ck-display text-xs uppercase tracking-[0.16em] text-ck-accent">
          pricing
        </p>
        <h2 className="mt-3 font-ck-display text-4xl font-bold tracking-tight text-ck-ink sm:text-5xl">
          Pay to be accused. Premium to accuse others.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-2xl border p-7 ${
              t.featured
                ? "border-ck-accent bg-ck-surface shadow-[0_30px_80px_-50px_rgba(0,163,163,0.4)] lg:-mt-4"
                : "border-ck-line bg-ck-surface"
            }`}
          >
            {t.featured && (
              <span className="mb-4 w-fit rounded-full bg-ck-accent px-3 py-1 font-ck-display text-xs font-bold uppercase tracking-wide text-ck-surface">
                Most deployed
              </span>
            )}
            <h3 className="font-ck-display text-2xl font-bold text-ck-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-ck-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-ck-display text-4xl font-bold text-ck-ink">
                {t.price}
              </span>
              <span className="font-ck-display text-sm text-ck-muted">
                {t.cadence}
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ck-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-ck-accent">
                    ▸
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-md px-6 py-3 text-center font-ck-display font-bold transition-transform hover:-translate-y-0.5 focus-visible:rounded-md ${
                t.featured
                  ? "bg-ck-ink text-ck-surface"
                  : "border border-ck-line bg-ck-bg text-ck-ink"
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
