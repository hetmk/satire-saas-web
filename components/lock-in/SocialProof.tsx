const testimonials = [
  {
    quote:
      "I finished my thesis in front of 60 strangers who called themselves my 'board of directors.' They have no qualifications. I have a master's degree now. Correlation is enough for me.",
    name: "Dev P.",
    title: "127 hours locked in",
  },
  {
    quote:
      "Opened Instagram during a session. The chat went feral. One stranger DM'd my mom. I don't know how. I haven't opened it since.",
    name: "Mara L.",
    title: "0 distractions, 14-day streak",
  },
  {
    quote:
      "It's like the gym but for not looking at your phone, and the spotters are strangers who will absolutely roast you. 10/10, terrifying, effective.",
    name: "Сalvin O.",
    title: "Leaderboard rank #3",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-li-line bg-li-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="font-li-mono text-xs uppercase tracking-[0.16em] text-li-focus">
              the streamers
            </p>
            <h2 className="mt-3 font-li-display text-4xl font-bold tracking-tight text-li-ink sm:text-5xl">
              Watched into greatness by people they&apos;ll never meet.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-li-muted">
            8.4 million hours witnessed. 8.4 million tabs guiltily closed.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-li-line bg-li-bg p-7"
            >
              <blockquote className="text-li-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-li-line pt-4 text-sm">
                <span className="font-li-display font-bold text-li-ink">
                  {t.name}
                </span>
                <span className="block font-li-mono text-xs text-li-muted">
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
