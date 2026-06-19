import Link from "next/link";

const tiers = [
  {
    name: "Curious",
    price: "$9",
    cadence: "/mo",
    line: "50¢ per open",
    blurb: "For people still pretending they can quit on their own.",
    perks: [
      "Standard 50¢ debit per Instagram open",
      "Weekly serenity statement",
      "One guilt-free open on your birthday",
    ],
    cta: "Dip a toe in",
    featured: false,
  },
  {
    name: "Devout",
    price: "$29",
    cadence: "/mo",
    line: "$2 per open + surge pricing",
    blurb: "The sweet spot between healing and bankruptcy. Most chosen.",
    perks: [
      "Everything in Curious, charged harder",
      "Surge pricing for shame (after midnight, at work)",
      "Streak Guilt™ notifications",
      "Priority access to your own regret",
    ],
    cta: "Commit fully",
    featured: true,
  },
  {
    name: "Monastic",
    price: "$99",
    cadence: "/mo",
    line: "$10 per open, no cap",
    blurb: "More pain, more growth. You will not open it twice.",
    perks: [
      "$10 per open, no daily ceiling",
      "We read your screen time aloud at 7am",
      "A dedicated accountability monk (it's a bot)",
      "Tithe may quietly invest your shame",
    ],
    cta: "Achieve enlightenment",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-mist-2/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
            pricing
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Pay us monthly to charge you more.
          </h2>
          <p className="mt-4 text-ink-soft">
            Every plan is a subscription that exists to make your free app
            expensive. Higher tiers hurt more. That is, spiritually, the point.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex h-full flex-col rounded-3xl border p-7 ${
                t.featured
                  ? "border-lilac-deep bg-paper shadow-[0_30px_80px_-44px_rgba(126,107,176,0.8)] lg:-mt-4"
                  : "border-line bg-paper"
              }`}
            >
              {t.featured && (
                <span className="mb-4 inline-block w-fit rounded-full bg-lilac-deep px-3 py-1 text-xs font-semibold uppercase tracking-wide text-paper">
                  Most chosen
                </span>
              )}
              <h3 className="font-display text-2xl font-semibold text-ink">
                {t.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{t.blurb}</p>

              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl font-semibold text-ink">
                  {t.price}
                </span>
                <span className="text-ink-soft">{t.cadence}</span>
              </p>
              <p className="mt-1 text-sm font-semibold text-sage-deep">
                {t.line}
              </p>

              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-3">
                    <span aria-hidden className="mt-0.5 text-sage">
                      ✶
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#cta"
                className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-full ${
                  t.featured
                    ? "bg-ink text-paper"
                    : "border border-line bg-mist text-ink"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
