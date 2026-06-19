const testimonials = [
  {
    quote:
      "hit -8,000 aura after I waved back at someone who wasn't waving at me. the app sent condolences. my friends sent screenshots. recovery arc loading.",
    name: "kai, 21",
    title: "rank: minor cringe arc",
  },
  {
    quote:
      "I don't argue anymore. I just leave on read and watch my aura climb. my therapist says this is 'avoidance.' the leaderboard says it's 'first place.'",
    name: "nova, 24",
    title: "rank: unbothered deity",
  },
  {
    quote:
      "added my situationship to the leaderboard. watched him lose 3k for posting a gym mirror selfie. the data finally validated what I felt.",
    name: "amara, 23",
    title: "rank: main character",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-au-line bg-au-surface/40 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-au-accent">
              the leaderboard
            </p>
            <h2 className="mt-3 font-au-display text-4xl font-bold tracking-tight text-au-ink sm:text-5xl">
              Real people. Quantified vibes. Public consequences.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-au-muted">
            14 million auras tracked. 14 million people slightly more anxious in
            public. We call that engagement.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-[2rem] border border-au-line bg-au-bg p-7"
            >
              <blockquote className="text-au-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-au-line pt-4 text-sm">
                <span className="font-au-display font-bold text-au-ink">
                  {t.name}
                </span>
                <span className="block text-au-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
