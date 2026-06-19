const features = [
  {
    icon: "🔮",
    title: "Reality dampening",
    body: "We gently filter out feedback, statistics, and concerned friends. Your delusion is a delicate ecosystem and facts are an invasive species.",
  },
  {
    icon: "📈",
    title: "Confidence with no basis",
    body: "Most apps build confidence on 'skills' and 'evidence.' Slow. We skip straight to the part where you walk into the room like you own three of them.",
  },
  {
    icon: "💅",
    title: "Daily delulu streak",
    body: "Manifest every day to keep your streak. Miss a day and a notification reminds you that successful people don't check notifications. You're welcome.",
  },
];

export default function Features() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-24">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dl-grape">
          the practice
        </p>
        <h2 className="mt-3 font-dl-display text-4xl font-semibold tracking-tight text-dl-ink sm:text-5xl">
          Self-belief, sourced ethically from nowhere.
        </h2>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {features.map((f) => (
          <article
            key={f.title}
            className="rounded-[2rem] border border-dl-line bg-dl-surface p-7"
          >
            <span aria-hidden className="text-3xl">
              {f.icon}
            </span>
            <h3 className="mt-4 font-dl-display text-xl font-semibold text-dl-ink">
              {f.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-dl-muted">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
