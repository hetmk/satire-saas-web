const testimonials = [
  {
    quote:
      "Moved 14 people into the 'Fading' column and slept like a baby. Ghosted sent my college roommate a 'let's catch up soon!' so convincing I almost believed I meant it.",
    name: "Tomas R.",
    title: "pipeline: 88% ghosted",
  },
  {
    quote:
      "My inbox anxiety is gone because my inbox is now someone else's problem, specifically a bot's. The bot is better at my relationships than I am. I've made peace with this.",
    name: "Priyanka S.",
    title: "Inbox zero, conscience adjacent",
  },
  {
    quote:
      "I ghosted my dentist, my landlord, and a man named Greg I've never identified. Two of those had consequences. Ghosted called them 'churn.' I call it freedom.",
    name: "Wesley A.",
    title: "Forgotten: 211 contacts",
  },
];

export default function SocialProof() {
  return (
    <section id="proof" className="border-y border-gh-line bg-gh-surface py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-gh-display font-bold uppercase tracking-[0.16em] text-gh-accent">
              ghosters
            </p>
            <h2 className="mt-3 font-gh-display text-4xl font-extrabold tracking-tight text-gh-ink sm:text-5xl">
              They stopped replying. We made it look effortless.
            </h2>
          </div>
          <p className="max-w-xs text-sm text-gh-muted">
            2.1M relationships gently ended. 0 confrontations. A 98% 'they
            probably got the hint' rate.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-gh-line bg-gh-bg p-7"
            >
              <blockquote className="text-gh-ink">{t.quote}</blockquote>
              <figcaption className="mt-6 border-t border-gh-line pt-4 text-sm">
                <span className="font-gh-display font-extrabold text-gh-ink">
                  {t.name}
                </span>
                <span className="block text-gh-muted">{t.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
