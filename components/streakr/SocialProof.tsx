const testimonials = [
  {
    quote:
      "I have a 612-day water streak. I do not drink more water than before. I just log it at 11:58pm in a cold sweat. The habit didn't form. The fear did. Five stars.",
    name: "Hana W.",
    title: "612-day streak (water)",
  },
  {
    quote:
      "Broke my 400-day meditation streak on a flight with no signal. Streakr showed an ice cube and played a single piano note. I meditated on that loss for a week. Ironic. Effective.",
    name: "Otto B.",
    title: "rebuilding from day 9",
  },
  {
    quote:
      "I've spent $61 on streak freezes to protect a streak for 'being kind to myself.' I am aware. The number must not reset. You don't understand. The number must not reset.",
    name: "Lena M.",
    title: "7 freezes purchased",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-st-line bg-st-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-st-display font-bold uppercase tracking-[0.16em] text-st-flame">
              streakers
            </p>
            <h2 className="mt-3 font-st-display text-4xl font-extrabold tracking-tight text-st-ink sm:text-5xl">
              They kept the flame. The flame kept them.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-st-muted">
            91% of users say Streakr 'changed their life.' 88% cannot stop. We
            consider these the same statistic.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-st-line bg-st-bg p-7"
            >
              <blockquote className="text-st-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-st-line pt-4 text-sm">
                <span className="font-st-display font-extrabold text-st-ink">
                  {t.name}
                </span>
                <span className="block text-st-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
