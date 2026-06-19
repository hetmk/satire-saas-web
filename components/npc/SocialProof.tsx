const testimonials = [
  {
    quote:
      "I 'ice cream so good'-ed for six hours straight and made $14 before fees. After fees I owe NPC $3. But the gifts felt real and that's the kind of math I'm choosing not to examine.",
    name: "brayden, 19",
    title: "4,200 gestures performed",
  },
  {
    quote:
      "My parents asked what I do for work. I showed them the stream. They watched me say 'gang gang' to a stranger's $0.01 rose for ten minutes. They have stopped asking.",
    name: "tiff, 22",
    title: "top 3% NPC earner",
  },
  {
    quote:
      "I stopped having opinions, preferences, or facial expressions of my own. My gift count has never been higher. Correlation? I'm too dissociated to say.",
    name: "kev, 24",
    title: "verified non-player",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-np-line bg-np-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-np-display text-xs font-bold uppercase tracking-[0.16em] text-np-cyan">
              performers
            </p>
            <h2 className="mt-3 font-np-display text-4xl font-bold tracking-tight text-np-ink sm:text-5xl">
              Real people. Zero personality. Steady-ish income.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-np-muted">
            $4.2M in gifts sent last month. $1.26M paid out. The rest is our
            'platform vibes fee.'
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-np-line bg-np-bg p-7"
            >
              <blockquote className="text-np-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-np-line pt-4 text-sm">
                <span className="font-np-display font-bold text-np-ink">
                  {t.name}
                </span>
                <span className="block text-np-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
