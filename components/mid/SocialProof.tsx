const testimonials = [
  {
    quote:
      "I used to lie awake wondering if I liked things. Now I know I don't, particularly. mid gave me the gift of not caring, and honestly? It's mid, but in a good way. A mid way.",
    name: "Jordan F.",
    title: "rated 4,000 things 2.5",
  },
  {
    quote:
      "My friends asked what I thought of the wedding. I opened mid. I read the verdict aloud. We are no longer invited to things. Worth it.",
    name: "Sam K.",
    title: "Beige Shield active",
  },
  {
    quote:
      "Rated my own life on mid. Got a 2.5. Felt seen. Felt nothing. Felt seen about feeling nothing.",
    name: "Alex T.",
    title: "deeply, peacefully fine",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-md-line bg-md-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-md-accent">
              reviews
            </p>
            <h2 className="mt-3 font-md-display text-5xl leading-none tracking-wide text-md-ink">
              REVIEWS ARE IN. THEY&apos;RE MID.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-md-muted">
            Rated 4.9 stars by users. We overrode it to 2.5. Consistency matters
            more than accuracy.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-md-line bg-md-bg p-7"
            >
              <blockquote className="text-md-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-md-line pt-4 text-sm">
                <span className="font-md-display text-lg tracking-wide text-md-ink">
                  {t.name}
                </span>
                <span className="block text-md-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
