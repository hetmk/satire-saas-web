const testimonials = [
  {
    quote:
      "I scrolled 4.2 kilometers last night and learned nothing, felt nothing, and woke up genuinely refreshed. This is the first feed that gave me my time back by wasting it cleanly.",
    name: "Elena V.",
    title: "scrolled 312 km this month",
  },
  {
    quote:
      "My old feed made me angry at strangers. doomscroll+ makes me angry at no one, because there is no one. It's just me and the void, and the void doesn't subtweet.",
    name: "Theo M.",
    title: "Premium · 0 things seen",
  },
  {
    quote:
      "Tried to find something to be upset about. Scrolled for an hour. Nothing. Closed the app and called my mom. Unintended, frankly alarming side effect.",
    name: "Priya N.",
    title: "Concierge tier",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-ds-line bg-ds-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ds-accent">
              users
            </p>
            <h2 className="mt-3 font-ds-display text-4xl font-semibold tracking-tight text-ds-ink sm:text-5xl">
              Millions scrolling. Nothing to show for it. Beautifully.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-ds-muted">
            Average session: 41 minutes. Average takeaway: zero. Satisfaction:
            inexplicably high.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-ds-line bg-ds-bg p-7"
            >
              <blockquote className="text-ds-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-ds-line pt-4 text-sm">
                <span className="font-ds-display font-semibold text-ds-ink">
                  {t.name}
                </span>
                <span className="block text-ds-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
