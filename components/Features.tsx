const features = [
  {
    icon: "❖",
    tint: "bg-sage/25 text-sage-deep",
    title: "Surge pricing for shame",
    body: "Open the app after midnight? During work? For the fourth time in an hour? Tithe quietly raises your rate. Demand-based pricing, but the demand is coming from inside the house.",
  },
  {
    icon: "✶",
    tint: "bg-lilac/25 text-lilac-deep",
    title: "The serenity statement",
    body: "Each Sunday we email a beautifully designed PDF of everywhere your attention went and what it cost. Most users cry. We consider that engagement.",
  },
  {
    icon: "❀",
    tint: "bg-blush/40 text-ink",
    title: "Streak Guilt™",
    body: "Go 24 hours without a charge and we celebrate you. Break the streak and we don't say anything at all. The silence does the work. That's the premium tier of mindfulness.",
  },
];

export default function Features() {
  return (
    <section className="bg-mist-2/60 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
            the toolkit
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Wellness features that happen to bill you.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {features.map((f) => (
            <article
              key={f.title}
              className="rounded-3xl border border-line bg-paper p-7"
            >
              <span
                aria-hidden
                className={`grid h-12 w-12 place-items-center rounded-2xl text-xl ${f.tint}`}
              >
                {f.icon}
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
