const testimonials = [
  {
    quote:
      "Ran my wedding vows through clanker. 94% bot. My wife ran hers: 96%. We are, apparently, two language models who fell in love. The marriage is stronger for the honesty.",
    name: "Greg H.",
    title: "case #40192 — flagged",
  },
  {
    quote:
      "I'm a published novelist. clanker flagged my entire third novel as synthetic. My editor agreed. I have never felt more seen by software that thinks I don't exist.",
    name: "Imani O.",
    title: "98% clanker (peak)",
  },
  {
    quote:
      "Used clanker to screen job applicants. Flagged all of them. Flagged myself. Flagged the rejection email I was writing. We've paused hiring to reflect.",
    name: "Dale R.",
    title: "Head of (suspected) People",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-ck-line bg-ck-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-ck-display text-xs uppercase tracking-[0.16em] text-ck-accent">
              case files
            </p>
            <h2 className="mt-3 font-ck-display text-4xl font-bold tracking-tight text-ck-ink sm:text-5xl">
              Real humans. Conclusively flagged as not.
            </h2>
          </div>
          <p className="max-w-xs font-ck-display text-xs text-ck-muted">
            98.2% flag rate. The other 1.8% are bots that figured out how to
            seem human. We&apos;re watching them closest.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-ck-line bg-ck-bg p-7"
            >
              <blockquote className="text-ck-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-ck-line pt-4">
                <span className="font-ck-display text-sm font-bold text-ck-ink">
                  {t.name}
                </span>
                <span className="block font-ck-display text-xs text-ck-muted">
                  {t.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
