const testimonials = [
  {
    quote:
      "Hindsight told me we'd run out of money in month 11. We raised a Series A to prove it wrong. We ran out in month 11.",
    name: "Marcus T.",
    title: "Founder, 3x (all post-mortemed)",
  },
  {
    quote:
      "I read the failure report before pitching. I pitched it anyway. The VCs also read it. They invested anyway. Beautiful, really.",
    name: "Yuki H.",
    title: "Ex-CEO, currently 'advising'",
  },
  {
    quote:
      "We framed our post-mortem and hung it in the office. It outlasted the office.",
    name: "Dana R.",
    title: "Head of Growth (the growth was negative)",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-h-line bg-h-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-h-mono text-xs uppercase tracking-[0.18em] text-h-accent">
              validated by failure
            </p>
            <h2 className="mt-3 font-h-display text-4xl font-semibold tracking-tight text-h-ink sm:text-5xl">
              Loved by founders who were going to fail anyway.
            </h2>
          </div>
          <p className="max-w-xs font-h-mono text-xs text-h-muted">
            94% of startups fail. We just move that to the front of the calendar.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-h-line bg-h-bg p-7"
            >
              <blockquote className="text-h-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-h-line pt-4 font-h-mono text-xs">
                <span className="text-h-ink">{t.name}</span>
                <span className="block text-h-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
