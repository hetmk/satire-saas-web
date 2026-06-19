import Link from "next/link";

const tiers = [
  {
    name: "Hopeful",
    price: "$0",
    cadence: "for now",
    blurb: "Grounded affirmations. Mildly realistic. You'll outgrow them.",
    perks: ["3 affirmations/day", "Delulu level capped at 3", "Occasional reality check (sorry)"],
    cta: "Stay humble",
    featured: false,
  },
  {
    name: "Delulu",
    price: "$14",
    cadence: "/mo",
    blurb: "The full fantasy. Reality dampening on. Most worn.",
    perks: [
      "Unlimited unhinged affirmations",
      "Delulu level unlocked to 10",
      "Reality dampening filter",
      "We hide one (1) concerned friend",
    ],
    cta: "Lock in the delusion",
    featured: true,
  },
  {
    name: "Main Character",
    price: "$45",
    cadence: "/mo",
    blurb: "You are the protagonist. Everyone else is plot.",
    perks: [
      "Everything, but about you",
      "Personalized lore",
      "Soundtrack swells when you enter rooms (your phone)",
      "We gaslight your group chat on request",
    ],
    cta: "Become the moment",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dl-grape">
          pricing
        </p>
        <h2 className="mt-3 font-dl-display text-4xl font-semibold tracking-tight text-dl-ink sm:text-5xl">
          Invest in a version of you that isn&apos;t real yet.
        </h2>
      </div>

      <div className="mt-14 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex h-full flex-col rounded-[2rem] border p-7 ${
              t.featured
                ? "border-dl-grape bg-dl-surface shadow-[0_30px_80px_-50px_rgba(155,77,255,0.6)] lg:-mt-4"
                : "border-dl-line bg-dl-surface"
            }`}
          >
            {t.featured && (
              <span
                className="mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
                style={{
                  background:
                    "linear-gradient(135deg, var(--dl-pink), var(--dl-grape))",
                }}
              >
                Most worn
              </span>
            )}
            <h3 className="font-dl-display text-2xl font-semibold text-dl-ink">
              {t.name}
            </h3>
            <p className="mt-2 text-sm text-dl-muted">{t.blurb}</p>
            <p className="mt-6 flex items-baseline gap-1">
              <span className="font-dl-display text-4xl font-semibold text-dl-ink">
                {t.price}
              </span>
              <span className="text-sm text-dl-muted">{t.cadence}</span>
            </p>
            <ul className="mt-6 space-y-3 text-sm text-dl-muted">
              {t.perks.map((p) => (
                <li key={p} className="flex gap-3">
                  <span aria-hidden className="text-dl-pink">
                    ✦
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#cta"
              className={`mt-8 rounded-full px-6 py-3 text-center font-dl-display font-semibold transition-transform hover:-translate-y-0.5 focus-visible:rounded-full ${
                t.featured
                  ? "bg-dl-grape text-white"
                  : "border border-dl-line bg-dl-bg text-dl-ink"
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
